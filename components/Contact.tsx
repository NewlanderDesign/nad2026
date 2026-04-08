'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    
    // IMPORTANT: You need to get your FREE access key from https://web3forms.com/
    // It takes 10 seconds and they just send it to your email.
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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

        <div className="relative">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[#00ffd0]/10 border border-[#00ffd0]/20 rounded-2xl p-12 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-[#00ffd0] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 mb-8">Thank you for reaching out. We&apos;ll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-[#00ffd0] font-medium hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      disabled={status === 'loading'}
                      className="w-full h-12 px-4 rounded-xl bg-[#1a232f] border border-white/10 text-white focus:outline-none focus:border-[#00ffd0] transition-colors disabled:opacity-50"
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
                      disabled={status === 'loading'}
                      className="w-full h-12 px-4 rounded-xl bg-[#1a232f] border border-white/10 text-white focus:outline-none focus:border-[#00ffd0] transition-colors disabled:opacity-50"
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
                    disabled={status === 'loading'}
                    className="w-full p-4 rounded-xl bg-[#1a232f] border border-white/10 text-white focus:outline-none focus:border-[#00ffd0] transition-colors resize-none disabled:opacity-50"
                    placeholder="How can we help?"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 p-4 rounded-xl">
                    <AlertCircle size={16} />
                    <span>Something went wrong. Please try again or email us directly.</span>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full h-14 rounded-xl bg-[#00ffd0] text-[#0b0f14] font-medium hover:bg-[#00e6bb] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-[#0b0f14]/30 border-t-[#0b0f14] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : 'Send it!'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
