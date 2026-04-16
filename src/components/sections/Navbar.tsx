"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "#hero", id: "hero" },
  { name: "Menú", href: "#menu", id: "menu" },
  { name: "Productos", href: "#productos", id: "productos" },
  { name: "Chefs", href: "#chefs", id: "chefs" },
  { name: "Eventos", href: "#eventos", id: "eventos" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active Section Detection (ScrollSpy)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionIds = [...navLinks.map(l => l.id), "ambiance", "testimonios", "reservar"];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 px-0"
    >
      <div className="w-full relative">
        <div className="flex items-center justify-between backdrop-blur-xl border-b border-white/10 transition-all duration-500 rounded-b-3xl mx-4 md:mx-10 mt-4 py-4 px-10 bg-black/40 shadow-2xl">
          
          {/* Hanging Logo Badge - Completely Static */}
          <Link href="#hero" className="relative z-10 flex items-center group">
            <div 
              className="absolute -top-12 -left-6 md:-left-10 w-28 md:w-32 h-36 md:h-44 bg-obsidian flex flex-col items-center pt-8 md:pt-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }}
            >
              <div className="relative h-20 w-20 md:h-24 md:w-24 px-2">
                <Image
                  src="/assets/Logos/13774633_1424757484217552_23851758_a.jpg"
                  alt="Lubnan Logo"
                  fill
                  className="object-contain rounded-full"
                  priority
                />
              </div>
            </div>
            {/* Spacer for the logo badge */}
            <div className="w-20 md:w-24" />
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-10">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.id;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    aria-label={`Ir a la sección de ${link.name}`}
                    className={`relative text-[11px] text-all-caps font-bold tracking-[0.2em] group block transition-colors duration-300 ${
                      isActive ? "text-golden-hummus" : "text-white/80 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Active Indicator Dot - KEPT */}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-active-dot"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-golden-hummus rounded-full shadow-[0_0_8px_#D4AF37]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Hover Underline */}
                    <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-golden-hummus transition-all duration-300 group-hover:w-full ${isActive ? "opacity-0" : "opacity-100"}`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Right - Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 mr-4">
              <Link 
                href="https://facebook.com/lubnancr" 
                target="_blank" 
                aria-label="Seguir en Facebook"
                className="text-white/70 hover:text-white transition-all p-2 hover:bg-white/10 rounded-full"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link 
                href="https://instagram.com/lubnancr" 
                target="_blank" 
                aria-label="Seguir en Instagram"
                className="text-white/70 hover:text-white transition-all p-2 hover:bg-white/10 rounded-full"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link 
                href="https://wa.me/50686600707" 
                target="_blank" 
                aria-label="Contactar por WhatsApp"
                className="text-white/70 hover:text-white transition-all p-2 hover:bg-white/10 rounded-full"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </Link>
            </div>
            <Link href="#reservar">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-red text-white px-10 py-3 rounded-full text-[11px] text-all-caps font-bold tracking-widest transition-all shadow-lg hover:shadow-brand-red/20 hover:bg-red-700"
              >
                Reservar
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="text-white hover:text-brand-red transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Updated with active state */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 bg-obsidian/95 backdrop-blur-2xl rounded-[30px] border border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col items-center py-12 space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-all-caps text-base font-bold tracking-widest transition-colors ${
                      activeSection === link.id ? "text-golden-hummus" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link href="#reservar" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.button 
                  className="bg-brand-red text-white px-12 py-4 rounded-full text-all-caps text-sm font-bold tracking-widest shadow-xl"
                >
                  Reservar Ahora
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

