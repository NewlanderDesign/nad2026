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
            Story
          </h2>
          <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            The idea first sparked in 2017, when I started diving into car shows across Europe. Attending events and driving my show car daily, I quickly noticed that many existing systems looked impressive but weren&apos;t built for long-term, practical use. Problems would arise during extended drives or repeated use, revealing that reliability was often overlooked.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            That&apos;s what inspired me to develop something better: a system designed not just for show, but for everyday performance, combining flexibility, durability, and real-world practicality. Every feature and improvement since then has been shaped by those experiences on the road and at events.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
