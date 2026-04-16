"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

const chefs = [
  {
    id: 0,
    name: "Layla Mansour",
    role: "Chef Pastelera",
    bio: "Especialista en dulces árabes tradicionales. Sus baklavas y postres de azahar son el final perfecto para una experiencia de gala.",
    tag: "Especialista en Dulces de Azahar",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 1,
    name: "Mario Gheyad",
    role: "Proprietario & Chef Ejecutivo",
    bio: "Con más de 25 años de maestría culinaria, el Chef Mario trae los secretos de Beirut a la mesa de Lubnan. Su pasión por la autenticidad define cada platillo.",
    tag: "Maestro de la Cocina Libanesa",
    image: "/assets/Mario.jpg"
  },
  {
    id: 2,
    name: "Ahmad Khalil",
    role: "Sous Chef",
    bio: "Mano derecha en la cocina, Ahmad asegura que cada ingrediente mantenga la frescura y calidad que exige la alta cocina libanesa.",
    tag: "Experto en Mezze Tradicional",
    image: "/assets/Ahmad.png"
  }
];

export default function Chefs() {

  return (
    <section className="min-h-screen py-32 bg-transparent overflow-hidden flex items-center">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-[1400px] mx-auto px-6 md:px-16"
      >
        <div className="text-center mb-24">
          <motion.span 
            variants={textVariant(0.1)}
            className="text-brand-red text-all-caps text-xs font-bold tracking-[0.4em] mb-4 block"
          >
            Nuestra Legión
          </motion.span>
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-5xl md:text-6xl font-display font-bold text-obsidian tracking-wider mb-4 uppercase"
          >
            Maestros Culinarios
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.3)}
            className="w-24 h-1 bg-brand-red mx-auto mb-8" 
          />
          <motion.p 
            variants={fadeIn("up", 0.4)}
            className="max-w-2xl mx-auto text-gray-600 font-body text-lg italic"
          >
            La excelencia no es un acto, sino un hábito. Conozca a los artesanos detrás de nuestra propuesta gastronómica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch justify-center">
          {chefs.map((chef, i) => {
            const isFeatured = i === 1; // Mario
            
            return (
              <motion.div
                key={chef.name}
                variants={fadeIn("up", 0.5 + i * 0.1)}
                initial={{ scale: isFeatured ? 1 : 0.9, opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1,
                  transition: { duration: 0.4 }
                }}
                animate={{ 
                  scale: isFeatured ? 1.02 : 0.9,
                  zIndex: isFeatured ? 10 : 1
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative rounded-[2.5rem] overflow-hidden group border border-gray-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white flex flex-col ${isFeatured ? 'ring-2 ring-brand-red/10' : ''}`}
              >
                {/* Image Container */}
                <div className="relative h-[450px] overflow-hidden">
                  <Image 
                    src={chef.image} 
                    alt={chef.name}
                    fill
                    className={`object-cover transition-transform duration-1000 group-hover:scale-110 ${
                      isFeatured ? 'object-[25%_center]' : 'object-center'
                    }`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-obsidian/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                  
                  {/* Floating Role Badge */}
                  <div className="absolute top-6 left-6 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                    <p className="text-[10px] text-ivory font-bold uppercase tracking-widest leading-none">
                      {chef.role}
                    </p>
                  </div>

                  {isFeatured && (
                    <div className="absolute top-6 right-6">
                       <span className="bg-brand-red text-[8px] text-white px-3 py-1.5 rounded-full font-bold uppercase tracking-[0.2em] shadow-lg">
                         Proprietario
                       </span>
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="font-display font-bold text-3xl text-obsidian mb-1">
                      {chef.name}
                    </h3>
                    <div className="w-10 h-0.5 bg-brand-red/30 transition-all duration-500 group-hover:w-full group-hover:bg-brand-red" />
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-body italic">
                    {chef.bio}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-brand-red" />
                    <p className="text-[9px] font-bold text-obsidian uppercase tracking-[0.2em] opacity-70 group-hover:opacity-100 transition-opacity">
                      {chef.tag}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

