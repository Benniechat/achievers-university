"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";

export function MobileLanding() {
  return (
    <div className="font-sans text-white bg-[#010613] min-h-screen pb-[80px]">
      <Header ctaText="Join Now" ctaLink="/register" />

      {/* 1. HERO SECTION */}
      <section className="pt-24 px-5 pb-10 flex flex-col items-center text-center border-b border-white/5">
        <div className="inline-flex items-center border border-cta/40 bg-cta/10 text-cta rounded px-3 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase">
          LEARN. PRACTICE. EARN.
        </div>
        
        <h1 className="text-[32px] font-extrabold leading-[1.2] tracking-tight mb-4">
          Learn High-Income <br/>
          <span className="text-cta">AI & Digital Skills</span><br/>
          and Build a Profitable<br/>
          Online Business
        </h1>
        
        <p className="text-[15px] text-white/80 leading-relaxed mb-8 px-2">
          Practical skills. Real mentorship.<br/>Limitless opportunities.
        </p>

        {/* Video Card */}
        <div className="w-full relative rounded-[20px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] bg-black aspect-[4/3] mb-8">
          <img src="https://via.placeholder.com/600x450/010613/FFFFFF?text=Instructor+Video" alt="Instructor" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010613] to-transparent"></div>
          
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <span className="material-symbols-outlined text-[#010613] text-3xl ml-1" style={{fontVariationSettings:"'FILL' 1"}}>play_arrow</span>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <span className="text-xs font-medium text-white">Watch the full presentation</span>
            <span className="text-xs font-bold text-white bg-black/50 px-2 py-1 rounded">28:45</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="w-full space-y-4">
          <Link href="/register" className="w-full bg-cta text-[#010613] py-4 rounded-[12px] font-extrabold text-[16px] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(253,191,15,0.2)]">
            Join Now for ₦20,000
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <button className="w-full text-white border border-white/20 py-4 rounded-[12px] font-bold text-[16px] flex items-center justify-center gap-2 bg-white/5">
            <span className="material-symbols-outlined text-cta" style={{fontVariationSettings:"'FILL' 1"}}>play_circle</span>
            Watch Free Training
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="material-symbols-outlined text-cta text-[18px]" style={{fontVariationSettings:"'FILL' 1"}}>timer</span>
          <p className="text-[13px] text-white/90 font-medium">Limited Time Offer for the First 15 People Only!</p>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full mt-10">
          <div className="bg-[#0A1229] border border-[#1A2540] rounded-[16px] p-4 flex flex-col items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[#4A72FF] text-[28px]" style={{fontVariationSettings:"'FILL' 1"}}>school</span>
            <div className="text-center">
              <div className="font-bold text-[18px]">5,000+</div>
              <div className="text-[10px] text-white/50 uppercase tracking-wider">Students Enrolled</div>
            </div>
          </div>
          <div className="bg-[#0A1229] border border-[#1A2540] rounded-[16px] p-4 flex flex-col items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[#00C48C] text-[28px]" style={{fontVariationSettings:"'FILL' 1"}}>public</span>
            <div className="text-center">
              <div className="font-bold text-[18px]">150+</div>
              <div className="text-[10px] text-white/50 uppercase tracking-wider">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. WHAT YOU WILL LEARN */}
      <section className="bg-white text-[#010613] pt-12 pb-12 px-5">
        <div className="text-center mb-8">
          <div className="text-cta font-bold text-[10px] tracking-[2px] uppercase mb-2">HIGH-INCOME SKILLS</div>
          <h2 className="text-[28px] font-extrabold leading-tight mb-3">What You Will Learn</h2>
        </div>
      </section>

      {/* END_MARKER */}
    </div>
  );
}
