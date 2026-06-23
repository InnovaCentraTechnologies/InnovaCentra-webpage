"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    // { name: 'Technologies', href: '/technologies' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'top-4 px-4 sm:px-6 lg:px-8' : 'top-0'}`}>
      <nav className={`max-w-7xl mx-auto transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl px-4 sm:px-6 lg:px-8' : 'bg-transparent px-4 sm:px-6 lg:px-8 py-2'}`}>
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center lg:w-1/4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-40 w-60">
                <Image src="/image/logo 1.png" alt="InnovaCentra Logo" fill className="object-contain" />
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`relative py-2 font-medium transition-colors duration-200 ${isActive ? 'text-[var(--color-primary)]' : 'text-slate-600 hover:text-[var(--color-primary)]'}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions - Right */}
          <div className="hidden lg:flex items-center justify-end space-x-3 lg:w-1/4">
            <a 
              href="https://wa.me/918220614407?text=Hi%20InnovaCentra,%20I'm%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-full font-medium transition-colors border border-emerald-100"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a 
              href="tel:+918220614407" 
              className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Phone size={18} /> Call Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[var(--color-primary)] focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-[calc(100%+0.5rem)] bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl overflow-hidden mx-4 sm:mx-0">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-[var(--color-primary)] hover:bg-slate-50/50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 grid grid-cols-2 gap-3">
                <a 
                  href="https://wa.me/918220614407?text=Hi%20InnovaCentra,%20I'm%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center items-center gap-2 text-emerald-700 bg-emerald-50/80 border border-emerald-100 px-4 py-3 rounded-xl font-medium"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a
                  href="tel:+918220614407"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center items-center gap-2 bg-[var(--color-primary)] text-white px-4 py-3 rounded-xl font-medium"
                >
                  <Phone size={18} /> Call Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
