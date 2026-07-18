import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { updateCourse, createModule, createLesson } from "@/actions/lms";

export default async function AdminCourseEditorPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user?.role !== "ADMIN") {
    redirect("/dashboard");
  }

  const course = await prisma.course.findUnique({
    where: { id: params.id },
    include: {
      modules: {
        orderBy: { order: 'asc' },
        include: {
          lessons: {
            orderBy: { order: 'asc' }
          }
        }
      }
    }
  });

  if (!course) {
    redirect("/dashboard/admin/courses");
  }

  async function handleUpdateCourse(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const isPublished = formData.get("isPublished") === "on";
    await updateCourse(params.id, { title, isPublished });
  }

  async function handleAddModule(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    await createModule(params.id, title);
  }

  async function handleAddLesson(formData: FormData) {
    "use server";
    const moduleId = formData.get("moduleId") as string;
    const title = formData.get("title") as string;
    const videoUrl = formData.get("videoUrl") as string;
    await createLesson(moduleId, { title, videoUrl });
  }

  return (
    <div className="p-8 max-w-5xl mx-auto mt-20">
      <Link href="/dashboard/admin/courses" className="text-cta hover:underline mb-4 inline-block">&larr; Back to Courses</Link>
      
      <div className="bg-surface-container-lowest border border-white/10 rounded-xl p-6 mb-8">
        <h1 className="text-2xl font-bold text-white mb-4">Edit Course: {course.title}</h1>
        <form action={handleUpdateCourse} className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-white/80 mb-1">Title</label>
            <input name="title" defaultValue={course.title} type="text" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input type="checkbox" id="isPublished" name="isPublished" defaultChecked={course.isPublished} className="w-5 h-5" />
            <label htmlFor="isPublished" className="text-white">Published</label>
          </div>
          <button type="submit" className="bg-cta text-primary font-bold px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
            Save
          </button>
        </form>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Modules & Lessons</h2>
      </div>

      <div className="space-y-6">
        {course.modules.map(module => (
          <div key={module.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="bg-white/10 p-4 font-bold text-white flex justify-between items-center">
              <span>{module.title}</span>
            </div>
            <div className="p-4 space-y-4">
              {module.lessons.map(lesson => (
                <div key={lesson.id} className="flex justify-between items-center bg-black/20 p-3 rounded-md border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-white/50">play_circle</span>
                    <span className="text-white">{lesson.title}</span>
                  </div>
                  {lesson.videoUrl && <span className="text-xs bg-cta/20 text-cta px-2 py-1 rounded">Has Video</span>}
                </div>
              ))}

              <form action={handleAddLesson} className="flex gap-2 mt-4 bg-black/10 p-3 rounded-md border border-white/5 border-dashed">
                <input type="hidden" name="moduleId" value={module.id} />
                <input required name="title" type="text" placeholder="Lesson Title" className="flex-1 bg-transparent border-b border-white/20 px-2 py-1 text-sm text-white focus:outline-none focus:border-cta" />
                <input name="videoUrl" type="text" placeholder="Video URL / Embed Code" className="flex-1 bg-transparent border-b border-white/20 px-2 py-1 text-sm text-white focus:outline-none focus:border-cta" />
                <button type="submit" className="text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded transition-colors">Add Lesson</button>
              </form>
            </div>
          </div>
        ))}

        <form action={handleAddModule} className="bg-surface-container-lowest border border-white/10 border-dashed rounded-xl p-6 text-center">
          <h3 className="text-white font-bold mb-4">Add New Module</h3>
          <div className="flex justify-center gap-2 max-w-md mx-auto">
            <input required name="title" type="text" placeholder="Module Title" className="flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cta" />
            <button type="submit" className="bg-cta text-primary font-bold px-6 py-2 rounded-md hover:opacity-90 transition-opacity">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
