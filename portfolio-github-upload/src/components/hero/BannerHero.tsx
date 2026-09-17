'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BannerHero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] bg-black flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/banner_clean.jpg" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full py-12">
          
          {/* Left Column - Main Text */}
          <div className="flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-white/80 font-mono text-lg md:text-xl mb-4 tracking-wide">Hi, I&apos;m</p>
              
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] mb-6">
                VEEREPALLI<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  SHANMUKH
                </span>
              </h1>

              <div className="flex flex-wrap gap-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-8">
                <span>AI ENTHUSIAST</span>
                <span>|</span>
                <span>DEVELOPER</span>
                <span>|</span>
                <span>CREATOR</span>
                <span>|</span>
                <span>PROBLEM SOLVER</span>
              </div>

              <p className="text-white/70 max-w-md text-sm md:text-base leading-relaxed mb-10 border-l-2 border-purple-500/50 pl-4">
                Building ideas with AI, code and creativity to make a better tomorrow.
              </p>

              <div className="flex flex-wrap gap-4 mb-16 md:mb-24">
                <a 
                  href="#work"
                  className="bg-white text-black px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-white/90 transition-colors flex items-center gap-2"
                  data-cursor
                >
                  View My Work
                  <ArrowRight size={16} />
                </a>
                <Link 
                  href="/about#contact"
                  className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center justify-center"
                  data-cursor
                >
                  Let&apos;s Connect
                </Link>
              </div>

              {/* Bottom Stats Row - Moved into normal flow to prevent overlapping */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-12 md:gap-24"
              >
                <div className="flex flex-col">
                  <span className="text-white/50 text-xs tracking-widest uppercase mb-1">Projects</span>
                  <span className="font-display font-bold text-2xl md:text-3xl">20+</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-white/50 text-xs tracking-widest uppercase mb-1">Always</span>
                  <span className="font-display font-bold text-2xl md:text-3xl">Learning</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-white/50 text-xs tracking-widest uppercase mb-1">Ideas</span>
                  <span className="font-display font-bold text-2xl md:text-3xl text-purple-400">Code</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Quotes & Floating Elements */}
          <div className="hidden lg:flex flex-col justify-end items-end h-full pb-24">
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-right"
            >
              <h2 className="font-display text-4xl italic text-white/80 leading-tight">
                "Better<br />
                Ideas<br />
                Brighter<br />
                Tomorrow"
              </h2>
              <p className="text-white/40 mt-4 font-mono text-sm">— Shanmukh</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
