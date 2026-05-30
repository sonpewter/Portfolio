import { motion } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import Section from "@/src/components/ui/Section";
import GlassCard from "@/src/components/ui/GlassCard";
import PageWrapper from "@/src/components/layout/PageWrapper";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechVanguard",
    text: "Vireon's ability to blend high-end design with complex AI systems is unprecedented. They didn't just build us a website; they built us a digital brain that converts.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    logo: "https://logo.clearbit.com/apple.com"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Director of Product, Nexus",
    text: "Working with this studio was like stepping 5 years into the future. The automation workflows they implemented saved us hundreds of man-hours per month.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    logo: "https://logo.clearbit.com/tesla.com"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder, GreenSpace",
    text: "The visual rebranding exceeded all expectations. Our brand now feels cinematic, premium, and innovative. The results speak for themselves.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    logo: "https://logo.clearbit.com/google.com"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <PageWrapper>
      <Section className="pt-32 pb-0">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-mono uppercase tracking-[0.4em] text-xs mb-6"
            >
              Signal Feedback
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Trusted by <span className="text-gradient">Futurists</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/50 text-xl font-light mb-12"
            >
              Voices from the global businesses and visionaries who have partnered with Vireon.
            </motion.p>
        </div>
      </Section>

      <Section className="pb-40">
         <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden">
               <motion.div 
                  className="flex space-x-12"
                  animate={{ x: `-${current * 100}%` }}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
               >
                  {testimonials.map((item) => (
                    <div key={item.id} className="min-w-full flex flex-col items-center text-center">
                       <Quote className="text-primary/20 w-24 h-24 mb-12" />
                       <h2 className="text-3xl md:text-5xl font-display font-light italic mb-12 leading-relaxed">
                         "{item.text}"
                       </h2>
                       <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary mb-4 p-1">
                             <img src={item.avatar} alt={item.name} className="w-full h-full object-cover rounded-full" />
                          </div>
                          <h4 className="text-xl font-bold">{item.name}</h4>
                          <p className="text-white/40 uppercase tracking-widest text-xs font-mono">{item.role}</p>
                       </div>
                    </div>
                  ))}
               </motion.div>
            </div>

            <div className="flex justify-center space-x-4 mt-12">
               <button 
                  onClick={() => setCurrent((c) => (c > 0 ? c - 1 : testimonials.length - 1))}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"
               >
                  <ChevronLeft size={20} />
               </button>
               <div className="flex items-center space-x-2">
                  {testimonials.map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300", 
                        current === i ? "bg-primary w-8" : "bg-white/10"
                      )} 
                    />
                  ))}
               </div>
               <button 
                  onClick={() => setCurrent((c) => (c < testimonials.length - 1 ? c + 1 : 0))}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"
               >
                  <ChevronRight size={20} />
               </button>
            </div>
         </div>
      </Section>

      {/* Video Testimonials Placeholder */}
      <Section className="pb-40">
         <div className="bg-white/5 rounded-[4rem] p-12 md:p-24 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <PlayCircle size={200} />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Visual Proof</h2>
                  <p className="text-white/50 text-xl font-light mb-8 max-w-md">Our clients speak for our results in high-resolution cinematic video missions.</p>
                  <button className="flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform">
                     <span>WATCH MISSIONS</span>
                     <PlayCircle size={24} />
                  </button>
               </div>
               <div className="grid grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-square bg-black border border-white/5 rounded-3xl group relative overflow-hidden cursor-pointer">
                       <img 
                          src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=400`} 
                          className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity" 
                       />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <PlayCircle className="text-white/20 group-hover:text-primary transition-colors" size={48} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </Section>

      {/* Partners/Logos */}
      <Section className="pb-60">
         <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 grayscale opacity-30 hover:opacity-100 transition-opacity duration-1000">
            {["Google", "Tesla", "Apple", "SpaceX", "Meta", "NVIDIA"].map(p => (
              <span key={p} className="text-3xl font-display font-black tracking-tighter italic">{p}</span>
            ))}
         </div>
      </Section>
    </PageWrapper>
  );
}
