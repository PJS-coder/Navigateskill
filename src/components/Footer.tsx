'use client';

import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F7F3EC] text-[#111111] relative overflow-hidden pt-12 pb-10 border-t border-[#111111]/[0.1]">

      {/* Subtle Ambient Purple Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8C21EF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">

        {/* MIDDLE NAVIGATION GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm pt-4">

          {/* Column 1: Navigation */}
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              Navigation
            </div>
            <ul className="space-y-2.5 text-[#111111]/75 font-semibold">
              <li><a href="#hero" className="hover:text-[#8C21EF] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#8C21EF] transition-colors">About Us</a></li>
              <li><a href="#what-we-offer" className="hover:text-[#8C21EF] transition-colors">What We Offer</a></li>
              <li><a href="#what-we-do" className="hover:text-[#8C21EF] transition-colors">What We Do</a></li>
              <li><a href="#our-work" className="hover:text-[#8C21EF] transition-colors">Our Work</a></li>
            </ul>
          </div>

          {/* Column 2: Capabilities */}
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              Disciplines
            </div>
            <ul className="space-y-2.5 text-[#111111]/75 font-semibold">
              <li><a href="#our-work" className="hover:text-[#8C21EF] transition-colors">Web Development</a></li>
              <li><a href="#our-work" className="hover:text-[#8C21EF] transition-colors">App Development</a></li>
              <li><a href="#our-work" className="hover:text-[#8C21EF] transition-colors">Social Media Marketing</a></li>
              <li><a href="#our-work" className="hover:text-[#8C21EF] transition-colors">Ad Management & ROAS</a></li>
              <li><a href="#our-work" className="hover:text-[#8C21EF] transition-colors">SEO & Growth</a></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              Connect
            </div>
            <ul className="space-y-2.5 text-[#111111]/75 font-semibold">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#8C21EF] transition-colors inline-flex items-center gap-1">Instagram <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#8C21EF] transition-colors inline-flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#8C21EF] transition-colors inline-flex items-center gap-1">X / Twitter <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#8C21EF] transition-colors inline-flex items-center gap-1">GitHub <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Column 4: Contact Direct */}
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              Contact Direct
            </div>
            <div className="space-y-2 text-[#111111]/75 font-semibold">
              <p className="text-[#111111] font-bold">hello@navigateskill.com</p>
              <p>+91 (11) 4920-8800</p>
              <p className="text-xs text-[#111111]/50 pt-2">Connaught Place, New Delhi 110001</p>
            </div>
          </div>

        </div>

        {/* LIGHT WATERMARK "NAVIGATE" TYPOGRAPHY */}
        <div className="relative py-2 select-none overflow-hidden text-center border-t border-b border-[#111111]/10">
          <h2 className="text-[4.5rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem] font-black text-[#111111]/[0.05] tracking-tight uppercase font-display leading-none select-none pointer-events-none">
            NAVIGATE
          </h2>
        </div>

        {/* BOTTOM COPYRIGHT & BACK TO TOP BUTTON */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#111111]/50 pt-4">
          <p>© {new Date().getFullYear()} Navigate Skill Pvt Ltd. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] text-[#F7F3EC] hover:bg-[#8C21EF] transition-all duration-300 shadow-md"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
