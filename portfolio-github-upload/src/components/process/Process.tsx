'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';

export default function Process() {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex justify-between items-end"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">
            PROCESS<span className="text-white/20">.</span>
          </h2>
          <p className="hidden md:block max-w-xs text-right text-white/50 text-sm">
            A methodical approach to impossible visuals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-24">
          {siteConfig.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-white/10 font-display text-8xl md:text-9xl font-bold absolute -top-16 -left-8 md:-left-12 pointer-events-none group-hover:text-white/20 transition-colors duration-500 z-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="relative z-10 pt-4 border-t border-white/20">
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-white/80 transition-colors">
                  {step}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
