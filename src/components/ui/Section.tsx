import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export default function Section({ children, className, id, fullWidth = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden",
        className
      )}
    >
      <div className={cn(
        "relative z-10",
        fullWidth ? "w-full" : "max-w-7xl mx-auto"
      )}>
        {children}
      </div>
    </section>
  );
}
