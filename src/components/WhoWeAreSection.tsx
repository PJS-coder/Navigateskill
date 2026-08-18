'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Award, Users, Rocket, TrendingUp } from 'lucide-react';
import { TextScrollReveal } from './TextScrollReveal';

interface MetricCardProps {
  number: string;
  label: string;
  icon: React.ElementType;
  index: number;
}

const stats: MetricCardProps[] = [
  {
    number: '50+',
    label: 'Projects Delivered',
    icon: Rocket,
    index: 0,
  },
  {
    number: '30+',
    label: 'Happy Clients',
    icon: Users,
    index: 1,
  },
  {
    number: '5+',
    label: 'Years of Excellence',
    icon: Award,
    index: 2,
  },
  {
    number: '10x',
    label: 'Average ROI',
    icon: TrendingUp,
    index: 3,
  },
];

interface WhoWeAreSectionProps {
  onOpenConsultation: () => void;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section
      id="who-we-are"
      className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 bg-[#F7F3EC] border-b border-[#111111]/[0.08] relative overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#8C21EF]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">

        {/* BANNER HEADER (SECTION 05) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 border-b border-[#111111]/10 pb-6 sm:pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C21EF]/10 text-[#8C21EF] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHO WE ARE</span>
            </div>
            <h2 className="text-3xl sm:text-6xl md:text-7xl font-black text-[#111111] font-display uppercase tracking-tight">
              WHO WE <span className="text-[#8C21EF]">ARE</span>
            </h2>
          </div>

          <div className="bg-[#8C21EF] text-[#F7F3EC] rounded-xl px-4 py-2 sm:px-6 sm:py-3 flex items-center gap-3 sm:gap-6 shadow-md">
            <span className="text-[10px] sm:text-sm font-extrabold uppercase tracking-wider font-display">
              ABOUT NAVIGATE SKILL
            </span>
            <span className="text-lg sm:text-3xl font-black font-display opacity-90 border-l border-white/20 pl-2 sm:pl-3">
              05
            </span>
          </div>
        </div>

        {/* MAIN EDITORIAL CONTENT + STATS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: EDITORIAL DESCRIPTION & CTA */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black font-display text-[#111111] uppercase tracking-tight leading-[1.1]">
                Empowering ambitious brands to{' '}
                <span className="text-[#8C21EF] font-serif italic font-normal capitalize">
                  grow faster
                </span>
              </h3>

              <TextScrollReveal
                as="p"
                className="text-base sm:text-lg md:text-xl text-[#111111]/80 font-medium leading-relaxed"
                text="Navigateskill is a next-gen digital agency empowering ambitious brands to grow faster through performance marketing, design, and automation. We blend creativity with high-precision execution to deliver real results."
              />
            </div>

            {/* LEARN MORE BUTTON */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#111111] text-[#F7F3EC] text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-[#8C21EF] transition-all duration-300 shadow-md active:scale-95"
              >
                <span>LEARN MORE</span>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#8C21EF] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT: 4 STATS METRIC CARDS (2x2 GRID) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: stat.index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-md border border-[#111111]/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xs hover:shadow-md hover:border-[#8C21EF]/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#8C21EF]/10 text-[#8C21EF] flex items-center justify-center group-hover:bg-[#8C21EF] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#111111]/40">
                      0{stat.index + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-[#111111] tracking-tight group-hover:text-[#8C21EF] transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#111111]/70 font-display">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
