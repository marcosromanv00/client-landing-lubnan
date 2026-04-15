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
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-obsidian/90 backdrop-blur-lg py-4 shadow-xl border-b border-white/5" : "bg-transparent py-8"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-12 w-12 transition-transform duration-500 group-hover:rotate-[360deg]">
            <Image
              src="/assets/Logos/13774633_1424757484217552_23851758_a.jpg"
              alt="Lubnan Logo"
              fill
              className="object-contain rounded-full border border-brand-red/20"
              priority
            />
          </div>
          <div className="ml-3 overflow-hidden">
            <span className="block text-white font-display font-bold text-lg tracking-[0.2em] transform transition-transform duration-500 translate-y-0 group-hover:-translate-y-full">
              LUBNAN
            </span>
            <span className="block text-brand-red font-display font-bold text-lg tracking-[0.2em] absolute top-0 transform transition-transform duration-500 translate-y-full group-hover:translate-y-0">
              LUBNAN
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative text-white text-[10px] text-all-caps font-bold tracking-[0.2em] group overflow-hidden"
                >
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    {link.name}
                  </span>
                  <span className="absolute top-0 block text-brand-red transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <Link href="#reservar">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-red text-white px-8 py-2.5 rounded-full text-[10px] text-all-caps font-bold tracking-widest transition-all shadow-lg border border-transparent hover:border-white/20"
            >
              Reservar
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-6">
          <button className="text-white hover:text-brand-red transition-colors">
            <ShoppingBag size={20} />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-brand-red transition-colors p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian border-b border-white/10 overflow-hidden"
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
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
