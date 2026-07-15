import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default async function AffiliateDashboard() {
  const session = await getServerSession(authOptions);

  if (session?.user?.role !== "AFFILIATE") {
    redirect("/dashboard");
  }

  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 bg-primary/95 dark:bg-surface-dim/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-primary/5">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
<div className="flex items-center gap-4">
<img src="/logo.png" className="h-8 md:h-10 w-auto" alt="Achievers University Logo" />
</div>
<div className="hidden md:flex gap-6">
{/*  Desktop Nav items would go here if defined in TopAppBar JSON, mimicking BottomNav  */}
<a className="text-white/80 hover:text-white transition-opacity duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] font-label-md text-label-md" href="#">Home</a>
<a className="text-white font-semibold hover:opacity-80 transition-opacity duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] font-label-md text-label-md" href="#">Earn</a>
<a className="text-white/80 hover:text-white transition-opacity duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] font-label-md text-label-md" href="#">Learn</a>
<a className="text-white/80 hover:text-white transition-opacity duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] font-label-md text-label-md" href="#">Profile</a>
</div>
<div className="flex items-center gap-4">
<ThemeSwitcher />
<button className="btn-primary-luxury px-6 py-2 rounded-full font-label-md text-label-md text-white hover:opacity-80 transition-opacity duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-95 transition-transform">
                Join Today
            </button>
</div>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="flex-grow pt-28 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
{/*  Welcome Header  */}
<div className="mb-stack-lg animate-fade-in-up">
<h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface dark:text-white mb-2">
                Affiliate Partner: <span className="text-gradient-gold">{session?.user?.name || "Partner"}</span>
</h2>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
<span className="material-symbols-outlined text-[#D4AF37] text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
<span className="font-label-sm text-label-sm text-[#D4AF37] uppercase tracking-widest">Elite Member</span>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-lg">
{/*  Quick Stats and Referrals Container  */}
<div className="md:col-span-8 flex flex-col gap-gutter">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
{/*  Withdrawable Balance  */}
<div className="glass-panel rounded-2xl p-6 ambient-glow hover:bg-white/[0.05] transition-colors duration-400 relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary-container/20 rounded-full blur-3xl group-hover:bg-secondary-container/30 transition-all duration-700"></div>
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary-fixed-dim bg-secondary-container/30 p-2 rounded-lg">account_balance_wallet</span>
<h3 className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Withdrawable Balance</h3>
</div>
<p className="font-headline-xl text-headline-xl text-on-surface dark:text-white">$850.00</p>
<button className="mt-4 w-full py-2 rounded-lg bg-secondary text-white hover:bg-secondary/90 transition-colors font-label-sm text-label-sm shadow-md shadow-secondary/20 font-semibold flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">payments</span> Withdraw Funds
</button>
</div>
{/*  Pending Earnings  */}
<div className="glass-panel rounded-2xl p-6 hover:bg-white/[0.05] transition-colors duration-400">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant bg-surface-container-highest/20 p-2 rounded-lg">pending_actions</span>
<h3 className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Pending Earnings</h3>
</div>
<p className="font-headline-xl text-headline-xl text-on-surface-variant dark:text-white/80">$210.00</p>
<div className="mt-4 flex flex-col gap-2">
<div className="flex items-center gap-2 text-xs text-on-surface-variant dark:text-outline-variant">
<span className="material-symbols-outlined text-xs">info</span> Clearance in 3-5 business days
</div>
<div className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#4ADE80]/10 border border-[#4ADE80]/20 text-[#4ADE80] text-xs font-semibold mt-1">
<span className="material-symbols-outlined text-[14px]">percent</span> 50% Commission per sale
</div>
</div>
</div>
{/*  Total Clicks  */}
<div className="glass-panel rounded-2xl p-6 hover:bg-white/[0.05] transition-colors duration-400">
<div className="flex justify-between items-start mb-2">
<h3 className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Total Clicks</h3>
<span className="material-symbols-outlined text-primary-fixed-dim">ads_click</span>
</div>
<p className="font-headline-lg text-headline-lg text-on-surface dark:text-white">1,240</p>
<p className="font-label-sm text-label-sm text-[#4ADE80] mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> +12% this week
                    </p>
</div>
{/*  Conversions  */}
<div className="glass-panel rounded-2xl p-6 hover:bg-white/[0.05] transition-colors duration-400">
<div className="flex justify-between items-start mb-2">
<h3 className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant">Conversions</h3>
<span className="material-symbols-outlined text-[#D4AF37]">diamond</span>
</div>
<p className="font-headline-lg text-headline-lg text-on-surface dark:text-white">45</p>
<p className="font-label-sm text-label-sm text-[#4ADE80] mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> 3.6% Conv. Rate
                    </p>
</div>
</div>
{/*  Recent Referrals Table  */}
<div className="glass-panel rounded-2xl p-6 hover:bg-surface-variant/10 dark:hover:bg-white/[0.02] transition-colors duration-400 mt-2 flex-grow">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface dark:text-white">Recent Referrals</h3>
<button className="text-primary hover:text-primary/80 dark:text-primary-fixed-dim dark:hover:text-white text-sm font-label-md transition-colors flex items-center gap-1">
View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="border-b border-outline-variant/20 dark:border-white/10 text-on-surface-variant dark:text-outline-variant font-label-md text-label-md">
<th className="pb-3 font-medium font-label-sm text-label-sm uppercase tracking-wider">Name</th>
<th className="pb-3 font-medium font-label-sm text-label-sm uppercase tracking-wider">Date</th>
<th className="pb-3 font-medium font-label-sm text-label-sm uppercase tracking-wider">Status</th>
<th className="pb-3 font-medium font-label-sm text-label-sm uppercase tracking-wider text-right">Commission</th>
</tr>
</thead>
<tbody className="text-body-md font-body-md text-on-surface dark:text-white/90">
<tr className="border-b border-outline-variant/10 dark:border-white/5 hover:bg-surface-variant/30 dark:hover:bg-white/5 transition-colors">
<td className="py-4 flex items-center gap-3 pr-4">
<div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary-fixed/20 flex items-center justify-center text-primary dark:text-primary-fixed-dim font-bold text-sm">S</div>
Sarah Jenkins
</td>
<td className="py-4 text-on-surface-variant dark:text-outline-variant text-sm pr-4">Oct 24, 2024</td>
<td className="py-4 pr-4"><span className="px-2 py-1 bg-[#4ADE80]/10 text-[#4ADE80] text-xs rounded-full font-medium">Completed</span></td>
<td className="py-4 text-right font-semibold">$150.00</td>
</tr>
<tr className="border-b border-outline-variant/10 dark:border-white/5 hover:bg-surface-variant/30 dark:hover:bg-white/5 transition-colors">
<td className="py-4 flex items-center gap-3 pr-4">
<div className="w-8 h-8 rounded-full bg-secondary/10 dark:bg-secondary-fixed/20 flex items-center justify-center text-secondary dark:text-secondary-fixed-dim font-bold text-sm">M</div>
Michael Chen
</td>
<td className="py-4 text-on-surface-variant dark:text-outline-variant text-sm pr-4">Oct 22, 2024</td>
<td className="py-4 pr-4"><span className="px-2 py-1 bg-surface-container-highest dark:bg-white/10 text-on-surface-variant dark:text-white/70 text-xs rounded-full font-medium">Pending</span></td>
<td className="py-4 text-right font-semibold text-on-surface-variant dark:text-white/70">$60.00</td>
</tr>
<tr className="hover:bg-surface-variant/30 dark:hover:bg-white/5 transition-colors">
<td className="py-4 flex items-center gap-3 pr-4">
<div className="w-8 h-8 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary-container dark:text-tertiary-fixed-dim font-bold text-sm">E</div>
Emma Watson
</td>
<td className="py-4 text-on-surface-variant dark:text-outline-variant text-sm pr-4">Oct 19, 2024</td>
<td className="py-4 pr-4"><span className="px-2 py-1 bg-[#4ADE80]/10 text-[#4ADE80] text-xs rounded-full font-medium">Completed</span></td>
<td className="py-4 text-right font-semibold">$150.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Referral Tools Side Panel  */}
<div className="md:col-span-4 glass-panel rounded-2xl p-6 flex flex-col gap-6">
<div>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 text-on-surface dark:text-white">Referral Tools</h3>
<div className="space-y-4">
{/*  Link Copy  */}
<div>
<label className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant mb-2 block">Your Referral Link</label>
<div className="flex bg-surface-container-high dark:bg-black/40 rounded-lg border border-outline-variant/20 dark:border-white/10 p-1">
<input className="bg-transparent border-none text-on-surface dark:text-white font-body-md text-body-md w-full focus:ring-0 truncate px-3" readOnly={true} type="text" value="achievers.edu/ref/alexcarter"/>
<button className="btn-primary-luxury px-4 py-2 rounded-md font-label-sm text-label-sm text-white hover:opacity-80 transition-opacity">Copy</button>
</div>
</div>
{/*  QR Code Area  */}
<div className="bg-surface-container-high dark:bg-black/40 border border-outline-variant/20 dark:border-white/10 rounded-xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant text-3xl">qr_code_2</span>
<div>
<p className="font-label-md text-label-md text-on-surface dark:text-white">Share via QR</p>
<p className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant">Quick scan access</p>
</div>
</div>
<button className="text-primary hover:text-primary/80 dark:text-primary-fixed-dim dark:hover:text-white transition-colors">
<span className="material-symbols-outlined">download</span>
</button>
</div>
{/*  Marketing Assets  */}
<div>
<label className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant mb-2 block">Marketing Assets</label>
<div className="grid grid-cols-1 gap-2">
<button className="flex items-center justify-between p-3 rounded-lg border border-outline-variant/20 bg-surface-container-high hover:bg-surface-variant dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10 transition-colors group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant group-hover:text-primary dark:group-hover:text-white transition-colors">image</span>
<span className="font-label-md text-label-md text-on-surface-variant dark:text-white/80 group-hover:text-primary dark:group-hover:text-white transition-colors">Banners &amp; Flyers</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant text-sm">download</span>
</button>
<button className="flex items-center justify-between p-3 rounded-lg border border-outline-variant/20 bg-surface-container-high hover:bg-surface-variant dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10 transition-colors group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant group-hover:text-primary dark:group-hover:text-white transition-colors">chat</span>
<span className="font-label-md text-label-md text-on-surface-variant dark:text-white/80 group-hover:text-primary dark:group-hover:text-white transition-colors">WhatsApp Templates</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant text-sm">download</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="md:hidden flex justify-around items-center h-16 px-4 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-lg border-t border-white/20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] fixed bottom-0 w-full z-50 rounded-t-xl">
<a className="flex flex-col items-center justify-center text-on-surface-variant/70 hover:text-primary transition-all duration-400 group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">home</span>
<span className="font-label-sm text-label-sm mt-1">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim bg-secondary/10 rounded-xl px-3 py-1 hover:text-primary transition-all duration-400 scale-95 transition-transform group" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>diamond</span>
<span className="font-label-sm text-label-sm mt-1">Earn</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant/70 hover:text-primary transition-all duration-400 group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">auto_stories</span>
<span className="font-label-sm text-label-sm mt-1">Learn</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant/70 hover:text-primary transition-all duration-400 group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">person</span>
<span className="font-label-sm text-label-sm mt-1">Profile</span>
</a>
</nav>
{/*  Footer  */}
<footer className="w-full pt-stack-lg pb-stack-md bg-primary dark:bg-surface-container-lowest grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto md:mb-0 mb-20">
<div className="md:col-span-1">
<span className="font-headline-lg text-headline-lg text-on-primary block mb-4">Achievers University</span>
<p className="font-body-md text-body-md text-on-primary/80 dark:text-on-surface/80">© 2024 Achievers University. The Gold Standard in AI Education.</p>
</div>
<div className="md:col-span-3 flex flex-wrap gap-4 md:justify-end md:items-start items-center">
<a className="font-body-md text-body-md text-on-primary/80 dark:text-on-surface/80 hover:text-on-primary transition-colors" href="#">Terms of Service</a>
<a className="font-body-md text-body-md text-on-primary/80 dark:text-on-surface/80 hover:text-on-primary transition-colors" href="#">Privacy Policy</a>
<a className="font-body-md text-body-md text-tertiary-fixed underline hover:text-on-primary transition-colors" href="#">Affiliate Agreement</a>
<a className="font-body-md text-body-md text-on-primary/80 dark:text-on-surface/80 hover:text-on-primary transition-colors" href="#">Institutional Trust</a>
</div>
</footer>

    </>
  );
}
