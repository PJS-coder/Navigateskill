'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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
    title: 'Brand & Creative',
    description:
      'We find your truth. Then define your brand identity, visual language, and creative structure.',
    tags: ['Strategy', 'Narrative', 'Direction'],
    rotation: -3,
  },
  {
    id: 'web-development',
    num: '02',
    category: 'Engineering',
    title: 'Web Development',
    description:
      'Custom, blazing-fast websites built with React, Next.js, and modern frameworks — optimized for SEO and conversion.',
    tags: ['React & Next.js', 'Sub-Second Speed', 'Headless CMS'],
    rotation: 2,
  },
  {
    id: 'app-development',
    num: '03',
    category: 'Mobile Platform',
    title: 'App Development',
    description:
      'Cross-platform mobile apps with React Native and Swift — one codebase, both app stores, 60 FPS performance.',
    tags: ['Cross-Platform', 'React Native', 'Native APIs'],
    rotation: -1,
  },
  {
    id: 'social-media',
    num: '04',
    category: 'Storytelling',
    title: 'Social Media',
    description:
      'Turn content into growth with viral 4K reel editing, organic brand storytelling, and targeted distribution.',
    tags: ['Short-Form Reels', 'Viral Growth', 'Community'],
    rotation: 3,
  },
  {
    id: 'seo-optimization',
    num: '05',
    category: 'Growth & Search',
    title: 'SEO Optimization',
    description:
      'Technical SEO audits, high-intent keyword strategies, and backlink authority that dominate search rankings.',
    tags: ['Technical SEO', 'Organic Growth', 'Keyword Authority'],
    rotation: -2,
  },
];

interface StickyCardsSectionProps {
  onOpenConsultation: () => void;
}

export const StickyCardsSection: React.FC<StickyCardsSectionProps> = ({
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCardCount, setActiveCardCount] = useState<number>(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Step-based scroll index system: maps scrollProgress to card reveal steps
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.08) {
      setActiveCardCount(1);
    } else {
      const progress = Math.min(1, Math.max(0, (latest - 0.08) / 0.82));
      const count = Math.min(
        cardsData.length,
        Math.floor(progress * cardsData.length) + 1
      );
      setActiveCardCount(count);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#efefeb]">
      
      {/* INNER STICKY CONTAINER (100VH) - LOCKED IN VIEWPORT */}
      <div className="sticky top-0 h-screen flex flex-col justify-between py-6 px-6 md:px-12 border-b border-[#111111]/[0.08] overflow-hidden">
        
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between relative">
          
          {/* TOP RIGHT BADGE */}
          <div className="flex justify-end relative z-20 flex-shrink-0">
            <div className="bg-[#8C21EF] text-[#F7F3EC] rounded-xl px-5 py-2.5 sm:px-6 sm:py-3 flex items-center gap-4 sm:gap-6 shadow-md">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider font-display">
                THE THIRD THING YOU SHOULD KNOW WHAT WE DO
              </span>
              <span className="text-xl sm:text-3xl font-black font-display opacity-90 border-l border-white/20 pl-3">
                03
              </span>
            </div>
          </div>

          {/* BACKGROUND TYPOGRAPHY LAYER (100% FIXED / STATIONARY OVERSIZED BLURRED TEXT) */}
          <div className="relative my-auto py-2 flex-grow flex flex-col justify-center select-none">
            
            <div className="space-y-1 filter blur-[4px] opacity-35 tracking-tighter">
              <h2 className="text-7xl sm:text-9xl md:text-[13rem] lg:text-[16rem] font-black text-[#111111] uppercase font-display leading-[0.82]">
                WHAT
              </h2>

              <div className="flex justify-end">
                <span className="text-7xl sm:text-9xl md:text-[13rem] lg:text-[16rem] font-black text-[#111111] uppercase font-display leading-[0.82]">
                  WE
                </span>
              </div>

              <h2 className="text-7xl sm:text-9xl md:text-[13rem] lg:text-[16rem] font-black text-[#111111] uppercase font-display leading-[0.82]">
                DO
              </h2>
            </div>

            {/* FOREGROUND CARDS LAYER - CENTERED STACK OF FLOATING STRATEGY CARDS */}
            <div className="absolute inset-0 flex items-center justify-center z-30 px-4 pointer-events-none">
              <div className="relative w-[340px] sm:w-[420px] h-[460px] pointer-events-auto">
                {cardsData.map((item, index) => {
                  const isRevealed = index < activeCardCount;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ y: 120, opacity: 0, rotate: 6, scale: 0.98 }}
                      animate={
                        isRevealed
                          ? { y: 0, opacity: 1, rotate: item.rotation, scale: 1 }
                          : { y: 120, opacity: 0, rotate: 6, scale: 0.98 }
                      }
                      transition={{
                        duration: 0.55,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      style={{
                        zIndex: 10 + index,
                      }}
                      className="absolute inset-0 bg-[#DCE3E8] border border-white/80 p-8 sm:p-10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between select-none overflow-hidden"
                    >
                      {/* TOP AREA: Heading & Description */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#8C21EF]">
                          <span>{item.category}</span>
                          <span className="w-2 h-2 rounded-full bg-[#8C21EF]" />
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black text-[#111111] font-display uppercase tracking-tight leading-[0.95]">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-medium text-[#111111]/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* BOTTOM AREA: Tags (Left) + Index Number (Right) */}
                      <div className="flex items-end justify-between pt-4 border-t border-[#111111]/10">
                        {/* Bottom-Left: Category Label / Tags */}
                        <div className="space-y-1 text-xs font-bold text-[#111111]">
                          {item.tags.map((tag, tagIdx) => (
                            <div key={tagIdx} className="leading-tight">
                              {tag}
                            </div>
                          ))}
                        </div>

                        {/* Bottom-Right: Large Index Number */}
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
              STEP {activeCardCount} OF {cardsData.length} • SCROLL TO REVEAL NEXT LAYER
            </span>
            
            <div className="flex items-center gap-1.5">
              {cardsData.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i < activeCardCount ? 'w-5 bg-[#8C21EF]' : 'w-1.5 bg-[#111111]/20'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
