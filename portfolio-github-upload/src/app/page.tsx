import BannerHero from '@/components/hero/BannerHero';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';

export default function Home() {
  return (
    <>
      <BannerHero />
      
      {/* Intro statement section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-black flex items-center justify-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center max-w-4xl leading-[1.1]">
          I BUILD STORIES<br />
          THROUGH TECHNOLOGY,<br />
          <span className="text-white/40">DESIGN AND MOTION.</span>
        </h2>
      </section>

      <Projects />
      <Contact />
    </>
  );
}
