'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';

export default function Capabilities() {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">
            WHAT I DO<span className="text-white/20">.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-white/20">
          {siteConfig.capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-white/20 cursor-default"
              data-cursor
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="text-white/30 font-mono text-sm mb-4 md:mb-0 group-hover:text-white transition-colors duration-500">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter w-full md:w-3/4 group-hover:translate-x-4 transition-transform duration-500">
                {cap}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
