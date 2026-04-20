import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  Search, 
  Mic, 
  Video, 
  Bell, 
  User as UserIcon,
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  History,
  Clapperboard,
  Gamepad2,
  Trophy,
  Music2,
  Flame,
  UserCircle,
  LogOut
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';

export const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { user, signIn, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-yt-black flex items-center justify-between px-4 z-50 shrink-0">
      <div className="flex items-center gap-4 w-1/4">
        <button className="p-2 hover:bg-yt-hover rounded-full transition-colors">
          <Menu className="w-6 h-6 text-white" />
        </button>
        <Link to="/" className="flex items-center gap-1">
          <div className="w-8 h-6 bg-red-600 rounded-md flex items-center justify-center">
            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">YouTube</span>
        </Link>
      </div>

      <div className="flex-1 max-w-[720px] flex items-center gap-4">
        <form onSubmit={handleSearch} className="flex-1 flex max-w-[600px] ml-8">
          <div className="flex-1 flex items-center bg-[#121212] border border-yt-border rounded-l-full px-4 h-10">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent w-full outline-none text-white text-sm"
            />
          </div>
          <button type="submit" className="w-16 h-10 bg-[#222] border border-l-0 border-yt-border rounded-r-full flex items-center justify-center hover:bg-[#2c2c2c] transition-colors">
            <Search className="w-5 h-5 text-white" />
          </button>
        </form>
        <button className="p-2.5 bg-[#181818] rounded-full hover:bg-yt-hover transition-colors hidden sm:block">
          <Mic className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex items-center justify-end gap-3 w-1/4 ml-4">
        {user ? (
          <>
            <button className="p-2 hover:bg-yt-hover rounded-full transition-colors hidden sm:block">
              <Video className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 hover:bg-yt-hover rounded-full transition-colors hidden sm:block">
              <Bell className="w-5 h-5 text-white" />
            </button>
            <div className="relative group">
              <button className="w-8 h-8 rounded-full overflow-hidden border border-yt-border cursor-pointer">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </button>
              <div className="absolute top-10 right-0 w-48 bg-yt-hover shadow-2xl rounded-xl border border-yt-border hidden group-hover:block p-2 z-[60]">
                <Link to="/profile" className="flex items-center gap-3 p-2 hover:bg-[#3f3f3f] rounded-lg text-sm text-white">
                  <UserCircle className="w-5 h-5" /> Profile
                </Link>
                <button onClick={signOut} className="w-full flex items-center gap-3 p-2 hover:bg-[#3f3f3f] rounded-lg text-sm text-red-500">
                  <LogOut className="w-5 h-5" /> Sign Out
                </button>
              </div>
            </div>
          </>
        ) : (
          <button 
            onClick={signIn}
            className="flex items-center gap-2 px-3 py-1.5 border border-yt-border rounded-full text-[#3ea6ff] font-medium hover:bg-[#263850] transition-colors text-sm"
          >
            <UserCircle className="w-5 h-5" /> Sign In
          </button>
        )}
      </div>
    </nav>
  );
};


export const Sidebar: React.FC = () => {
  const sections = [
    {
      items: [
        { icon: Home, label: 'Home', path: '/', active: true },
        { icon: Compass, label: 'Shorts', path: '/shorts' },
        { icon: Clapperboard, label: 'Subscriptions', path: '/subscriptions' },
      ]
    },
    {
      title: 'You',
      items: [
        { icon: History, label: 'History', path: '/history' },
        { icon: PlaySquare, label: 'Playlists', path: '/playlists' },
        { icon: Video, label: 'Your videos', path: '/my-videos' },
        { icon: Clock, label: 'Watch later', path: '/watch-later' },
        { icon: ThumbsUp, label: 'Liked videos', path: '/liked' },
      ]
    },
    {
      title: 'Explore',
      items: [
        { icon: Flame, label: 'Trending', path: '/trending' },
        { icon: Music2, label: 'Music', path: '/music' },
        { icon: Gamepad2, label: 'Gaming', path: '/gaming' },
        { icon: Trophy, label: 'Sports', path: '/sports' },
      ]
    }
  ];

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-60 bg-yt-black flex flex-col shrink-0 px-3 pt-2 overflow-y-auto hidden lg:block z-40 scrollbar-hide">
      <div className="flex flex-col gap-1 pr-2">
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-1 mb-2">
            {section.title && (
              <div className="px-3 pb-2 mt-2 text-base font-semibold text-white">
                {section.title}
              </div>
            )}
            <ul className="flex flex-col gap-1">
              {section.items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-5 p-3 rounded-xl transition-colors text-sm text-white",
                      item.active 
                        ? "bg-yt-hover font-bold" 
                        : "hover:bg-yt-hover"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {idx < sections.length - 1 && <hr className="border-yt-border my-2 mx-1" />}
          </div>
        ))}
        
        <div className="flex flex-col gap-1 mt-2 mb-8">
          <div className="px-3 pb-2 text-base font-semibold text-white">Subscriptions</div>
          <div className="flex items-center gap-3 p-3 rounded-xl sidebar-item cursor-pointer hover:bg-yt-hover transition-colors">
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <span className="text-sm text-white">Figma Designer</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl sidebar-item cursor-pointer hover:bg-yt-hover transition-colors">
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <span className="text-sm text-white">Tech Reviews</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl sidebar-item cursor-pointer hover:bg-yt-hover transition-colors">
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
            <span className="text-sm text-white">Lo-fi Beats</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
