"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { revalidatePath } from "next/cache";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  return session;
}

export async function createCourse(data: { title: string; description: string; price: number }) {
  await requireAdmin();
  const course = await prisma.course.create({
    data: {
      title: data.title,
      description: data.description,
      price: data.price,
      isPublished: false,
    }
  });
  revalidatePath("/dashboard/admin/courses");
  return course;
}

export async function updateCourse(id: string, data: any) {
  await requireAdmin();
  const course = await prisma.course.update({
    where: { id },
    data
  });
  revalidatePath(`/dashboard/admin/courses/${id}`);
  revalidatePath("/dashboard/admin/courses");
  return course;
}

export async function createModule(courseId: string, title: string) {
  await requireAdmin();
  const count = await prisma.module.count({ where: { courseId } });
  const mod = await prisma.module.create({
    data: {
      courseId,
      title,
      order: count,
    }
  });
  revalidatePath(`/dashboard/admin/courses/${courseId}`);
  return mod;
}

export async function createLesson(moduleId: string, data: { title: string; videoUrl?: string; content?: string }) {
  await requireAdmin();
  const mod = await prisma.module.findUnique({ where: { id: moduleId }, select: { courseId: true } });
  if (!mod) throw new Error("Module not found");

  const count = await prisma.lesson.count({ where: { moduleId } });
  const lesson = await prisma.lesson.create({
    data: {
      moduleId,
      title: data.title,
      videoUrl: data.videoUrl,
      content: data.content,
      order: count,
    }
  });
  revalidatePath(`/dashboard/admin/courses/${module.courseId}`);
  return lesson;
}

export async function updateLesson(id: string, courseId: string, data: any) {
  await requireAdmin();
  const lesson = await prisma.lesson.update({
    where: { id },
    data
  });
  revalidatePath(`/dashboard/admin/courses/${courseId}`);
  return lesson;
}
