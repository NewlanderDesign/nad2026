'use client';

import { motion } from 'motion/react';
import { Info } from 'lucide-react';

export function History() {
  return (
    <section id="history" className="py-24 md:py-32 bg-[#00ffd0]/5 border-y border-[#00ffd0]/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 mx-auto bg-[#00ffd0]/10 rounded-2xl flex items-center justify-center mb-8">
            <Info className="text-[#00ffd0]" size={32} />
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h2>
          <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            NAD was born out of a necessity for a cleaner, more reliable air management system. Frustrated by cluttered installs and outdated interfaces, we set out to build a solution that enthusiasts actually want to use.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Designed, engineered, and assembled with precision, our modules are built to withstand the demands of modern air suspension setups while keeping your trunk looking immaculate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
