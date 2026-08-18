'use client';

import React, { useState } from 'react';
import { Globe, Terminal, Play, Cpu } from 'lucide-react';

export const WebDevMonitor3D: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'App.tsx' | 'Dashboard.tsx' | 'api.ts'>('App.tsx');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="relative w-full rounded-3xl bg-[#EFE8DE] border border-[#111111]/10 p-4 sm:p-6 shadow-sm overflow-hidden space-y-4">
      {/* Required Floating Label: Frontend + Backend + UI/UX */}
      <div className="flex items-center justify-between border-b border-[#111111]/10 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#111111]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
            Code &amp; Live Studio Output
          </span>
        </div>
        <div className="px-3 py-1 rounded-full bg-[#111111] text-[#F7F3EC] text-xs font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Frontend + Backend + UI/UX</span>
        </div>
      </div>

      {/* Editor & Live Output Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Code Editor Side */}
        <div className="md:col-span-6 bg-[#111111] text-[#F7F3EC] p-4 rounded-2xl font-mono text-xs flex flex-col justify-between border border-white/10 space-y-3">
          <div>
            {/* Tabs */}
            <div className="flex items-center gap-1 border-b border-white/10 pb-2 mb-3">
              {(['App.tsx', 'Dashboard.tsx', 'api.ts'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded text-[11px] font-bold transition-all ${
                    activeTab === tab
                      ? 'bg-white text-[#111111]'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Code */}
            <div className="space-y-1 text-[11px] leading-relaxed">
              {activeTab === 'App.tsx' && (
                <>
                  <p className="text-purple-400">import <span className="text-blue-300">&#123; Navigation, Hero &#125;</span> from <span className="text-emerald-300">'@navigate/ui'</span>;</p>
                  <p className="text-blue-400">export function <span className="text-yellow-300">WebEngine</span>() &#123;</p>
                  <p className="text-gray-400 pl-4">// 100/100 Lighthouse Performance</p>
                  <p className="text-emerald-400 pl-4">return &lt;ScalePlatform speed="0.4s" /&gt;;</p>
                  <p className="text-blue-400">&#125;</p>
                </>
              )}
              {activeTab === 'Dashboard.tsx' && (
                <>
                  <p className="text-purple-400">export const <span className="text-yellow-300">Dashboard</span> = () =&gt; (</p>
                  <p className="text-emerald-300 pl-4">&lt;Analytics Users=&#123;48290&#125; /&gt;</p>
                  <p className="text-purple-400">&#41;;</p>
                </>
              )}
              {activeTab === 'api.ts' && (
                <>
                  <p className="text-blue-400">export async function <span className="text-yellow-300">query</span>() &#123;</p>
                  <p className="text-purple-400 pl-4">return await fetch('/api/v1/metrics');</p>
                  <p className="text-blue-400">&#125;</p>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-white/50 border-t border-white/10 pt-2">
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <Play className="w-3 h-3 fill-current" /> Compile Clean
            </span>
            <span>TypeScript 5.4</span>
          </div>
        </div>

        {/* Live Website Preview Output Side */}
        <div className="md:col-span-6 bg-[#F7F3EC] p-4 rounded-2xl border border-[#111111]/10 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between border-b border-[#111111]/10 pb-2">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#8C735B]" />
              <span className="text-xs font-bold">https://client.navigateskill.com</span>
            </div>
            <div className="flex items-center gap-1 bg-[#EFE8DE] p-1 rounded-lg border border-[#111111]/10">
              <button
                onClick={() => setViewMode('desktop')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                  viewMode === 'desktop' ? 'bg-[#111111] text-white' : 'text-[#111111]/70'
                }`}
              >
                Desktop
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                  viewMode === 'mobile' ? 'bg-[#111111] text-white' : 'text-[#111111]/70'
                }`}
              >
                Mobile
              </button>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-[#111111]/10 space-y-2">
            <div className="flex justify-between items-center text-xs font-extrabold text-[#111111]">
              <span>Lighthouse Score</span>
              <span className="text-emerald-600 font-black">100 / 100</span>
            </div>
            <div className="w-full h-2 bg-[#EFE8DE] rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-full animate-pulse" />
            </div>
          </div>

          <div className="bg-[#111111] text-[#F7F3EC] p-2.5 rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4 text-[#D6BFA8]" />
            <span>Interactive Web Development Preview</span>
          </div>
        </div>
      </div>
    </div>
  );
};
