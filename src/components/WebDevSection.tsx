'use client';

import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { WebDevMonitor3D } from './spline/WebDevMonitor3D';
import { TextScrollReveal } from './TextScrollReveal';

interface WebDevSectionProps {
  onOpenConsultation: () => void;
}

export const WebDevSection: React.FC<WebDevSectionProps> = ({ onOpenConsultation }) => {
  const highlights = [
    'Custom Next.js & React Architectures',
    'Sub-Second Page Load Speeds (Lighthouse 100)',
    'Scalable API & Headless CMS Integrations',
    'Fluid Micro-Animations & Responsive Layouts',
  ];

  return (
    <section id="web-development" className="py-24 relative overflow-hidden border-b border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        <div className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              01 / SERVICES
            </span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#111111]/40">
            ENGINEERING &amp; DESIGN
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight font-display uppercase leading-tight">
              Web <br />
              <span className="font-serif-italic font-normal lowercase text-[#8C21EF]">Development</span>
            </h2>

            <TextScrollReveal
              as="p"
              className="text-base sm:text-lg leading-relaxed font-medium"
              text="Create fast, responsive, and scalable websites that combine beautiful design with powerful functionality."
            />

            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-bold text-[#111111]">
                  <div className="w-5 h-5 rounded-full bg-[#8C21EF] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="group px-7 py-3.5 rounded-full bg-[#111111] text-[#F7F3EC] text-xs font-bold uppercase tracking-wider hover:bg-[#8C21EF] transition-all duration-300 flex items-center gap-2"
              >
                <span>Build Your Website</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <WebDevMonitor3D />
          </div>
        </div>
      </div>
    </section>
  );
};
