"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-deep-obsidian">
      {/* Immersive Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/assets/Foto-2-1-1-e1564518936394.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-deep-obsidian/70 via-deep-obsidian/60 to-deep-obsidian" />
        </motion.div>
      </motion.div>
      
      <div className="container-custom relative z-10 text-white h-full flex flex-col justify-end items-center text-center pb-0">
        <motion.div
          variants={staggerContainer(0.2, 0.8)}
          initial="hidden"
          animate="show"
          style={{ opacity }}
          className="flex flex-col items-center"
        >
          <motion.span
            variants={fadeIn("up", 0.1)}
            className="text-golden-hummus text-all-caps text-xs md:text-sm font-bold tracking-[0.4em] mb-6 block"
          >
            Bienvenido a la Excelencia
          </motion.span>
          
          <motion.h1 
            variants={textVariant(0.2)}
            className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold mb-4 tracking-tighter leading-[0.85] uppercase drop-shadow-2xl"
          >
            Lubnan
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.4)}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-golden-hummus/50" />
            <h2 className="text-xl md:text-3xl font-display font-light italic tracking-wide text-ivory drop-shadow-md">
              Alta gastronomía libanesa
            </h2>
            <div className="h-[1px] w-12 bg-golden-hummus/50" />
          </motion.div>

          <motion.p 
            variants={fadeIn("up", 0.6)}
            className="text-sm md:text-lg font-body max-w-xl mx-auto mb-12 text-ivory leading-relaxed font-light tracking-wide drop-shadow-sm"
          >
            Una odisea sensorial donde la tradición milenaria se encuentra con la sofistización contemporánea.
          </motion.p>
          
          <motion.div 
            variants={fadeIn("up", 0.8)}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-32"
          >
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#8c1919" }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-red text-ivory px-14 py-5 rounded-full text-all-caps text-xs font-bold transition-all shadow-2xl flex items-center gap-4 group"
            >
              <span className="w-1.5 h-1.5 bg-ivory rounded-full animate-pulse" />
              Reservar Mesa
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, borderColor: "#D4AF37", color: "#D4AF37" }}
              whileTap={{ scale: 0.98 }}
              className="border border-ivory/20 text-ivory px-14 py-5 rounded-full text-all-caps text-xs font-bold transition-all backdrop-blur-sm"
            >
              Ver Carta
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] text-all-caps text-ivory/40 tracking-[0.3em] font-bold">
            Explorar
          </span>
          <div className="w-[1px] h-12 bg-linear-to-b from-golden-hummus/0 via-golden-hummus/50 to-golden-hummus/0" />
        </motion.div>
      </div>
    </section>
  );
}
