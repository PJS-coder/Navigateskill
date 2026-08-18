'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { TextScrollReveal } from './TextScrollReveal';

interface CardItem {
  id: string;
  num: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  rotation: number;
}

const buildCardsData: CardItem[] = [
  {
    id: 'web-development',
    num: '01',
    category: 'Engineering',
    title: 'WEB DEVELOPMENT',
    description:
      'Custom, blazing-fast websites built with React, Next.js, and modern frameworks — optimized for SEO and conversion.',
    tags: ['React & Next.js', 'Headless CMS', 'Sub-Second Speed'],
    rotation: -2,
  },
  {
    id: 'app-development',
    num: '02',
    category: 'Mobile Applications',
    title: 'APP DEVELOPMENT',
    description:
      'Native Swift & React Native mobile apps for iOS & Android — designed for seamless performance and user engagement.',
    tags: ['React Native', 'iOS & Android', '60 FPS Haptics'],
    rotation: 2,
  },
  {
    id: 'social-media',
    num: '03',
    category: 'Creative Content',
    title: 'SOCIAL MEDIA',
    description:
      'Viral 4K short-form reel production, visual storytelling, and strategic audience growth for modern brands.',
    tags: ['4K Short-Form', 'Viral Growth', 'Community'],
    rotation: -1,
  },
  {
    id: 'ad-management',
    num: '04',
    category: 'Performance Ads',
    title: 'AD MANAGEMENT',
    description:
      'Data-driven Meta & Google ad campaigns with real-time conversion optimization targeting a blended 4.8x ROAS.',
    tags: ['Meta & Google Ads', 'ROAS Scaling', 'Conversion Opt'],
    rotation: 3,
  },
  {
    id: 'seo-growth',
    num: '05',
    category: 'Search & Authority',
    title: 'SEO & GROWTH',
    description:
      'Technical SEO audits, high-intent keyword strategies, and backlink authority that dominate organic search rankings.',
    tags: ['Technical SEO', 'Keyword Scale', 'Rank #1'],
    rotation: -2,
  },
];

interface WhatWeBuildSectionProps {
  onOpenConsultation: () => void;
}

