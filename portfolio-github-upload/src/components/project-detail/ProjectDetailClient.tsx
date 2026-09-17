'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { useRef } from 'react';

export default function ProjectDetailClient({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="pb-24">
      {/* Hero Header */}
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4 mb-8 text-xs tracking-widest text-white/50 uppercase font-semibold">
            <span>{project.category}</span>
            <div className="w-8 h-[1px] bg-white/20" />
            <span>{project.year}</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12">
            {project.title.toUpperCase()}
          </h1>
        </motion.div>
      </div>

      {/* Main Media */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[60vh] md:h-[85vh] relative"
      >
        {project.video ? (
          <video
            src={project.video}
            poster={project.heroImage}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>

      {/* Content Grid */}
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl font-display font-medium leading-relaxed tracking-tight text-white/90">
                {project.description}
              </h2>
            </motion.div>
          </div>

          <div className="lg:col-span-3 lg:col-start-10 flex flex-col gap-12 border-t lg:border-t-0 border-white/10 pt-12 lg:pt-0">
            {project.client && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-[10px] tracking-widest uppercase text-white/40 font-semibold mb-3">Client</h3>
                <p className="text-sm font-medium">{project.client}</p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-[10px] tracking-widest uppercase text-white/40 font-semibold mb-3">Role</h3>
              <p className="text-sm font-medium">{project.category}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-[10px] tracking-widest uppercase text-white/40 font-semibold mb-3">Tools / Tech</h3>
              <ul className="flex flex-col gap-2">
                {project.tools.map((tool, i) => (
                  <li key={i} className="text-sm font-medium">{tool}</li>
                ))}
              </ul>
            </motion.div>
            
            {project.projectUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-4"
              >
                <a 
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white/20 px-6 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors"
                  data-cursor
                >
                  Visit Project
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="container mx-auto px-6 md:px-12 py-12 flex flex-col gap-8 md:gap-16">
          {project.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="w-full relative aspect-[16/9] md:aspect-[21/9] bg-white/5"
            >
              <img
                src={image}
                alt={`${project.title} gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
