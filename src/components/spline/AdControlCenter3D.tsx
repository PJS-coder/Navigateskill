'use client';

import React, { useState } from 'react';
import { BarChart3, Bell, Users, ArrowUpRight } from 'lucide-react';
import type { CampaignData } from '../../types';

export const AdControlCenter3D: React.FC = () => {
  const [activeCampaigns, setActiveCampaigns] = useState<CampaignData[]>([
    { id: '1', name: 'Google Search — High Intent', platform: 'Google Ads', budget: 12500, roas: 5.4, ctr: 6.2, status: 'Active', conversions: 1420 },
    { id: '2', name: 'Meta Advantage+ Reels Ad', platform: 'Meta Ads', budget: 18000, roas: 4.6, ctr: 4.8, status: 'Active', conversions: 2150 },
    { id: '3', name: 'Omnichannel Retargeting', platform: 'TikTok Ads', budget: 8500, roas: 4.2, ctr: 5.1, status: 'Optimizing', conversions: 980 },
  ]);

  const [notification] = useState<string>('AI Auto-Optimized Bidding (+18.4% ROAS)');

  const toggleCampaignStatus = (id: string) => {
    setActiveCampaigns((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === 'Active' ? 'Paused' : 'Active' }
          : c
      )
    );
  };

  return (
    <div className="relative w-full rounded-3xl bg-[#EFE8DE] border border-[#111111]/10 p-4 sm:p-6 shadow-sm overflow-hidden space-y-4">
      {/* Required Floating Labels */}
      <div className="flex flex-wrap gap-2">
        {['Google Ads', 'Meta Ads', 'Analytics', 'Performance', 'Optimization'].map((label) => (
          <span
            key={label}
            className="px-3.5 py-1 rounded-full bg-[#F7F3EC] text-[#111111] text-xs font-extrabold uppercase tracking-wider border border-[#111111]/10 shadow-2xs"
          >
            {label}
          </span>
        ))}
      </div>

      <div className="bg-[#111111] text-[#F7F3EC] rounded-2xl p-4 sm:p-5 border border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#D6BFA8] text-[#111111] flex items-center justify-center font-bold">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-white">Navigate Skill Control Center</div>
              <div className="text-[10px] text-[#D6BFA8] font-medium">Fully Managed Client Enterprise Portal</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold">
            <Bell className="w-3 h-3 animate-bounce" />
            <span>{notification}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#1A1A1A] p-3 rounded-xl border border-white/5 space-y-1">
            <div className="text-[10px] text-gray-400 font-medium">Blended ROAS</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 flex items-center gap-1">
              4.8x <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-[9px] text-emerald-400/80 font-mono">+0.6x vs target</div>
          </div>

          <div className="bg-[#1A1A1A] p-3 rounded-xl border border-white/5 space-y-1">
            <div className="text-[10px] text-gray-400 font-medium">Click-Through (CTR)</div>
            <div className="text-xl sm:text-2xl font-black text-[#D6BFA8]">5.2%</div>
            <div className="text-[9px] text-gray-400 font-mono">Industry avg 1.8%</div>
          </div>

          <div className="bg-[#1A1A1A] p-3 rounded-xl border border-white/5 space-y-1">
            <div className="text-[10px] text-gray-400 font-medium">Ad Revenue</div>
            <div className="text-xl sm:text-2xl font-black text-white">$142,850</div>
            <div className="text-[9px] text-emerald-400 font-mono">Scaling smoothly</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold text-[#D6BFA8] uppercase tracking-wider flex justify-between items-center">
            <span>Live Campaigns</span>
            <span className="text-[10px] text-gray-400">Client Account #8492</span>
          </div>

          {activeCampaigns.map((c) => (
            <div
              key={c.id}
              className="bg-[#181818] p-3 rounded-xl border border-white/5 flex items-center justify-between gap-2 hover:border-[#D6BFA8]/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleCampaignStatus(c.id)}
                  className={`px-2 py-1 rounded text-[9px] font-bold transition-colors ${
                    c.status === 'Active'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
                  }`}
                >
                  {c.status}
                </button>
                <div>
                  <div className="text-xs font-bold text-white">{c.name}</div>
                  <div className="text-[10px] text-gray-400">
                    Budget: ${c.budget.toLocaleString()} • Conv: {c.conversions}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-black text-[#D6BFA8]">ROAS {c.roas}x</div>
                <div className="text-[10px] text-gray-400">CTR {c.ctr}%</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#222] p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-gray-300">
            <Users className="w-4 h-4 text-[#D6BFA8]" />
            <span>Navigate Skill Strategist &amp; Media Buyer Assigned</span>
          </div>
          <span className="text-emerald-400 font-bold text-[11px]">Handling Everything 100%</span>
        </div>
      </div>
    </div>
  );
};
