import { motion } from "motion/react";
import { 
  Code, Palette, Brain, Layers, 
  Smartphone, Rocket, Database, 
  Search, MessageSquare, Workflow, 
  Presentation, Layout 
} from "lucide-react";
import Section from "@/src/components/ui/Section";
import GlassCard from "@/src/components/ui/GlassCard";
import PageWrapper from "@/src/components/layout/PageWrapper";
import { Link } from "react-router-dom";

const serviceList = [
  { icon: Code, title: "Website Development", desc: "Build high-speed, pixel-perfect websites using React, Next.js, and modern tech stacks.", color: "primary" },
  { icon: Smartphone, title: "App Development", desc: "Custom mobile solutions and cross-platform progressive web applications.", color: "secondary" },
  { icon: Palette, title: "UI/UX Design", desc: "Cinematic design systems and user-centric interfaces tailored for conversion.", color: "accent" },
  { icon: Layout, title: "Graphics & Branding", desc: "Distinctive logo design and visual assets that command market attention.", color: "primary" },
  { icon: Brain, title: "AI Automation", desc: "Streamline your business operations with intelligent AI-powered automated workflows.", color: "secondary" },
  { icon: MessageSquare, title: "AI Chatbots", desc: "Smart customer support and sales bots powered by advanced language models.", color: "accent" },
  { icon: Workflow, title: "Workflow Systems", desc: "Organize chaos with systematic tools and custom dashboard structures.", color: "primary" },
  { icon: Presentation, title: "Script Writing", desc: "Compelling narratives for technical ads, pitch decks, and brand explainers.", color: "secondary" },
  { icon: Rocket, title: "Landing Pages", desc: "High-performance marketing pages optimized for maximum lead generation.", color: "accent" },
];

export default function Services() {
  return (
    <PageWrapper>
      <Section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-mono uppercase tracking-[0.4em] text-xs mb-6"
          >
            Digital Capabilities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Powering Your <span className="text-gradient">Vision</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/60 text-xl font-light"
          >
            From high-end aesthetic design to complex automated intelligence, I provide a full-spectrum digital suite designed for modern scale.
          </motion.p>
        </div>
      </Section>

      <Section className="pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="relative group overflow-hidden h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-black border border-white/10 group-hover:border-primary/50 transition-colors shadow-2xl`}>
                  <service.icon className={`w-7 h-7 ${
                    service.color === 'primary' ? 'text-primary' : 
                    service.color === 'secondary' ? 'text-secondary' : 
                    'text-accent'
                  }`} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-white/50 leading-relaxed mb-10 text-sm">
                  {service.desc}
                </p>
                <div className="relative z-10">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
                  >
                    <span>Get Started</span>
                    <Layers size={14} className="ml-2 opacity-30" />
                  </Link>
                </div>

                {/* Hover Glow Effect Background */}
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${
                    service.color === 'primary' ? 'bg-primary' : 
                    service.color === 'secondary' ? 'bg-secondary' : 
                    'bg-accent'
                }`} />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Trust Quote Section */}
      <Section className="pb-40">
        <GlassCard className="text-center p-20 py-32 border-none bg-gradient-to-br from-white/5 to-transparent">
           <h2 className="text-4xl md:text-5xl font-display font-light italic mb-12 leading-tight">
             "The best way to <span className="text-primary font-bold not-italic">predict</span> the future is to <span className="text-secondary font-bold not-italic">design</span> it."
           </h2>
           <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />
           <p className="text-white/40 uppercase tracking-[0.8em] font-display text-sm">Strategic Innovation Partner</p>
        </GlassCard>
      </Section>
    </PageWrapper>
  );
}
