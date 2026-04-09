import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f14]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/websitelogo-v2.png" 
            alt="NAD Logo" 
            width={120} 
            height={40} 
            className="object-contain h-10 w-auto"
            priority
            referrerPolicy="no-referrer"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="#product" className="hover:text-white transition-colors">Product</Link>
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#app" className="hover:text-white transition-colors">App</Link>
          <Link href="#roadmap" className="hover:text-white transition-colors">Roadmap</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#contact" className="text-sm font-medium text-[#00ffd0] hover:text-white transition-all border border-[#00ffd0]/30 hover:border-[#00ffd0] hover:bg-[#00ffd0]/10 px-5 py-2 rounded-full">
            Become Tester
          </Link>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <Link href="https://facebook.com/YOUR_ACCOUNT" target="_blank" className="hover:text-[#00ffd0] transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </Link>
            <Link href="https://instagram.com/YOUR_ACCOUNT" target="_blank" className="hover:text-[#00ffd0] transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
