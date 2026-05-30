import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/ui/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import CaseStudies from "./pages/CaseStudies";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import GenerativeUIArticle from "./pages/GenerativeUIArticle";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import Chatbot from "./components/ai/Chatbot";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/generative-ui" element={<GenerativeUIArticle />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-primary selection:text-black">
        <CustomCursor />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
