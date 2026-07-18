import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function CourseDashboardRedirect({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/login");
  }

  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId: session.user.id,
        courseId: params.id
      }
    }
  });

  if (!enrollment) {
    redirect(`/courses/${params.id}`);
  }

  const course = await prisma.course.findUnique({
    where: { id: params.id },
    include: {
      modules: {
        orderBy: { order: 'asc' },
        include: {
          lessons: {
            orderBy: { order: 'asc' },
            take: 1
          }
        },
        take: 1
      }
    }
  });

  if (course?.modules[0]?.lessons[0]) {
    redirect(`/dashboard/courses/${params.id}/learn/${course.modules[0].lessons[0].id}`);
  }

  return (
    <div className="p-8 text-center mt-20 text-white">
      <h1 className="text-2xl font-bold">Course setup in progress</h1>
      <p className="text-white/60">This course has no lessons yet. Please check back later.</p>
    </div>
  );
}
