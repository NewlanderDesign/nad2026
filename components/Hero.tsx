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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            <Image 
              src="/phones-controller.png?v=6" 
              alt="NAD App Controller View" 
              width={600} 
              height={914} 
              className="object-contain w-auto h-full max-h-[700px] drop-shadow-2xl"
              priority
              unoptimized={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
