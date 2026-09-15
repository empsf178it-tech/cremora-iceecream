import React from 'react';

export default function BrandLogo({ className = "w-9 h-9", showText = false, textClassName = "" }) {
  return (
    <div className="inline-flex items-center gap-2.5 group">
      <div className={`relative flex items-center justify-center flex-shrink-0 ${className}`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
        >
          {/* Outer Badge Background */}
          <rect width="40" height="40" rx="12" fill="#2A1810" />
          
          {/* Subtle Outer Glow Border */}
          <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="11.25" stroke="#E84A5F" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* Waffle Cone Base */}
          <path
            d="M20 33.5L12.5 19.5C12.5 19.5 16 21 20 21C24 21 27.5 19.5 27.5 19.5L20 33.5Z"
            fill="#EE8A19"
            stroke="#C86D27"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path
            d="M16 23.5L22 30.5M24 23.5L18 30.5"
            stroke="#FAF0E6"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Strawberry Cream Scoop */}
          <path
            d="M13 18.5C11 16.5 11.5 13 14 11.5C15.5 10.5 17.5 11 19 12C20 9.5 23.5 9 25.5 11C27 12.5 27.5 15 26.5 17C28.5 17.5 29.5 20 28 22C26.5 24 23 23.5 20 23.5C17 23.5 13.5 24 12 22C10.8 20.3 11.5 19 13 18.5Z"
            fill="#E84A5F"
          />

          {/* Velvet Cream Swirl Accent */}
          <path
            d="M15 13.5C17 12 20 11.5 22.5 12.5C24.5 13.5 25.5 15.5 24.5 17.5"
            stroke="#F8B1BA"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          
          {/* Golden Sparkle Star */}
          <circle cx="28.5" cy="9.5" r="1.5" fill="#EE8A19" />
        </svg>
      </div>

      {showText && (
        <span className={`font-bold tracking-wider font-display-bold text-[#2A1810] ${textClassName}`}>
          CREMORA
        </span>
      )}
    </div>
  );
}
