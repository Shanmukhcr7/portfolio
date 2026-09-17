'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Default true to prevent flash
  const [hoverText, setHoverText] = useState('');
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const pathname = usePathname();

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look for data-cursor attribute up the tree
      const cursorEl = target.closest('[data-cursor]');
      
      if (cursorEl) {
        setIsHovering(true);
        const text = cursorEl.getAttribute('data-cursor-text') || '';
        setHoverText(text);
      } else if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
        setHoverText('');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice, mouseX, mouseY, pathname]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-50 flex items-center justify-center text-black font-display text-[8px] tracking-widest font-bold whitespace-nowrap overflow-hidden"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: isHovering ? (hoverText ? 64 : 48) : 16,
        height: isHovering ? (hoverText ? 64 : 48) : 16,
        backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering && hoverText ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {hoverText}
      </motion.span>
    </motion.div>
  );
}
