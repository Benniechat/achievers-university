import Link from "next/link";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";

export default function LandingPage() {
  return (<>

{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 bg-primary/95 dark:bg-surface-dim/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-primary/5 transition-all duration-300" id="top-nav">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
<div className="flex items-center gap-3">
<Image alt="Achievers University Logo" className="h-10 md:h-12 w-auto object-contain" src="/logo.png" width={200} height={48} />
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-white/80 hover:text-white transition-colors font-label-md text-label-md" href="#curriculum">Curriculum</a>
<a className="text-white/80 hover:text-white transition-colors font-label-md text-label-md" href="#benefits">Benefits</a>
<a className="text-white/80 hover:text-white transition-colors font-label-md text-label-md" href="#testimonials">Success Stories</a>
<a className="text-white/80 hover:text-white transition-colors font-label-md text-label-md" href="#faq">FAQ</a>
<Link href="/login" className="text-white hover:text-white/80 transition-colors font-label-md text-label-md font-bold">Sign In</Link>
</nav>
<div className="flex items-center gap-4">
<ThemeSwitcher />
<Link href="/register?type=student" className="bg-gradient-to-r from-[#FF7A00] to-[#FF9900] text-white px-6 py-2.5 rounded-full font-label-md text-label-md font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#FF7A00]/20 hidden md:block">
                Join Today
            </Link>
<button className="md:hidden text-white p-2">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</header>
<main>
{/*  Hero Section  */}
<section className="relative min-h-[795px] flex items-center pt-[100px] pb-stack-lg md:pb-[120px] bg-gradient-radial overflow-hidden">
{/*  Decorative Elements  */}
<div className="absolute top-20 right-10 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -z-10"></div>
<div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[60px] -z-10"></div>
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
<div className="flex flex-col gap-stack-md z-10">
<div className="inline-flex items-center gap-2 bg-surface-container-high/50 backdrop-blur-sm rounded-full px-4 py-1.5 w-fit border border-white/20">
<span className="material-symbols-outlined text-secondary text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>stars</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">The Gold Standard in AI Education</span>
</div>
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">
                        Learn High-Income AI &amp; Digital Skills That Can Help You Build a Profitable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Online Business</span>
</h1>
<p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl">
                        Master practical AI-powered digital skills, freelancing, branding, and online business techniques through structured training and mentorship.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<Link href="/register?type=student" className="btn-hover bg-gradient-to-r from-[#FF7A00] to-[#FF9900] text-white px-8 py-4 rounded-full font-label-md text-label-md font-semibold shadow-xl shadow-[#FF7A00]/20 flex items-center justify-center gap-2 w-fit">
                            Join Today
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
<button className="btn-hover bg-surface glass-card text-primary px-8 py-4 rounded-full font-label-md text-label-md font-semibold flex items-center justify-center gap-2 border border-outline-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-sm">play_circle</span>
                            Watch Free Training
                        </button>
</div>
<div className="flex items-center gap-4 mt-4 pt-4 border-t border-outline-variant/30">
<div className="flex -space-x-3">
<Image className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="A small, circular portrait of a professional student smiling in a well-lit studio environment, representing a successful online learner. High-quality corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5vXErOAUiGgLhKz0q6m97c5q7CQOgGxxjp4PUVGWKFpqWIAouZUjfn5DxJUxZBaOTyGldYq74dVp1sFd2lqWTfUcyLKxz-4B8gbCR3cOraNj8d9xnPZ49em0CLSQZfOtlqRm3w60THoAA26kAA8HxuFqKLjHuBy5-s4fJWynuHkvoaQDItLsaZAGVqIg9qqvw3c7FxeTjR4W7jK1gWcNtabSchSPG41I0SJf_-35IbzYq2nFy9I3A" width={40} height={40} />
<Image className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="A small, circular portrait of a creative professional using a laptop, representing a successful digital business owner. High-quality corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5I_sdQqp1ejr2T1SCzp0L8j8XG5XuoT_6lRp56ojRXVgDNmlDLvse0TO2Pb8_5ODLEF_ILYkeL0PggODeCwIk1QWasC2_lbbRQaZXrxrHel0ZwlA7sntQUpwLO2Zlm2mhicU5xh4rSF0SQD--6P4Os0CIeGTDR2beSLAOAK0nlXs0J98hIWLB4ST0HdPmJcprGUdJIpIQyUhXeAPAYprgk-CC0B3bp7Ql1jK0ZXCSFCUJOGlp9sNf" width={40} height={40} />
<Image className="w-10 h-10 rounded-full border-2 border-surface object-cover" alt="A small, circular portrait of a young entrepreneur in a modern office space, representing a successful freelancer. High-quality corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdQmv2DdU0Z9iBm0K1-x1XrEF_l0WNp75jqaFl_IliAiMWWb26FKon5vxu5H7g0wP9qx7uMcmLsdWu3mCdtTc6LyUYYQGrxAtokwiXRHL4EPvI4wdZUCkhxbj_TfiY6BWy0f_Gl40nNjBi8qwASiuCjwoRVMzGYux-yZprYA0dlEPeXl31fTu33iLT_uU9aTmvU_S5MkwV4jMWGCp_QEwnnn3xsCiDi4mHOAe8W-5iUvvYInZ8-ZP6" width={40} height={40} />
<div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-xs font-bold text-primary">+5k</div>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Thousands learning worldwide.</p>
</div>
</div>
<div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-card p-2 shadow-2xl z-10 group">
<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-20 pointer-events-none"></div>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} className="w-full h-full rounded-2xl" frameBorder="0" src="https://www.youtube.com/embed/kJBY0O9Nt_w?autoplay=0&amp;loop=1&amp;playlist=kJBY0O9Nt_w&amp;controls=1&amp;showinfo=0&amp;rel=0" title="Achievers University Training">
</iframe>
</div>
</div>
</section>
{/*  Trust Badges  */}
<section className="py-stack-md bg-surface-container-low border-y border-outline-variant/20">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-stack-md opacity-80">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">school</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Thousands Learning</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">AI Skills</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">groups</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Mentorship</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">storefront</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Client Marketplace</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">verified</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Money Back Guarantee*</span>
</div>
</div>
</div>
</section>
{/*  What You'll Learn (Bento Grid)  */}
<section className="py-stack-lg md:py-[120px] relative" id="curriculum">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="text-center mb-stack-lg max-w-3xl mx-auto">
<h2 className="font-headline-xl text-headline-xl text-primary mb-4">Curriculum Built for the Real World</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Practical, actionable modules designed to turn you into a high-value digital professional.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/*  AI Mastery Card  */}
<div className="glass-card rounded-3xl p-stack-md flex flex-col gap-4 lg:col-span-2 group hover:-translate-y-1 transition-transform duration-400">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>robot_2</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">AI Mastery</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Command the latest generative tools to produce professional-grade assets in minutes, not hours.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">AI Images</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">Studio Photos</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">Video Generation</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">Cartoon Creation</span>
</div>
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
</div>
{/*  Digital Business Card  */}
<div className="glass-card rounded-3xl p-stack-md flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-400">
<div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-2 group-hover:bg-secondary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>trending_up</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Digital Business</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Learn how to package, price, and sell your new skills to high-paying clients globally.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">Client Acquisition</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">Freelancing</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">Branding</span>
</div>
</div>
{/*  WhatsApp Marketing  */}
<div className="glass-card rounded-3xl p-stack-md flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-400">
<div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-2 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>chat</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">WhatsApp Marketing</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Turn your contacts into contracts. Master organic marketing and audience growth.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">Audience Growth</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">Organic Reach</span>
</div>
</div>
{/*  Digital Payments  */}
<div className="glass-card rounded-3xl p-stack-md flex flex-col gap-4 lg:col-span-2 group hover:-translate-y-1 transition-transform duration-400 bg-gradient-to-br from-surface to-surface-container-low">
<div className="w-12 h-12 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary-container mb-2 group-hover:bg-tertiary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>payments</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-primary">Digital Payments &amp; Ops</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Set up compliant workflows, receive international payments, and scale operations effortlessly.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">Global Payments</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">Compliance</span>
<span className="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold text-on-surface-variant">Invoicing</span>
</div>
<div className="absolute bottom-0 right-0 p-4 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[100px]" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance</span>
</div>
</div>
</div>
</div>
</section>
{/*  Footer  */}
<footer className="bg-primary dark:bg-surface-container-lowest w-full pt-stack-lg pb-stack-md">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="md:col-span-1 flex flex-col gap-4">
<Image alt="Achievers University Logo" className="h-12 w-auto object-contain self-start bg-white rounded p-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQZABmVYwj6tI-RrEMmqD3_D5oH8KTsqTPE_sA_pDlJnYLTjGRnymMU23esP8nToE2L7sr_zr993lFOffXSTLoc1rK4lQ2_rFuS5dtK6ubjgvmd8kEWv74TfAFTYZ5ANr8YuFP71Pk5epPWMsW8QKdrF3sUjxl_XD3DFXGfvDq4Nk3_y3ztwZZZnCfKzzE-6FZDZdKXm_ep_xXfS_D7ytnhvnOhgwmhS8GYGvOt8Ew30i0Zh7sPBM3VxzYoM561McjEQ" width={800} height={600} />
<p className="font-body-md text-body-md text-on-primary/80 dark:text-on-surface/80">The Gold Standard in AI Education.</p>
</div>
<div className="md:col-span-2 flex flex-wrap gap-x-8 gap-y-4 justify-start md:justify-center">
<a className="font-body-md text-body-md text-on-primary/80 dark:text-on-surface/80 hover:text-on-primary transition-colors" href="#">Terms of Service</a>
<a className="font-body-md text-body-md text-on-primary/80 dark:text-on-surface/80 hover:text-on-primary transition-colors" href="#">Privacy Policy</a>
<Link className="font-body-md text-body-md text-on-primary/80 dark:text-on-surface/80 hover:text-on-primary transition-colors" href="/register?type=affiliate">Become an Affiliate</Link>
<a className="font-body-md text-body-md text-on-primary/80 dark:text-on-surface/80 hover:text-on-primary transition-colors" href="#">Institutional Trust</a>
</div>
<div className="md:col-span-1 flex justify-start md:justify-end gap-4 items-center">
{/*  Social Icons placeholders  */}
<div className="w-8 h-8 rounded-full bg-on-primary/10 flex items-center justify-center hover:bg-on-primary/20 cursor-pointer transition-colors">
<span className="material-symbols-outlined text-on-primary text-sm">share</span>
</div>
</div>
</div>
<div className="mt-stack-lg border-t border-on-primary/10 pt-stack-sm text-center px-margin-mobile">
<p className="font-body-md text-body-md text-on-primary/60 dark:text-on-surface/60 text-sm">
                    © 2024 Achievers University. The Gold Standard in AI Education.
                </p>
</div>
</footer>
</main>


</>);
}