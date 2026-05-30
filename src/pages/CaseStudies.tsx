import { motion } from "motion/react";
import { ArrowRight, ChevronRight, BarChart3, Target, Lightbulb, Zap } from "lucide-react";
import Section from "@/src/components/ui/Section";
import GlassCard from "@/src/components/ui/GlassCard";
import PageWrapper from "@/src/components/layout/PageWrapper";
import { cn } from "@/src/lib/utils";

const caseStudies = [
  {
    id: 1,
    title: "QuantumX Rebrand",
    client: "QuantumX Solutions",
    problem: "Outdated visual identity failing to communicate deep-tech innovation in a crowded AI market.",
    solution: "A complete overhaul involving a generative logo system and a cinematic 3D web experience.",
    results: ["140% Increase in Lead Gen", "2.1s Average Load Time", "65% Higher User Retention"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
    color: "primary"
  },
  {
    id: 2,
    title: "EcoStream Automation",
    client: "EcoStream Energy",
    problem: "Manual data entry slowing down critical energy distribution by 40+ hours per week.",
    solution: "An autonomous AI engine that parses complex energy audits and synchronizes directly with CRM.",
    results: ["98% Error Reduction", "Automated 42hrs/Week", "ROAI within 3 Months"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000",
    color: "secondary"
  }
];

export default function CaseStudies() {
  return (
    <PageWrapper>
      <Section className="pt-32 pb-0">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-mono uppercase tracking-[0.4em] text-xs mb-6"
            >
              Strategic Outcomes
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Case <span className="text-gradient">Analytica</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/50 text-xl font-light mb-12"
            >
              Beyond the visuals: A deep dive into the problems we solved and the real-world metrics we achieved.
            </motion.p>
        </div>
      </Section>

      <Section className="pb-40">
         <div className="space-y-40">
           {caseStudies.map((study, i) => (
             <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
             >
                <div className={cn("space-y-8", i % 2 === 1 ? "lg:order-2" : "")}>
                   <div className="flex items-center space-x-4">
                      <div className={cn("w-12 h-px bg-gradient-to-r from-transparent", study.color === 'primary' ? "to-primary" : "to-secondary")} />
                      <span className="text-xs font-bold uppercase tracking-[0.3em] font-mono text-white/40 italic">Missions Report // {study.client}</span>
                   </div>
                   <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight">{study.title}</h2>
                   
                   <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center text-primary font-bold text-sm uppercase tracking-widest mb-2">
                           <Target size={16} className="mr-2" /> The Problem
                        </h4>
                        <p className="text-white/60 text-lg font-light leading-relaxed">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="flex items-center text-secondary font-bold text-sm uppercase tracking-widest mb-2">
                           <Lightbulb size={16} className="mr-2" /> The Intelligence
                        </h4>
                        <p className="text-white/60 text-lg font-light leading-relaxed">{study.solution}</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                     {study.results.map((res, j) => (
                       <div key={j}>
                        <GlassCard className="p-6 text-center border-white/5 hover:border-white/10" hoverEffect={false}>
                            <p className="text-white font-bold text-xs uppercase tracking-tighter leading-tight">{res}</p>
                        </GlassCard>
                       </div>
                     ))}
                   </div>

                   <button className="flex items-center space-x-3 bg-white text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform group">
                      <span>EXPLORE FULL METRICS</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                   </button>
                </div>

                <div className={cn("relative group", i % 2 === 1 ? "lg:order-1" : "")}>
                   <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 relative">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 backdrop-blur-3xl rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                         <BarChart3 className="text-white rotate-[-12deg]" size={32} />
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
         </div>
      </Section>
    </PageWrapper>
  );
}
