import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Smartphone, Globe, Palette, Code, Brain } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Vibe", path: "/testimonials" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Brain className="text-black w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter">VIREON</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            to="/contact"
            className="bg-primary text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            HIRE ME
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 lg:hidden flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-xl font-display font-medium tracking-tight",
                  location.pathname === link.path ? "text-primary" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-black px-6 py-3 rounded-xl font-bold text-center"
            >
              HIRE ME
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
