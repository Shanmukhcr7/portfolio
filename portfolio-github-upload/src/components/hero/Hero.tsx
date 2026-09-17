'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import HeroScene from '../3d/HeroScene';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {mounted && <HeroScene />}
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 flex flex-wrap justify-center gap-2 md:gap-4 text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-white/70"
        >
          {siteConfig.capabilities.slice(0, 3).map((cap, i) => (
            <span key={i} className="flex items-center">
              {cap}
              {i < 2 && <span className="mx-2 md:mx-4 opacity-30">•</span>}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="overflow-hidden mb-8 w-full max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
        >
          {siteConfig.about.introduction.split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="inline-block font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9] mr-3 md:mr-6 lg:mr-8"
              variants={{
                hidden: { y: '120%' },
                visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-xl text-sm md:text-base text-white/60 font-medium mb-12"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a 
            href="#work"
            className="px-8 py-4 bg-white text-black font-semibold text-xs tracking-[0.2em] hover:bg-white/90 transition-colors rounded-full"
            data-cursor
            data-cursor-text="EXPLORE"
          >
            EXPLORE MY WORK
          </a>
          <a 
            href="#about"
            className="px-8 py-4 border border-white/20 text-white font-semibold text-xs tracking-[0.2em] hover:bg-white/5 transition-colors rounded-full"
            data-cursor
          >
            ABOUT ME
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            className="w-full h-full bg-white absolute top-0"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
