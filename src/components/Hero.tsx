'use client';

import React, { useState, useEffect } from 'react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-screen md:min-h-screen h-[100dvh] md:h-auto relative flex flex-col justify-between bg-[#F7F3EC] border-b border-[#111111]/[0.08] overflow-hidden"
    >
      {/* ── NAVBAR ── */}
      <div className="w-full px-4 sm:px-6 z-30 flex-shrink-0 pt-2 sm:pt-4">
        <div className="max-w-[1800px] mx-auto">
          <div className="bg-[#EAE4D9]/90 backdrop-blur-md border border-[#111111]/10 rounded-b-2xl sm:rounded-2xl px-3 py-2 sm:p-2.5 flex items-center justify-between shadow-sm">

            {/* Logo + Brand */}
            <div className="flex items-center gap-2.5">
              <div className="bg-[#111111] p-1.5 sm:p-2 rounded-xl flex items-center justify-center shadow-md">
                <img src={logoSrc} alt="Navigate Skill Logo" className="h-5 sm:h-6 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] sm:text-lg font-black tracking-tight text-[#111111] font-display uppercase leading-none">
                  NAVIGATE <span className="text-[#8C21EF]">SKILL</span>
                </span>
                <span className="hidden sm:block text-[9px] font-extrabold text-[#111111]/50 uppercase tracking-widest pt-0.5">
                  Delhi, India
                </span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-7 text-xs font-black uppercase tracking-wider text-[#111111]">
              <a href="#about" className="hover:text-[#8C21EF] transition-colors">About Us</a>
              <a href="#what-we-offer" className="hover:text-[#8C21EF] transition-colors">What We Offer</a>
              <a href="#what-we-do" className="hover:text-[#8C21EF] transition-colors">What We Do</a>
              <a href="#our-work" className="hover:text-[#8C21EF] transition-colors">Our Services</a>
            </div>

            {/* Desktop CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="hidden md:flex group items-center gap-2 rounded-xl bg-[#111111] text-[#F7F3EC] p-1 pr-4 transition-all duration-300 hover:bg-[#8C21EF] shadow-md"
            >
              <div className="w-8 h-8 rounded-lg bg-[#8C21EF] text-[#F7F3EC] flex items-center justify-center group-hover:bg-[#111111] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider">Contact Our Team</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="flex md:hidden w-9 h-9 rounded-xl bg-[#111111] text-[#F7F3EC] items-center justify-center shadow-md active:scale-95 transition-transform"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#8C21EF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Left Drawer Navigation Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="fixed inset-0 bg-[#111111]/50 backdrop-blur-sm z-50 md:hidden"
                />

                {/* Left Side Sliding Drawer Menu (Website Theme #F7F3EC) */}
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                  className="fixed top-0 left-0 bottom-0 w-[85vw] max-w-[340px] bg-[#F7F3EC] text-[#111111] p-6 z-50 shadow-2xl flex flex-col justify-between border-r border-[#111111]/12 md:hidden overflow-y-auto"
                >
                  {/* Top Header */}
                  <div className="flex items-center justify-between border-b border-[#111111]/10 pb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-[#111111] p-1.5 rounded-xl flex items-center justify-center shadow-md">
                        <img src={logoSrc} alt="Navigate Skill Logo" className="h-5 w-auto object-contain" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black tracking-tight text-[#111111] font-display uppercase leading-none">
                          NAVIGATE <span className="text-[#8C21EF]">SKILL</span>
                        </span>
                        <span className="text-[9px] font-extrabold text-[#111111]/50 uppercase tracking-widest pt-0.5">
                          Delhi, India
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-8 h-8 rounded-xl bg-[#111111] text-white flex items-center justify-center hover:bg-[#8C21EF] transition-colors shadow-sm"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Menu Links */}
                  <div className="py-6 space-y-1 flex-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#8C21EF] mb-3 px-2">
                      Navigation Menu
                    </div>
                    {[
                      '01|#about|About Us',
                      '02|#what-we-offer|What We Offer',
                      '03|#what-we-do|What We Do',
                      '04|#our-work|Our Services',
                      '05|#who-we-are|Who We Are',
                    ].map((item, idx) => {
                      const [num, href, label] = item.split('|');
                      return (
                        <motion.a
                          key={href}
                          href={href}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + idx * 0.05 }}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-[#111111]/12 hover:bg-[#EAE4D9]/80 group transition-all duration-200"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-black font-display text-[#8C21EF]">
                              {num}
                            </span>
                            <span className="text-sm font-extrabold uppercase tracking-wider text-[#111111] group-hover:text-[#8C21EF] transition-colors">
                              {label}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#111111]/40 group-hover:text-[#8C21EF] group-hover:translate-x-1 transition-all" />
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* Bottom Footer CTA & Credits */}
                  <div className="space-y-4 pt-4 border-t border-[#111111]/10">
                    <button
                      onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#111111] text-[#F7F3EC] text-xs font-black uppercase tracking-wider hover:bg-[#8C21EF] transition-all shadow-md active:scale-95"
                    >
                      <span>Book Consultation</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <div className="text-[10px] font-medium text-[#111111]/50 text-center tracking-wider uppercase">
                      © 2026 Navigateskill • All Rights Reserved
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

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
