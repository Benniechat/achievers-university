import { NextResponse } from "next/server";
import crypto from "crypto";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-paystack-signature");
    const secret = process.env.PAYSTACK_SECRET_KEY;

    if (!secret || !signature) {
      return NextResponse.json({ error: "Missing secret or signature" }, { status: 400 });
    }

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac("sha512", secret)
      .update(rawBody)
      .digest("hex");

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);

    if (event.event === "charge.success") {
      const reference = event.data.reference;
      const metadata = event.data.metadata;
      
      const transaction = await prisma.transaction.findUnique({
        where: { reference }
      });

      if (transaction && transaction.status === "PENDING") {
        await prisma.$transaction(async (tx) => {
          // Update transaction
          await tx.transaction.update({
            where: { id: transaction.id },
            data: { status: "SUCCESS" }
          });

          // Create enrollment if courseId is present
          if (transaction.courseId) {
            await tx.enrollment.upsert({
              where: {
                userId_courseId: {
                  userId: transaction.userId,
                  courseId: transaction.courseId
                }
              },
              update: {},
              create: {
                userId: transaction.userId,
                courseId: transaction.courseId
              }
            });
          }
        });
      }
    }

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Paystack Webhook Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
