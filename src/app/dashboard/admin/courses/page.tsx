import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { createCourse } from "@/actions/lms";

export default async function AdminCoursesPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const courses = await prisma.course.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: { modules: true, enrollments: true }
      }
    }
  });

  async function handleCreateCourse(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const price = Number(formData.get("price"));
    
    await createCourse({ title, description, price });
  }

  return (
    <div className="p-8 max-w-7xl mx-auto mt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Manage Courses</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Course List */}
        <div className="md:col-span-2 space-y-4">
          {courses.map(course => (
            <div key={course.id} className="bg-surface-container-lowest border border-white/10 rounded-xl p-6 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                <p className="text-white/60 text-sm mt-1">{course.isPublished ? "Published" : "Draft"} • ₦{course.price.toLocaleString()} • {course._count.modules} modules • {course._count.enrollments} students</p>
              </div>
              <Link href={`/dashboard/admin/courses/${course.id}`} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors">
                Edit Course
              </Link>
            </div>
          ))}
          {courses.length === 0 && (
            <div className="text-center py-12 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/60">No courses created yet.</p>
            </div>
          )}
        </div>

        {/* Create Course Form */}
        <div>
          <div className="bg-surface-container-lowest border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Create New Course</h2>
            <form action={handleCreateCourse} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Title</label>
                <input required name="title" type="text" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white" placeholder="e.g. Master AI in 30 Days" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Description</label>
                <textarea required name="description" rows={3} className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white" placeholder="Course description..."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Price (₦)</label>
                <input required name="price" type="number" min="0" defaultValue="0" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white" />
              </div>
              <button type="submit" className="w-full bg-cta text-primary font-bold py-2 rounded-md hover:opacity-90 transition-opacity">
                Create Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
