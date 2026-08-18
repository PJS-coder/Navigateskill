'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

const cardsData: CardItem[] = [
  {
    id: 'brand-creative',
    num: '01',
    category: 'Brand Strategy',
    title: 'BRAND & CREATIVE',
    description:
      'We find your truth. Then define your brand identity and creative structure.',
    tags: ['Strategy', 'Narrative', 'Direction'],
    rotation: -2,
  },
  {
    id: 'web-development',
    num: '02',
    category: 'Engineering',
    title: 'WEB DEVELOPMENT',
    description:
      'Custom, blazing-fast websites built with React, Next.js, and modern frameworks — optimized for SEO and conversion.',
    tags: ['React & Next.js', 'Sub-Second Speed', 'Headless CMS'],
    rotation: 2,
  },
  {
    id: 'app-development',
    num: '03',
    category: 'Mobile Platform',
    title: 'APP DEVELOPMENT',
    description:
      'Cross-platform mobile apps with React Native and Swift — one codebase, both app stores, 60 FPS performance.',
    tags: ['Cross-Platform', 'React Native', 'Native APIs'],
    rotation: -1.5,
  },
  {
    id: 'social-media',
    num: '04',
    category: 'Storytelling',
    title: 'SOCIAL MEDIA',
    description:
      'Turn content into growth with viral 4K reel editing, organic brand storytelling, and targeted distribution.',
    tags: ['Short-Form Reels', 'Viral Growth', 'Community'],
    rotation: 3,
  },
  {
    id: 'ad-management',
    num: '05',
    category: 'Performance',
    title: 'AD MANAGEMENT',
    description:
      'Data-driven bidding, budget optimization, and multi-channel attribution targeting a blended 4.8x ROAS.',
    tags: ['ROAS Scale', 'Google & Meta', 'Real-Time ROI'],
    rotation: -2,
  },
];

interface WhatWeDoSectionProps {
  onOpenConsultation: () => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

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

  // Background Opacity smoothly mapped to initial scroll (0.08 -> 0.20)
  const bgOpacity = useTransform(scrollYProgress, [0.08, 0.20], [1, 0.45]);

