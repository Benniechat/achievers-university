import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AffiliateLandingPage() {
  return (
    <div className="font-['Inter'] text-on-surface bg-gradient-radial min-h-screen">
      <Header ctaText="Partner Now" ctaLink="/register?type=affiliate" />

      <main>
        {/* Hero Section */}
        <section className="relative pt-[180px] pb-[100px] flex flex-col justify-center border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center gap-8 z-10">
            <div className="inline-flex items-center border border-cta/40 bg-cta/10 text-cta rounded-full px-4 py-2 text-xs font-bold tracking-widest uppercase">
              ACHIEVERS&apos; AFFILIATE PROGRAM
            </div>
            
            <h1 className="text-5xl md:text-[72px] font-extrabold leading-[1.1] tracking-tight text-white">
              Earn <span className="text-cta">50% Commission</span><br/>
              Changing Lives
            </h1>
            
            <p className="text-xl text-white/80 max-w-[640px] leading-relaxed">
              Partner with Achievers&apos; University to promote premium, high-income digital skills. Get paid generously for every student you refer who joins our university.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
              <Link href="/register?type=affiliate" className="bg-cta text-primary px-10 py-5 rounded-md font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(253,191,15,0.3)] w-full sm:w-auto">
                Become an Affiliate Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">SIMPLE PROCESS</span>
              <h2 className="text-4xl font-extrabold text-primary mb-4">How to Start Earning</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Getting started is simple. We provide you with all the tools, assets, and tracking you need to succeed.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">person_add</span>
                </div>
                <h3 className="font-bold text-2xl text-primary mb-3">1. Sign Up</h3>
                <p className="text-gray-600">Register for a free affiliate account and get instant access to your custom dashboard.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">campaign</span>
                </div>
                <h3 className="font-bold text-2xl text-primary mb-3">2. Share Your Link</h3>
                <p className="text-gray-600">Use our provided banners, flyers, and templates to promote your unique referral link to your audience.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative z-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">payments</span>
                </div>
                <h3 className="font-bold text-2xl text-primary mb-3">3. Earn 50%</h3>
                <p className="text-gray-600">For every student who enrolls through your link, you instantly earn a 50% commission.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-gray-50 py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-primary mb-4">Why Partner With Us?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-cta/10 flex items-center justify-center text-cta mb-4">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <h4 className="font-bold text-xl text-primary mb-2">High Conversion</h4>
                <p className="text-gray-600 text-sm">Our sales funnels are highly optimized. When you send traffic, we convert it.</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-cta/10 flex items-center justify-center text-cta mb-4">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <h4 className="font-bold text-xl text-primary mb-2">Reliable Payouts</h4>
                <p className="text-gray-600 text-sm">We process withdrawals quickly and directly to your local bank account.</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-cta/10 flex items-center justify-center text-cta mb-4">
                  <span className="material-symbols-outlined">dashboard</span>
                </div>
                <h4 className="font-bold text-xl text-primary mb-2">Real-Time Tracking</h4>
                <p className="text-gray-600 text-sm">Monitor your clicks, referrals, and earnings directly from your dashboard.</p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-cta/10 flex items-center justify-center text-cta mb-4">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <h4 className="font-bold text-xl text-primary mb-2">Dedicated Support</h4>
                <p className="text-gray-600 text-sm">Get priority support from our affiliate managers to help you succeed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#010613] py-24 border-t border-white/10 text-center">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-[50px] font-extrabold text-white leading-tight mb-6">
              Ready to Build Your<br/>Affiliate Empire?
            </h2>
            <Link href="/register?type=affiliate" className="inline-flex bg-cta text-primary px-10 py-5 rounded-md font-bold text-lg hover:opacity-90 transition-opacity items-center justify-center gap-2 shadow-[0_0_20px_rgba(253,191,15,0.3)]">
              Register as an Affiliate Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
