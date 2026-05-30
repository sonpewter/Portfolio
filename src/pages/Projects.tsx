import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, Filter, Search, Globe, Layout, Cpu, Palette, Info, X, Zap, Sparkles, Brain, MonitorPlay } from "lucide-react";
import Section from "@/src/components/ui/Section";
import GlassCard from "@/src/components/ui/GlassCard";
import PageWrapper from "@/src/components/layout/PageWrapper";
import { cn } from "@/src/lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  videoUrl?: string; // Showcase video
  desc: string;
  tech: string[];
  github: string;
  live: string;
  longDesc?: string;
  metrics?: string[];
  color?: string; // Theme color for ambient glow
}

const categories = ["All", "Web Development", "AI Automation", "Design", "Branding"];

const projects: Project[] = [
  {
    id: 1,
    title: "NeuroFlow AI Dashboard",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-circuit-board-transition-44415-large.mp4",
    desc: "A high-performance neural network visualization dashboard for enterprise AI systems.",
    tech: ["React", "D3.js", "Gemini API", "Tailwind"],
    github: "#",
    live: "#",
    color: "rgba(0, 242, 255, 0.5)",
    longDesc: "NeuroFlow provides real-time visualization of multi-layered neural networks, allowing data scientists to monitor weights, biases, and activation functions in live training environments.",
    metrics: ["99.9% Prediction Accuracy", "Sub-50ms Latency", "50k+ Real-time Nodes"]
  },
  {
    id: 2,
    title: "Vireon E-Commerce Core",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-shopping-online-on-a-smartphone-40502-large.mp4",
    desc: "A futuristic shopping experience with 3D product previews and instant checkout.",
    tech: ["Next.js", "Three.js", "Stripe", "Supabase"],
    github: "#",
    live: "#",
    color: "rgba(112, 0, 255, 0.5)",
    longDesc: "Vireon E-Commerce redefines digital retail with immersive 3D galleries. Customers can manipulate products in real-time before purchase.",
    metrics: ["32% Conversion Boost", "0.8s Load Speed", "Global CDN Nodes"]
  },
  {
    id: 3,
    title: "Vortex Branding System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-liquid-iridescent-gradient-background-23425-large.mp4",
    desc: "Complete visual identity for a Silicon Valley rocket startup, including 32 brand assets.",
    tech: ["Photoshop", "Illustrator", "After Effects"],
    github: "#",
    live: "#",
    color: "rgba(0, 255, 136, 0.5)",
    longDesc: "The Vortex branding project involved creating a visual language that felt both established and disruptive.",
    metrics: ["Award Winning Design", "32 Core Assets", "Global Visibility"]
  },
  {
    id: 4,
    title: "Project Preview Engine",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-laptop-34444-large.mp4",
    desc: "Cinematic project card system with real-time video transitions and progress cues.",
    tech: ["React", "Framer Motion", "Tailwind", "Vite"],
    github: "#",
    live: "#",
    color: "rgba(255, 0, 112, 0.5)",
    longDesc: "A high-end interface engine designed for award-winning portfolios. It leverages hardware-accelerated video rendering for smooth transitions.",
    metrics: ["60 FPS Playback", "Dynamic Glow", "Glassmorphic UI"]
  },
  {
    id: 5,
    title: "Kinetix Motion Studio",
    category: "Design",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1544-large.mp4",
    desc: "Advanced motion design suite for cinematic digital experiences.",
    tech: ["Three.js", "GSAP", "React-Three-Fiber", "Blender"],
    github: "#",
    live: "#",
    color: "rgba(255, 170, 0, 0.5)",
    longDesc: "Kinetix is a specialized framework for creating cinematic transitions and interaction models.",
    metrics: ["60 FPS Transitions", "80% Pipeline Efficiency", "Global Component Library"]
  }
];

