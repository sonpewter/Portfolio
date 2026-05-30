import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone, Clock, Github, Twitter, Instagram, CheckCircle2, AlertCircle } from "lucide-react";
import Section from "@/src/components/ui/Section";
import GlassCard from "@/src/components/ui/GlassCard";
import PageWrapper from "@/src/components/layout/PageWrapper";
import { cn } from "@/src/lib/utils";

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 2000);
  };

  return (
    <PageWrapper>
      <Section className="pt-32 pb-0">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-mono uppercase tracking-[0.4em] text-xs mb-6"
            >
              Let's Initialize
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Start a <span className="text-gradient">Mission</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/50 text-xl font-light mb-12"
            >
              Whether you have a specific project in mind or just want to explore the future of AI and design together—drop a line.
            </motion.p>
        </div>
      </Section>

      <Section className="pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Columns */}
          <div className="lg:col-span-1 space-y-8">
            <GlassCard className="p-10 border-white/5">
               <h3 className="text-xl font-display font-bold mb-8 flex items-center">
                 <Mail className="text-primary mr-3" size={20} />
                 Contact Info
               </h3>
               <ul className="space-y-6">
                 <li>
                   <p className="text-white/30 text-[10px] uppercase font-bold tracking-[0.3em] mb-1">Email</p>
                   <a href="mailto:vireon121@gmail.com" className="text-lg hover:text-primary transition-colors italic font-light">vireon121@gmail.com</a>
                 </li>
               </ul>
            </GlassCard>

            <GlassCard className="p-10 border-white/5">
               <h3 className="text-xl font-display font-bold mb-8 flex items-center">
                 <Clock className="text-primary mr-3" size={20} />
                 Business Hours
               </h3>
               <ul className="space-y-4 text-white/60 font-light">
                 <li className="flex justify-between"><span>Monday - Friday</span> <span>09:00 - 18:00</span></li>
                 <li className="flex justify-between"><span>Weekends</span> <span className="text-white/30">Hacking / Offline</span></li>
               </ul>
            </GlassCard>

            <div className="grid grid-cols-3 gap-4">
               {[
                 { Icon: Github, url: "https://github.com/vireon121-glitch" },
                 { Icon: Twitter, url: "https://x.com/vireon1r0b" },
                 { Icon: Instagram, url: "https://www.instagram.com/vireon485/" }
               ].map(({ Icon, url }, i) => (
                 <a 
                   key={i} 
                   href={url} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="glass-effect aspect-square rounded-2xl flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                 >
                    <Icon size={24} />
                 </a>
               ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
             <GlassCard className="h-full p-12 border-white/10 shadow-[0_0_80px_rgba(0,242,255,0.05)]">
                <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Von Neumann"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary/50 transition-all font-light"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] ml-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@future.is"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary/50 transition-all font-light"
                        />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] ml-1">Inquiry Type</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary/50 transition-all font-light appearance-none text-white/60">
                         <option>Full-Stack Development</option>
                         <option>AI Automation System</option>
                         <option>Visual Rebranding</option>
                         <option>UI/UX Design Studio</option>
                         <option>Other / General</option>
                      </select>
                   </div>

                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] ml-1">Brief Proposal</label>
                      <textarea 
                        required
                        placeholder="Tell me about your vision..."
                        rows={6}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary/50 transition-all font-light resize-none"
                      />
                   </div>

                   <button 
                      type="submit"
                      disabled={formState !== 'idle'}
                      className={cn(
                        "w-full py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all",
                        formState === 'idle' ? "bg-primary text-black hover:scale-[1.02] active:scale-[0.98]" : 
                        formState === 'sending' ? "bg-white/10 text-white/40 cursor-wait" : 
                        "bg-accent text-black"
                      )}
                   >
                     {formState === 'idle' && (
                       <>
                         <span>TRANSMIT MESSAGE</span>
                         <Send size={18} />
                       </>
                     )}
                     {formState === 'sending' && (
                       <>
                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                         <span>ENCRYPTING...</span>
                       </>
                     )}
                     {formState === 'success' && (
                       <>
                         <CheckCircle2 size={20} />
                         <span>SIGNAL RECEIVED</span>
                       </>
                     )}
                   </button>
                </form>
             </GlassCard>
          </div>
        </div>
      </Section>


    </PageWrapper>
  );
}
