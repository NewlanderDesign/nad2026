'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ffd0]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ffd0]/10 border border-[#00ffd0]/20 text-[#00ffd0] text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00ffd0] animate-pulse" />
            Prototype in Development
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Advanced Air <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffd0] to-[#009e8e]">
              Suspension
            </span>
            <br /> Management
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Smart control. Clean install. Built for enthusiasts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#roadmap"
              className="inline-flex justify-center items-center h-12 px-8 rounded-full bg-[#00ffd0] text-[#0b0f14] font-medium hover:bg-[#00e6bb] transition-colors"
            >
              Follow Development
            </Link>
          </div>
        </motion.div>

        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute left-0 z-10 transform -rotate-12 scale-90 origin-bottom-right"
          >
            <Image 
              src="/android.png" 
              alt="NAD Android App" 
              width={280} 
              height={580} 
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute z-20"
          >
            <Image 
              src="/nad-module.png" 
              alt="NAD Control Module" 
              width={320} 
              height={320} 
              className="object-contain drop-shadow-[0_0_50px_rgba(0,255,208,0.2)]"
              priority
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute right-0 z-10 transform rotate-12 scale-90 origin-bottom-left"
          >
            <Image 
              src="/iphone.png" 
              alt="NAD iOS App" 
              width={280} 
              height={580} 
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