  return (
    <section id="what-we-do" ref={containerRef} className="relative w-full h-[420vh] md:h-[450vh] bg-[#efefeb]">

      {/* INNER STICKY CONTAINER (100VH) - PINNED PERFECTLY IN VIEWPORT */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col justify-between py-4 sm:py-6 px-4 sm:px-6 md:px-12 border-b border-[#111111]/[0.08] overflow-hidden bg-[#efefeb] z-20">

        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between relative">

          {/* TOP RIGHT BADGE */}
          <div className="flex justify-end relative z-20 flex-shrink-0">
            <div className="bg-[#8C21EF] text-[#F7F3EC] rounded-xl px-4 py-2 sm:px-6 sm:py-3 flex items-center gap-3 sm:gap-6 shadow-md">
              <span className="text-[10px] sm:text-sm font-extrabold uppercase tracking-wider font-display">
                THE THIRD THING YOU SHOULD KNOW WHAT WE DO
              </span>
              <span className="text-lg sm:text-3xl font-black font-display opacity-90 border-l border-white/20 pl-2 sm:pl-3">
                03
              </span>
            </div>
          </div>

          {/* FIXED BACKGROUND TYPOGRAPHY LAYER */}
          <div className="relative my-auto py-2 flex-grow flex flex-col justify-center select-none">

            <motion.div
              style={{
                opacity: bgOpacity,
              }}
              className="space-y-1 tracking-tighter"
            >
              {/* WHAT (Top Left) */}
              <h2 className="text-5xl sm:text-8xl md:text-[12rem] lg:text-[14rem] font-black text-[#111111] uppercase font-display leading-[0.82]">
                WHAT
              </h2>

              {/* CENTERED CONTENT BLOCK (STATE 1) + WE (RIGHT) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-2">
                <div className="lg:col-span-6 space-y-3 max-w-lg">
                  <TextScrollReveal
                    as="p"
                    className="text-sm sm:text-lg md:text-xl font-bold text-[#111111] leading-relaxed tracking-tight"
                    text="Vision is nothing without execution. We build both. We create campaigns, films, and the systems that get them made."
                  />

                  <div>
                    <a
                      href="#our-work"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#111111] text-[#F7F3EC] text-[11px] sm:text-xs font-black uppercase tracking-widest hover:bg-[#8C21EF] transition-all duration-300 shadow-md"
                    >
                      <span>OUR SERVICES</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6 flex lg:justify-end">
                  <span className="text-5xl sm:text-8xl md:text-[12rem] lg:text-[14rem] font-black text-[#111111] uppercase font-display leading-[0.82]">
                    WE
                  </span>
                </div>
              </div>

              {/* DO (Bottom Center) */}
              <div className="flex justify-center">
                <h2 className="text-5xl sm:text-8xl md:text-[12rem] lg:text-[14rem] font-black text-[#111111] uppercase font-display leading-[0.82]">
                  DO
                </h2>
              </div>
            </motion.div>

            {/* CONTINUOUS SCROLL-DRIVEN FLOATING CARD LAYER */}
            <div className="absolute inset-0 flex items-center justify-center z-30 px-3 sm:px-4 pointer-events-none">
              <div className="relative w-[300px] sm:w-[420px] h-[400px] sm:h-[540px] pointer-events-auto">
                {cardsData.map((item, index) => {
                  const cardCount = cardsData.length;
                  const stepRange = 0.72 / cardCount;
                  const startScroll = 0.18 + index * stepRange;
                  const targetScroll = startScroll + stepRange * 0.7;

                  const cardY = useTransform(
                    scrollYProgress,
                    [startScroll - 0.08, targetScroll],
                    [isMobile ? 180 : 900, 0]
                  );

                  const cardOpacity = useTransform(
                    scrollYProgress,
                    [startScroll - 0.08, startScroll - 0.02, targetScroll, 1],
                    [0, 1, 1, 1]
                  );

                  const cardRotate = useTransform(
                    scrollYProgress,
                    [startScroll - 0.08, targetScroll],
                    [isMobile ? 2 : 8, item.rotation]
                  );

                  const cardScale = useTransform(
                    scrollYProgress,
                    [startScroll - 0.08, targetScroll],
                    [0.96, 1]
                  );

                  return (
                    <motion.div
                      key={item.id}
                      style={{
                        y: cardY,
                        opacity: cardOpacity,
                        rotate: cardRotate,
                        scale: cardScale,
                        zIndex: 10 + index,
                        willChange: 'transform, opacity',
                      }}
                      className="absolute inset-0 bg-[#dfe5e8] border border-white/80 p-5 sm:p-10 rounded-2xl sm:rounded-[28px] shadow-lg md:shadow-[0_30px_80px_rgba(0,0,0,0.18)] hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between select-none overflow-hidden"
                    >
                      <div className="space-y-2 sm:space-y-4">
                        <div className="flex items-center justify-between text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#8C21EF]">
                          <span>{item.category}</span>
                          <span className="w-2 h-2 rounded-full bg-[#8C21EF]" />
                        </div>

                        <h3 className="text-xl sm:text-4xl font-black text-[#111111] font-display uppercase tracking-tight leading-[0.95]">
                          {item.title}
                        </h3>

                        <p className="text-[11px] sm:text-sm font-semibold text-[#111111]/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-end justify-between pt-2 sm:pt-4 border-t border-[#111111]/10">
                        <div className="space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs font-extrabold text-[#111111]">
                          {item.tags.map((tag, tagIdx) => (
                            <div key={tagIdx} className="leading-tight">
                              {tag}
                            </div>
                          ))}
                        </div>

                        <div className="text-4xl sm:text-7xl font-black font-display text-[#111111] leading-none">
                          {item.num}
                        </div>
                      </div>

                      <button
                        onClick={onOpenConsultation}
                        className="mt-2 sm:mt-3 py-2 sm:py-2.5 px-3.5 sm:px-4 rounded-xl bg-[#111111] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider flex items-center justify-between hover:bg-[#8C21EF] transition-colors shadow-sm"
                      >
                        <span>Request Service</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* BOTTOM PROGRESS INDICATOR */}
          <div className="flex-shrink-0 flex items-center justify-between border-t border-[#111111]/[0.08] pt-3">
            <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#8C21EF]">
              SCROLL DOWN TO REVEAL CARDS IN SEQUENCE
            </span>

            <div className="w-24 sm:w-36 h-1.5 bg-[#EFE8DE] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#8C21EF]"
                style={{
                  width: useTransform(scrollYProgress, [0.18, 0.88], ['0%', '100%']),
                }}
              />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
