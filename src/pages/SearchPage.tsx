import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DiscoveryService } from '../services/discoveryService';
import { VideoCard } from '../components/VideoCard';
import { Filter } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const results = useMemo(() => {
    return DiscoveryService.searchVideos(query);
  }, [query]);

  return (
    <div className="p-4 md:px-6 lg:px-24 xl:px-48 max-w-[1400px] mx-auto">
      <div className="flex items-center gap-2 mb-4 p-2 hover:bg-yt-hover w-fit rounded-lg cursor-pointer transition-colors text-white">
        <Filter className="w-5 h-5" />
        <span className="text-sm font-semibold">Filters</span>
      </div>

      {results.length > 0 ? (
        <div className="flex flex-col gap-4">
          {results.map((video) => (
            <div key={video.id} className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full md:w-[360px] flex-none">
                <VideoCard video={video} />
              </div>
              <div className="flex-1 mt-2 md:mt-0 text-white">
                <h3 className="text-lg font-semibold line-clamp-2 md:line-clamp-none">
                  {video.title}
                </h3>
                <p className="text-xs text-yt-gray-text mt-1">
                  {video.views.toLocaleString()} views • 2 months ago
                </p>
                <div className="flex items-center gap-2 my-3">
                  <img 
                    src={video.authorAvatar} 
                    alt={video.authorName} 
                    className="w-6 h-6 rounded-full border border-yt-border" 
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs text-yt-gray-text hover:text-white cursor-pointer transition-colors">
                    {video.authorName}
                  </span>
                </div>
                <p className="text-sm text-yt-gray-text line-clamp-2">
                  {video.description}
                </p>
                {video.tags.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {video.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] bg-yt-hover px-2 py-0.5 rounded text-yt-gray-text">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-white">
          <p className="text-xl">No results found for "{query}"</p>
          <p className="text-yt-gray-text mt-2">Try different keywords or check your spelling.</p>
        </div>
      )}
    </div>
  );
};
