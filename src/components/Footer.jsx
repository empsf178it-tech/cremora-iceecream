import React from 'react';
import { Compass, Sparkles, Share2, Globe } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer({ onOpenDiscover }) {
  return (
    <footer className="bg-[#1A0E0A] text-[#FDFBF7] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info Column */}
          <div className="md:col-span-6 space-y-6">
            <BrandLogo showText textClassName="text-4xl text-white" className="w-11 h-11" />
            <p className="text-sm font-semibold tracking-widest text-[#E84A5F] uppercase">
              A LITTLE MOMENT OF JOY.
            </p>
            <p className="text-xs text-[#8C766B] max-w-sm font-sans-clean font-light leading-relaxed">
              CREMORA is a contemporary premium ice cream brand focused on flavour, texture, freshness and the simple pleasure of eating great ice cream.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#8C766B]">
              NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-xs font-medium tracking-wider">
              <li><a href="#flavours" className="hover:text-[#E84A5F] transition-colors">FLAVOURS</a></li>
              <li><a href="#craft" className="hover:text-[#E84A5F] transition-colors">THE CRAFT</a></li>
              <li><a href="#ingredients" className="hover:text-[#E84A5F] transition-colors">INGREDIENTS</a></li>
              <li><a href="#moments" className="hover:text-[#E84A5F] transition-colors">MOMENTS</a></li>
            </ul>
          </div>

          {/* Social & Experience Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#8C766B]">
              CONNECT
            </h3>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#E84A5F] hover:border-[#E84A5F] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#E84A5F] hover:border-[#E84A5F] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Website" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#E84A5F] hover:border-[#E84A5F] transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenDiscover}
                className="text-xs font-bold tracking-widest text-[#E84A5F] uppercase hover:underline inline-flex items-center gap-1"
              >
                <span>FIND CREMORA NEAR YOU</span>
                <Sparkles className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C766B] font-sans-clean gap-4">
          <p>Made for little moments of joy. © 2026 CREMORA Brand.</p>
          <div className="flex gap-6 text-[10px] tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-white transition-colors">PRESS KIT</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
