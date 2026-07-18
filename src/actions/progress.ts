"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { revalidatePath } from "next/cache";

export async function markLessonComplete(lessonId: string, courseId: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  await prisma.progress.upsert({
    where: {
      userId_lessonId: {
        userId: session.user.id,
        lessonId
      }
    },
    update: {
      completed: true
    },
    create: {
      userId: session.user.id,
      lessonId,
      completed: true
    }
  });

  revalidatePath(`/dashboard/courses/${courseId}/learn/${lessonId}`);
  revalidatePath("/dashboard");
}
