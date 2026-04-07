'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "Winter mode",
  "Bar and PSI",
  "Auto Connect",
  "System status",
  "Custom UI colors",
  "iOS and Android",
  "Tank pressure control",
  "Sensor calibration"
];

export function AppSection() {
  return (
    <section id="app" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ffd0]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Full Mobile Control
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Control ride height, presets and system monitoring directly from your phone.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-slate-300 bg-[#1a232f]/50 p-4 rounded-2xl border border-white/5"
                >
                  <CheckCircle2 className="text-[#00ffd0] shrink-0" size={20} />
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[600px] flex items-center justify-center mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <Image 
                src="/phones-settings.png?v=7" 
                alt="NAD App Settings View" 
                width={600} 
                height={750} 
                className="object-contain w-auto h-full max-h-[700px] drop-shadow-2xl"
                unoptimized={true}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
