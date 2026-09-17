import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProjectDetailClient from '@/components/project-detail/ProjectDetailClient';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.shortDescription,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectIndex = projects.findIndex(p => p.slug === params.slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <div className="bg-black min-h-screen text-white pt-24">
      {/* Back to Work Nav */}
      <div className="container mx-auto px-6 md:px-12 py-8 flex justify-between items-center relative z-10">
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:text-white/70 transition-colors"
          data-cursor
        >
          <ArrowLeft size={16} />
          BACK TO WORK
        </Link>
      </div>

      <ProjectDetailClient project={project} />

      {/* Next/Prev Navigation */}
      <div className="border-t border-white/10 mt-24">
        <div className="grid grid-cols-2 divide-x divide-white/10">
          <Link href={`/work/${prevProject.slug}`} className="group relative block">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="px-6 md:px-12 py-16 md:py-24 flex flex-col items-start" data-cursor data-cursor-text="PREV">
              <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-semibold mb-4 flex items-center gap-2">
                <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
                Previous Project
              </span>
              <h3 className="font-display text-2xl md:text-5xl font-bold tracking-tight group-hover:opacity-80 transition-opacity line-clamp-1">
                {prevProject.title}
              </h3>
            </div>
          </Link>
          
          <Link href={`/work/${nextProject.slug}`} className="group relative block text-right">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="px-6 md:px-12 py-16 md:py-24 flex flex-col items-end" data-cursor data-cursor-text="NEXT">
              <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-semibold mb-4 flex items-center gap-2">
                Next Project
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <h3 className="font-display text-2xl md:text-5xl font-bold tracking-tight group-hover:opacity-80 transition-opacity line-clamp-1">
                {nextProject.title}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
