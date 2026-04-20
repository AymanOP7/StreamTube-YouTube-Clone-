import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import _ReactPlayer from 'react-player';
const ReactPlayer = _ReactPlayer as any;
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Download, 
  MoreHorizontal,
  Bell
} from 'lucide-react';
import { MOCK_VIDEOS } from '../constants';
import { VideoCard } from '../components/VideoCard';
import { formatViews, cn } from '../lib/utils';
import { formatDistanceToNow } from 'date-fns';

export const Watch: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const video = MOCK_VIDEOS.find(v => v.id === id) || MOCK_VIDEOS[0];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 md:px-6 lg:px-12 xl:px-24 max-w-[1700px] mx-auto">
      <div className="flex-1 min-w-0">
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg">
          {/* @ts-ignore */}
          <ReactPlayer
            url={video.videoUrl}
            width="100%"
            height="100%"
            controls
            playing
          />
        </div>

        <h1 className="text-xl font-bold mt-4 line-clamp-2 dark:text-white">
          {video.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
          <div className="flex items-center gap-3">
            <Link to={`/channel/${video.authorId}`} className="w-10 h-10 rounded-full overflow-hidden bg-yt-hover flex-none border border-yt-border">
              <img src={video.authorAvatar} alt={video.authorName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </Link>
            <div className="flex flex-col min-w-0">
              <Link to={`/channel/${video.authorId}`} className="font-bold text-base text-white hover:opacity-80 transition-opacity whitespace-nowrap overflow-hidden text-ellipsis">
                {video.authorName}
              </Link>
              <span className="text-xs text-yt-gray-text">124K subscribers</span>
            </div>
            <button 
              onClick={() => setIsSubscribed(!isSubscribed)}
              className={cn(
                "ml-4 px-4 py-2 rounded-full text-sm font-bold transition-all",
                isSubscribed 
                  ? "bg-yt-hover hover:bg-[#3f3f3f] text-white flex items-center gap-2" 
                  : "bg-white text-black hover:bg-gray-200"
              )}
            >
              {isSubscribed && <Bell className="w-4 h-4" />}
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            <div className="flex items-center bg-yt-hover rounded-full overflow-hidden flex-none border border-yt-border">
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#3f3f3f] transition-colors border-r border-yt-border text-sm font-medium text-white">
                <ThumbsUp className="w-5 h-5" /> 12K
              </button>
              <button className="px-4 py-2 hover:bg-[#3f3f3f] transition-colors">
                <ThumbsDown className="w-5 h-5 text-white" />
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-yt-hover border border-yt-border rounded-full hover:bg-[#3f3f3f] transition-colors text-sm font-medium text-white flex-none">
              <Share2 className="w-5 h-5" /> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-yt-hover border border-yt-border rounded-full hover:bg-[#3f3f3f] transition-colors text-sm font-medium text-white hidden md:flex flex-none">
              <Download className="w-5 h-5" /> Download
            </button>
            <button className="p-2 bg-yt-hover border border-yt-border rounded-full hover:bg-[#3f3f3f] transition-colors flex-none">
              <MoreHorizontal className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yt-hover rounded-xl border border-yt-border/50">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <span>{formatViews(video.views)}</span>
            <span>{formatDistanceToNow(video.createdAt)} ago</span>
            <span className="text-[#3ea6ff] ml-2 font-normal cursor-pointer">#trending #streamtube</span>
          </div>
          <p className="mt-2 text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">
            {video.description}
          </p>
          <button className="mt-2 text-sm font-bold text-white hover:opacity-70 transition-opacity">
            Show more
          </button>
        </div>

        <div className="mt-8 mb-20">
          <h3 className="text-xl font-bold text-white mb-6">Comments</h3>
          <div className="flex gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex-none border border-yt-border" />
            <div className="flex-1 border-b border-yt-border pb-1">
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="w-full bg-transparent outline-none py-1 text-sm text-white focus:border-white transition-colors"
              />
            </div>
          </div>
          {/* Placeholder comments would go here */}
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yt-hover flex-none border border-yt-border" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-white">@user_{i}</span>
                    <span className="text-xs text-yt-gray-text">2 hours ago</span>
                  </div>
                  <p className="text-sm text-white mb-2">Great video! Really helpful tutorial.</p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-xs hover:bg-yt-hover p-1.5 rounded-full transition-colors text-white">
                      <ThumbsUp className="w-4 h-4" /> 42
                    </button>
                    <button className="flex items-center gap-1 text-xs hover:bg-yt-hover p-1.5 rounded-full transition-colors text-white">
                      <ThumbsDown className="w-4 h-4" />
                    </button>
                    <button className="text-xs font-bold px-3 py-1.5 hover:bg-yt-hover rounded-full transition-colors text-white">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:w-[350px] xl:w-[400px] flex-none">
        <h3 className="font-bold mb-4 dark:text-white">Up next</h3>
        <div className="flex flex-col">
          {MOCK_VIDEOS.map((v) => (
            <VideoCard key={v.id} video={v} horizontal />
          ))}
          {/* Repeat for list */}
          {MOCK_VIDEOS.map((v) => (
            <VideoCard key={v.id + '-scroll'} video={v} horizontal />
          ))}
        </div>
      </div>
    </div>
  );
};
