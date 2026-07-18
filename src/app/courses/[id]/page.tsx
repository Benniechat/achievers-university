import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckoutButton } from "@/components/CheckoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link";

export default async function CourseLandingPage({ params }: { params: { id: string } }) {
  const course = await prisma.course.findUnique({
    where: { id: params.id, isPublished: true },
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
    notFound();
  }

  const session = await getServerSession(authOptions);
  let isEnrolled = false;

  if (session?.user) {
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId: course.id
        }
      }
    });
    if (enrollment) isEnrolled = true;
  }

  return (
    <div className="font-['Inter'] text-on-surface bg-[#010613] min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{course.title}</h1>
              <p className="text-xl text-white/70 leading-relaxed">{course.description}</p>
            </div>

            <div className="bg-surface-container-lowest border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Course Syllabus</h2>
              <div className="space-y-6">
                {course.modules.map((module, i) => (
                  <div key={module.id}>
                    <h3 className="text-lg font-bold text-cta mb-3">Module {i + 1}: {module.title}</h3>
                    <div className="space-y-3 pl-4 border-l-2 border-white/10">
                      {module.lessons.map(lesson => (
                        <div key={lesson.id} className="flex items-center gap-3 text-white/80">
                          <span className="material-symbols-outlined text-white/40">play_circle</span>
                          <span>{lesson.title}</span>
                          {lesson.isFreePreview && <span className="text-xs bg-cta/20 text-cta px-2 py-0.5 rounded ml-auto">Preview</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-surface-container-lowest border border-white/10 rounded-2xl p-6 sticky top-32">
              <div className="w-full h-48 bg-black/50 rounded-xl mb-6 flex items-center justify-center border border-white/5 relative overflow-hidden">
                {course.thumbnail ? (
                  <img src={course.thumbnail} alt={course.title} className="object-cover w-full h-full opacity-80" />
                ) : (
                  <span className="material-symbols-outlined text-6xl text-white/20">smart_display</span>
                )}
              </div>
              
              <div className="text-3xl font-bold text-white mb-6">₦{course.price.toLocaleString()}</div>
              
              {isEnrolled ? (
                <Link 
                  href={`/dashboard/courses/${course.id}`}
                  className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity w-full text-center block border border-white/20"
                >
                  Go to Course
                </Link>
              ) : (
                <CheckoutButton courseId={course.id} price={course.price} />
              )}
              
              <ul className="mt-6 space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-cta text-[18px]">check_circle</span> Lifetime access</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-cta text-[18px]">check_circle</span> Certificate of completion</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-cta text-[18px]">check_circle</span> Premium support</li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
