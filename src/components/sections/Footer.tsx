"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="bg-obsidian text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container-custom"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <motion.div variants={fadeIn("up", 0.1)} className="space-y-8">
            <h2 className="text-4xl font-display font-medium tracking-[0.3em] uppercase text-golden-hummus">Lubnan</h2>
            <p className="text-gray-400 text-sm leading-relaxed font-body max-w-xs uppercase tracking-widest text-[10px]">
              Experiencia culinaria libanesa de lujo en el corazón de Costa Rica. Pasión por la tradición, elegancia en el servicio.
            </p>
            <div className="flex gap-4">
              {[
                { icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                )},
                { icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                )}
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-3 bg-white/5 rounded-full hover:bg-brand-red transition-all duration-300 border border-white/10"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Location Col */}
          <motion.div variants={fadeIn("up", 0.2)} className="space-y-8">
            <h3 className="text-all-caps text-xs font-bold tracking-[0.4em] text-golden-hummus border-b border-ivory/10 pb-4 inline-block">Ubicación</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 text-[11px] text-gray-400 uppercase tracking-widest leading-loose">
                <MapPin size={18} className="shrink-0 text-white" />
                <span>Avenida Escazú, Torre 2, San José, Costa Rica. Edificio Premium Plaza, Piso 3</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Col */}
          <motion.div variants={fadeIn("up", 0.3)} className="space-y-8">
            <h3 className="text-all-caps text-xs font-bold tracking-[0.4em] text-golden-hummus border-b border-ivory/10 pb-4 inline-block">Contacto</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 text-[11px] text-gray-400 uppercase tracking-widest">
                <Phone size={18} className="shrink-0 text-white" />
                <span className="hover:text-brand-red transition-colors cursor-pointer">+506 2201-2000</span>
              </li>
              <li className="flex gap-4 text-[11px] text-gray-400 uppercase tracking-widest">
                <Mail size={18} className="shrink-0 text-white" />
                <span className="hover:text-brand-red transition-colors cursor-pointer">reservas@lubnan.cr</span>
              </li>
            </ul>
          </motion.div>

          {/* Hours Col */}
          <motion.div variants={fadeIn("up", 0.4)} className="space-y-8">
            <h3 className="text-all-caps text-xs font-bold tracking-[0.4em] text-golden-hummus border-b border-ivory/10 pb-4 inline-block">Horarios</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 text-[11px] text-gray-400 uppercase tracking-widest">
                <Clock size={18} className="shrink-0 text-white" />
                <div>
                  <p className="font-bold text-white mb-2 tracking-[0.2em]">Almuerzo</p>
                  <p>Mar - Dom: 12:00 - 15:00</p>
                </div>
              </li>
              <li className="flex gap-4 text-[11px] text-gray-400 uppercase tracking-widest">
                <div className="ml-8">
                  <p className="font-bold text-white mb-2 tracking-[0.2em]">Cena</p>
                  <p className="mb-1">Mar - Jue: 18:00 - 22:00</p>
                  <p className="mb-1">Vie - Sáb: 18:00 - 23:00</p>
                  <p>Dom: 18:00 - 21:00</p>
                  <p className="text-brand-red mt-4 font-bold border-t border-white/5 pt-4">Lunes: Cerrado</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          variants={fadeIn("up", 0.5)}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-all-caps font-bold text-gray-500 tracking-[0.3em]"
        >
          <p>© 2026 Lubnan Costa Rica. Todos los derechos reservados.</p>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
