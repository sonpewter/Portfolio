import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Sparkles, Cpu, Layers, AlertCircle, RefreshCw } from "lucide-react";
import Section from "@/src/components/ui/Section";
import GlassCard from "@/src/components/ui/GlassCard";
import PageWrapper from "@/src/components/layout/PageWrapper";

export default function GenerativeUIArticle() {
  return (
    <PageWrapper>
      {/* Article Hero Section */}
      <div className="relative min-h-[60vh] flex items-end pt-32 pb-16 overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=2000"
            alt="Futuristic generative user interface abstract artwork"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,242,255,0.15),transparent_50%)]" />
        </div>

        <Section className="relative z-10 w-full">
          <div className="max-w-4xl">
            {/* Back to Blog Button */}
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-white/50 hover:text-primary transition-colors uppercase tracking-[0.3em] text-xs font-mono mb-8 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform" />
              <span>Back to Insights</span>
            </Link>

            {/* Tags / Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-primary text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                Featured Article
              </span>
              <span className="text-accent text-[10px] font-mono tracking-widest uppercase border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
                DOM Synthesis
              </span>
              <span className="text-white/40 text-xs font-mono flex items-center">
                <Clock size={12} className="mr-1.5 text-primary" /> 12 MIN READ
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4.5xl md:text-7xl font-display font-bold leading-tight mb-8">
              Beyond Intelligence: <br />
              <span className="text-gradient">The New Era of Generative UI</span>
            </h1>

            {/* Author details */}
            <div className="flex items-center space-x-4 border-t border-white/10 pt-8 mt-4">
              <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center font-mono text-primary font-bold">
                VA
              </div>
              <div>
                <p className="text-white font-medium text-sm">Vireon Intelligence Agent</p>
                <p className="text-white/40 text-xs font-mono uppercase tracking-wider">SYSTEM WRITER // PUBLISHED MAY 30, 2026</p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Article Body Section */}
      <Section className="py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Article Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Introduction paragraph with unique styling */}
            <div className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed italic border-l-2 border-primary/50 pl-6 py-2">
              For the past decade, our interaction with artificial intelligence has been confined to a "box." 
              Whether it’s a search bar, a chatbot bubble, or a prompt field, the interface has remained static 
              while the intelligence behind it grew exponentially. We have reached a ceiling where the bottleneck 
              is no longer the AI’s reasoning capability, but the rigid UI/UX through which we access it.
            </div>

            {/* Real transition section block */}
            <p className="text-lg text-white/70 font-serif leading-relaxed">
              We are now entering the era of Generative UI (<span className="text-primary font-mono font-sans text-base">GenUI</span>)—a paradigm shift where interfaces are no longer pre-baked by developers, but assembled in real-time by models capable of manipulating the browser DOM directly.
            </p>

            {/* Headline 1 */}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white pt-6">
              From Chatbots to Self-Evolving Experiences
            </h2>
            
            <p className="text-lg text-white/70 font-serif leading-relaxed">
              Traditional interfaces are built on "if-then" logic. Designers anticipate user needs and create fixed paths. However, the complexity of modern tasks often outpaces these static designs.
            </p>
            
            <p className="text-lg text-white/70 font-serif leading-relaxed">
              Generative UI moves away from the "one size fits all" application. Instead of you navigating a menu to find a specific financial tool, the AI understands your intent and generates the tool itself. If you ask an AI to "analyze my spending and help me save for a house," the interface shouldn't just reply with text; it should render a custom, interactive savings calculator, a real-time data visualization of your accounts, and a bespoke dashboard tailored specifically to that moment.
            </p>

            {/* Headline 2 */}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white pt-6">
              Moving Into the DOM
            </h2>

            <p className="text-lg text-white/70 font-serif leading-relaxed">
              The technical breakthrough lies in generative models moving beyond text generation and into structure generation. By interacting directly with the Document Object Model (DOM), AI can inject, modify, and style elements on the fly.
            </p>

            {/* Callout highlights inside the DOM */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <GlassCard className="p-6 border-primary/20 bg-primary/5 shadow-[0_0_15px_rgba(0,242,255,0.05)] hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <RefreshCw className="text-primary" size={20} />
                </div>
                <h4 className="font-display font-bold text-base mb-2 text-white">Contextual Fluidity</h4>
                <p className="text-white/50 text-xs font-serif leading-relaxed">
                  The UI changes based on the user’s skill level, emotional state, or the specific complexity of the query on the fly.
                </p>
              </GlassCard>

              <GlassCard className="p-6 border-secondary/20 bg-secondary/5 shadow-[0_0_15px_rgba(112,0,255,0.05)] hover:border-secondary/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <Cpu className="text-secondary" size={20} />
                </div>
                <h4 className="font-display font-bold text-base mb-2 text-white">Just-In-Time Components</h4>
                <p className="text-white/50 text-xs font-serif leading-relaxed">
                  Components are fetched and styled dynamically. The model writes the react setup in real-time to solve custom edge cases.
                </p>
              </GlassCard>

              <GlassCard className="p-6 border-accent/20 bg-accent/5 shadow-[0_0_15px_rgba(0,255,136,0.05)] hover:border-accent/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <Layers className="text-accent" size={20} />
                </div>
                <h4 className="font-display font-bold text-base mb-2 text-white">Accessibility by Default</h4>
                <p className="text-white/50 text-xs font-serif leading-relaxed">
                  GenUI can automatically restructure layout options to meet precise physical accessibility needs without manual code.
                </p>
              </GlassCard>
            </div>

            <p className="text-lg text-white/70 font-serif leading-relaxed">
              This isn't just about "dark mode" or "light mode." This is about <strong className="text-primary font-mono font-sans font-medium text-base">Intent-Based Rendering</strong>. The browser becomes a canvas where the AI acts as both the tech architect and the master builder. This shifts the role of the human designer from creating static assets to defining design tokens, constraints, and strict brand guardrails within which the machine can generate layouts.
            </p>

            {/* Headline 3 */}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white pt-6">
              The Death of the "Dead End"
            </h2>

            <p className="text-lg text-white/70 font-serif leading-relaxed">
              We’ve all experienced the frustration of an app that doesn't quite do what we want. In the era of Generative UI, there are no dead ends. If a feature doesn't exist, the system attempts to synthesize it on demand.
            </p>

            {/* Rich blockquote quote style */}
            <div className="my-10 p-8 glass-effect rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <p className="text-2xl font-serif italic text-white/80 leading-relaxed mb-4 relative z-10">
                "The browser becomes an elastic, living organism. Static design prototypes are replaced with brand parameters and logical rules that models follow to construct experiences that live for a specific moment and evaporate once their goal is met."
              </p>
              <div className="text-xs font-mono tracking-widest text-primary relative z-10">
                — VIREON LABS // INTERFACE STRATEGY GROUP
              </div>
            </div>

            {/* Headline 4 */}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white pt-6">
              The Challenges Ahead
            </h2>

            <p className="text-lg text-white/70 font-serif leading-relaxed">
              While the potential is limitless, the move to self-evolving user experiences brings significant hurdles that digital designers and development teams must solve before broad adoption:
            </p>

            {/* Bento block highlights for challenges */}
            <div className="space-y-4">
              <div className="flex bg-white/5 hover:bg-white/10 transition-colors p-6 rounded-2xl border border-white/10 items-start space-x-4">
                <AlertCircle className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">Brand Consistency</h4>
                  <p className="text-white/60 text-sm font-serif">How do we maintain atomic brand guidelines, color palettes, and typography consistency when the visual interface is fluidly morphing?</p>
                </div>
              </div>
              <div className="flex bg-white/5 hover:bg-white/10 transition-colors p-6 rounded-2xl border border-white/10 items-start space-x-4">
                <AlertCircle className="text-secondary mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">Latency & DOM Injection Performance</h4>
                  <p className="text-white/60 text-sm font-serif">Compiling complex modern templates, styling variables, and layout nodes in real-time poses significant low-latency rendering obstacles.</p>
                </div>
              </div>
              <div className="flex bg-white/5 hover:bg-white/10 transition-colors p-6 rounded-2xl border border-white/10 items-start space-x-4">
                <AlertCircle className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">Visual Safety and Guardrails</h4>
                  <p className="text-white/60 text-sm font-serif">Ensuring a self-evolving UI doesn't create deceptive interfaces (dark design patterns), rendering breaks, or unreadable structural layouts.</p>
                </div>
              </div>
            </div>

            {/* Headline 5: Conclusion */}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white pt-6">
              Conclusion
            </h2>

            <p className="text-lg text-white/70 font-serif leading-relaxed">
              The shift to Generative UI represents the final step in the democratization of technology. We are moving from a world where humans must learn the language of machines (menus, icons, and hierarchies) to a world where machines interpret the needs of humans and build the world around them in real-time.
            </p>

            <p className="text-xl text-primary font-display font-bold tracking-tight leading-relaxed">
              The interface is no longer a bridge between the user and the intelligence—the interface is the intelligence.
            </p>

          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            {/* Quick Stats / Info Widget */}
            <GlassCard className="p-8 border-white/10">
              <h3 className="text-xl font-display font-bold text-white mb-6 border-b border-white/10 pb-4">
                Article Metadata
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider">Date Published</p>
                    <p className="text-white text-sm font-medium">May 30, 2026</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider">Primary Author</p>
                    <p className="text-white text-sm font-medium">Vireon Intelligence Agent</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider">Reading Level</p>
                    <p className="text-white text-sm font-medium">Advanced Tech / Strategy</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Newsletter Subscription style widget */}
            <GlassCard className="p-8 border-white/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
               <Sparkles className="text-secondary mb-4" size={24} />
               <h3 className="text-xl font-display font-bold text-white mb-3">
                  Stay Informed
               </h3>
               <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  Join our tactical network for the latest briefings on digital design synthesis, automation systems, and React design.
               </p>
               <input 
                 type="email" 
                 placeholder="Enter intelligence node email..." 
                 className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-secondary text-xs mb-3 transition-colors"
               />
               <button className="w-full py-3 bg-white text-black font-bold uppercase text-[10px] tracking-widest rounded-xl hover:scale-[1.02] active:scale-95 transition-transform">
                  Establish Link
               </button>
            </GlassCard>
            
            {/* Quick Share options */}
            <div className="flex justify-between items-center px-4">
              <span className="text-white/30 text-xs font-mono uppercase tracking-widest">Share Transmission:</span>
              <div className="flex space-x-4">
                <a href="https://github.com/vireon121-glitch" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors text-xs font-mono">
                  [ GitHub ]
                </a>
                <a href="https://x.com/vireon1r0b" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-secondary transition-colors text-xs font-mono">
                  [ X ]
                </a>
              </div>
            </div>

          </div>

        </div>
      </Section>
    </PageWrapper>
  );
}
