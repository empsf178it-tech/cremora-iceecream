import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#FDFBF7]">
      {/* Background Soft Glow Radial Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_60%_40%,rgba(232,74,95,0.08)_0%,transparent_60%)]" />

      {/* Floating Micro Ingredient Elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden md:block opacity-40 pointer-events-none"
      >
        <div className="w-12 h-12 rounded-full bg-[#E84A5F]/20 backdrop-blur-md flex items-center justify-center text-xs text-[#E84A5F] font-bold">
          🍓
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-12 hidden md:block opacity-40 pointer-events-none"
      >
        <div className="w-14 h-14 rounded-full bg-[#EE8A19]/20 backdrop-blur-md flex items-center justify-center text-xs text-[#EE8A19] font-bold">
          ✨
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Editorial Headlines */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF0F2] border border-[#F8B1BA] text-[#E84A5F] text-xs font-semibold tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ARTISANAL CREATIONS</span>
          </motion.div>

          <div className="overflow-hidden space-y-2">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#2A1810] font-serif-expressive leading-[0.95]"
            >
              A LITTLE <br />
              <span className="text-[#E84A5F] italic font-normal">MOMENT</span> <br />
              OF JOY.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-[#8C766B] max-w-md font-sans-clean font-light leading-relaxed"
          >
            “Made for the pause between busy moments.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <a
              href="#flavours"
              onClick={onExploreClick}
              data-cursor="TASTE"
              className="px-8 py-4 rounded-full bg-[#2A1810] text-[#FDFBF7] font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[#E84A5F] hover:shadow-xl hover:scale-105"
            >
              EXPLORE FLAVOURS →
            </a>

            <a
              href="#flavours"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#2A1810] hover:text-[#E84A5F] transition-colors group"
            >
              <span>SCROLL TO TASTE</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>
          </motion.div>

        </div>

        {/* Right Column: Floating Gourmet Strawberry Scoop Hero Shot */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md aspect-square rounded-full p-4 bg-gradient-to-b from-[#FDF0F2] to-transparent shadow-2xl flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-[#E84A5F]/20 animate-pulse-soft pointer-events-none" />

            <img
              src="/images/1.png"
              alt="CREMORA Gourmet Strawberry Cream Ice Cream Scoop"
              className="w-full h-full object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Floating Tag Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 right-4 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/60 shadow-lg"
            >
              <p className="text-[10px] font-bold tracking-widest text-[#E84A5F] uppercase">FEATURED FLAVOUR</p>
              <p className="text-sm font-bold text-[#2A1810] font-serif-expressive">Strawberry Cloud</p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
