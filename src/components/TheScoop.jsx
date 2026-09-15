import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Droplets, Sparkles, Award } from 'lucide-react';

export default function TheScoop() {
  const textureFeatures = [
    {
      icon: Layers,
      title: "AIRY DENSITY",
      desc: "Microscopic churn pockets created through slow low-speed churning for immediate melting bliss."
    },
    {
      icon: Droplets,
      title: "SILK RIBBONS",
      desc: "Warm caramel and dark cocoa folded by hand to create rich flavor contrasts in every bite."
    },
    {
      icon: Sparkles,
      title: "REAL INCLUSIONS",
      desc: "Wood-roasted Bronte pistachios, organic strawberries, and 70% dark chocolate shards."
    },
    {
      icon: Award,
      title: "100% NATURAL",
      desc: "No artificial colorants, no high-fructose corn syrups, no synthetic emulsifiers ever."
    }
  ];

  return (
    <section className="py-28 bg-[#2A1810] text-[#FDFBF7] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(232,74,95,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E84A5F]">
            THE SCOOP MASTERY
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-serif-expressive tracking-tight leading-tight">
            THE PERFECT SCOOP <br />
            <span className="text-[#E84A5F] italic font-normal">IS ALL ABOUT TEXTURE.</span>
          </h2>
          <p className="text-sm md:text-base text-[#D4C5B9] font-sans-clean font-light leading-relaxed max-w-xl mx-auto">
            Sensory perfection happens when micro-churned cream meets perfectly balanced inclusions.
          </p>
        </div>

        {/* Feature Grid & Macro Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Texture Macro Image */}
          <div className="lg:col-span-6 relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src="/images/13.png"
                alt="CREMORA Macro Ice Cream Texture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1810] via-transparent to-transparent opacity-80" />

              {/* Floating Macro Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#E84A5F] uppercase">MACRO SPEC</p>
                  <p className="text-sm font-semibold text-white">Velvety 18% Butterfat Churn</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#E84A5F] text-white text-[10px] font-bold uppercase tracking-wider">
                  CRAFTED
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Texture Highlights */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {textureFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E84A5F]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E84A5F]/20 flex items-center justify-center text-[#E84A5F] mb-4 group-hover:bg-[#E84A5F] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-serif-expressive tracking-wide mb-2 text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#D4C5B9] font-sans-clean font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
