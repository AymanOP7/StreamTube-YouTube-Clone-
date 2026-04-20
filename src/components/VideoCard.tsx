import React from 'react';
import { Link } from 'react-router-dom';
import { MoreVertical } from 'lucide-react';
import { cn, formatViews } from '../lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  horizontal?: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, horizontal = false }) => {
  if (horizontal) {
    return (
      <Link to={`/watch/${video.id}`} className="flex gap-2 group mb-3">
        <div className="relative flex-none w-40 aspect-video rounded-xl overflow-hidden bg-[#222]">
          <img 
            src={video.thumbnailUrl} 
            alt={video.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-1.5 right-1.5 px-1 bg-black/80 text-white text-[10px] font-bold rounded">
            {video.duration}
          </div>
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="text-sm font-semibold line-clamp-2 leading-tight text-white">
            {video.title}
          </h3>
          <div className="text-[11px] text-yt-gray-text">
            <div className="hover:text-white transition-colors">{video.authorName}</div>
            <div>{formatViews(video.views)} • {formatDistanceToNow(video.createdAt)} ago</div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="flex flex-col gap-3 group">
      <Link to={`/watch/${video.id}`} className="relative aspect-video rounded-xl overflow-hidden bg-[#222]">
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-white text-xs font-bold rounded">
          {video.duration}
        </div>
      </Link>
      
      <div className="flex gap-3">
        <Link to={`/channel/${video.authorId}`} className="flex-none w-9 h-9 rounded-full overflow-hidden bg-yt-hover">
          <img 
            src={video.authorAvatar} 
            alt={video.authorName} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
        </Link>
        
        <div className="flex-1 min-w-0">
          <Link to={`/watch/${video.id}`}>
            <h3 className="font-semibold line-clamp-2 leading-snug text-white mb-1 group-hover:text-blue-400 transition-colors">
              {video.title}
            </h3>
          </Link>
          <div className="text-sm text-yt-gray-text">
            <Link to={`/channel/${video.authorId}`} className="hover:text-white transition-colors block">
              {video.authorName}
            </Link>
            <div className="flex items-center gap-1">
              <span>{formatViews(video.views)}</span>
              <span>•</span>
              <span>{formatDistanceToNow(video.createdAt)} ago</span>
            </div>
          </div>
        </div>
        
        <button className="flex-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-yt-hover self-start opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="w-5 h-5 text-yt-gray-text" />
        </button>
      </div>
    </div>
  );
};
