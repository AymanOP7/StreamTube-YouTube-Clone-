import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { VideoCard } from '../components/VideoCard';
import { MOCK_VIDEOS } from '../constants';
import { cn } from '../lib/utils';

export const Profile: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = React.useState('videos');

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Please sign in to view your profile</h2>
      </div>
    );
  }

  const userVideos = MOCK_VIDEOS.filter(v => v.authorId === user.id);

  return (
    <div className="flex flex-col">
      <div className="p-4 md:p-8 flex flex-col md:flex-row items-center gap-6 border-b border-yt-border">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-none border border-yt-border">
          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-center md:items-start text-white">
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-yt-gray-text">@{user.id} • 1.2K subscribers • 15 videos</p>
          <p className="mt-2 text-sm max-w-lg text-center md:text-left text-gray-300">
            Passionate about technology and building cool stuff. Welcome to my channel!
          </p>
          <div className="flex gap-2 mt-4">
            <button className="px-4 py-2 bg-yt-hover text-sm font-bold rounded-full hover:bg-[#3f3f3f] text-white">
              Customize channel
            </button>
            <button className="px-4 py-2 bg-yt-hover text-sm font-bold rounded-full hover:bg-[#3f3f3f] text-white">
              Manage videos
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 border-b border-yt-border flex gap-6 mt-2 overflow-x-auto no-scrollbar">
        {['Home', 'Videos', 'Shorts', 'Playlists', 'Community', 'Channels', 'About'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={cn(
              "pb-3 text-sm font-medium transition-colors border-b-2 whitespace-nowrap",
              activeTab === tab.toLowerCase()
                ? "border-white text-white"
                : "border-transparent text-yt-gray-text hover:text-white"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 md:p-8">
        {activeTab === 'videos' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
            {MOCK_VIDEOS.map((video) => (
              <VideoCard key={video.id + '-profile'} video={video} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-gray-500">
            No content yet in this tab.
          </div>
        )}
      </div>
    </div>
  );
};
