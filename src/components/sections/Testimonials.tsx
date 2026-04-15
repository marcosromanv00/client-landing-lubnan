"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
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
            Opiniones
          </motion.span>
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-4xl md:text-5xl font-display font-bold text-obsidian tracking-wider mb-4 uppercase"
          >
            Lo Que Dicen Nuestros Clientes
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.3)}
            className="w-20 h-1 bg-brand-red mx-auto mb-6" 
          />
          <motion.p 
            variants={fadeIn("up", 0.4)}
            className="max-w-2xl mx-auto text-gray-600 font-body"
          >
            La satisfacción de nuestros comensales es nuestro mayor orgullo.
          </motion.p>
        </div>

        <motion.div 
          variants={fadeIn("up", 0.5)}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-10">
            <Quote size={120} className="text-brand-red" />
          </div>
          
          <div className="text-center relative z-10">
            <div className="flex justify-center mb-8 gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="fill-brand-red text-brand-red" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-display font-medium text-obsidian leading-relaxed mb-10 italic">
              "Una joya culinaria en San José. El Shawarma Royal es, sin duda, el mejor que he probado fuera de Beirut. El ambiente te transporta instantáneamente al Líbano."
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 border-2 border-brand-red p-1">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                  alt="Cliente"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h4 className="font-bold text-obsidian uppercase tracking-wide">Juan Carlos Quesada</h4>
              <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mt-2">Socio Fundador, Costa Rica Gourmet</p>
            </div>
          </div>
        </motion.div>
          
          {/* Slider Pagination Mockup */}
          <div className="flex justify-center mt-12 gap-3">
            <button className="w-2 h-2 rounded-full bg-brand-red" />
            <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-brand-red transition-colors" />
            <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-brand-red transition-colors" />
          </div>
      </motion.div>
    </section>
  );
}
