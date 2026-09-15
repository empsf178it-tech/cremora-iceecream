import React from 'react';
import { motion } from 'framer-motion';
import { JOY_MOMENTS } from '../data/flavours';
import { Heart } from 'lucide-react';

export default function JoyMoments() {
  return (
    <section id="moments" className="py-28 bg-[#FAF0E6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#E84A5F]">
            LIFESTYLE & EMOTION
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#2A1810] font-serif-expressive tracking-tight leading-tight">
            ICE CREAM BELONGS <br />
            <span className="text-[#E84A5F] italic font-normal">IN THE MOMENTS BETWEEN.</span>
          </h2>
          <p className="text-sm md:text-base text-[#8C766B] font-sans-clean font-light leading-relaxed max-w-lg mx-auto">
            Not just for celebrations or special occasions — CREMORA is made for the unhurried moments of daily life.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOY_MOMENTS.map((moment, idx) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-[#2A1810] shadow-xl cursor-pointer"
            >
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-full object-cover group-hover:scale-110 opacity-90 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1810] via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                <div className="flex items-center gap-1.5 text-[#E84A5F]">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">MOMENT 0{moment.id}</span>
                </div>
                <h3 className="text-xl font-bold font-serif-expressive">
                  {moment.title}
                </h3>
                <p className="text-xs text-[#D4C5B9] font-sans-clean font-light leading-relaxed">
                  {moment.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
