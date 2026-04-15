"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

export default function Booking() {
  return (
    <section className="h-full py-24 bg-transparent overflow-hidden">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container-custom"
      >
        <motion.div 
          variants={fadeIn("up", 0.2)}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-full p-12">
              <div className="text-center mb-10">
                <motion.span 
                  variants={textVariant(0.1)}
                  className="text-brand-red text-all-caps text-xs font-bold tracking-[0.2em] mb-2 block"
                >
                  Reservaciones
                </motion.span>
                <motion.h2 
                  variants={textVariant(0.2)}
                  className="text-4xl md:text-5xl font-display font-bold text-obsidian tracking-wider mb-4"
                >
                  Reserva tu Mesa
                </motion.h2>
                <motion.div 
                  variants={fadeIn("up", 0.3)}
                  className="w-20 h-1 bg-brand-red mx-auto mb-6" 
                />
                <motion.p 
                  variants={fadeIn("up", 0.4)}
                  className="max-w-md mx-auto text-gray-600 font-body text-sm"
                >
                  Asegura tu experiencia gastronómica única. Completa el formulario y nuestro equipo confirmará tu reservación.
                </motion.p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full bg-limestone border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-red outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Teléfono</label>
                  <input 
                    type="tel" 
                    placeholder="+506 1234 5678"
                    className="w-full bg-limestone border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-red outline-none transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Correo Electrónico</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="w-full bg-limestone border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-red outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Fecha</label>
                  <input 
                    type="date" 
                    className="w-full bg-limestone border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-red outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                   <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Hora</label>
                   <select className="w-full bg-limestone border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-red outline-none transition-all">
                      <option>18:00</option>
                      <option>19:00</option>
                      <option>20:00</option>
                      <option>21:00</option>
                   </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Comentarios Especiales</label>
                  <textarea 
                    rows={4}
                    placeholder="Alergias, preferencias de mesa, celebraciones especiales..."
                    className="w-full bg-limestone border-none rounded-lg p-4 focus:ring-2 focus:ring-brand-red outline-none transition-all resize-none"
                  />
                </div>
                
                <div className="md:col-span-2 mt-4">
                  <button className="w-full bg-brand-red hover:bg-obsidian text-white py-5 rounded-xl text-all-caps font-bold transition-all transform hover:translate-y-[-2px] shadow-lg">
                    Confirmar Reservación
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
