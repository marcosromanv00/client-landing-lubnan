"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

const testimonials = [
  {
    id: 0,
    name: "Maria Fernanda Rojas",
    role: "Food Critic, Gastronomía CR",
    quote: "Los sabores auténticos del Líbano que no encuentras en otro lugar. Las especias son frescas y la presentación es impecable. El Hummus es una obra de arte.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 1,
    name: "Juan Carlos Quesada",
    role: "Socio Fundador, Costa Rica Gourmet",
    quote: "Una joya culinaria en San José. El Shawarma Royal es, sin duda, el mejor que he probado fuera de Beirut. El ambiente te transporta instantáneamente al Líbano.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Arturo Villalobos",
    role: "Director de Eventos, Luxury Living",
    quote: "Increíble atención y calidad. El Mezza Mixto es obligatorio para compartir. Un lugar sofisticado para cualquier ocasión especial o reuniones de negocios.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="min-h-screen py-24 bg-transparent overflow-hidden flex items-center">
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

        <div className="max-w-5xl mx-auto relative px-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 opacity-5">
            <Quote size={180} className="text-brand-red" />
          </div>
          
          <div className="text-center relative z-10 min-h-[350px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="flex justify-center mb-8 gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, s) => (
                    <Star key={s} size={20} className="fill-brand-red text-brand-red" />
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-4xl font-display font-medium text-obsidian leading-relaxed mb-12 italic max-w-4xl mx-auto">
                  &quot;{testimonials[activeIndex].quote}&quot;
                </blockquote>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-500 group ${
                    activeIndex === index ? "opacity-100 scale-110" : "opacity-40 hover:opacity-70 scale-100"
                  }`}
                >
                  <div className={`w-16 h-16 rounded-full overflow-hidden mb-4 border-2 transition-colors duration-500 ${
                    activeIndex === index ? "border-brand-red p-1" : "border-transparent"
                  }`}>
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className={`font-bold text-[11px] uppercase tracking-wider transition-colors duration-500 ${
                      activeIndex === index ? "text-obsidian" : "text-gray-500"
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-[9px] text-gray-400 uppercase tracking-[0.1em] mt-1 italic max-w-[120px]">
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

