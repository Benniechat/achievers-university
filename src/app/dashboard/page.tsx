import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function StudentDashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role === "AFFILIATE" && !session.user.isStudent) {
    redirect("/dashboard/affiliate");
  }

  const userId = session.user.id;

  // Fetch enrollments with course progress
  const enrollments = await prisma.enrollment.findMany({
    where: { userId },
    include: {
      course: {
        include: {
          modules: {
            include: {
              lessons: {
                include: {
                  progresses: {
                    where: { userId }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  // Calculate metrics
  let totalCourses = enrollments.length;
  let totalLessons = 0;
  let completedLessons = 0;

  const enrichedCourses = enrollments.map(e => {
    let courseTotalLessons = 0;
    let courseCompletedLessons = 0;
    let nextLessonId: string | null = null;
    let nextLessonTitle = "Completed";
    
    e.course.modules.forEach(m => {
      m.lessons.forEach(l => {
        courseTotalLessons++;
        totalLessons++;
        if (l.progresses.length > 0) {
          courseCompletedLessons++;
          completedLessons++;
        } else if (!nextLessonId) {
          nextLessonId = l.id;
          nextLessonTitle = l.title;
        }
      });
    });

    const progressPercentage = courseTotalLessons > 0 ? Math.round((courseCompletedLessons / courseTotalLessons) * 100) : 0;
    
    // If completed all, just link to the first one or course overview
    if (!nextLessonId && e.course.modules[0]?.lessons[0]) {
      nextLessonId = e.course.modules[0].lessons[0].id;
    }

    return {
      ...e.course,
      progressPercentage,
      nextLessonId,
      nextLessonTitle,
    };
  });

  const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <>
      <header className="bg-primary/95 dark:bg-surface-dim/95 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/10 shadow-xl">
        <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-white flex items-center">
              <Image src="/logo.png" className="h-8 md:h-10 w-auto" alt="Achievers University Logo" width={200} height={48} />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Link href="/courses" className="text-white hover:text-cta font-medium text-sm hidden md:block">Browse Courses</Link>
            {session.user.role === "ADMIN" && (
              <Link href="/dashboard/admin/courses" className="text-cta border border-cta/30 px-4 py-1.5 rounded-full font-bold text-sm hover:bg-cta/10 transition-colors hidden md:block">
                Instructor Portal
              </Link>
            )}
            <div className="w-10 h-10 rounded-full bg-cta text-primary flex items-center justify-center font-bold text-xl uppercase">
              {session.user.name?.[0] || session.user.email?.[0] || "U"}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-[100px] px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col gap-8 pb-12">
        <section className="mt-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Welcome back, {session.user.name || "Scholar"}.</h1>
          <p className="text-xl text-white/60">Here is your learning progress.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest border border-white/10 rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-cta/10 rounded-2xl text-cta">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <span className="text-3xl font-bold text-cta">{overallProgress}%</span>
            </div>
            <h3 className="text-sm text-white/60 uppercase tracking-wider mb-2">Overall Progress</h3>
            <div className="w-full bg-black/50 rounded-full h-1.5 mt-4 overflow-hidden border border-white/5">
              <div className="bg-cta h-1.5 rounded-full" style={{ width: `${overallProgress}%` }}></div>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-white/10 rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                <span className="material-symbols-outlined">play_lesson</span>
              </div>
              <span className="text-3xl font-bold text-blue-400">{totalCourses}</span>
            </div>
            <h3 className="text-sm text-white/60 uppercase tracking-wider">Active Courses</h3>
          </div>

          <div className="bg-surface-container-lowest border border-white/10 rounded-3xl p-6 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-green-500/10 rounded-2xl text-green-400">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <span className="text-3xl font-bold text-green-400">0</span>
            </div>
            <h3 className="text-sm text-white/60 uppercase tracking-wider">Completed Certificates</h3>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-white mb-2">My Courses</h2>
            
            {enrichedCourses.length === 0 ? (
              <div className="bg-surface-container-lowest border border-white/10 rounded-3xl p-12 text-center">
                <span className="material-symbols-outlined text-6xl text-white/20 mb-4">menu_book</span>
                <h3 className="text-xl font-bold text-white mb-2">No courses yet</h3>
                <p className="text-white/60 mb-6">You haven&apos;t enrolled in any courses. Browse our library to get started.</p>
                <Link href="/courses" className="bg-cta text-primary font-bold px-6 py-3 rounded-xl inline-block hover:opacity-90">
                  Browse Courses
                </Link>
              </div>
            ) : (
              enrichedCourses.map(course => (
                <Link 
                  key={course.id} 
                  href={`/dashboard/courses/${course.id}`}
                  className="bg-surface-container-lowest border border-white/10 rounded-3xl p-4 flex flex-col sm:flex-row gap-6 items-center hover:bg-white/5 transition-all group"
                >
                  <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden relative flex-shrink-0 bg-black/50 flex items-center justify-center">
                    {course.thumbnail ? (
                      <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={course.title} />
                    ) : (
                      <span className="material-symbols-outlined text-4xl text-white/20">smart_display</span>
                    )}
                  </div>
                  <div className="flex flex-col flex-grow w-full">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-cta transition-colors">{course.title}</h3>
                      <span className="material-symbols-outlined text-cta opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
                    </div>
                    <p className="text-white/60 text-sm mb-4">Up next: {course.nextLessonTitle}</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="flex-grow bg-black/50 rounded-full h-1.5 overflow-hidden border border-white/5">
                        <div className="bg-cta h-1.5 rounded-full" style={{ width: `${course.progressPercentage}%` }}></div>
                      </div>
                      <span className="text-sm text-cta font-bold">{course.progressPercentage}%</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </section>

          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-white mb-2">Announcements</h2>
              <div className="bg-surface-container-lowest border border-white/10 rounded-3xl p-6 border-l-4 border-l-cta relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <span className="material-symbols-outlined text-6xl">campaign</span>
                </div>
                <h3 className="text-lg text-white mb-2 font-bold">Welcome to the new LMS!</h3>
                <p className="text-sm text-white/60 mb-4">You can now access your courses, track your progress, and learn at your own pace.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="w-full pt-10 pb-8 bg-surface-container-lowest px-4 md:px-8 max-w-7xl mx-auto rounded-t-3xl border border-white/5 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="font-bold text-xl text-white block mb-2">Achievers University</span>
              <p className="text-white/60 text-sm">© {new Date().getFullYear()} Achievers University. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-white/50 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-cta/30 transition-colors">
              <span>Designed by</span>
              <a 
                href="https://wa.me/2348101811993" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cta font-bold flex items-center gap-1 hover:opacity-80 transition-opacity"
              >
                Benniechat TechWealth Solutions
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
