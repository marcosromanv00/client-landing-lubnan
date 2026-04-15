"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

export default function Ambiance() {
  return (
    <section className="py-24 bg-obsidian text-white overflow-hidden">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container-custom"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
          >
            <span className="text-brand-red text-all-caps text-xs font-bold tracking-[0.2em] mb-4 block">
              Nuestra Casa
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Un Refugio de Elegancia y Tradición
            </h2>
            <p className="text-gray-400 font-body mb-8 leading-relaxed">
              En Lubnan, no solo servimos comida; ofrecemos un portal hacia la rica cultura del Líbano. Nuestro espacio ha sido diseñado para evocar la sofisticación de Beirut, con detalles que capturan la luz y el alma del Mediterráneo.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <span className="font-display font-bold">01</span>
                </div>
                <p className="font-body text-sm font-semibold italic">Ambiente íntimo y acogedor</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <span className="font-display font-bold">02</span>
                </div>
                <p className="font-body text-sm font-semibold italic">Arquitectura inspirada en el Medio Oriente</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <span className="font-display font-bold">03</span>
                </div>
                <p className="font-body text-sm font-semibold italic">Servicio de clase mundial</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-8 border-white/5">
              <img 
                src="/assets/the-corner.jpg" 
                alt="Ambiance Lubnan" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              variants={fadeIn("up", 0.6)}
              className="absolute -bottom-8 -left-8 w-64 aspect-square rounded-2xl overflow-hidden border-8 border-obsidian hidden md:block"
            >
              <img 
                src="/assets/brazos-abiertos.jpg" 
                alt="Welcome Lubnan" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
