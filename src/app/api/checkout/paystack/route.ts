import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { courseId } = await req.json();

    const course = await prisma.course.findUnique({
      where: { id: courseId }
    });

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    // Check if already enrolled
    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId: course.id
        }
      }
    });

    if (existingEnrollment) {
      return NextResponse.json({ error: "Already enrolled" }, { status: 400 });
    }

    const amountInKobo = Math.round(course.price * 100);

    // Initialize Paystack transaction
    const paystackResponse = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: session.user.email,
        amount: amountInKobo,
        metadata: {
          userId: session.user.id,
          courseId: course.id
        },
        callback_url: `${process.env.NEXTAUTH_URL}/dashboard/courses/${course.id}`
      })
    });

    const data = await paystackResponse.json();

    if (!data.status) {
      throw new Error(data.message || "Failed to initialize Paystack");
    }

    // Save transaction to DB
    await prisma.transaction.create({
      data: {
        userId: session.user.id,
        courseId: course.id,
        amount: course.price,
        reference: data.data.reference,
        gateway: "PAYSTACK",
        status: "PENDING"
      }
    });

    return NextResponse.json({ authorizationUrl: data.data.authorization_url });
  } catch (error: any) {
    console.error("Paystack Checkout Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
