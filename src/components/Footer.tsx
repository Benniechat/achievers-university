import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src="/logo.png" alt="Achievers University Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
              Empowering the next generation of digital entrepreneurs with high-income skills and practical AI mastery.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-500 hover:text-primary dark:hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-500 hover:text-primary dark:hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-500 hover:text-primary dark:hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-500 hover:text-primary dark:hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#curriculum" className="text-gray-500 hover:text-accent transition-colors">Curriculum</Link></li>
              <li><Link href="/register?role=affiliate" className="text-gray-500 hover:text-accent transition-colors">Affiliate Program</Link></li>
              <li><Link href="/login" className="text-gray-500 hover:text-accent transition-colors">Student Login</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-gray-500 hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-500 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund" className="text-gray-500 hover:text-accent transition-colors">Refund Policy</Link></li>
              <li><Link href="/disclaimer" className="text-gray-500 hover:text-accent transition-colors">Earnings Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Achievers University. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 text-center md:text-right max-w-xl">
            * This site is a demonstration version. Results mentioned are illustrative and do not guarantee specific income. 
          </p>
        </div>
      </div>
    </footer>
  );
}
