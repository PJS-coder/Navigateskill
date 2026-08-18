'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AppDevLaptopPhone3D } from './spline/AppDevLaptopPhone3D';
import { TextScrollReveal } from './TextScrollReveal';

interface AppDevSectionProps {
  onOpenConsultation: () => void;
}

export const AppDevSection: React.FC<AppDevSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="app-development" className="py-24 relative overflow-hidden border-b border-[#111111]/10 bg-[#EFE8DE]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        <div className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              02 / SERVICES
            </span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#111111]/40">
            NATIVE &amp; CROSS-PLATFORM
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <AppDevLaptopPhone3D />
          </div>

          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight font-display uppercase leading-tight">
              App <br />
              <span className="font-serif-italic font-normal lowercase text-[#8C21EF]">Development</span>
            </h2>

            <TextScrollReveal
              as="p"
              className="text-base sm:text-lg leading-relaxed font-medium"
              text="Build seamless mobile experiences with modern technologies, real-time functionality, and intuitive user interfaces."
            />

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/80 border border-[#111111]/10 shadow-xs">
                <div className="text-xs font-extrabold text-[#111111] mb-1 uppercase tracking-wider">Native Performance</div>
                <div className="text-xs text-[#111111]/70">60 FPS smooth animations &amp; haptic feedback.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/80 border border-[#111111]/10 shadow-xs">
                <div className="text-xs font-extrabold text-[#111111] mb-1 uppercase tracking-wider">Real-Time DB Sync</div>
                <div className="text-xs text-[#111111]/70">Instant offline support and WebSocket push.</div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="group px-7 py-3.5 rounded-full bg-[#111111] text-[#F7F3EC] text-xs font-bold uppercase tracking-wider hover:bg-[#8C21EF] transition-all duration-300 flex items-center gap-2"
              >
                <span>Launch Mobile App</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
