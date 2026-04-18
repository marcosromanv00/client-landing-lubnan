"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

export default function Products() {
  const products = [
    {
      name: "Hummus de Autor",
      category: "Dip 100% Sin Gluten",
      image: "/assets/hummus_premium.png",
    },
    {
      name: "Za'atar Artesanal",
      category: "Especias Puras GF",
      image: "/assets/zaatar_premium.png",
    },
    {
      name: "Aceite de Oliva Koura",
      category: "Importado de Líbano",
      image: "/assets/olive_oil_premium.png",
    },
    {
      name: "Baba Ganoush Real",
      category: "Gourmet Sin Gluten",
      image: "/assets/baba_ganoush_premium.png",
    },
  ];


  return (
    <section className="min-h-screen py-24 bg-transparent overflow-hidden">
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
            className="text-brand-red text-all-caps text-xs font-bold tracking-[0.4em] mb-4 block"
          >
            Lleve Lubnan a su Mesa
          </motion.span>
          <motion.h2
            variants={textVariant(0.2)}
            className="text-5xl md:text-6xl font-display font-bold text-obsidian tracking-wider mb-4 uppercase"
          >
            Selección Gourmet
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.3)}
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
          />
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="max-w-2xl mx-auto text-gray-600 font-body text-lg leading-relaxed italic"
          >
            Lleve la pureza del Líbano a su cocina. Nuestra línea de productos premium es 100% artesanal, certificada libre de gluten y diseñada para elevar cada momento en casa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeIn("up")}
              whileHover={{ y: -15 }}
              className="group cursor-pointer perspective-1000"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm border border-ivory/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-700">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="mt-10 text-center px-4">
                <p className="text-[10px] text-brand-red font-bold tracking-[0.3em] mb-2 uppercase">
                  {product.category}
                </p>
                <h3 className="text-2xl font-display font-bold text-obsidian uppercase tracking-wider group-hover:text-brand-red transition-colors duration-500">
                  {product.name}
                </h3>
                <div className="w-8 h-[1px] bg-gray-200 mx-auto mt-4 group-hover:w-16 group-hover:bg-brand-red transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.button
            variants={fadeIn("up", 0.8)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-obsidian text-white border border-ivory/10 px-16 py-5 rounded-full text-all-caps text-xs font-bold transition-all shadow-xl hover:bg-brand-red"
          >
            Encuéntrenos en Auto Mercado & PriceSmart
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
