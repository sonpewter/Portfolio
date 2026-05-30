import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import Section from "@/src/components/ui/Section";
import GlassCard from "@/src/components/ui/GlassCard";
import PageWrapper from "@/src/components/layout/PageWrapper";
import { cn } from "@/src/lib/utils";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI-Driven Web Architectures",
    excerpt: "Exploring how LLMs are transforming the standard React development workflow and what it means for creators.",
    category: "AI",
    author: "Vireon Agent",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1676299081847-c0326a0333d5?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Mastering Glassmorphism in Tailwind CSS",
    excerpt: "A deep dive into creating cinematic UI effects using backdrop filters and custom glass theme variables.",
    category: "Design",
    author: "Vireon Agent",
    date: "May 10, 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Building Scalable Automation Workflows",
    excerpt: "How I used n8n and Google Gemini to automate my client onboarding and project management systems.",
    category: "Automation",
    author: "Vireon Agent",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1518433278988-3486c4710f63?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Why Minimal Luxury is the Design of 2026",
    excerpt: "Analyzing the shift from maximalist 'pop' aesthetics to high-end, dark, cinematic digital experiences.",
    category: "Business",
    author: "Vireon Agent",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
  }
];

export default function Blog() {
  return (
    <PageWrapper>
      <Section className="pt-32 pb-12 border-b border-white/10">
        <div className="max-w-4xl">
           <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-mono uppercase tracking-[0.4em] text-xs mb-6"
            >
              Knowledge Base
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Digital <span className="text-gradient">Insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/50 text-xl font-light mb-0"
            >
              Deep dives into AI, high-end web development, and the future of digital design.
            </motion.p>
        </div>
      </Section>

      {/* Featured Post */}
      <Section className="py-20">
         <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
         >
           <Link to="/blog/generative-ui" className="group relative block aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=2000" 
                alt="Featured" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-12 md:p-20 flex flex-col justify-end">
                 <div className="flex items-center space-x-4 mb-4">
                   <span className="bg-primary text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">Featured</span>
                   <span className="text-white/50 text-xs font-mono tracking-widest uppercase">12 MIN READ</span>
                 </div>
                 <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 max-w-3xl leading-tight">Beyond Intelligence: The New Era of Generative UI</h2>
                 <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 font-light line-clamp-2">
                   How generative models are moving beyond chat interfaces and directly into the browser DOM to create self-evolving user experiences.
                 </p>
                 <div className="flex items-center space-x-3 text-primary font-bold uppercase tracking-[0.3em] group">
                    <span>READ ARTICLE</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                 </div>
              </div>
           </Link>
         </motion.div>
      </Section>

      <Section className="pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-0 border-none bg-transparent overflow-hidden h-full flex flex-col">
                 <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-8 border border-white/10 relative group">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-primary uppercase tracking-widest">{post.category}</div>
                 </div>
                 
                 <div className="px-2">
                    <div className="flex items-center space-x-6 text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">
                      <span className="flex items-center"><Calendar size={12} className="mr-2" /> {post.date}</span>
                      <span className="flex items-center"><User size={12} className="mr-2" /> {post.author}</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-4 leading-tight group-hover:text-primary transition-colors cursor-pointer">{post.title}</h3>
                    <p className="text-white/50 mb-8 font-light line-clamp-3 italic">"{post.excerpt}"</p>
                    <button className="mt-auto flex items-center space-x-2 text-white/60 hover:text-white transition-colors group">
                       <span className="text-xs font-bold uppercase tracking-widest">Open Knowledge</span>
                       <BookOpen size={14} className="group-hover:translate-y-[-2px] transition-transform" />
                    </button>
                 </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
           <button className="px-10 py-4 border border-white/10 rounded-full text-white/50 hover:text-white hover:border-white transition-all text-xs font-bold uppercase tracking-[0.5em]">
              Load Archived Entries
           </button>
        </div>
      </Section>
    </PageWrapper>
  );
}
