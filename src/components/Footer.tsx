'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F7F3EC] text-[#111111] relative overflow-hidden pt-12 pb-10 border-t border-[#111111]/[0.1]">

      {/* Subtle Ambient Purple Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8C21EF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 space-y-16">

        {/* MIDDLE NAVIGATION GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm pt-4">

          {/* Column 1: Navigation */}
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              Navigation
            </div>
            <ul className="space-y-2.5 text-[#111111]/75 font-semibold">
              <li><Link href="/" className="hover:text-[#8C21EF] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#8C21EF] transition-colors">Services</Link></li>
              <li><Link href="/work" className="hover:text-[#8C21EF] transition-colors">Work</Link></li>
              <li><Link href="/about" className="hover:text-[#8C21EF] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#8C21EF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Capabilities */}
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              Disciplines
            </div>
            <ul className="space-y-2.5 text-[#111111]/75 font-semibold">
              <li><Link href="/services" className="hover:text-[#8C21EF] transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-[#8C21EF] transition-colors">App Development</Link></li>
              <li><Link href="/services" className="hover:text-[#8C21EF] transition-colors">Social Media Marketing</Link></li>
              <li><Link href="/services" className="hover:text-[#8C21EF] transition-colors">Ad Management &amp; ROAS</Link></li>
              <li><Link href="/services" className="hover:text-[#8C21EF] transition-colors">SEO &amp; Growth</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              Connect
            </div>
            <ul className="space-y-2.5 text-[#111111]/75 font-semibold">
              <li><a href="https://www.instagram.com/navigate_skill?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="hover:text-[#8C21EF] transition-colors inline-flex items-center gap-1">Instagram <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Column 4: Contact Direct */}
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              Contact Direct
            </div>
            <div className="space-y-2 text-[#111111]/75 font-semibold">
              <a href="mailto:navigateskill@gmail.com" className="text-[#111111] font-bold hover:text-[#8C21EF] transition-colors block">navigateskill@gmail.com</a>
              <a href="tel:+919218187041" className="hover:text-[#8C21EF] transition-colors block">+91 92181 87041</a>
              <p className="text-xs text-[#111111]/50 pt-2">Sector 7, Rohini, Delhi, India</p>
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
