import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";

export default async function StudentDashboard() {
  const session = await getServerSession(authOptions);

  if (session?.user?.role === "AFFILIATE" && !session?.user?.isStudent) {
    redirect("/dashboard/affiliate");
  }

  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-primary/95 dark:bg-surface-dim/95 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/10 shadow-xl">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
<div className="flex items-center gap-4">
<button className="text-white hover:opacity-80 transition-opacity duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 transition-transform hidden md:block">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<div className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg font-bold tracking-tight text-white">
<Image src="/logo.png" className="h-8 md:h-10 w-auto" alt="Achievers University Logo"  width={200} height={48} />
</div>
</div>
<div className="flex items-center gap-4">
<ThemeSwitcher />
<button className="text-white hover:opacity-80 transition-opacity duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<Image className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" alt="A professional headshot of a confident student in a well-lit, modern indoor environment. The lighting is soft and bright, emphasizing a clean, contemporary aesthetic. The mood is optimistic and academically focused, matching a high-end corporate or university profile picture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTOMZhDnRw2EDi6q5sm5cRGF4V7xAxpsrGt84-GEsUQTTx70sUxgyrhDn3941khfBurv0ZZhPiwVih65rfVcxfiyHAjKwXK2WumbuE8I746Hiqdmi3bxrbLI_KwkwHdFGhR1e6C9aZ6E1CO79xx-U-bNrdZdN4huLctt2o7I95PQzhCP2GRRHuu-1Xcq91su0TpIv8F-Yk5gcdC6hc8rNmRIYGzHZGx7ZXznZd8VlXKEmXnbjlwL9U" width={40} height={40} />
</div>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="flex-grow pt-[88px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-stack-lg pb-stack-lg">
{/*  Greeting Section  */}
<section className="mt-stack-md animate-fade-in-up">
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg gradient-text mb-2">Welcome back, {session?.user?.name || "Scholar"}.</h1>
<p className="font-body-xl text-body-xl text-on-surface-variant">Here is your progress for today.</p>
</section>
{/*  Core Stats Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Learning Progress  */}
<div className="glass-panel rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-primary/5 rounded-2xl">
<span className="material-symbols-outlined text-primary" data-icon="trending_up">trending_up</span>
</div>
<span className="font-headline-xl text-headline-xl text-primary">85%</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Learning Progress</h3>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-4 overflow-hidden">
<div className="bg-gradient-to-r from-primary to-secondary h-1.5 rounded-full" style={{"width":"85%"}}></div>
</div>
</div>
{/*  Active Courses  */}
<div className="glass-panel rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-secondary/5 rounded-2xl">
<span className="material-symbols-outlined text-secondary" data-icon="play_lesson">play_lesson</span>
</div>
<span className="font-headline-xl text-headline-xl text-secondary">3</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Active Courses</h3>
</div>
{/*  Completed Certificates  */}
<div className="glass-panel rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-tertiary-container/5 rounded-2xl">
<span className="material-symbols-outlined text-tertiary-container" data-icon="workspace_premium">workspace_premium</span>
</div>
<span className="font-headline-xl text-headline-xl text-tertiary-container">1</span>
</div>
<h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Completed Certificates</h3>
</div>
</section>
{/*  Course Library & Announcements  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg">
{/*  Course Library (Takes up 2 columns on large screens)  */}
<section className="lg:col-span-2 flex flex-col gap-stack-sm">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Course Library</h2>
{/*  Course 1  */}
<div className="glass-panel rounded-3xl p-4 flex flex-col sm:flex-row gap-6 items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-400 group cursor-pointer">
<div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden relative flex-shrink-0">
<Image className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Abstract digital illustration representing Artificial Intelligence. A glowing, intricate network of nodes and lines over a deep blue and purple gradient background. The style is modern, high-tech, and polished, fitting for a premium online course thumbnail in a light-mode UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf-_XjEEBQ1WIE5Rr-V68LS0Xror2CQrC83IkvwnhmnkQGX8ZGJ2gjLl4amSnhI41m3FERCMA2AsVgXOHJsfRSGNyH3fYKlwd3rAy7aw4X2-wGxT74fRVpXai5OKahT-8xOwPtVDl_KFQZhjF0__c1rI0LbKIbUq-cqZnngNdERqqDukYGS_GJEUWlIo_WyCKNUch3U7ZvegUmM5OwguWNzyBW9ecYGmygflWiw3eHvcrqDlhijTup" width={600} height={400} />
<div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-400"></div>
</div>
<div className="flex flex-col flex-grow w-full">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-xl text-headline-xl text-on-surface text-[24px] leading-tight">AI Mastery Level 1</h3>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform duration-400">arrow_forward</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Module 4: Neural Networks and Deep Learning</p>
<div className="flex items-center gap-4 mt-auto">
<div className="flex-grow bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full w-[60%] relative">
<div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]"></div>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">60%</span>
</div>
</div>
</div>
{/*  Course 2  */}
<div className="glass-panel rounded-3xl p-4 flex flex-col sm:flex-row gap-6 items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-400 group cursor-pointer mt-4">
<div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden relative flex-shrink-0">
<Image className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Clean, modern graphic design representing Digital Business. Stylized geometric shapes, a subtle rising graph, and minimalist currency symbols in a bright, optimistic light-mode color palette featuring soft blues and whites. The aesthetic is corporate luxury and highly professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRHb03YJfY5G5I0X64TzKfvYG3W7yZU3z9ooZFlTU10UL5M2GP6K4XoevkIE5Psch8_9En6kZqoNfVZwKCFmjr1DPZGXh94O6AFULdT7e9SkLIO7Mr20tvhx-BR23munebiorfbCcaQes-AsSgPLYJVZ735XrzBWCUXGotENXHuWa7mcv2owupB0t7q9uGu3EEeqqlZ6WIZWcOOHGPZuxTDD_G7ib7oq87DhVj8Ad3AqPetfRLfULJ" width={600} height={400} />
</div>
<div className="flex flex-col flex-grow w-full">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-xl text-headline-xl text-on-surface text-[24px] leading-tight">Digital Business Fundamentals</h3>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform duration-400">arrow_forward</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Module 2: Market Analysis Strategies</p>
<div className="flex items-center gap-4 mt-auto">
<div className="flex-grow bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary h-1.5 rounded-full w-[25%] relative">
<div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]"></div>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">25%</span>
</div>
</div>
</div>
</section>
{/*  Announcements & Quick Actions Side Column  */}
<section className="flex flex-col gap-stack-lg">
{/*  Announcements  */}
<div className="flex flex-col gap-stack-sm">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Announcements</h2>
<div className="glass-panel rounded-3xl p-6 border-l-4 border-l-secondary relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl" data-icon="campaign">campaign</span>
</div>
<div className="flex items-center gap-2 mb-3">
<span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase tracking-wider">Upcoming</span>
</div>
<h3 className="font-body-xl text-body-xl text-on-surface mb-2 font-semibold">New Mentorship Session starting in 2 hours</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Join Prof. Anderson for a deep dive into AI ethics.</p>
<button className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-md text-label-md hover:shadow-lg hover:shadow-secondary/30 transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95">
                             RSVP Now
                         </button>
