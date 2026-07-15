import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, password, isAffiliate } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = isAffiliate ? "AFFILIATE" : "STUDENT";
    const isStudent = !isAffiliate;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        isStudent,
      }
    });

    if (role === "AFFILIATE") {
      await prisma.affiliateProfile.create({
        data: {
          userId: user.id,
          referralCode: Math.random().toString(36).substring(2, 8).toUpperCase(),
        }
      });
    }

    return NextResponse.json(
      { message: "User created successfully", user: { id: user.id, email: user.email, role: user.role } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
