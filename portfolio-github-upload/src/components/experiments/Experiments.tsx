'use client';

import { motion } from 'framer-motion';
import { AutoMedia } from '@/utils/mediaScanner';

interface ExperimentsProps {
  media: AutoMedia[];
  hideHeader?: boolean;
}

export default function Experiments({ media, hideHeader = false }: ExperimentsProps) {
  // If no media is found, show placeholders
  const items = media.length > 0 ? media : Array(6).fill(null).map((_, i) => ({
    src: '',
    type: 'placeholder',
    title: `Exp_${i + 1}`,
    filename: ''
  }));

  return (
    <section id="experiments" className={`${hideHeader ? 'pb-24 px-6 md:px-12' : 'py-24 md:py-48 px-6 md:px-12 bg-zinc-900 border-t border-white/5'}`}>
      <div className="container mx-auto">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">
              CREATIVE<br />
              WORK<span className="text-white/20">.</span>
            </h2>
            <p className="mt-6 text-white/50 max-w-md">
              A dynamic showcase of uploaded media. All files added to the assets folder automatically appear here.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, i) => (
            <motion.div
              key={item.filename || i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group flex flex-col gap-4"
            >
              <div 
                className="bg-black rounded-xl overflow-hidden relative aspect-video cursor-pointer border border-white/10"
                data-cursor
                data-cursor-text={item.type === 'video' ? 'PLAY' : 'VIEW'}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
                    <span className="font-display text-2xl md:text-4xl font-bold text-white/10 group-hover:text-white/30 transition-colors duration-500">
                      0{i + 1}
                    </span>
                    <span className="text-[10px] tracking-widest text-white/30 uppercase mt-2">
                      Upload media to assets/
                    </span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </div>
              
              {item.title && (
                <div className="flex justify-between items-center px-2">
                  <h3 className="font-display text-lg font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] tracking-widest uppercase text-white/40">
                    {item.type}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
