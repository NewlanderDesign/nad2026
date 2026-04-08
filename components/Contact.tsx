'use client';

import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Get in Touch
          </motion.h2>
          <p className="text-slate-400">Have questions about the development or want to become a beta tester? Send us a message.</p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name');
            const message = formData.get('message');
            const email = 'newlanderdesign@icloud.com';
            window.location.href = `mailto:${email}?subject=NAD Inquiry from ${name}&body=${message}`;
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full h-12 px-4 rounded-xl bg-[#1a232f] border border-white/10 text-white focus:outline-none focus:border-[#00ffd0] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full h-12 px-4 rounded-xl bg-[#1a232f] border border-white/10 text-white focus:outline-none focus:border-[#00ffd0] transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
            <textarea 
              id="message" 
              name="message"
              required
              rows={6}
              className="w-full p-4 rounded-xl bg-[#1a232f] border border-white/10 text-white focus:outline-none focus:border-[#00ffd0] transition-colors resize-none"
              placeholder="How can we help?"
            />
          </div>

          <button 
            type="submit"
            className="w-full h-14 rounded-xl bg-[#00ffd0] text-[#0b0f14] font-medium hover:bg-[#00e6bb] transition-colors"
          >
            Send it!
          </button>
        </motion.form>
      </div>
    </section>
  );
}
