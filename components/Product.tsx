'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Full mobile app control",
  "Compact control module",
  "Smart sensor monitoring",
  "Custom UI color for standby and active mode",
  "Clean install design",
  "Expandable system architecture"
];

export function Product() {
  return (
    <section id="product" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00ffd0]/20 to-transparent blur-[80px] rounded-full" />
              <Image 
                src="/nad-module.png?v=4" 
                alt="NAD Control Module" 
                width={500} 
                height={500} 
                className="relative z-10 object-contain drop-shadow-2xl"
                unoptimized={true}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              NAD Control Module
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              The NAD control module is designed to deliver reliable and intelligent air suspension control with modern mobile integration.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2 className="text-[#00ffd0] shrink-0" size={20} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
