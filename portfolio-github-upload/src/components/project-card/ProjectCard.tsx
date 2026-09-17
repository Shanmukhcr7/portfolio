'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import Link from 'next/link';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center w-full my-24 md:my-48`}
    >
      <div className="w-full md:w-3/5 group">
        <Link href={`/work/${project.slug}`}>
          <div 
            className="relative overflow-hidden w-full aspect-[4/3] md:aspect-video rounded-xl bg-white/5"
            data-cursor
            data-cursor-text="VIEW"
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
                  loading="lazy"
                />
              )}
            </motion.div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          </div>
        </Link>
      </div>

      <div className="w-full md:w-2/5 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4 text-xs tracking-widest text-white/50 uppercase font-semibold">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div className="w-8 h-[1px] bg-white/20" />
          <span>{project.category}</span>
          <span className="ml-auto">{project.year}</span>
        </div>
        
        <Link href={`/work/${project.slug}`}>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 group-hover:opacity-70 transition-opacity">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-md">
          {project.shortDescription}
        </p>

        <Link 
          href={`/work/${project.slug}`}
          className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase w-fit"
          data-cursor
        >
          <span className="mr-4 group-hover:mr-6 transition-all">Explore Project</span>
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all" />
        </Link>
      </div>
    </motion.div>
  );
}
