'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-48 px-6 md:px-12 bg-zinc-950 text-white relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-7xl font-bold tracking-tighter sticky top-32"
            >
              ABOUT<br />ME<span className="text-white/20">.</span>
            </motion.h2>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-24">
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6 font-semibold">Introduction</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl font-display leading-tight tracking-tight">
                {siteConfig.about.introduction}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6 font-semibold">Who I Am</h3>
              <p className="text-white/80 leading-relaxed md:text-lg">
                {siteConfig.about.bio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6 font-semibold">My Story</h3>
              <p className="text-white/80 leading-relaxed md:text-lg">
                {siteConfig.about.story}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6 font-semibold">Experience</h3>
              <div className="flex flex-col gap-8 border-t border-white/10 pt-8">
                {siteConfig.experience.map((exp, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-white/10 pb-8 last:border-0 last:pb-0">
                    <div className="text-white/50 font-mono text-sm">{exp.year}</div>
                    <div className="md:col-span-3">
                      <h4 className="font-display text-xl font-bold mb-2 tracking-tight">{exp.role}</h4>
                      <p className="text-white/70 text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
