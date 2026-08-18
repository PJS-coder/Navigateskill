'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TextScrollReveal } from './TextScrollReveal';
import { LineScrollReveal } from './LineScrollReveal';

export const WhatWeOfferSection: React.FC = () => {
  const offerLines = [
    { text: 'WHAT WE OFFER', className: 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#111111] tracking-tighter uppercase font-display leading-[0.95]' },
    { text: 'ELITE MARKETING STRATEGY', className: 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#8C21EF] tracking-tighter uppercase font-display leading-[0.95]' },
    { text: 'HIGH-IMPACT DESIGN', className: 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#111111]/90 tracking-tighter uppercase font-display leading-[0.95]' },
    { text: 'INTELLIGENT AUTOMATION', className: 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#111111]/80 tracking-tighter uppercase font-display leading-[0.95]' },
  ];

  return (
    <section id="what-we-offer" className="py-20 md:py-32 px-6 md:px-12 border-b border-[#111111]/[0.08] bg-[#F7F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* BANNER HEADER ALIGNED TO THE RIGHT SIDE (SECTION 02) */}
        <div className="flex justify-end relative z-20">
          <div className="bg-[#8C21EF] text-[#F7F3EC] rounded-xl px-5 py-2.5 sm:px-6 sm:py-3 flex items-center gap-4 sm:gap-6 shadow-md">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider font-display">
              THE SECOND THING YOU SHOULD KNOW WHAT WE OFFER
            </span>
            <span className="text-xl sm:text-3xl font-black font-display opacity-90 border-l border-white/20 pl-3">
              02
            </span>
          </div>
        </div>

        {/* MASSIVE CENTERED EDITORIAL TYPOGRAPHY WITH OVERFLOW MASK SLIDE ANIMATION */}
        <div className="max-w-5xl mx-auto text-center space-y-8 py-8">
          <LineScrollReveal lines={offerLines} containerClassName="space-y-4" />

          {/* REQUIRED SUBTEXT COPY */}
          <div className="max-w-2xl mx-auto pt-6">
            <TextScrollReveal
              as="p"
              className="text-base sm:text-lg text-[#111111]/80 leading-relaxed font-medium"
              text="We help ambitious brands grow with elite marketing strategy, high-impact design, and intelligent automation — built for the modern digital world."
            />
          </div>

          {/* ACTION BUTTON */}
          <div className="pt-4 flex justify-center">
            <a
              href="#web-development"
              className="group px-8 py-4 rounded-xl bg-[#111111] text-[#F7F3EC] text-xs font-black uppercase tracking-widest hover:bg-[#8C21EF] transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <span>SEE OUR WORK</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
