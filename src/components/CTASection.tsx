'use client';

import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact-cta" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-[#F7F3EC] border-b border-[#111111]/[0.08]">
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12">

        {/* NO BACKGROUND COLOR CONTAINER WITH PURPLE BORDER (PURE TRANSPARENT) */}
        <div className="relative rounded-3xl sm:rounded-[32px] xl:rounded-[40px] border-2 border-[#8C21EF] bg-transparent text-[#111111] p-8 sm:p-12 lg:p-16 xl:p-20 shadow-sm overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#8C21EF]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* LEFT COLUMN: HEADLINE + SUBTEXT */}
          <div className="relative z-10 space-y-3 lg:space-y-4 max-w-2xl xl:max-w-3xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight font-display text-[#111111] leading-tight">
              Ready to transform your <span className="text-[#8C21EF]">digital presence?</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-[#111111]/80 font-medium leading-relaxed">
              Let's build something extraordinary together. Our team is ready to bring your vision to life.
            </p>
          </div>

          {/* RIGHT COLUMN: PURPLE PILL BUTTON */}
          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={onOpenConsultation}
              className="group px-7 py-4 lg:px-10 lg:py-5 rounded-full bg-[#8C21EF] text-white text-xs sm:text-sm lg:text-base font-black uppercase tracking-wider hover:bg-[#7C21EF] transition-all duration-300 shadow-xl flex items-center gap-3 hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              <span>Contact Us Now</span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
