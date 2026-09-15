import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INGREDIENTS_JOURNEY } from '../data/flavours';
import { MapPin, RefreshCw, ArrowRight } from 'lucide-react';

export default function Ingredients({ setCursorState }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCrafted, setShowCrafted] = useState(false);

  const currentIngredient = INGREDIENTS_JOURNEY[activeIndex];

  return (
    <section id="ingredients" className="py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#E84A5F]">
              THE INGREDIENT JOURNEY
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#2A1810] font-serif-expressive tracking-tight mt-2">
              REAL FLAVOUR STARTS <br />
              <span className="italic font-normal text-[#E84A5F]">WITH REAL INGREDIENTS.</span>
            </h2>
          </div>

          <p className="text-sm text-[#8C766B] max-w-sm font-sans-clean">
            Click any ingredient to witness how raw harvest transforms into handcrafted gelato bliss.
          </p>
        </div>

        {/* Ingredient Navigation Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 scrollbar-none mb-12">
          {INGREDIENTS_JOURNEY.map((ing, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={ing.id}
                onClick={() => {
                  setActiveIndex(idx);
                  setShowCrafted(false);
                }}
                className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#2A1810] text-white shadow-lg scale-105'
                    : 'bg-white text-[#3D261C] border border-[#3D261C]/10 hover:bg-[#FAF0E6]'
                }`}
              >
                <span>{ing.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#E84A5F]" />}
              </button>
            );
          })}
        </div>

        {/* Interactive Image & Detail Morph Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#3D261C]/05">
          
          {/* Left Column: Image Card with Morph Toggle */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-[#FAF0E6]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={showCrafted ? `crafted-${currentIngredient.id}` : `raw-${currentIngredient.id}`}
                  src={showCrafted ? currentIngredient.craftedImage : currentIngredient.rawImage}
                  alt={currentIngredient.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* State Indicator Tag */}
              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase">
                {showCrafted ? 'CRAFTED SCOOP' : 'RAW HARVEST'}
              </div>

              {/* Interactive Morph Trigger Button */}
              <button
                onClick={() => setShowCrafted(!showCrafted)}
                data-cursor="TASTE"
                className="absolute bottom-6 right-6 px-5 py-3 rounded-full bg-[#2A1810] text-white text-xs font-bold tracking-wider uppercase shadow-xl hover:bg-[#E84A5F] transition-colors flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 transition-transform duration-500 ${showCrafted ? 'rotate-180' : ''}`} />
                <span>{showCrafted ? 'VIEW RAW INGREDIENT' : 'SEE CRAFTED SCOOP'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Ingredient Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E6] text-[#2A1810] text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#E84A5F]" />
              <span>ORIGIN: {currentIngredient.origin}</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-bold font-serif-expressive text-[#2A1810]">
              {currentIngredient.subtitle}
            </h3>

            <p className="text-base text-[#8C766B] font-sans-clean font-light leading-relaxed">
              {currentIngredient.note}
            </p>

            <div className="pt-6 border-t border-[#3D261C]/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-[#8C766B] uppercase">CRAFT STATUS</p>
                <p className="text-sm font-bold text-[#2A1810] uppercase">100% Traceable Sourcing</p>
              </div>

              <div className="flex gap-2">
                <button
                  disabled={activeIndex === 0}
                  onClick={() => {
                    setActiveIndex(prev => Math.max(0, prev - 1));
                    setShowCrafted(false);
                  }}
                  className="w-10 h-10 rounded-full border border-[#3D261C]/20 flex items-center justify-center text-[#2A1810] disabled:opacity-30 hover:bg-[#2A1810] hover:text-white transition-colors"
                >
                  ←
                </button>
                <button
                  disabled={activeIndex === INGREDIENTS_JOURNEY.length - 1}
                  onClick={() => {
                    setActiveIndex(prev => Math.min(INGREDIENTS_JOURNEY.length - 1, prev + 1));
                    setShowCrafted(false);
                  }}
                  className="w-10 h-10 rounded-full border border-[#3D261C]/20 flex items-center justify-center text-[#2A1810] disabled:opacity-30 hover:bg-[#2A1810] hover:text-white transition-colors"
                >
                  →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
