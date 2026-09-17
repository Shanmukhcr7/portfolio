import { scanMediaDirectory } from '@/utils/mediaScanner';
import Experiments from '@/components/experiments/Experiments';

export default function VideosPage() {
  const videos = scanMediaDirectory('videos');

  return (
    <div className="pt-24 bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 pt-12">
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          VIDEOS<span className="text-white/20">.</span>
        </h1>
        <p className="text-white/50 max-w-md mb-12">
          AI filmmaking, commercial work, and motion design projects.
        </p>
      </div>
      <Experiments media={videos} hideHeader={true} />
    </div>
  );
}
