"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Background Image with Zoom Animation */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/assets/Foto-2-1-1-e1564518936394.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>
      
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          variants={staggerContainer(0.2, 0.5)}
          initial="hidden"
          animate="show"
        >
          <motion.span 
            variants={textVariant(0.1)}
            className="text-brand-red text-all-caps text-xs font-bold tracking-[0.4em] mb-4 block"
          >
            Bienvenidos a la Experiencia
          </motion.span>
          
          <motion.h1 
            variants={textVariant(0.2)}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 tracking-tight leading-none"
          >
            Sabor<br />
            <span className="text-brand-red italic">Ancestral</span>
          </motion.h1>

          <motion.p 
            variants={fadeIn("up", 0.4)}
            className="text-xl md:text-2xl font-display font-medium mb-10 max-w-2xl mx-auto opacity-90 italic text-limestone"
          >
            "Donde cada platillo cuenta una historia de mil años."
          </motion.p>

          <motion.p 
            variants={fadeIn("up", 0.5)}
            className="text-sm md:text-base font-body max-w-xl mx-auto mb-12 opacity-70 leading-relaxed tracking-[0.1em] uppercase"
          >
            Alta cocina libanesa en el corazón de San José.
          </motion.p>
          
          <motion.div 
            variants={fadeIn("up", 0.6)}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-red hover:bg-white hover:text-brand-red text-white px-12 py-5 rounded-full text-all-caps text-sm font-bold transition-all shadow-2xl"
            >
              Reservar una Mesa
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 hover:border-brand-red hover:bg-brand-red/10 text-white px-12 py-5 rounded-full text-all-caps text-sm font-bold transition-all backdrop-blur-md"
            >
              Explorar Menú
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent" />
          <span className="text-[10px] text-all-caps mt-2 opacity-50 tracking-widest font-bold">Explorar</span>
        </motion.div>
      </div>
    </section>
  );
}
