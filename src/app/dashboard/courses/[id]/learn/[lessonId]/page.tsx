import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { MarkCompleteButton } from "@/components/MarkCompleteButton";

function getVideoEmbedUrl(url: string) {
  if (!url) return null;
  // Handle YouTube
  if (url.includes("youtube.com/watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "youtube.com/embed/");
  }
  // If it's a generic link or already an embed link, return as is.
  // The system will try to put it in an iframe.
  return url;
}

export default async function CoursePlayerPage({ params }: { params: { id: string, lessonId: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/login");
  }

  // Verify enrollment
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

  // Fetch course and syllabus
  const course = await prisma.course.findUnique({
    where: { id: params.id },
    include: {
      modules: {
        orderBy: { order: 'asc' },
        include: {
          lessons: {
            orderBy: { order: 'asc' },
            include: {
              progresses: {
                where: { userId: session.user.id }
              }
            }
          }
        }
      }
    }
  });

  if (!course) redirect("/dashboard");

  // Find the current lesson
  let currentLesson = null;
  for (const mod of course.modules) {
    const lesson = mod.lessons.find(l => l.id === params.lessonId);
    if (lesson) {
      currentLesson = lesson;
      break;
    }
  }

  if (!currentLesson) {
    redirect(`/dashboard/courses/${params.id}`);
  }

  const isCompleted = currentLesson.progresses.length > 0;
  const embedUrl = getVideoEmbedUrl(currentLesson.videoUrl || "");

  return (
    <div className="flex flex-col lg:flex-row h-screen pt-20">
      {/* Left: Video Player Area */}
      <div className="flex-1 flex flex-col bg-[#010613] overflow-y-auto">
        <div className="w-full bg-black aspect-video relative flex items-center justify-center">
          {embedUrl ? (
            <iframe 
              src={embedUrl} 
              className="w-full h-full absolute inset-0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          ) : (
            <div className="text-white/40 flex flex-col items-center">
              <span className="material-symbols-outlined text-6xl mb-2">smart_display</span>
              <p>No video available for this lesson</p>
            </div>
          )}
        </div>
        
        <div className="p-8 max-w-4xl w-full mx-auto">
          <div className="flex justify-between items-start mb-6 gap-4">
            <h1 className="text-3xl font-bold text-white">{currentLesson.title}</h1>
            <MarkCompleteButton lessonId={currentLesson.id} courseId={course.id} isCompleted={isCompleted} />
          </div>
          
          {currentLesson.content && (
            <div className="text-white/80 prose prose-invert max-w-none">
              {currentLesson.content}
            </div>
          )}
        </div>
      </div>

      {/* Right: Syllabus Sidebar */}
      <div className="w-full lg:w-96 bg-surface-container-lowest border-l border-white/5 overflow-y-auto hidden lg:block">
        <div className="p-6 border-b border-white/5">
          <Link href="/dashboard" className="text-white/50 hover:text-white text-sm mb-4 inline-block">&larr; Dashboard</Link>
          <h2 className="text-xl font-bold text-white">{course.title}</h2>
        </div>
        
        <div className="p-4 space-y-6">
          {course.modules.map((module, mIdx) => (
            <div key={module.id}>
              <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3 px-2">
                Module {mIdx + 1}: {module.title}
              </h3>
              <div className="space-y-1">
                {module.lessons.map((lesson, lIdx) => {
                  const isActive = lesson.id === params.lessonId;
                  const completed = lesson.progresses.length > 0;
                  
                  return (
                    <Link 
                      href={`/dashboard/courses/${course.id}/learn/${lesson.id}`}
                      key={lesson.id} 
                      className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-cta/10 border border-cta/20' : 'hover:bg-white/5 border border-transparent'}`}
                    >
                      {completed ? (
                        <span className="material-symbols-outlined text-green-500 text-[20px] mt-0.5">check_circle</span>
                      ) : (
                        <span className="material-symbols-outlined text-white/30 text-[20px] mt-0.5">play_circle</span>
                      )}
                      
                      <div>
                        <div className={`text-sm ${isActive ? 'text-cta font-bold' : 'text-white/80'}`}>
                          {mIdx + 1}.{lIdx + 1} {lesson.title}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
