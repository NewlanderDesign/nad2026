'use client';

import { motion } from 'motion/react';
import { ActivitySquare, Palette, PlugZap, Power, Sliders, QrCode } from 'lucide-react';

const features = [
  {
    icon: ActivitySquare,
    title: "Sensor Fail Switch",
    description: "Automatically switches from height to pressure sensor if one height sensor fails"
  },
  {
    icon: Palette,
    title: "Custom App Colors",
    description: "User can personalize app color theme for active and standby mode"
  },
  {
    icon: PlugZap,
    title: "Plug & Play Valve Support",
    description: "Designed to work with most valve blocks"
  },
  {
    icon: Power,
    title: "Rise on Ignition",
    description: "Automatically adjusts to preset height even if the phone isn't around, broke or stolen"
  },
  {
    icon: Sliders,
    title: "3 Height Presets",
    description: "Save and switch between driving heights"
  },
  {
    icon: QrCode,
    title: "QR Code for Personal Use",
    description: "Quick and secure system pairing via QR code"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#070a0d] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Built for reliability and flexibility
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0b0f14] border border-white/5 p-8 rounded-3xl hover:border-[#00ffd0]/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1a232f] flex items-center justify-center mb-6 group-hover:bg-[#00ffd0]/10 transition-colors">
                <feature.icon className="text-[#00ffd0]" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
