import { motion } from "motion/react";
import { Brain, Palette, Cpu, Globe, ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "@/src/components/ui/Section";
import GlassCard from "@/src/components/ui/GlassCard";
import PageWrapper from "@/src/components/layout/PageWrapper";
import { cn } from "@/src/lib/utils";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
          
          {/* Hexagon Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="text-primary w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70">Next-Gen Digital Creator</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold leading-[0.85] tracking-tighter mb-12"
          >
            CRAFTING <br />
            <span className="text-gradient">FUTURES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            I build high-performance websites, visually stunning brands, and intelligent AI systems that help visionary businesses dominate the digital landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              to="/projects"
              className="group relative px-8 py-4 bg-primary text-black font-bold rounded-2xl overflow-hidden active:scale-95 transition-transform w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              HIRE ME
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/30 mb-4">Scroll to discover</span>
            <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Featured Capabilities */}
      <Section className="pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Cpu, title: "AI Automation", desc: "Intelligent workflows and custom chatbot systems.", color: "primary" },
            { icon: Globe, title: "Web Mastery", desc: "Ultra-fast, high-converting digital experiences.", color: "secondary" },
            { icon: Palette, title: "Brand Identity", desc: "Stunning visual systems built for modern scales.", color: "accent" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <GlassCard className="h-full">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                  item.color === 'primary' ? "bg-primary/20 text-primary" : 
                  item.color === 'secondary' ? "bg-secondary/20 text-secondary" : 
                  "bg-accent/20 text-accent"
                )}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
                <div className="mt-8 flex items-center text-xs font-bold tracking-widest uppercase group-hover:text-primary transition-colors">
                  <span>Learn More</span>
                  <ArrowUpRight size={14} className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Overlay Section */}
      <Section className="py-0">
         <div className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-20 text-center border border-white/10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 relative z-10 max-w-3xl mx-auto">
              Ready to build the <span className="text-gradient">Infinite</span>?
            </h2>
            <p className="text-white/60 mb-12 relative z-10 max-w-xl mx-auto text-lg leading-relaxed">
              Let's combine your vision with my expertise in AI, Design, and Development to create something world-class.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform relative z-10"
            >
              <span>SEND A MESSAGE</span>
              <Mail className="w-5 h-5" />
            </Link>
         </div>
      </Section>
    </PageWrapper>
  );
}

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
