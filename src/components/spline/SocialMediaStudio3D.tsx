'use client';

import React, { useState, useEffect } from 'react';
import { Video, Play, Music, TrendingUp } from 'lucide-react';
import type { ReelPlatform } from '../../types';

export const SocialMediaStudio3D: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'instagram' | 'facebook' | 'youtube'>('instagram');
  const [likes, setLikes] = useState(45200);
  const [reach, setReach] = useState(128400);
  const [followers, setFollowers] = useState(18400);

  // Animated counters increasing slowly
  useEffect(() => {
    const timer = setInterval(() => {
      setLikes((prev) => prev + Math.floor(Math.random() * 8 + 2));
      setReach((prev) => prev + Math.floor(Math.random() * 25 + 5));
      setFollowers((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const platforms: ReelPlatform[] = [
    { id: 'instagram', name: 'Instagram Reels', views: '480.5K', likes: likes.toLocaleString(), shares: '12.4K', color: 'from-pink-500 to-purple-600' },
    { id: 'facebook', name: 'Facebook Video', views: '320.1K', likes: (likes - 4000).toLocaleString(), shares: '8.9K', color: 'from-blue-600 to-indigo-700' },
    { id: 'youtube', name: 'YouTube Shorts', views: '650.0K', likes: (likes + 12000).toLocaleString(), shares: '18.2K', color: 'from-red-600 to-rose-700' },
  ];

  const currentPlatform = platforms.find((p) => p.id === activePlatform)!;

  return (
    <div className="relative w-full rounded-3xl bg-[#EFE8DE] border border-[#111111]/10 p-4 sm:p-6 shadow-sm overflow-hidden space-y-4">
      {/* Platform Selector */}
      <div className="flex items-center justify-between border-b border-[#111111]/10 pb-3">
        <div className="flex items-center gap-2">
          <Video className="w-4 h-4 text-[#8C735B]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
            Content Production Studio
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#F7F3EC] p-1 rounded-full border border-[#111111]/10">
          {(['instagram', 'facebook', 'youtube'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setActivePlatform(p)}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activePlatform === p ? 'bg-[#111111] text-white' : 'text-[#111111]/70'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Reel Recording Phone & Timeline */}
        <div className="md:col-span-6 bg-[#111111] text-white p-4 rounded-2xl border border-white/10 flex flex-col justify-between h-[340px] relative overflow-hidden">
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-extrabold bg-red-600 px-2 py-0.5 rounded-full text-white animate-pulse">
              ● REC 4K 00:28
            </span>
            <span className="text-[10px] font-bold text-[#D6BFA8]">60 FPS</span>
          </div>

          <div className="my-auto text-center py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#D6BFA8] text-[#111111] mx-auto flex items-center justify-center font-bold animate-bounce">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
            <div className="text-xs font-bold">Brand Storytelling Reel</div>
            <div className="text-[10px] text-[#D6BFA8] font-mono">Original Audio • NavigateSkill</div>
          </div>

          {/* Timeline Editor */}
          <div className="bg-[#1A1A1A] p-2.5 rounded-xl border border-white/10 text-[9px] space-y-1 z-10">
            <div className="flex justify-between text-gray-400 font-mono">
              <span className="flex items-center gap-1 text-[#D6BFA8] font-bold">
                <Music className="w-3 h-3" /> Audio Timeline
              </span>
              <span>00:00 - 00:30</span>
            </div>
            <div className="flex items-center gap-1 h-4 bg-black/50 p-1 rounded overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-[#D6BFA8] rounded-full animate-pulse"
                  style={{
                    height: `${Math.floor(Math.sin(i + Date.now() / 500) * 40 + 60)}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Counters & Card */}
        <div className="md:col-span-6 space-y-3 flex flex-col justify-between">
          <div className="bg-[#F7F3EC] p-4 rounded-2xl border border-[#111111]/10 space-y-3">
            <div className="flex justify-between items-center border-b border-[#111111]/10 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                {currentPlatform.name} Card
              </span>
              <span className="text-[10px] bg-[#111111] text-white px-2 py-0.5 rounded-full font-bold">
                Active
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-white p-2.5 rounded-xl border border-[#111111]/10">
                <div className="text-[10px] text-[#111111]/60 font-semibold">Total Views</div>
                <div className="text-base font-black text-[#111111]">{currentPlatform.views}</div>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-[#111111]/10">
                <div className="text-[10px] text-[#111111]/60 font-semibold">Total Shares</div>
                <div className="text-base font-black text-[#8C735B]">{currentPlatform.shares}</div>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] text-[#F7F3EC] p-4 rounded-2xl border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs font-extrabold text-[#D6BFA8]">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" /> Live Growth Metrics
              </span>
              <span className="text-emerald-400 text-[10px]">Updating Live</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                <div className="text-[9px] text-gray-400">Likes</div>
                <div className="text-xs font-extrabold text-white">{likes.toLocaleString()}</div>
              </div>
              <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                <div className="text-[9px] text-gray-400">Reach</div>
                <div className="text-xs font-extrabold text-emerald-400">{reach.toLocaleString()}</div>
              </div>
              <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                <div className="text-[9px] text-gray-400">Followers</div>
                <div className="text-xs font-extrabold text-[#D6BFA8]">+{followers.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
