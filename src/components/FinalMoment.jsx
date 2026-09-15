import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function FinalMoment({ onOpenDiscover }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-28 bg-[#2A1810] text-[#FDFBF7] overflow-hidden">
      
      {/* Background Cinematic Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,74,95,0.25)_0%,transparent_70%)] pointer-events-none" />

      {/* Floating Background Texture Visual */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="./images/7.png"
          alt="CREMORA Melting Scoop Texture"
          className="w-full h-full object-cover filter blur-xl scale-110"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E84A5F] text-xs font-bold tracking-widest uppercase"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>A LITTLE MOMENT OF JOY</span>
        </motion.div>

        {/* Oversized Editorial Heading */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-serif-expressive tracking-tight leading-[0.9]"
          >
            SCOOP. <br />
            <span className="text-[#E84A5F] italic font-normal">SMILE.</span> <br />
            REPEAT.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-[#D4C5B9] font-sans-clean font-light max-w-lg mx-auto"
        >
          “Some moments deserve another scoop.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-6 flex justify-center"
        >
          <button
            onClick={onOpenDiscover}
            data-cursor="DISCOVER"
            className="group px-10 py-5 rounded-full bg-[#E84A5F] text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-[#2A1810] transition-all duration-300 shadow-2xl hover:scale-105 flex items-center gap-3"
          >
            <span>DISCOVER CREMORA</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
