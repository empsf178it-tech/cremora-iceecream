import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOOD_CATEGORIES } from '../data/flavours';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ScoopStories({ onSelectFlavour, setCursorState }) {
  const [selectedMoodId, setSelectedMoodId] = useState('fresh');

  const currentMood = MOOD_CATEGORIES.find(m => m.id === selectedMoodId) || MOOD_CATEGORIES[0];

  return (
    <section className="py-28 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E84A5F]">
            EDITORIAL SELECTOR
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#2A1810] font-serif-expressive tracking-tight">
            WHAT ARE YOU <br />
            <span className="italic font-normal text-[#E84A5F]">FEELING TODAY?</span>
          </h2>
          <p className="text-sm text-[#8C766B] font-sans-clean font-light leading-relaxed">
            Select your current mood to reveal your ideal flavour match.
          </p>
        </div>

        {/* Mood Selector Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-16">
          {MOOD_CATEGORIES.map((mood) => {
            const isActive = selectedMoodId === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMoodId(mood.id)}
                className={`px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#2A1810] text-white shadow-xl scale-105'
                    : 'bg-white text-[#3D261C] border border-[#3D261C]/10 hover:bg-[#FAF0E6]'
                }`}
              >
                {mood.label}
              </button>
            );
          })}
        </div>

        {/* Mood Match Flavour Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMoodId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {currentMood.flavours.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setCursorState && setCursorState('TASTE')}
                onMouseLeave={() => setCursorState && setCursorState(null)}
                data-cursor="TASTE"
                className="group cursor-pointer rounded-3xl bg-white p-6 shadow-xl border border-[#3D261C]/05 hover:border-[#E84A5F]/40 transition-all duration-500 flex items-center gap-6"
              >
                <div className="w-28 h-28 rounded-2xl overflow-hidden bg-[#FAF0E6] flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold tracking-widest text-[#E84A5F] uppercase">
                    MATCH 0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-bold font-serif-expressive text-[#2A1810] group-hover:text-[#E84A5F] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#8C766B] font-sans-clean">
                    {item.tagline}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2A1810] pt-2">
                    <span>EXPLORE PROFILE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
