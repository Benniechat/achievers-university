import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#020b1f] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cta/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image alt="Achievers University Logo" className="h-10 w-auto object-contain" src="/logo.png" width={200} height={56} />
            </Link>
            <p className="text-white/70 max-w-sm mb-6 leading-relaxed">
              Empowering the next generation with premium, high-income digital skills and AI education. Build your future today.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/#courses" className="text-white/70 hover:text-cta transition-colors">Our Courses</Link></li>
              <li><Link href="/affiliate" className="text-white/70 hover:text-cta transition-colors">Affiliate Program</Link></li>
              <li><Link href="/login" className="text-white/70 hover:text-cta transition-colors">Student Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/70 hover:text-cta transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-cta transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-cta transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Achievers University. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-white/50 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-cta/30 transition-colors">
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
      </div>
    </footer>
  );
}
