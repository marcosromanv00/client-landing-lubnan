"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  index: number;
  total: number;
  backgroundColor?: string;
}

export default function SectionWrapper({ children, index, backgroundColor = "bg-deep-obsidian" }: SectionWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: exitProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });

  // Keep underlying section solid for a seamless "stack" feel
  const scale = 1;
  const opacity = 1;
  
  // Darken slightly more for depth when covered
  const darken = useTransform(exitProgress, [0, 1], ["rgba(0,0,0,0)", "rgba(0,0,0,0.3)"]);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-[200vh] ${index > 0 ? "-mt-[100vh]" : ""}`}
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          scale,
          opacity,
        }}
        className="sticky top-0 w-full h-screen bg-transparent"
      >
        <div className={`relative h-full w-full ${index > 0 ? 'rounded-t-[4rem] shadow-[0_-50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden' : ''} ${backgroundColor} content-wrapper`}>
          {/* Overlay to darken when covered */}
          <motion.div 
            style={{ backgroundColor: darken }}
            className="absolute inset-0 z-[60] pointer-events-none"
          />
          <div className="h-full w-full overflow-y-auto overflow-x-hidden md:overflow-visible custom-scrollbar">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
