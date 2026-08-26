'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ArrowDownRight, Sparkles, Menu, X } from 'lucide-react';
import logo from '../assets/navigate.png';
import yooImage from '../assets/yoo.png';

const logoSrc = typeof logo === 'string' ? logo : (logo as { src: string }).src;
const yooSrc = typeof yooImage === 'string' ? yooImage : (yooImage as { src: string }).src;

const cyclingWords = ['Strategy', 'Automation', 'Marketing', 'Growth'];

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-screen md:min-h-screen h-auto relative flex flex-col justify-between bg-[#F7F3EC] border-b border-[#111111]/[0.08] overflow-hidden pt-24 sm:pt-28 md:pt-32"
    >

      {/* ── MOBILE HERO LAYOUT (100dvh Viewport Locked & Dynamic Fitting) ── */}
      <div className="flex-1 flex md:hidden flex-col justify-between px-4 sm:px-5 py-3 gap-2 overflow-hidden min-h-0">

        {/* TOP: Headline & subtitle (With breathing room spacing between text lines) */}
        <div className="flex-shrink-0 flex flex-col gap-2.5 pt-1">
          <h1 className="text-[2.1rem] min-[390px]:text-[2.4rem] sm:text-[2.85rem] font-black tracking-[-0.01em] text-[#111111] font-display uppercase leading-[1.18] sm:leading-[1.22]">
            Navigate The<br />Future of Digital<br />
            <span className="inline-block relative h-[1.3em] overflow-visible align-bottom w-[85vw] pt-1 pb-1 pr-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={cyclingWords[wordIndex]}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 bottom-0.5 text-[#8C21EF] italic font-serif capitalize font-normal whitespace-nowrap leading-normal pr-2"
                >
                  {cyclingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="text-[11px] sm:text-xs text-[#111111]/80 font-medium leading-relaxed max-w-sm pt-0.5">
            Navigateskill turns brands into digital powerhouses — through intelligent marketing, creative strategy, and next-gen automation.
          </p>
        </div>

        {/* MIDDLE: yoo.png image (Visually larger via scale without affecting layout of other elements) */}
        <div className="flex-1 min-h-0 flex items-center justify-center py-0.5 my-auto overflow-hidden">
          <motion.img
            src={yooSrc}
            alt="Navigate Studio Showcase"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-auto max-w-[96%] sm:max-w-[98%] h-full max-h-[270px] min-[390px]:max-h-[340px] min-[420px]:max-h-[390px] sm:max-h-[450px] object-contain select-none drop-shadow-2xl scale-[1.06] origin-center"
          />
        </div>

        {/* BOTTOM: CTA Buttons + Discipline bar */}
        <div className="flex-shrink-0 flex flex-col gap-2.5 pb-1">
          {/* CTA Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenConsultation}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-full bg-[#111111] text-[#F7F3EC] text-[11px] sm:text-xs font-black uppercase tracking-wider hover:bg-[#8C21EF] transition-all duration-300 shadow-md active:scale-95"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="#what-we-offer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-full bg-[#EFE8DE] text-[#111111] text-[11px] sm:text-xs font-black uppercase tracking-wider hover:bg-[#111111] hover:text-white transition-all duration-300"
            >
              <span>Our Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Discipline tags + Discover */}
          <div className="pt-2 border-t border-[#111111]/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#111111]/70">
              <span>Web Dev</span>
              <span className="text-[#8C21EF]">•</span>
              <span>App Dev</span>
              <span className="text-[#8C21EF]">•</span>
              <span>Social & Ads</span>
            </div>
            <a
              href="#our-work"
              className="group flex items-center gap-1.5 rounded-lg bg-[#F7F3EC] border border-[#111111]/15 p-1 pr-2.5 shadow-xs hover:border-[#8C21EF] transition-all"
            >
              <div className="w-4.5 h-4.5 rounded-md bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#8C21EF] transition-colors">
                <ArrowDownRight className="w-2.5 h-2.5" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#111111]">Discover</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO LAYOUT (hidden on mobile — scaled up for large PC displays) ── */}
      <div className="hidden md:flex flex-1 w-full px-6 lg:px-12 xl:px-16 2xl:px-20 py-4 items-center overflow-hidden">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 2xl:gap-16 items-center w-full max-w-[1800px] mx-auto">

          {/* Left: Text Column */}
          <div className="col-span-7 xl:col-span-6 space-y-5 lg:space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#8C21EF]/15 text-[#8C21EF] text-xs lg:text-sm font-black uppercase tracking-widest border border-[#8C21EF]/20">
              <Sparkles className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              <span>GROWTH ENGINE</span>
            </div>

            <h1 className="text-5xl lg:text-[3.6rem] xl:text-[4.5rem] 2xl:text-[5.5rem] font-black tracking-tight text-[#111111] font-display uppercase leading-[1.03]">
              Navigate The <br />
              Future of Digital <br />
              <span className="inline-block relative h-[1.3em] overflow-hidden align-bottom min-w-[280px] md:min-w-[340px] lg:min-w-[420px] xl:min-w-[500px] 2xl:min-w-[620px] pb-1.5 pr-6">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={cyclingWords[wordIndex]}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 bottom-1 text-[#8C21EF] italic font-serif capitalize font-normal whitespace-nowrap leading-normal pr-3"
                  >
                    {cyclingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-base lg:text-lg xl:text-xl text-[#111111]/80 font-medium leading-relaxed max-w-lg xl:max-w-2xl">
              Navigateskill turns brands into digital powerhouses — through intelligent marketing, creative strategy, and next-gen automation.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 lg:gap-4 pt-1">
              <button
                onClick={onOpenConsultation}
                className="group px-6 lg:px-8 py-3.5 lg:py-4 rounded-full bg-[#111111] text-[#F7F3EC] text-xs lg:text-sm font-black uppercase tracking-wider hover:bg-[#8C21EF] transition-all duration-300 shadow-md flex items-center gap-2.5 active:scale-95"
              >
                <span>GET STARTED NOW</span>
                <ArrowUpRight className="w-4 h-4 lg:w-4.5 lg:h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href="#what-we-offer"
                className="px-6 lg:px-8 py-3.5 lg:py-4 rounded-full bg-[#EFE8DE] text-[#111111] text-xs lg:text-sm font-black uppercase tracking-wider hover:bg-[#111111] hover:text-white transition-all duration-300 flex items-center gap-2.5"
              >
                <span>VIEW OUR SERVICES</span>
                <ArrowRight className="w-4 h-4 lg:w-4.5 lg:h-4.5" />
              </a>
            </div>
          </div>

          {/* Right: Image Column */}
          <div className="col-span-5 xl:col-span-6 flex justify-center items-center">
            <motion.img
              src={yooSrc}
              alt="Navigate Studio Showcase"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full h-auto max-h-[66vh] xl:max-h-[72vh] object-contain select-none scale-[1.12] xl:scale-[1.18]"
            />
          </div>
        </div>
      </div>

      {/* ── DESKTOP BOTTOM BAR (hidden on mobile) ── */}
      <div className="hidden md:flex w-full px-6 lg:px-14 py-3.5 border-t border-[#111111]/10 items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-8 text-xs lg:text-sm font-black uppercase tracking-wider text-[#111111]">
          <span>Web Development</span>
          <span className="text-[#8C21EF]">•</span>
          <span>App Development</span>
          <span className="text-[#8C21EF]">•</span>
          <span>Social & Ads</span>
        </div>
        <a
          href="#our-work"
          className="group flex items-center gap-2.5 rounded-xl bg-white border border-[#111111]/15 p-1 pr-4 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#8C21EF]"
        >
          <div className="w-8 h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#8C21EF] transition-colors">
            <ArrowDownRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
          <span className="text-xs lg:text-sm font-black uppercase tracking-wider text-[#111111]">Discover our work</span>
        </a>
      </div>
    </section>
  );
};
