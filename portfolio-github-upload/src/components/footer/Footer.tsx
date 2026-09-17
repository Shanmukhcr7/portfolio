import { siteConfig } from '@/data/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-12 bg-black text-white/50 text-xs tracking-widest uppercase border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          &copy; {currentYear} {siteConfig.name}
        </div>
        
        <div className="flex gap-6">
          <span>{siteConfig.title.split('&')[0].trim()}</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">{siteConfig.title.split('&')[1]?.trim()}</span>
        </div>
        
        <div>
          Built with Next.js
        </div>
      </div>
    </footer>
  );
}
