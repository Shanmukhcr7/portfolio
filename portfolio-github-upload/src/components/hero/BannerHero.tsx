'use client';

import { motion } from 'framer-motion';

export default function BannerHero() {
  return (
    <section className="relative w-full pt-20 md:pt-24 bg-black flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1920px] mx-auto relative group"
      >
        <img 
          src="/assets/images/banner.png" 
          alt="Shanmukh Portfolio Banner" 
          className="w-full h-auto object-cover"
        />
        
        {/* Invisible clickable overlays over the buttons in the image */}
        <div className="absolute inset-0 w-full h-full">
          {/* View My Work button area approx */}
          <a 
            href="#work" 
            className="absolute"
            style={{ 
              left: '4%', 
              top: '60%', 
              width: '12%', 
              height: '8%',
              cursor: 'pointer'
            }}
            aria-label="View My Work"
          />
          {/* Let's Connect button area approx */}
          <a 
            href="/about#contact" 
            className="absolute"
            style={{ 
              left: '18%', 
              top: '60%', 
              width: '12%', 
              height: '8%',
              cursor: 'pointer'
            }}
            aria-label="Let's Connect"
          />
        </div>
      </motion.div>
    </section>
  );
}
