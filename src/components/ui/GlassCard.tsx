import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -10, scale: 1.02 } : {}}
      className={cn(
        "glass-effect p-8 rounded-3xl transition-shadow duration-300",
        hoverEffect && "hover:shadow-[0_20px_50px_rgba(0,242,255,0.1)] hover:border-primary/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
