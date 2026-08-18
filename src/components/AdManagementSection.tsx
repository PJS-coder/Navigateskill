'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AdControlCenter3D } from './spline/AdControlCenter3D';
import { TextScrollReveal } from './TextScrollReveal';

interface AdManagementSectionProps {
  onOpenConsultation: () => void;
}

export const AdManagementSection: React.FC<AdManagementSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="ad-management" className="py-24 relative overflow-hidden border-b border-[#111111]/10 bg-[#EFE8DE]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        <div className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              04 / SERVICES
            </span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#111111]/40">
            PERFORMANCE &amp; SCALE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <AdControlCenter3D />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight font-display uppercase leading-tight">
              Ad <br />
              <span className="font-serif-italic font-normal lowercase text-[#8C21EF]">Management</span>
            </h2>

            <TextScrollReveal
              as="p"
              className="text-base sm:text-lg leading-relaxed font-medium"
              text="Manage, optimize, and scale advertising campaigns with data-driven targeting and performance-focused execution."
            />

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-bold text-[#111111]">
                <span className="w-2 h-2 rounded-full bg-[#8C21EF]" />
                <span>Data-Driven Bidding &amp; Budget Optimization</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-[#111111]">
                <span className="w-2 h-2 rounded-full bg-[#8C21EF]" />
                <span>Multi-Channel Attribution (Google + Meta + Retargeting)</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-[#111111]">
                <span className="w-2 h-2 rounded-full bg-[#8C21EF]" />
                <span>Transparent Real-Time Client Dashboards &amp; ROI Reports</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="group px-7 py-3.5 rounded-full bg-[#111111] text-[#F7F3EC] text-xs font-bold uppercase tracking-wider hover:bg-[#8C21EF] transition-all duration-300 flex items-center gap-2"
              >
                <span>Scale Your Ad Campaigns</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
