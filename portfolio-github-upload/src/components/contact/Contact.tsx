'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-48 px-6 md:px-12 bg-black text-white relative border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12"
            >
              LET&apos;S<br />
              CREATE<br />
              <span className="text-white/50">SOMETHING</span><br />
              EXTRA-<br />ORDINARY.
            </motion.h2>

            <motion.a 
              href={`mailto:${siteConfig.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-4 bg-white text-black px-8 py-5 rounded-full font-bold text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
              data-cursor
            >
              START A PROJECT
              <ArrowUpRight size={20} />
            </motion.a>
          </div>

          <div className="flex flex-col justify-end lg:pl-24 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6 font-semibold">Contact</h3>
              <a 
                href={`mailto:${siteConfig.email}`} 
                className="text-2xl md:text-4xl font-display font-medium hover:text-white/70 transition-colors"
                data-cursor
              >
                {siteConfig.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6 font-semibold">Socials</h3>
              <div className="flex flex-col gap-4">
                {Object.entries(siteConfig.social).map(([platform, url]) => (
                  <a 
                    key={platform} 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl font-display font-medium capitalize flex items-center justify-between border-b border-white/20 pb-4 hover:border-white transition-colors group"
                    data-cursor
                  >
                    <span>{platform}</span>
                    <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
