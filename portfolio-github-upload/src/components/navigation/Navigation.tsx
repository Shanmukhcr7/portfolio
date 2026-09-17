'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'PHOTOS', href: '/photos' },
    { name: 'VIDEOS', href: '/videos' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link 
            href="/" 
            className="hover:opacity-70 transition-opacity flex items-center"
            data-cursor
            onClick={() => setMobileMenuOpen(false)}
          >
            <img 
              src="/assets/logos/logo.png" 
              alt={siteConfig.name} 
              className="h-8 md:h-10 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-xs font-semibold tracking-[0.2em] relative group overflow-hidden"
                data-cursor
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-[120%]">
                  {link.name}
                </span>
                <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-[120%] group-hover:translate-y-0">
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-cursor
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black pt-32 px-6 flex flex-col"
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={link.href}
                    className="font-display text-5xl font-bold tracking-tighter"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="mt-auto mb-12 flex flex-col space-y-4">
              <motion.p 
                className="text-white/50 text-xs tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                SOCIALS
              </motion.p>
              <div className="flex flex-wrap gap-6">
                {Object.entries(siteConfig.social).map(([platform, url], i) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium capitalize"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
