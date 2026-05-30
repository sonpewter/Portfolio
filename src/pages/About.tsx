import { motion, useInView, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { Download, CheckCircle2, Award, Users, Rocket, Clock } from "lucide-react";
import Section from "@/src/components/ui/Section";
import GlassCard from "@/src/components/ui/GlassCard";
import PageWrapper from "@/src/components/layout/PageWrapper";
import { cn } from "@/src/lib/utils";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const skills = [
  { name: "Frontend Development", level: 95, tags: ["React", "Next.js", "Tailwind", "Typescript"] },
  { name: "UI/UX Design", level: 90, tags: ["Figma", "Design Systems", "Prototyping"] },
  { name: "AI Automation", level: 85, tags: ["Gemini API", "LangChain", "n8n", "Chatbots"] },
  { name: "Brand Identity", level: 88, tags: ["Photoshop", "Illustrator", "Visual Storytelling"] },
  { name: "Script Writing", level: 82, tags: ["Tech Ads", "Explainers", "Storyboarding"] },
];

const timeline = [
  { year: "2024", title: "Global AI Lead", company: "CyberSystems", desc: "Leading AI automation implementation for enterprise workflows." },
  { year: "2022", title: "Senior Designer", company: "VisualEdge", desc: "Spearheaded rebranding for Fortune 500 tech clients." },
  { year: "2020", title: "Full Stack Dev", company: "StartupX", desc: "Built scalable web apps from ground up using MERN stack." },
  { year: "2018", title: "Creative Intern", company: "StudioA", desc: "Fathoming the intersection of design and code." },
];

export default function About() {
  return (
    <PageWrapper>
      <Section className="pt-32 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <h1 className="text-5xl md:text-7xl font-display font-bold relative">
                Decoding <br />
                The <span className="text-gradient">Creator</span>
              </h1>
            </div>
            
            <p className="text-white/60 text-xl leading-relaxed mb-8 max-w-xl font-light">
              I'm a multi-disciplinary creator living at the intersection of high-end aesthetics and powerful technology. My mission is to bridge the gap between human creativity and machine intelligence.
            </p>
            <p className="text-white/40 leading-relaxed mb-12 max-w-xl">
              With over 8 years of experience in development and design, I specialize in building digital systems that don't just look good—they think and perform. From complex AI workflows to cinematic web interfaces, I treat every project as a piece of digital architecture.
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-primary">
                  <AnimatedCounter value={8} suffix="+" />
                </span>
                <span className="text-xs uppercase tracking-widest text-white/40">Years Exp</span>
              </div>
              <div className="w-px h-10 bg-white/10 self-center" />
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-secondary">
                  <AnimatedCounter value={250} suffix="+" />
                </span>
                <span className="text-xs uppercase tracking-widest text-white/40">Launch Ready</span>
              </div>
              <div className="w-px h-10 bg-white/10 self-center" />
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-accent">
                  <AnimatedCounter value={50} suffix="+" />
                </span>
                <span className="text-xs uppercase tracking-widest text-white/40">Happy Brands</span>
              </div>
            </div>

            <button className="flex items-center border border-white space-x-3 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-transparent hover:text-white transition-all group">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              <span>DOWNLOAD CV</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative group bg-[#0a0a0a]">
              {/* Background with texture/shadow overlay pattern inspired by the image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop" 
                  alt="Branding Philosophy Background" 
                  className="w-full h-full object-cover opacity-40 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black/80" />
                {/* Subtle leaf shadow effect using a mask or another image */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              </div>

              {/* Centered Typography from user image */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-12 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="font-serif italic text-3xl md:text-4xl text-white/90 mb-2 leading-tight">
                    Design
                  </p>
                  <p className="font-serif text-3xl md:text-4xl text-white/90 mb-2 leading-tight">
                    with purpose,
                  </p>
                  <p className="font-serif italic text-3xl md:text-4xl text-primary mb-8 leading-tight">
                    built to connect.
                  </p>

                  <div className="w-12 h-px bg-primary/50 mx-auto mb-8" />

                  <div className="flex items-center justify-center space-x-2 text-[10px] tracking-[0.3em] font-mono text-white/40 uppercase">
                    <span>Branding</span>
                    <span>•</span>
                    <span>Web Design</span>
                    <span>•</span>
                    <span>Visual Identity</span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-effect rounded-2xl border-white/5 z-20">
                 <p className="text-sm font-mono text-primary mb-2">// PHILOSOPHY</p>
                 <h3 className="text-xl font-display font-bold uppercase tracking-tight">CRAFT OVER CONVENTION</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white/5 py-40">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Expertise <span className="text-gradient">Stack</span></h2>
          <p className="text-white/50 text-lg">My specialized toolkit for building the next generation of digital products.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4 flex justify-between items-end">
                <div>
                  <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
                  <div className="flex gap-2 flex-wrap">
                    {skill.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-white/40 uppercase tracking-tighter">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="text-primary font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full relative">
                {/* Background ambient glow that appears on completion */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.1 }}
                  transition={{ delay: i * 0.1 + 1.5 }}
                  className="absolute inset-0 bg-primary rounded-full blur-lg -z-10"
                />
                
                <div className="h-full w-full rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 2, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary relative rounded-full"
                  >
                    {/* Glowing Tip */}
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px] opacity-50" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full blur-md" />
                    
                    {/* Completion Flash Effect */}
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: [0, 1, 0], scaleX: [0, 1, 1] }}
                      transition={{ delay: i * 0.1 + 1.8, duration: 0.8 }}
                      className="absolute inset-0 bg-white rounded-full origin-left blur-sm"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="py-40 pb-60">
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">The <span className="text-gradient">Timeline</span></h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-24">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col md:flex-row items-center",
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <div className="w-full md:w-1/2 pr-0 md:pr-12 md:text-right text-left mb-8 md:mb-0">
                   {i % 2 === 1 && (
                     <GlassCard className="p-10 border-white/5 hover:border-primary/20">
                        <span className="text-primary font-mono text-sm mb-2 block">{item.year}</span>
                        <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                        <p className="text-white/40 text-sm mb-4">{item.company}</p>
                        <p className="text-white/60 leading-relaxed font-light">{item.desc}</p>
                     </GlassCard>
                   )}
                </div>
                
                <div className="relative z-10 w-12 h-12 rounded-full bg-black border-4 border-primary flex items-center justify-center shrink-0 mb-8 md:mb-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="w-full md:w-1/2 pl-0 md:pl-12 text-left">
                  {i % 2 === 0 && (
                     <GlassCard className="p-10 border-white/5 hover:border-primary/20 text-left">
                        <span className="text-primary font-mono text-sm mb-2 block">{item.year}</span>
                        <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                        <p className="text-white/40 text-sm mb-4">{item.company}</p>
                        <p className="text-white/60 leading-relaxed font-light">{item.desc}</p>
                     </GlassCard>
                   )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
