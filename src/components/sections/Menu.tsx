"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

export default function Menu() {
  const dishes = [
    {
      name: "Mezze Platter",
      desc: "Selección premium de hummus, mutabal, falafel crujiente y ensalada tabbouleh fresca.",
      price: "₡12,000",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Kibbeh Nayyeh",
      desc: "La joya tradicional: Carne premium finamente picada con trigo burgol, especias del Líbano y menta.",
      price: "₡14,500",
      image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Shawarma Royal",
      desc: "Láminas de cordero marinado en 7 especias, servido con crema de ajo casera y vegetales grillados.",
      price: "₡16,900",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Baklava de Bekaa",
      desc: "Delicadas capas de hojaldre artesanal relleno de pistachos premium y bañado en miel de azahar.",
      price: "₡6,500",
      image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800&auto=format&fit=crop"
    }
  ];

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
            Descubra
          </motion.span>
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-4xl md:text-5xl font-display font-bold text-obsidian tracking-wider mb-4"
          >
            Nuestras Recomendaciones
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.3)}
            className="w-20 h-1 bg-brand-red mx-auto mb-6" 
          />
          <motion.p 
            variants={fadeIn("up", 0.4)}
            className="max-w-2xl mx-auto text-gray-600 font-body leading-relaxed"
          >
            Cada platillo es una obra maestra culinaria, preparada con ingredientes importados y técnicas milenarias para brindar el sabor auténtico del Líbano.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              variants={fadeIn("up", i * 0.1)}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand-red transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed font-body">
                  {dish.desc}
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-brand-red font-bold font-display text-lg tracking-wider">
                    {dish.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-transparent border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-10 py-3 rounded-full text-all-caps text-xs font-bold transition-all">
            Ver Menú Completo
          </button>
        </div>
      </motion.div>
    </section>
  );
}
