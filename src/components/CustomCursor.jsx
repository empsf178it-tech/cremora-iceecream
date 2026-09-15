import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ cursorState }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable on desktop fine pointers
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, [data-cursor]');
      setIsHovered(!!isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isTaste = cursorState === 'TASTE';
  const isDiscover = cursorState === 'DISCOVER';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full transition-colors duration-300"
      animate={{
        x: mousePosition.x - (isTaste || isDiscover ? 36 : isHovered ? 20 : 8),
        y: mousePosition.y - (isTaste || isDiscover ? 36 : isHovered ? 20 : 8),
        width: isTaste || isDiscover ? 72 : isHovered ? 40 : 16,
        height: isTaste || isDiscover ? 72 : isHovered ? 40 : 16,
        backgroundColor: isTaste
          ? 'rgba(232, 74, 95, 0.9)'
          : isDiscover
          ? 'rgba(42, 24, 16, 0.9)'
          : isHovered
          ? 'rgba(42, 24, 16, 0.15)'
          : '#2A1810',
        scale: 1,
      }}
      transition={{
        type: 'spring',
        damping: 28,
        stiffness: 350,
        mass: 0.4,
      }}
    >
      {(isTaste || isDiscover) && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-white text-xs font-bold tracking-widest uppercase font-sans-clean"
        >
          {cursorState}
        </motion.span>
      )}
    </motion.div>
  );
}
