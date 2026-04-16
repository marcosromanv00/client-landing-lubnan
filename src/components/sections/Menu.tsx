"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

export default function Menu() {
  const dishes = [
    {
      name: "Mezze Platter",
      desc: "Una sinfonía de texturas: Hummus sedoso, mutabal ahumado, falafel artesanal y la frescura del Líbano en cada bocado.",
      price: "₡12,000",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop",
      size: "large"
    },
    {
      name: "Kibbeh Nayyeh",
      desc: "La joya de la corona: Carne premium finamente seleccionada, trigo burgol y un bouquet de especias secretas.",
      price: "₡14,500",
      image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=800&auto=format&fit=crop",
      size: "small"
    },
    {
      name: "Shawarma Royal",
      desc: "Láminas de cordero marinado durante 48 horas, servido con la esencia del ajo y vegetales de nuestra huerta.",
      price: "₡16,900",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800&auto=format&fit=crop",
      size: "small"
    },
    {
      name: "Baklava de Bekaa",
      desc: "Delicadas láminas de hojaldre hechas a mano, pistachos de primera y el suave aroma del azahar.",
      price: "₡6,500",
      image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800&auto=format&fit=crop",
      size: "large"
    }
  ];

  return (
    <section className="min-h-screen py-32 bg-transparent overflow-hidden relative" id="menu">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="container-custom"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              variants={textVariant(0.1)}
              className="text-golden-hummus text-all-caps text-sm font-bold tracking-[0.4em] mb-4 block"
            >
              Experiencia Gastronómica
            </motion.span>
            <motion.h2 
              variants={textVariant(0.2)}
              className="text-5xl md:text-7xl font-display font-medium text-deep-obsidian leading-tight mb-6"
            >
              Nuestra Selección <br /> <span className="italic font-light">de Autor</span>
            </motion.h2>
          </div>
          <motion.p 
            variants={fadeIn("left", 0.4)}
            className="max-w-md text-gray-600 font-body leading-relaxed mb-2"
          >
            Cada creación en Lubnan es un puente entre siglos de tradición y la vanguardia culinaria. Ingredientes puros, alma libanesa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              variants={fadeIn("up", i * 0.1)}
              className={`${
                dish.size === "large" ? "md:col-span-12 lg:col-span-7" : "md:col-span-6 lg:col-span-5"
              } group`}
            >
              <div className="relative overflow-hidden aspect-[16/9] mb-8 bg-black/5 rounded-2xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image 
                    src={dish.image} 
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                
                <div className="absolute top-6 right-6 z-10">
                  <span className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-deep-obsidian font-display font-bold text-sm tracking-widest shadow-xl border border-ivory/20">
                    {dish.price}
                  </span>
                </div>
              </div>
              
              <div className="max-w-xl">
                <h3 className="text-3xl font-display font-medium mb-4 group-hover:text-brand-red transition-colors duration-500">
                  {dish.name}
                </h3>
                <p className="text-gray-500 leading-relaxed font-body text-sm italic mb-4">
                  {dish.desc}
                </p>
                <div className="w-16 h-[1px] bg-golden-hummus/30 group-hover:w-32 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="https://oddmenu.com/es/p/ilovelubnan" target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-16 md:px-24 py-6 overflow-hidden bg-deep-obsidian border border-white/10 rounded-full shadow-2xl transition-all"
            >
              <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 text-white text-all-caps text-[10px] md:text-xs font-bold tracking-[0.4em] transition-all">
                Descubrir Menú Completo
              </span>
            </motion.button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