export const WhatWeBuildSection: React.FC<WhatWeBuildSectionProps> = ({
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(-1);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.15) {
      setActiveCardIndex(-1);
    } else {
      const progress = Math.min(1, Math.max(0, (latest - 0.15) / 0.75));
      const cardIdx = Math.min(
        buildCardsData.length - 1,
        Math.floor(progress * buildCardsData.length)
      );
      setActiveCardIndex(cardIdx);
    }
  });

  return (
    <section id="what-we-build" ref={containerRef} className="relative w-full h-[420vh] md:h-[500vh] bg-[#efefeb]">
      
      {/* INNER STICKY CONTAINER (100VH) - PINNED IN VIEWPORT */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col justify-between py-4 sm:py-6 px-4 sm:px-6 md:px-12 border-b border-[#111111]/[0.08] overflow-hidden bg-[#efefeb] z-20">
        
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between relative">
          
          {/* BANNER HEADER ALIGNED TO THE RIGHT SIDE (SECTION 04) */}
          <div className="flex justify-end relative z-20 flex-shrink-0">
            <div className="bg-[#8C21EF] text-[#F7F3EC] rounded-xl px-4 py-2 sm:px-6 sm:py-3 flex items-center gap-3 sm:gap-6 shadow-md">
              <span className="text-[10px] sm:text-sm font-extrabold uppercase tracking-wider font-display">
                THE FOURTH THING YOU SHOULD KNOW WHAT WE BUILD
              </span>
              <span className="text-lg sm:text-3xl font-black font-display opacity-90 border-l border-white/20 pl-2 sm:pl-3">
                04
              </span>
            </div>
          </div>

          {/* FIXED OVERSIZED TYPOGRAPHY LAYER: WHAT WE BUILD */}
          <div className="relative my-auto py-2 flex-grow flex flex-col justify-center select-none">
            
            <motion.div
              animate={{
                opacity: activeCardIndex >= 0 ? 0.55 : 1,
              }}
              transition={{ duration: 0.35, ease: 'linear' }}
              className="space-y-1 tracking-tighter"
            >
              {/* WHAT (Top Left) */}
              <h2 className="text-5xl sm:text-8xl md:text-[13rem] lg:text-[16rem] font-black text-[#111111] uppercase font-display leading-[0.82]">
                WHAT
              </h2>

              {/* CENTERED EDITORIAL TEXT BLOCK + WE (RIGHT) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-2">
                <div className="lg:col-span-6 space-y-3 max-w-lg">
                  <TextScrollReveal
                    as="p"
                    className="text-sm sm:text-xl font-bold text-[#111111] leading-relaxed tracking-tight"
                    text="We create digital products, campaigns, and growth systems that help brands scale online."
                  />

                  <div>
                    <a
                      href="#web-development"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#111111] text-[#F7F3EC] text-[11px] sm:text-xs font-black uppercase tracking-widest hover:bg-[#8C21EF] transition-all duration-300 shadow-md"
                    >
                      <span>OUR SERVICES</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6 flex lg:justify-end">
                  <span className="text-5xl sm:text-8xl md:text-[13rem] lg:text-[16rem] font-black text-[#111111] uppercase font-display leading-[0.82]">
                    WE
                  </span>
                </div>
              </div>

              {/* BUILD (Bottom Center) */}
              <div className="flex justify-center">
                <h2 className="text-5xl sm:text-8xl md:text-[13rem] lg:text-[16rem] font-black text-[#111111] uppercase font-display leading-[0.82]">
                  BUILD
                </h2>
              </div>
            </motion.div>

            {/* ANIMATED PROJECT CARD STACK LAYER */}
            <div className="absolute inset-0 flex items-center justify-center z-30 px-3 sm:px-4 pointer-events-none">
              <div className="relative w-[300px] sm:w-[420px] h-[400px] sm:h-[540px] pointer-events-auto">
                {buildCardsData.map((item, index) => {
                  const isCurrent = activeCardIndex === index;
                  const isVisible = activeCardIndex >= index;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ y: isMobile ? 50 : 140, opacity: 0, rotate: isMobile ? 2 : 8 }}
                      animate={
                        isVisible
                          ? {
                              y: isCurrent ? 0 : -18 * (activeCardIndex - index),
                              opacity: 1,
                              rotate: isMobile ? (index % 2 === 0 ? -1 : 1) : item.rotation,
                            }
                          : { y: isMobile ? 50 : 140, opacity: 0, rotate: isMobile ? 2 : 8 }
                      }
                      transition={{
                        duration: 0.35,
                        ease: 'easeOut',
                      }}
                      style={{
                        zIndex: 10 + index,
                        willChange: 'transform, opacity',
                      }}
                      className="absolute inset-0 bg-[#dfe5e8] border border-white/80 p-5 sm:p-10 rounded-2xl sm:rounded-[28px] shadow-lg md:shadow-[0_30px_80px_rgba(0,0,0,0.18)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between select-none overflow-hidden"
                    >
                      {/* TOP AREA: Heading + Supporting Description */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#8C21EF]">
                          <span>{item.category}</span>
                          <span className="w-2 h-2 rounded-full bg-[#8C21EF]" />
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black text-[#111111] font-display uppercase tracking-tight leading-[0.95]">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-semibold text-[#111111]/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* BOTTOM AREA: Service Keywords (Left) + Index Number (Right) */}
                      <div className="flex items-end justify-between pt-4 border-t border-[#111111]/10">
                        {/* Bottom-Left Service Keywords */}
                        <div className="space-y-1 text-xs font-extrabold text-[#111111]">
                          {item.tags.map((tag, tagIdx) => (
                            <div key={tagIdx} className="leading-tight">
                              {tag}
                            </div>
                          ))}
                        </div>

                        {/* Bottom-Right Large Index Number */}
                        <div className="text-6xl sm:text-7xl font-black font-display text-[#111111] leading-none">
                          {item.num}
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={onOpenConsultation}
                        className="mt-3 py-2.5 px-4 rounded-xl bg-[#111111] text-white text-[11px] font-black uppercase tracking-wider flex items-center justify-between hover:bg-[#8C21EF] transition-colors shadow-sm"
                      >
                        <span>Explore {item.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* BOTTOM STEP INDICATOR */}
          <div className="flex-shrink-0 flex items-center justify-between border-t border-[#111111]/[0.08] pt-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8C21EF]">
              {activeCardIndex < 0
                ? 'SCROLL DOWN TO REVEAL WHAT WE BUILD ↓'
                : `PROJECT CARD ${activeCardIndex + 1} OF ${buildCardsData.length} REVEALED • KEEP SCROLLING`}
            </span>
            
            <div className="flex items-center gap-1.5">
              {buildCardsData.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i <= activeCardIndex ? 'w-5 bg-[#8C21EF]' : 'w-1.5 bg-[#111111]/20'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
