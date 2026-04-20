import React from 'react';
import { CATEGORIES, MOCK_VIDEOS } from '../constants';
import { VideoCard } from '../components/VideoCard';
import { cn } from '../lib/utils';

export const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  return (
    <div className="flex flex-col gap-4 p-4 md:px-6">
      <div className="sticky top-14 bg-yt-black z-30 -mx-4 px-4 md:-mx-6 md:px-6 py-3 flex gap-3 overflow-x-auto no-scrollbar border-b border-yt-border/10">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "category-pill",
              selectedCategory === category && "category-pill-active"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 ml:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 mt-4">
        {MOCK_VIDEOS.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
        {/* Multiplying mock videos for demo */}
        {MOCK_VIDEOS.map((video) => (
          <VideoCard key={video.id + '-2'} video={{...video, id: video.id + '-2'}} />
        ))}
        {MOCK_VIDEOS.map((video) => (
          <VideoCard key={video.id + '-3'} video={{...video, id: video.id + '-3'}} />
        ))}
      </div>
    </div>
  );
};
