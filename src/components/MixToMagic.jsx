import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CRAFT_STEPS } from '../data/flavours';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MixToMagic() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = CRAFT_STEPS[activeStepIndex];

  return (
    <section id="craft" className="py-28 bg-[#FAF0E6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E84A5F]">
            THE ARTISANAL PROCESS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#2A1810] font-serif-expressive tracking-tight">
            FROM MIX <br />
            <span className="italic font-normal text-[#E84A5F]">TO MAGIC.</span>
          </h2>
          <p className="text-sm text-[#8C766B] font-sans-clean font-light leading-relaxed">
            Every batch of CREMORA undergoes a meticulous 5-step small-batch churning process.
          </p>
        </div>

        {/* Timeline Sequence Tracker */}
        <div className="grid grid-cols-5 gap-2 md:gap-4 mb-12">
          {CRAFT_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 md:p-4 rounded-2xl text-left transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#2A1810] text-white border-[#2A1810] shadow-lg scale-105'
                    : 'bg-white/70 text-[#3D261C] border-[#3D261C]/10 hover:bg-white'
                }`}
              >
                <span className={`text-[10px] font-bold tracking-widest block ${isActive ? 'text-[#E84A5F]' : 'text-[#8C766B]'}`}>
                  STEP {step.step}
                </span>
                <span className="text-xs md:text-sm font-bold font-serif-expressive hidden sm:block truncate mt-1">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Step Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#3D261C]/05">
          
          {/* Left Column: Craft Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-[#FAF0E6]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep.step}
                  src={activeStep.image}
                  alt={activeStep.title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-[#E84A5F] text-white text-xs font-bold tracking-widest uppercase">
                PHASE {activeStep.step} OF 05
              </div>
            </div>
          </div>

          {/* Right Column: Step Description */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#E84A5F]">
              CRAFT STAGE {activeStep.step}
            </span>

            <h3 className="text-3xl sm:text-4xl font-black font-serif-expressive text-[#2A1810]">
              {activeStep.title}
            </h3>

            <p className="text-base text-[#8C766B] font-sans-clean font-light leading-relaxed">
              {activeStep.desc}
            </p>

            <ul className="space-y-3 pt-4 border-t border-[#3D261C]/10 text-xs font-semibold text-[#2A1810]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E84A5F]" />
                <span>Small batch temperature control at precise -4°C churn setting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E84A5F]" />
                <span>24-Hour slow maturation for maximum aromatic depth</span>
              </li>
            </ul>

            <div className="pt-4 flex items-center justify-between">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                className="px-5 py-2.5 rounded-full border border-[#3D261C]/20 text-xs font-bold uppercase tracking-wider disabled:opacity-30 hover:bg-[#2A1810] hover:text-white transition-colors"
              >
                ← PREVIOUS PHASE
              </button>

              <button
                disabled={activeStepIndex === CRAFT_STEPS.length - 1}
                onClick={() => setActiveStepIndex(prev => Math.min(CRAFT_STEPS.length - 1, prev + 1))}
                className="px-5 py-2.5 rounded-full bg-[#2A1810] text-white text-xs font-bold uppercase tracking-wider disabled:opacity-30 hover:bg-[#E84A5F] transition-colors"
              >
                NEXT PHASE →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
