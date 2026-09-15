import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Mail, Sparkles, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DiscoverModal({ isOpen, onClose, selectedFlavour }) {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const boutiqueLocations = [
    { city: 'PARIS', address: '14 Rue Saint-Honoré', status: 'Open Today 11am-10pm' },
    { city: 'MILAN', address: 'Via Monte Napoleone 8', status: 'Open Today 10am-9pm' },
    { city: 'LONDON', address: '42 Marylebone High St', status: 'Open Today 11am-10pm' },
    { city: 'NEW YORK', address: '182 Mercer St, SoHo', status: 'Open Today 12pm-11pm' },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setEmailSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#E84A5F', '#6B8E4E', '#EE8A19', '#FAF0E6']
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl p-8 md:p-10 shadow-2xl border border-[#3D261C]/10 z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#FAF0E6] text-[#2A1810] flex items-center justify-center hover:bg-[#2A1810] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="space-y-8">
              
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#E84A5F] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>DISCOVER CREMORA</span>
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-serif-expressive text-[#2A1810] mt-1">
                  FIND YOUR MOMENT.
                </h2>
                <p className="text-sm text-[#8C766B] font-sans-clean mt-2">
                  Explore our boutique locations or subscribe for exclusive seasonal flavour drops.
                </p>
              </div>

              {/* Selected Flavour Highlight if opened from Flavour Universe */}
              {selectedFlavour && (
                <div className="p-4 rounded-2xl bg-[#FAF0E6] flex items-center gap-4 border border-[#3D261C]/05">
                  <img
                    src={selectedFlavour.image}
                    alt={selectedFlavour.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-[#E84A5F] uppercase tracking-wider">SELECTED CREATION</span>
                    <p className="text-base font-bold text-[#2A1810] font-serif-expressive">{selectedFlavour.name}</p>
                    <p className="text-xs text-[#8C766B]">{selectedFlavour.tagline}</p>
                  </div>
                </div>
              )}

              {/* Store Locations */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#2A1810]">
                  FLAGSHIP BOUTIQUES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {boutiqueLocations.map((loc, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#3D261C]/05 flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#E84A5F] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-[#2A1810]">{loc.city}</p>
                        <p className="text-[11px] text-[#8C766B]">{loc.address}</p>
                        <span className="text-[10px] font-semibold text-[#6B8E4E]">{loc.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Join Club */}
              <div className="p-6 rounded-2xl bg-[#2A1810] text-[#FDFBF7] space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#E84A5F]" />
                  <h3 className="text-xs font-bold tracking-widest uppercase text-white">
                    CREMORA JOY CLUB
                  </h3>
                </div>
                <p className="text-xs text-[#D4C5B9]">
                  Get early invitations to seasonal micro-batch launches & pop-up tastings.
                </p>

                {emailSubmitted ? (
                  <div className="p-3 rounded-xl bg-[#6B8E4E]/20 text-[#6B8E4E] text-xs font-bold flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>YOU'RE IN THE CLUB! WELCOME TO CREMORA.</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-full bg-white/10 text-white placeholder-white/50 text-xs focus:outline-none focus:ring-2 focus:ring-[#E84A5F]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#E84A5F] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#2A1810] transition-colors"
                    >
                      JOIN
                    </button>
                  </form>
                )}
              </div>

            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
