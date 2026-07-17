"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header({ 
  ctaText = "Join Now", 
  ctaLink = "/register" 
}: { 
  ctaText?: string; 
  ctaLink?: string; 
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full z-50 py-6" id="top-nav">
      <div className="flex justify-between items-center px-4 md:px-8 max-w-7xl mx-auto relative z-20">
        <div className="flex items-center">
          <Link href="/">
            <Image alt="Achievers University Logo" className="h-10 md:h-14 w-auto object-contain" src="/logo.png" width={200} height={56} />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          <Link className="text-white hover:text-cta transition-colors font-medium text-sm" href="/">Home</Link>
          <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/#about">About</Link>
          <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/#courses">Courses</Link>
          <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/affiliate">Become an Affiliate</Link>
          <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/#testimonials">Testimonials</Link>
          <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/#faq">FAQ</Link>
          <Link className="text-white/80 hover:text-white transition-colors font-medium text-sm" href="/#contact">Contact</Link>
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="text-white border border-white/30 px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">lock</span>
            Login
          </Link>
          <Link href={ctaLink} className="bg-cta text-primary px-6 py-2.5 rounded-md font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_4px_14px_0_rgba(253,191,15,0.39)]">
            {ctaText}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#020b1f] border-t border-white/10 p-4 flex flex-col gap-4 shadow-xl z-10">
          <Link onClick={() => setIsOpen(false)} className="text-white py-2 font-medium text-sm border-b border-white/5" href="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} className="text-white py-2 font-medium text-sm border-b border-white/5" href="/#about">About</Link>
          <Link onClick={() => setIsOpen(false)} className="text-white py-2 font-medium text-sm border-b border-white/5" href="/#courses">Courses</Link>
          <Link onClick={() => setIsOpen(false)} className="text-white py-2 font-medium text-sm border-b border-white/5" href="/affiliate">Become an Affiliate</Link>
          <Link onClick={() => setIsOpen(false)} className="text-white py-2 font-medium text-sm border-b border-white/5" href="/#testimonials">Testimonials</Link>
          <Link onClick={() => setIsOpen(false)} className="text-white py-2 font-medium text-sm border-b border-white/5" href="/#faq">FAQ</Link>
          <Link onClick={() => setIsOpen(false)} className="text-white py-2 font-medium text-sm border-b border-white/5" href="/#contact">Contact</Link>
          <div className="flex flex-col gap-3 pt-2">
            <Link onClick={() => setIsOpen(false)} href="/login" className="text-white border border-white/30 py-3 rounded-md font-semibold text-sm hover:bg-white/10 transition-colors flex justify-center items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">lock</span>
              Login
            </Link>
            <Link onClick={() => setIsOpen(false)} href={ctaLink} className="bg-cta text-primary py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity flex justify-center items-center gap-2 shadow-[0_4px_14px_0_rgba(253,191,15,0.39)]">
              {ctaText}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
