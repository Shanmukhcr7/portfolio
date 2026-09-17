'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '../project-card/ProjectCard';

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  
  return (
    <section id="work" className="py-24 md:py-48 px-6 md:px-12 relative z-10 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-40"
        >
          <h2 className="font-display text-6xl md:text-8xl font-bold tracking-tighter">
            SELECTED<br />WORK<span className="text-white/20">.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
