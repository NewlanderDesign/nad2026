'use client';

import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

export function Webshop() {
  return (
    <section id="webshop" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14] to-[#070a0d] -z-10" />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a232f]/50 border border-white/5 rounded-[40px] p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[#00ffd0]/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="w-20 h-20 mx-auto bg-[#0b0f14] border border-white/10 rounded-full flex items-center justify-center mb-8 relative z-10">
            <ShoppingCart className="text-[#00ffd0]" size={32} />
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Webshop
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
            The NAD webshop will include controllers, harnesses and complete air management kits.
          </p>
          
          <button className="relative z-10 inline-flex justify-center items-center h-14 px-8 rounded-full bg-white/5 text-slate-300 border border-white/10 font-medium cursor-not-allowed opacity-80">
            Shop Coming Soon
          </button>
        </motion.div>
      </div>
    </section>
  );
}
