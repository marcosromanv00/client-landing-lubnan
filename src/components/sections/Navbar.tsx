"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Menú", href: "#menu" },
    { name: "Productos", href: "#productos" },
    { name: "Chefs", href: "#chefs" },
    { name: "Eventos", href: "#eventos" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 px-6 md:px-10 ${
        isScrolled ? "pt-4" : "pt-8"
      }`}
    >
      <div className="container-custom relative">
        <div className={`flex items-center justify-between bg-black/40 backdrop-blur-xl rounded-full border border-white/10 transition-all duration-500 ${
          isScrolled ? "py-3 px-8" : "py-4 px-10"
        }`}>
          {/* Hanging Logo Badge */}
          <Link href="/" className="relative z-10 flex items-center group">
            <div 
              className="absolute -top-12 -left-4 md:-left-6 w-32 md:w-40 h-48 md:h-56 bg-obsidian flex flex-col items-center pt-10 md:pt-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
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
            <div className="w-24 md:w-32" />
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-10">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative text-white text-[11px] text-all-caps font-bold tracking-[0.2em] group overflow-hidden h-[1.2em] block"
                >
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    {link.name}
                  </span>
                  <span className="absolute top-0 left-0 block text-golden-hummus transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Right - Button */}
          <div className="hidden md:flex items-center">
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
              className="text-white hover:text-brand-red transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
                    className="text-white text-all-caps text-base font-bold tracking-widest hover:text-brand-red transition-colors"
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
