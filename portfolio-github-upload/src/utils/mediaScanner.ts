import fs from 'fs';
import path from 'path';

export interface AutoMedia {
  src: string;
  type: 'image' | 'video';
  filename: string;
  title: string;
}

export function scanMediaDirectory(dirName: string): AutoMedia[] {
  const dirPath = path.join(process.cwd(), 'public', 'assets', dirName);
  
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files = fs.readdirSync(dirPath);
  
  return files
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.mp4', '.webm', '.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
    })
    .map(file => {
      const ext = path.extname(file).toLowerCase();
      const isVideo = ['.mp4', '.webm'].includes(ext);
      
      // Clean up filename for title
      const title = path.basename(file, ext)
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase()); // Title Case
      
      return {
        src: `/assets/${dirName}/${file}`,
        type: isVideo ? 'video' : 'image',
        filename: file,
        title: title
      };
    });
}

// Automatically generate projects from videos and images if projects.ts is empty or if we want to merge them
export function getAutoExperiments(): AutoMedia[] {
  const videos = scanMediaDirectory('videos');
  const images = scanMediaDirectory('images');
  const projectsDir = scanMediaDirectory('projects');
  
  return [...videos, ...images, ...projectsDir];
}
