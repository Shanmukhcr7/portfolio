import About from '@/components/about/About';
import Capabilities from '@/components/services/Capabilities';
import Process from '@/components/process/Process';
import Contact from '@/components/contact/Contact';

export default function AboutPage() {
  return (
    <div className="pt-24 bg-black">
      <About />
      <Capabilities />
      <Process />
      
      <section className="py-24 px-6 md:px-12 bg-zinc-950 border-t border-white/5 flex flex-col items-center justify-center text-center">
        <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 font-semibold mb-8">Creative & Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl text-sm md:text-base font-medium text-white/70">
          <span>Next.js</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>Three.js</span>
          <span>Framer Motion</span>
          <span>Tailwind CSS</span>
          <span className="text-white/30">•</span>
          <span>Midjourney</span>
          <span>Runway</span>
          <span>Premiere Pro</span>
          <span>After Effects</span>
        </div>
      </section>

      <Contact />
    </div>
  );
}
