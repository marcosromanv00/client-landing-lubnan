"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Ambiance() {
  return (
    <section className="min-h-screen py-32 bg-transparent text-ivory overflow-hidden relative flex items-center">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container-custom relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
          >
            <span className="text-golden-hummus text-all-caps text-xs font-bold tracking-[0.4em] mb-6 block">
              Nuestra Casa
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-medium mb-10 leading-[1.1]">
              Un Refugio de <br />
              <span className="italic font-light text-golden-hummus">Elegancia y Tradición</span>
            </h2>
            <p className="text-ivory/60 font-body mb-12 leading-relaxed text-lg max-w-xl">
              En Lubnan, cada rincón susurra historias de Beirut. Hemos esculpido un espacio donde la sofisticación mediterránea se funde con la hospitalidad milenaria del Líbano.
            </p>
            
            <div className="grid grid-cols-1 gap-10">
              {[
                { num: "01", title: "Ambiente Íntimo", desc: "Diseñado para los momentos que merecen ser recordados." },
                { num: "02", title: "Arquitectura Viva", desc: "Inspirada en las residencias nobles del Monte Líbano." },
                { num: "03", title: "Servicio Sublime", desc: "Atención personalizada con el estándar del viejo mundo." }
              ].map((item, idx) => (
                <motion.div 
                  key={item.num}
                  variants={fadeIn("up", 0.4 + idx * 0.1)}
                  className="group flex gap-8 items-start"
                >
                  <span className="text-4xl font-display font-light text-golden-hummus/30 group-hover:text-golden-hummus transition-colors duration-500">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-xl font-display font-medium mb-2 tracking-wide uppercase">
                      {item.title}
                    </h4>
                    <p className="text-ivory/40 text-sm font-body leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-ivory/10 group">
              <Image 
                src="/assets/the-corner.jpg" 
                alt="Ambiance Lubnan" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-deep-obsidian/20 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            
            <motion.div 
              variants={fadeIn("up", 0.6)}
              whileHover={{ y: -20 }}
              className="absolute -bottom-12 -left-12 w-72 aspect-square rounded-[2rem] overflow-hidden border-8 border-deep-obsidian hidden xl:block shadow-2xl group"
            >
              <Image 
                src="/assets/brazos-abiertos.jpg" 
                alt="Welcome Lubnan" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="288px"
              />
            </motion.div>

            {/* Decorative Gold Frame Piece */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-golden-hummus/30 pointer-events-none" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
