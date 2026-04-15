"use client";

import { motion } from "framer-motion";
import { Music, UtensilsCrossed, Users } from "lucide-react";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

const events = [
  {
    title: "Noche de Vinos Libaneses",
    date: "20 de Abril, 2026",
    time: "19:00 - 22:00",
    desc: "Degustación de vinos premium del Valle de Bekaa con maridaje de mezze gourmet.",
    limit: "Cupo limitado: 30 personas",
    icon: <Music className="text-brand-red" />
  },
  {
    title: "Clase Magistral de Cocina",
    date: "28 de Abril, 2026",
    time: "15:00 - 18:00",
    desc: "Aprende a preparar auténticos platos libaneses con nuestro Chef Ahmad.",
    limit: "Cupo limitado: 15 personas",
    icon: <UtensilsCrossed className="text-brand-red" />
  },
  {
    title: "Cena Temática: Sabores de Beirut",
    date: "5 de Mayo, 2026",
    time: "20:00 - 23:00",
    desc: "Menú especial de 7 tiempos inspirado en la gastronomía tradicional de Beirut.",
    limit: "Cupo limitado: 40 personas",
    icon: <Users className="text-brand-red" />
  }
];

export default function Events() {
  return (
    <section className="py-24 bg-obsidian text-white overflow-hidden">
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
            Exclusividad
          </motion.span>
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-4xl md:text-5xl font-display font-bold text-white tracking-wider mb-4 uppercase"
          >
            Eventos Exclusivos
          </motion.h2>
          <motion.div 
            variants={fadeIn("up", 0.3)}
            className="w-20 h-1 bg-brand-red mx-auto mb-6" 
          />
          <motion.p 
            variants={fadeIn("up", 0.4)}
            className="max-w-2xl mx-auto text-gray-400 font-body"
          >
            Experiencias culinarias únicas diseñadas para los paladares más exigentes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/10" />
              <div className="relative p-10 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="mb-8 p-4 bg-brand-red/10 w-fit rounded-2xl group-hover:bg-brand-red transition-colors duration-500">
                  <div className="group-hover:text-white transition-colors duration-500">
                    {event.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 tracking-wide group-hover:text-brand-red transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-col gap-3 mb-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-brand-red" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-brand-red" />
                    {event.time}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed font-body">
                  {event.desc.replace('Chef Ahmad', 'Chef Mario Gheyad')}
                </p>
                <div className="pt-6 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-red">
                    {event.limit}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeIn("up", 0.6)}
          className="mt-20 p-12 bg-gradient-to-r from-brand-red/20 to-transparent border-l-4 border-brand-red rounded-r-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-display font-bold mb-2 uppercase italic tracking-wide">Eventos Privados</h3>
              <p className="text-gray-400 max-w-xl font-body">
                ¿Celebración especial? Nuestro salón privado es perfecto para bodas, aniversarios, eventos corporativos y ocasiones especiales. Menús personalizados y servicio de catering disponible.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="whitespace-nowrap bg-brand-red hover:bg-white hover:text-brand-red px-10 py-4 rounded-full text-all-caps text-sm font-bold transition-all shadow-lg"
            >
              Consultar Disponibilidad
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