function ProjectCard({ project, onOpen, onHover }: { project: Project; onOpen: (p: Project) => void; onHover: (p: Project | null) => void; key?: React.Key }) {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const video = videoRef.current;

    if (isHovered && video && !videoError) {
      playPromiseRef.current = video.play();
      
      interval = setInterval(() => {
        if (video) {
          const p = (video.currentTime / 10) * 100;
          setProgress(Math.min(p, 100));
          if (video.currentTime >= 10) {
            video.currentTime = 0;
          }
        }
      }, 50);
    } else if (video) {
      if (playPromiseRef.current !== null) {
        playPromiseRef.current
          .then(() => {
            video.pause();
            video.currentTime = 0;
          })
          .catch(() => {
            // Silence interruption errors
          });
      } else {
        video.pause();
        video.currentTime = 0;
      }
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, videoError]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(project);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(null);
      }}
      className="group relative cursor-pointer"
    >
      {/* Ambient Glow */}
      <div 
        className="absolute -inset-4 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: project.color }}
      />

      <div className="relative rounded-[2rem] overflow-hidden bg-black border border-white/5 group-hover:border-primary/50 transition-colors duration-500 shadow-2xl">
        {/* Media Container */}
        <div className="aspect-[4/3] relative overflow-hidden">
          {/* Static Image */}
          <img 
            src={project.image} 
            alt={project.title} 
            className={cn(
              "w-full h-full object-cover transition-all duration-700",
              isHovered ? "scale-110 blur-sm opacity-50" : "scale-100 blur-0 opacity-100"
            )}
          />

          {/* Video Preview Overlay */}
          <AnimatePresence>
            {isHovered && project.videoUrl && !videoError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10"
              >
                {!isVideoLoaded && (
                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md">
                      <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                   </div>
                )}
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  muted
                  playsInline
                  loop
                  onLoadedData={() => setIsVideoLoaded(true)}
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover"
                />
                
                {/* Video UI Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-primary font-bold tracking-[0.2em] uppercase">Cinematic Preview</span>
                    <span className="text-[10px] font-mono text-white/40">0:10</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category Tag */}
          <div className="absolute top-6 left-6 z-20">
            <div className="glass-effect px-4 py-1.5 rounded-full border-white/10 text-[10px] font-mono text-primary uppercase tracking-[0.2em]">
              {project.category}
            </div>
          </div>
          
          {/* Zoom In/Quick View Prompt */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
             <div className="w-16 h-16 rounded-full glass-effect flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500">
                <Zap size={24} className="fill-primary text-primary" />
             </div>
          </div>
        </div>

        {/* Info Area */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
             <h3 className="text-2xl font-display font-medium text-white group-hover:text-primary transition-colors">{project.title}</h3>
             <motion.button
               whileHover={{ scale: 1.1, rotate: 10 }}
               whileTap={{ scale: 0.9 }}
               onClick={(e) => {
                 e.stopPropagation();
                 onOpen(project);
               }}
               className="text-white/20 hover:text-white transition-colors"
             >
                <Info size={20} />
             </motion.button>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-2">
            {project.desc}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {project.tech.slice(0, 3).map((t, i) => (
                <div key={t} className="w-8 h-8 rounded-full glass-effect border-white/10 flex items-center justify-center text-[8px] font-mono text-white/50 bg-black" style={{ zIndex: 10 - i }}>
                   {t.charAt(0)}
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <a href={project.github} className="text-white/30 hover:text-white transition-colors"><Github size={18} /></a>
              <a href={project.live} className="flex items-center space-x-2 bg-white/5 hover:bg-white text-white/50 hover:text-black px-4 py-2 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all">
                <span>View Live</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lighting effect that follows mouse */}
      <ProjectCardLight isHovered={isHovered} color={project.color} />
    </motion.div>
  );
}

function ProjectCardLight({ isHovered, color }: { isHovered: boolean, color?: string }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={ref}
      className={cn(
        "absolute inset-0 pointer-events-none transition-opacity duration-500",
        isHovered ? "opacity-100" : "opacity-0"
      )}
    >
      <div 
        className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 blur-[80px] pointer-events-none rounded-full"
        style={{ 
          left: mousePos.x, 
          top: mousePos.y, 
          background: `radial-gradient(circle, ${color || 'rgba(0, 242, 255, 0.2)'} 0%, transparent 70%)` 
        }}
      />
    </div>
  );
}

// ... Rest of the page code (AISummary, Projects component) ...


function AISummary({ project }: { project: Project }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateSummary = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/project-summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: project.title,
          category: project.category,
          desc: project.desc,
          longDesc: project.longDesc,
          tech: project.tech
        })
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();
      setSummary(data.text || "Analysis complete.");
    } catch (err) {
      console.error(err);
      setError("Critical AI Failure: Intelligence link lost.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateSummary();
  }, [project.id]);

  return (
    <div className="mt-8 p-6 bg-primary/5 rounded-3xl border border-primary/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Brain size={40} className="text-primary" />
      </div>
      <h4 className="flex items-center text-primary text-xs font-mono uppercase tracking-[0.3em] mb-4">
        <Sparkles size={14} className="mr-2 animate-pulse" />
        AI Insight Generator
      </h4>
      {loading ? (
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          <span className="text-xs font-mono text-white/30 uppercase tracking-widest pl-2">Synthesizing...</span>
        </div>
      ) : error ? (
        <p className="text-red-400/80 text-xs font-mono">{error}</p>
      ) : (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/70 text-sm leading-relaxed italic"
        >
          "{summary}"
        </motion.p>
      )}
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageWrapper>
      {/* Cinematic Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              key={hoveredProject.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vh] rounded-full blur-[200px]"
              style={{ 
                background: `radial-gradient(circle, ${hoveredProject.color?.replace('0.5', '0.08')} 0%, transparent 60%)` 
              }}
            />
          )}
        </AnimatePresence>
      </div>

      <Section className="pt-32 pb-0 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Built to <span className="text-gradient">Endure</span></h1>
            <p className="text-white/50 text-xl font-light">A selection of high-end digital products, automations, and creative systems launched globally.</p>
          </div>
          
          <div className="w-full md:w-auto relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search experiments..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 w-full md:w-80 focus:outline-none focus:border-primary/50 transition-all text-sm"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-300",
                activeCategory === cat ? "bg-primary text-black" : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </Section>

      <Section className="pb-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onOpen={(p) => setSelectedProject(p)} 
                onHover={(p) => setHoveredProject(p)}
              />
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-40 border-2 border-dashed border-white/5 rounded-[3rem]">
            <Info size={48} className="mx-auto text-white/10 mb-6" />
            <h3 className="text-2xl font-display font-bold text-white/30 italic">No experiments found in this dimension.</h3>
          </div>
        )}
      </Section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl max-h-full overflow-hidden rounded-[3rem] bg-black border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] grid grid-cols-1 lg:grid-cols-2"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-[110] w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white text-black transition-all"
              >
                <X size={24} />
              </button>

              {/* Image Side */}
              <div className="relative aspect-video lg:aspect-auto h-full overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden" />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 lg:p-16 overflow-y-auto max-h-[80vh] lg:max-h-none scrollbar-hide">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono rounded-full uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                  {selectedProject.title}
                </h2>

                <p className="text-white/60 text-lg font-light leading-relaxed mb-10">
                  {selectedProject.longDesc || selectedProject.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  {selectedProject.metrics?.map((metric, i) => (
                    <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
                      <p className="text-[10px] font-mono text-white/30 uppercase tracking-tighter mb-1">Impact Metric</p>
                      <p className="text-sm font-bold text-white">{metric}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-10">
                   <h4 className="text-xs font-mono uppercase tracking-[0.4em] text-white/30">Technologies Used</h4>
                   <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white/50">
                          {t}
                        </span>
                      ))}
                   </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={selectedProject.live} 
                    className="flex-1 min-w-[200px] bg-primary text-black flex items-center justify-center space-x-3 py-5 rounded-2xl font-bold hover:scale-[1.02] transition-all"
                  >
                    <span>LAUNCH PORTAL</span>
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={selectedProject.github} 
                    className="flex-1 min-w-[200px] border border-white/10 flex items-center justify-center space-x-3 py-5 rounded-2xl font-bold hover:bg-white/5 transition-all text-white"
                  >
                    <span>SOURCE CODE</span>
                    <Github size={20} />
                  </a>
                </div>

                <AISummary project={selectedProject} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
