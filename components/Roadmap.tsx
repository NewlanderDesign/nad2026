'use client';

import { motion } from 'motion/react';

const roadmapItems = [
  { title: "Concept & Research", status: "Completed" },
  { title: "Hardware Design", status: "Completed" },
  { title: "CAD Development", status: "Completed" },
  { title: "Prototype Module", status: "Completed" },
  { title: "Mobile App Development (iOS)", status: "Completed" },
  { title: "Mobile App Development (Android)", status: "In Progress" },
  { title: "Vehicle Testing", status: "In Progress" },
  { title: "Beta Testers", status: "Upcoming" },
  { title: "Production Version", status: "Future" },
  { title: "Webshop Launch", status: "Future" },
  { title: "Public Release", status: "Future" }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 md:py-32 bg-[#070a0d] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Development Roadmap
          </motion.h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 pl-8 space-y-12">
          {roadmapItems.map((item, index) => {
            const isCompleted = item.status === "Completed";
            const isInProgress = item.status === "In Progress";
            const isUpcoming = item.status === "Upcoming";
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:flex items-center justify-between"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 bg-[#0b0f14] z-10
                  ${isCompleted ? 'border-[#00ffd0] bg-[#00ffd0]' : 
                    isInProgress ? 'border-[#00ffd0] shadow-[0_0_10px_#00ffd0]' : 
                    'border-slate-600'}`} 
                />
                
                {/* Content */}
                <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <h3 className={`text-xl font-heading font-medium mb-2 ${isCompleted || isInProgress ? 'text-white' : 'text-slate-400'}`}>
                    {item.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border
                    ${isCompleted ? 'bg-[#00ffd0]/10 border-[#00ffd0]/20 text-[#00ffd0]' : 
                      isInProgress ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 
                      isUpcoming ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                      'bg-white/5 border-white/10 text-slate-500'}`}
                  >
                    {item.status}
                  </span>
                </div>
              </motion.div>
            );
          })}
          
          {/* Center line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}
