"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

export default function Products() {
  const products = [
    {
      name: "Hummus Tradicional",
      category: "Dip Premium",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Za'atar Artesanal",
      category: "Especias",
      image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Aceite de Oliva",
      category: "Importado",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacabc8475?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Baba Ganoush",
      category: "Dip Premium",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container-custom"
      >
        <div className="text-center mb-20">
          <motion.span 
            variants={textVariant(0.1)}
            className="text-brand-red text-all-caps text-xs font-bold tracking-[0.3em] mb-4 block"
          >
            Lleve Lubnan a su Mesa
          </motion.span>
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-4xl md:text-5xl font-display font-bold text-obsidian tracking-wider mb-4 uppercase"
          >
            Selección Gourmet
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.3)}
            className="w-20 h-1 bg-brand-red mx-auto mb-6" 
          />
          <motion.p 
            variants={fadeIn("up", 0.4)}
            className="max-w-2xl mx-auto text-gray-600 font-body leading-relaxed"
          >
            Nuestros productos artesanales, ahora disponibles para disfrutar el alma del Líbano en casa. Encuéntrenos en los principales supermercados gourmet de Costa Rica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              variants={fadeIn("up", i * 0.1)}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-limestone aspect-square rounded-full p-2 flex items-center justify-center shadow-inner group-hover:shadow-2xl transition-all duration-500 overflow-hidden relative border-4 border-transparent group-hover:border-brand-red/10">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="mt-8 text-center">
                <p className="text-[10px] text-brand-red font-bold tracking-[0.2em] mb-2 uppercase">
                  {product.category}
                </p>
                <h3 className="text-xl font-display font-bold text-obsidian uppercase tracking-wide group-hover:text-brand-red transition-colors">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-brand-red text-white px-10 py-4 rounded-full text-all-caps text-xs font-bold transition-all hover:bg-black">
            ¿Dónde los consigo?
          </button>
        </div>
      </motion.div>
    </section>
  );
}
