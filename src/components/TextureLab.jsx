import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TEXTURE_LAB } from '../data/flavours';

export default function TextureLab() {
  const [activeTexture, setActiveTexture] = useState(TEXTURE_LAB[0]);

  return (
    <section className="py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E84A5F]">
            TEXTURE EXPLORATION
          </span>
          <h2 className="text-5xl sm:text-7xl font-black text-[#2A1810] font-serif-expressive tracking-tight">
            SILKY. <br />
            <span className="text-[#E84A5F] italic font-normal">CREAMY.</span> <br />
            CRUNCHY.
          </h2>
          <p className="text-sm text-[#8C766B] font-sans-clean font-light leading-relaxed">
            Three distinct sensory dimensions engineered for maximum pleasure.
          </p>
        </div>

        {/* 3 Large Editorial Texture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEXTURE_LAB.map((item) => {
            const isSelected = activeTexture.id === item.id;
            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveTexture(item)}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className={`cursor-pointer rounded-3xl p-6 lg:p-8 transition-all duration-500 border flex flex-col justify-between h-[480px] relative overflow-hidden ${
                  isSelected
                    ? 'bg-white shadow-2xl border-[#E84A5F]/40 scale-[1.03]'
                    : 'bg-[#FAF0E6]/60 border-[#3D261C]/05 hover:bg-white/80'
                }`}
              >
                {/* Background Accent Glow */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{ backgroundColor: item.bg }}
                />

                <div className="relative z-10 space-y-3">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#E84A5F]">
                    DIMENSION / {item.id.toUpperCase()}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-black font-serif-expressive text-[#2A1810] tracking-tight break-words">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8C766B]">
                    {item.tagline}
                  </p>
                </div>

                {/* Macro Visual Container */}
                <div className="relative z-10 my-4 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="relative z-10">
                  <p className="text-xs text-[#8C766B] font-sans-clean leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
