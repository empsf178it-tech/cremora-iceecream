import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
            ? 'py-4 glass-header border-b border-[#3D261C]/10 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Left: Brand Mark with Logo */}
          <a
            href="#home"
            className="hover:opacity-90 transition-opacity"
          >
            <BrandLogo showText textClassName="text-2xl lg:text-3xl" />
          </a>

          {/* Center Links (Desktop) */}
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

          {/* Right: CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenDiscover}
              data-cursor="DISCOVER"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2A1810] text-[#FDFBF7] font-medium text-xs tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-[#E84A5F] shadow-md hover:shadow-lg"
            >
              <span>DISCOVER</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2A1810] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#FDFBF7] flex flex-col justify-between px-8 py-24 lg:hidden"
          >
            <div className="space-y-8 mt-8">
              {navLinks.map((link, idx) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-4xl font-bold tracking-tight font-serif-expressive flex items-center justify-between transition-colors ${
                        isActive ? 'text-[#E84A5F]' : 'text-[#2A1810] hover:text-[#E84A5F]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-3 h-3 rounded-full bg-[#E84A5F]" />
                      )}
                    </a>
                  </motion.div>
                );
              })}
            </div>

            <div className="space-y-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDiscover();
                }}
                className="w-full py-4 rounded-full bg-[#2A1810] text-[#FDFBF7] text-center font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <span>EXPLORE CREMORA</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-center text-[#8C766B] uppercase tracking-widest">
                A LITTLE MOMENT OF JOY.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
