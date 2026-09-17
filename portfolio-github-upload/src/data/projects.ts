export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  shortDescription: string;
  heroImage: string;
  thumbnail: string;
  video?: string;
  gallery: string[];
  tools: string[];
  client?: string;
  featured: boolean;
  projectUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'luxury-fragrance-film',
    title: 'Luxury Fragrance Film',
    category: 'AI Filmmaking',
    year: '2026',
    shortDescription: 'A cinematic exploration of scent through generative AI.',
    description: 'An experimental brand commercial pushing the boundaries of AI video generation. The project explores microscopic landscapes, fluid dynamics, and ethereal lighting to visualize the essence of a luxury fragrance. Created entirely with prompt-based generation and advanced post-production compositing.',
    heroImage: '/assets/projects/fragrance-hero.jpg',
    thumbnail: '/assets/thumbnails/fragrance-thumb.jpg',
    video: '/assets/videos/fragrance-film.mp4',
    gallery: [
      '/assets/projects/fragrance-1.jpg',
      '/assets/projects/fragrance-2.jpg',
      '/assets/projects/fragrance-3.jpg',
    ],
    tools: ['Midjourney', 'Runway Gen-2', 'After Effects', 'Premiere Pro'],
    client: 'Conceptual',
    featured: true,
  },
  {
    slug: 'neon-echoes',
    title: 'Neon Echoes',
    category: 'Creative Direction',
    year: '2025',
    shortDescription: 'A retro-futuristic music visualizer.',
    description: 'A deeply immersive audiovisual experience combining generative AI with audio-reactive motion design. Neon Echoes pulses with the beat, creating a hypnotic, unending journey through a cyberpunk-inspired metropolis.',
    heroImage: '/assets/projects/neon-hero.jpg',
    thumbnail: '/assets/thumbnails/neon-thumb.jpg',
    gallery: [
      '/assets/projects/neon-1.jpg',
      '/assets/projects/neon-2.jpg',
    ],
    tools: ['Stable Diffusion', 'TouchDesigner', 'Blender'],
    featured: true,
  },
  {
    slug: 'ethereal-architecture',
    title: 'Ethereal Architecture',
    category: 'Generative Design',
    year: '2026',
    shortDescription: 'Impossible spaces and dreamlike structures.',
    description: 'A study in impossible architecture. This series uses generative models to explore structural concepts that defy physics—focusing on brutalist concrete interacting with organic bioluminescence.',
    heroImage: '/assets/projects/ethereal-hero.jpg',
    thumbnail: '/assets/thumbnails/ethereal-thumb.jpg',
    gallery: [
      '/assets/projects/ethereal-1.jpg',
      '/assets/projects/ethereal-2.jpg',
    ],
    tools: ['Midjourney', 'Magnific AI', 'Photoshop'],
    featured: false,
  }
];