</div>
</div>
{/*  Quick Actions  */}
<div className="flex flex-col gap-stack-sm">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Quick Actions</h2>
<div className="grid grid-cols-2 gap-4">
<button className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-primary/5 transition-colors duration-400 group">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
<span className="material-symbols-outlined text-primary" data-icon="play_circle">play_circle</span>
</div>
<span className="font-label-md text-label-md text-on-surface text-center">Watch Video</span>
</button>
<button className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-primary/5 transition-colors duration-400 group">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
<span className="material-symbols-outlined text-primary" data-icon="download">download</span>
</div>
<span className="font-label-md text-label-md text-on-surface text-center">Download Resources</span>
</button>
<button className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-primary/5 transition-colors duration-400 group col-span-2">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
<span className="material-symbols-outlined text-primary" data-icon="forum">forum</span>
</div>
<span className="font-label-md text-label-md text-on-surface text-center">Join Community</span>
</button>
</div>
</div>
</section>
</div>

{/*  Footer  */}
<footer className="w-full pt-10 pb-8 bg-primary dark:bg-surface-container-lowest px-4 md:px-8 max-w-7xl mx-auto md:mb-0 mb-20 rounded-t-3xl border border-white/5 mt-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
  <div>
    <span className="font-bold text-xl text-white block mb-2">Achievers University</span>
    <p className="text-white/60 text-sm">© {new Date().getFullYear()} Achievers University. All rights reserved.</p>
  </div>
  
  <div className="flex flex-wrap gap-6 items-center justify-center">
    <a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Terms</a>
    <a className="text-white/60 hover:text-white text-sm transition-colors" href="#">Privacy</a>
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
{/*  BottomNavBar  */}
<nav className="bg-surface/80 backdrop-blur-lg fixed bottom-0 w-full z-50 rounded-t-xl border-t border-white/20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden flex justify-around items-center h-16 px-4">
<a className="flex flex-col items-center justify-center text-secondary bg-secondary/10 rounded-xl px-3 py-1 hover:text-primary transition-all duration-400 active:scale-90" href="#">
<span className="material-symbols-outlined" data-icon="home" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>home</span>
<span className="font-label-sm text-label-sm mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant/70 hover:text-primary transition-all duration-400" href="#">
<span className="material-symbols-outlined" data-icon="diamond">diamond</span>
<span className="font-label-sm text-label-sm mt-1">Earn</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant/70 hover:text-primary transition-all duration-400" href="#">
<span className="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
<span className="font-label-sm text-label-sm mt-1">Learn</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant/70 hover:text-primary transition-all duration-400" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-sm text-label-sm mt-1">Profile</span>
</a>
</nav>
{/*  Decorative ambient background blobs  */}
<div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

    </>
  );
}
