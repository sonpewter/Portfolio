import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, User, Sparkles, Brain } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Analyzing portal... Connection established. I am Vireon-X, your digital guide. How can I assist with your mission today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMsg })
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();
      const botText = data.text || "Connection lost. Please re-initialize.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Protocol Error: Unable to bridge response." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full shadow-[0_0_30px_rgba(0,242,255,0.4)] flex items-center justify-center z-50 overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
        {isOpen ? <X className="text-black relative z-10" /> : <Brain className="text-black relative z-10 animate-pulse" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.8, x: 50 }}
            className="fixed bottom-28 right-8 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] glass-effect rounded-[2.5rem] flex flex-col z-[100] border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Bot className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-tight text-white">VIREON-X INTELLIGENCE</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Protocol Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "flex items-start space-x-3",
                    msg.role === 'user' ? "flex-row-reverse space-x-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    msg.role === 'user' ? "bg-secondary/20 text-secondary" : "bg-primary/20 text-primary"
                  )}>
                    {msg.role === 'user' ? <User size={16} /> : <Sparkles size={16} />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed",
                    msg.role === 'user' ? "bg-white/10 text-white rounded-tr-none" : "bg-primary/10 text-white border border-primary/20 rounded-tl-none font-light"
                  )}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex items-center space-x-2 text-white/30 text-xs px-12">
                   <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce" />
                   </div>
                   <span className="font-mono uppercase tracking-widest">Generating output...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-white/5 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Vireon-X anything..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:border-primary/50 text-sm transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-transform disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[9px] text-center text-white/20 mt-4 uppercase tracking-[0.2em]">Secured by Neural Link Protocol</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
