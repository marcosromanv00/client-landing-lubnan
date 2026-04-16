"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  index: number;
  total: number;
  backgroundColor?: string;
}

// Minimal haptic pause (in pixels) for that "luxury weight" feel
const STOPPER_BUFFER = 80; 

export default function SectionWrapper({ children, index, total, backgroundColor = "bg-deep-obsidian" }: SectionWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  const isLast = index === total - 1;

  // Measure content height and handle hydration
  useEffect(() => {
    // Use requestAnimationFrame to avoid "cascading renders" by moving the state update
    // to the next frame. This satisfies strict lint rules and improves performance.
    const frameId = requestAnimationFrame(() => {
      setHasMounted(true);
      if (contentRef.current) {
        setContentHeight(contentRef.current.getBoundingClientRect().height);
      }
    });

    if (!contentRef.current) return () => cancelAnimationFrame(frameId);

    const updateHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.getBoundingClientRect().height;
        setContentHeight(height);
      }
    };

    const timeoutId = setTimeout(updateHeight, 50);
    const observer = new ResizeObserver(updateHeight);
    observer.observe(contentRef.current);
    window.addEventListener('resize', updateHeight);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const vh = typeof window !== 'undefined' ? window.innerHeight : 0;
  
  // Total distance = Content Travel + Buffer
  const totalInternalScroll = Math.max(0, contentHeight - vh);
  // We add 'vh' to the container height so it stays sticky while the NEXT one (pulled up by margin) covers it
  const totalContainerHeight = contentHeight + STOPPER_BUFFER + (isLast ? 0 : vh);

  // Sync translation to only happen while content is scrolling
  const contentProgressEnd = totalInternalScroll / totalContainerHeight;

  const y = useTransform(
    scrollYProgress,
    [0, Math.max(0.01, contentProgressEnd)],
    [0, -totalInternalScroll]
  );

  // Very high stiffness for instant response on trackpads, but keeps the premium "weighted" feel
  const smoothedY = useSpring(y, { stiffness: 1000, damping: 100 });

  // Darken slightly as it gets covered
  // Overlap phase starts after content + buffer
  const overlapStart = (totalInternalScroll + STOPPER_BUFFER) / totalContainerHeight;
  const darken = useTransform(
    scrollYProgress,
    [Math.max(0.02, overlapStart), 1],
    ["rgba(0,0,0,0)", isLast ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.5)"]
  );

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full ${index > 0 ? "-mt-[100vh]" : ""}`}
      style={{ 
        zIndex: index + 1,
        // Height = Content + Buffer + Viewport (to accommodate next section's entry)
        height: hasMounted ? `${totalContainerHeight}px` : "200vh",
        visibility: hasMounted ? "visible" : "hidden"
      }}
    >
      <div className="sticky top-0 w-full h-screen">
        <div className={`relative h-full w-full ${index > 0 ? 'rounded-t-[4rem] shadow-[0_-15px_40px_-5px_rgba(0,0,0,0.3)]' : ''} ${backgroundColor} overflow-hidden content-wrapper`}>
          {/* Overlay to darken when covered */}
          <motion.div 
            style={{ backgroundColor: darken }}
            className="absolute inset-0 z-[60] pointer-events-none"
          />
          <motion.div 
            ref={contentRef}
            style={{ y: smoothedY }}
            className="w-full h-fit flex flex-col"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
