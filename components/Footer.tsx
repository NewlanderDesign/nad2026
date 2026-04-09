import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#070a0d] border-t border-white/5 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-block mb-6">
            <img 
              src="/websitelogo.png" 
              alt="NAD Logo" 
              width={140} 
              height={48} 
              className="object-contain h-12 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-sm text-slate-500 max-w-sm">
            Newlander Air Management Design.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Links</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="#roadmap" className="hover:text-[#00ffd0] transition-colors">Development</Link></li>
            <li><Link href="#history" className="hover:text-[#00ffd0] transition-colors">Story</Link></li>
            <li><Link href="#contact" className="hover:text-[#00ffd0] transition-colors">Contact</Link></li>
            <li><Link href="#webshop" className="hover:text-[#00ffd0] transition-colors">Future Shop</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-500 font-medium mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="cursor-not-allowed">Privacy Policy</li>
            <li className="cursor-not-allowed">Terms of Service</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600">
        <p>&copy; 2026 Newlander Design. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built for enthusiasts.</p>
      </div>
    </footer>
  );
}
