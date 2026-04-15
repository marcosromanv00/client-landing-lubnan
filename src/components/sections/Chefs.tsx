"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

const chefs = [
  {
    name: "Mario Gheyad",
    role: "Proprietario & Chef Ejecutivo",
    bio: "Con más de 25 años de maestría culinaria, el Chef Mario trae los secretos de Beirut a la mesa de Lubnan. Su pasión por la autenticidad define cada platillo.",
    tag: "Maestro de la Cocina Libanesa",
    image: "/assets/Mario.jpg"
  },
  {
    name: "Layla Mansour",
    role: "Chef Pastelera",
    bio: "Especialista en dulces árabes tradicionales. Sus baklavas y postres de azahar son el final perfecto para una experiencia de gala.",
    tag: "Especialista en Dulces de Azahar",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Ahmad Khalil",
    role: "Sous Chef",
    bio: "Mano derecha en la cocina, Ahmad asegura que cada ingrediente mantenga la frescura y calidad que exige la alta cocina libanesa.",
    tag: "Experto en Mezze Tradicional",
    image: "https://images.unsplash.com/photo-1577214450283-f3c130dcee81?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Chefs() {
  return (
    <section className="py-24 bg-limestone overflow-hidden">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container-custom"
      >
        <div className="text-center mb-16">
          <motion.span 
            variants={textVariant(0.1)}
            className="text-brand-red text-all-caps text-xs font-bold tracking-[0.2em] mb-2 block"
          >
            Maestros
          </motion.span>
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-4xl md:text-5xl font-display font-bold text-obsidian tracking-wider mb-4 uppercase"
          >
            Nuestros Maestros Culinarios
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.3)}
            className="w-20 h-1 bg-brand-red mx-auto mb-6" 
          />
          <motion.p 
            variants={fadeIn("up", 0.4)}
            className="max-w-2xl mx-auto text-gray-600 font-body"
          >
            Un equipo de chefs de clase mundial dedicados a ofrecerte una experiencia gastronómica incomparable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefs.map((chef, i) => (
            <motion.div
              key={chef.name}
              variants={fadeIn("up", i * 0.2)}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full border border-gray-100"
            >
              <div className="h-80 relative overflow-hidden group">
                <img 
                  src={chef.image} 
                  alt={chef.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="p-8 flex-grow">
                <p className="text-brand-red text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                  {chef.role}
                </p>
                <h3 className="text-2xl font-display font-bold mb-4">{chef.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-body">
                  {chef.bio}
                </p>
                <p className="text-xs font-bold text-obsidian italic mt-auto border-t pt-4">
                  {chef.tag}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
