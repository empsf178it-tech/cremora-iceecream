import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FLAVOURS_DATA } from '../data/flavours';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FlavourUniverse({ onSelectFlavour, setCursorState }) {
  const [activeFlavour, setActiveFlavour] = useState(FLAVOURS_DATA[0]);

  return (
    <section
      id="flavours"
      style={{ backgroundColor: activeFlavour.bgColor }}
      className="py-28 transition-colors duration-700 ease-out relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span
              style={{ color: activeFlavour.color }}
              className="text-xs font-bold tracking-widest uppercase transition-colors duration-500"
            >
              FLAVOUR UNIVERSE
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#2A1810] font-serif-expressive tracking-tight mt-2">
              MEET YOUR <br />
              <span className="italic font-normal">NEXT SCOOP.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#8C766B] max-w-sm font-sans-clean">
            Hover over any creation to explore its flavor profile, ingredients, and sensory notes.
          </p>
        </div>

        {/* Flavour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLAVOURS_DATA.map((flavour) => {
            const isHovered = activeFlavour.id === flavour.id;

            return (
              <motion.div
                key={flavour.id}
                onMouseEnter={() => {
                  setActiveFlavour(flavour);
                  setCursorState('TASTE');
                }}
                onMouseLeave={() => setCursorState(null)}
                onClick={() => onSelectFlavour(flavour)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                data-cursor="TASTE"
                className={`group cursor-pointer rounded-3xl p-6 transition-all duration-500 border ${
                  isHovered
                    ? 'bg-white shadow-2xl scale-[1.02]'
                    : 'bg-white/60 hover:bg-white/90 shadow-sm'
                }`}
                style={{
                  borderColor: isHovered ? flavour.accentColor : 'rgba(61, 38, 28, 0.08)'
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-[#FDFBF7]">
                  <img
                    src={flavour.image}
                    alt={flavour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-[#2A1810]">
                    {flavour.intensity}
                  </div>
                </div>

                {/* Flavour Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-bold tracking-widest uppercase transition-colors"
                      style={{ color: flavour.color }}
                    >
                      {flavour.tagline}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1 text-[#2A1810]' : 'text-[#8C766B]'}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#2A1810] font-serif-expressive group-hover:text-[#E84A5F] transition-colors">
                    {flavour.name}
                  </h3>

                  <p className="text-sm text-[#8C766B] line-clamp-2 font-sans-clean font-light leading-relaxed">
                    {flavour.description}
                  </p>

                  {/* Active Flavour Ingredients Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {flavour.ingredients.map((ing, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-[#FAF0E6] text-[#3D261C] font-medium"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
