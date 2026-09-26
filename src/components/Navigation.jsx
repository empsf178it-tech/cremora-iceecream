import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navigation({ onOpenDiscover }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ['home', 'flavours', 'craft', 'ingredients', 'moments'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'FLAVOURS', href: '#flavours' },
    { name: 'THE CRAFT', href: '#craft' },
    { name: 'INGREDIENTS', href: '#ingredients' },
    { name: 'MOMENTS', href: '#moments' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3 md:py-4 glass-header border-b border-[#3D261C]/10 shadow-sm'
            : 'py-4 md:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">

          {/* Left: Brand Mark with Logo */}
          <a
            href="#home"
            className="hover:opacity-90 transition-opacity flex-shrink-0"
          >
            <BrandLogo showText textClassName="text-xl md:text-2xl lg:text-3xl" />
          </a>

          {/* Center Links — Desktop only (≥1024px) */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-bold tracking-widest transition-colors duration-200 relative group py-1 ${
                    isActive ? 'text-[#E84A5F]' : 'text-[#2A1810] hover:text-[#E84A5F]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#E84A5F] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right: CTA Button — Desktop only */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <button
              onClick={onOpenDiscover}
              data-cursor="DISCOVER"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2A1810] text-[#FDFBF7] font-medium text-xs tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-[#E84A5F] shadow-md hover:shadow-lg"
            >
              <span>DISCOVER</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Hamburger Button — Tablet & Mobile (< 1024px) */}
          <button
            id="nav-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden flex-shrink-0 flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-xl bg-[#2A1810] hover:bg-[#E84A5F] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E84A5F] focus-visible:ring-offset-2"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block w-5 h-[2px] bg-[#FDFBF7] rounded-full origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-3.5 h-[2px] bg-[#FDFBF7] rounded-full self-end mr-2"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block w-5 h-[2px] bg-[#FDFBF7] rounded-full origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile / Tablet Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#FDFBF7] flex flex-col justify-between px-6 md:px-16 pt-24 pb-10 lg:hidden overflow-y-auto"
          >
            {/* Nav Links */}
            <div className="space-y-6 md:space-y-8 mt-6">
              {navLinks.map((link, idx) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.07 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex items-center justify-between py-2 border-b border-[#3D261C]/10 transition-colors ${
                        isActive ? 'text-[#E84A5F]' : 'text-[#2A1810] hover:text-[#E84A5F]'
                      }`}
                    >
                      <span className="text-3xl md:text-4xl font-bold tracking-tight font-serif-expressive">
                        {link.name}
                      </span>
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          isActive ? 'bg-[#E84A5F] scale-100' : 'bg-transparent scale-0 group-hover:bg-[#E84A5F] group-hover:scale-100'
                        }`}
                      />
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="space-y-4 pt-8"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDiscover();
                }}
                className="w-full py-4 rounded-full bg-[#2A1810] text-[#FDFBF7] text-center font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#E84A5F] transition-colors duration-300"
              >
                <span>EXPLORE CREMORA</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-center text-[#8C766B] uppercase tracking-widest">
                A LITTLE MOMENT OF JOY.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
