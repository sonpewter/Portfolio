import { Link } from "react-router-dom";
import { Github, Twitter, Instagram, Mail, Phone, MapPin, Brain } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { Icon: Github, url: "https://github.com/vireon121-glitch" },
    { Icon: Twitter, url: "https://x.com/vireon1r0b" },
    { Icon: Instagram, url: "https://www.instagram.com/vireon485/" }
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center space-x-2 mb-6 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
              <Brain className="text-black w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter">VIREON</span>
          </Link>
          <p className="text-white/50 max-w-md text-lg leading-relaxed mb-8">
            Building digital experiences powered by creativity & AI. Helping businesses transition into the future with intelligent systems and stunning visuals.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
          <ul className="space-y-4 text-white/70">
            {["Home", "About", "Services", "Projects", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`} className="hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
          <ul className="space-y-4 text-white/70">
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-primary" />
              <span>vireon121@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-white/30 text-sm">
        <p>© 2026 VIREON PORTFOLIO. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}
