import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FlavourUniverse from './components/FlavourUniverse';
import TheScoop from './components/TheScoop';
import Ingredients from './components/Ingredients';
import MixToMagic from './components/MixToMagic';
import TextureLab from './components/TextureLab';
import JoyMoments from './components/JoyMoments';
import ScoopStories from './components/ScoopStories';
import SignatureCreations from './components/SignatureCreations';
import FinalMoment from './components/FinalMoment';
import Footer from './components/Footer';
import DiscoverModal from './components/DiscoverModal';

export default function App() {
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const [selectedFlavour, setSelectedFlavour] = useState(null);
  const [cursorState, setCursorState] = useState(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const handleOpenDiscover = (flavour = null) => {
    setSelectedFlavour(flavour);
    setDiscoverOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#2A1810] selection:bg-[#E84A5F] selection:text-white font-sans-clean">
      
      {/* Custom Desktop Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Floating Navigation Header */}
      <Navigation onOpenDiscover={() => handleOpenDiscover()} />

      {/* Section 01 — Hero */}
      <Hero onExploreClick={() => handleOpenDiscover()} />

      {/* Section 02 — Flavour Universe */}
      <FlavourUniverse
        onSelectFlavour={(flavour) => handleOpenDiscover(flavour)}
        setCursorState={setCursorState}
      />

      {/* Section 03 — The Scoop */}
      <TheScoop />

      {/* Section 04 — Ingredients */}
      <Ingredients setCursorState={setCursorState} />

      {/* Section 05 — From Mix To Magic */}
      <MixToMagic />

      {/* Section 06 — Texture Lab */}
      <TextureLab />

      {/* Section 07 — The Joy Moments */}
      <JoyMoments />

      {/* Section 08 — Scoop Stories */}
      <ScoopStories
        onSelectFlavour={(flavour) => handleOpenDiscover(flavour)}
        setCursorState={setCursorState}
      />

      {/* Section 09 — Signature Creations */}
      <SignatureCreations onOpenDiscover={() => handleOpenDiscover()} />

      {/* Section 10 — Final Moment */}
      <FinalMoment onOpenDiscover={() => handleOpenDiscover()} />

      {/* Footer */}
      <Footer onOpenDiscover={() => handleOpenDiscover()} />

      {/* Interactive Discover Modal */}
      <DiscoverModal
        isOpen={discoverOpen}
        onClose={() => {
          setDiscoverOpen(false);
          setSelectedFlavour(null);
        }}
        selectedFlavour={selectedFlavour}
      />

    </div>
  );
}
