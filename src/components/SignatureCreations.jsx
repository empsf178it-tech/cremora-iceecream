import React from 'react';
import { motion } from 'framer-motion';
import { SIGNATURE_CREATIONS } from '../data/flavours';
import { Sparkles, Utensils } from 'lucide-react';

export default function SignatureCreations({ onOpenDiscover }) {
  return (
    <section className="py-28 bg-[#FAF0E6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E84A5F]">
            HIGH DESSERT ARTISTRY
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#2A1810] font-serif-expressive tracking-tight">
            SIGNATURE <br />
            <span className="italic font-normal text-[#E84A5F]">CREATIONS.</span>
          </h2>
          <p className="text-sm text-[#8C766B] font-sans-clean font-light leading-relaxed">
            Elevated food compositions crafted to celebrate ice cream as a fine culinary medium.
          </p>
        </div>

        {/* 3 Signature Creations Stack */}
        <div className="space-y-16">
          {SIGNATURE_CREATIONS.map((creation, idx) => {
            const isReverse = idx % 2 !== 0;
            return (
              <motion.div
                key={creation.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#3D261C]/05 ${
                  isReverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-[#FDFBF7]">
                    <img
                      src={creation.image}
                      alt={creation.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#2A1810] text-white text-[10px] font-bold tracking-widest uppercase">
                      COMPOSITION 0{idx + 1}
                    </div>
                  </div>
                </div>

                {/* Text Description Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#E84A5F]">
                    {creation.subtitle}
                  </span>

                  <h3 className="text-4xl md:text-5xl font-black font-serif-expressive text-[#2A1810]">
                    {creation.title}
                  </h3>

                  <p className="text-base text-[#8C766B] font-sans-clean font-light leading-relaxed">
                    {creation.description}
                  </p>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={onOpenDiscover}
                      data-cursor="DISCOVER"
                      className="px-6 py-3 rounded-full bg-[#2A1810] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#E84A5F] transition-colors shadow-md"
                    >
                      EXPLORE SERVING SUGGESTION →
                    </button>
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
