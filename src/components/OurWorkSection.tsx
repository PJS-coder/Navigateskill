'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger Plugin explicitly at module top level
gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  num: string;
  title: string;
  category: 'Brand' | 'Campaign' | 'Experiential' | 'Film' | 'Digital';
  tags: string[];
  image: string;
}

const allProjects: Project[] = [
  {
    id: 'magic-city',
    num: '01',
    title: 'Magic City: An American Fantasy',
    category: 'Film',
    tags: ['CAMPAIGN', 'FILM'],
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'warner-bros',
    num: '02',
    title: 'Warner Bros. World Campaign',
    category: 'Campaign',
    tags: ['CAMPAIGN', 'EXPERIENTIAL'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'hyperscale-web',
    num: '03',
    title: 'HyperScale Web Engine',
    category: 'Digital',
    tags: ['DIGITAL', 'WEB ARCHITECTURE'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'pulse-mobile',
    num: '04',
    title: 'Pulse Mobile Experience',
    category: 'Brand',
    tags: ['BRAND', 'MOBILE PLATFORM'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'aether-activation',
    num: '05',
    title: 'Aether Immersive Activation',
    category: 'Experiential',
    tags: ['EXPERIENTIAL', '3D MOTION'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
];

const categories = ['All Work', 'Brand', 'Campaign', 'Experiential', 'Film', 'Digital'] as const;

interface OurWorkSectionProps {
  onOpenConsultation: () => void;
}

export const OurWorkSection: React.FC<OurWorkSectionProps> = ({
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Work');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects =
    activeCategory === 'All Work'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion) {
      gsap.set('.project-card', { opacity: 1, y: 0, scale: 1 });
      gsap.set('.project-card-image', { clipPath: 'inset(0% 0% 0% 0%)' });
      gsap.set('.project-card-badge', { opacity: 1, y: 0 });
      return;
    }

    let batchTriggers: ScrollTrigger[] = [];

    const timer = setTimeout(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');

      cards.forEach((card) => {
        const img = card.querySelector('.project-card-image');
        const badge = card.querySelector('.project-card-badge');

        if (isMobile) {
          // Ultra lightweight settings for low-end mobile hardware
          gsap.set(card, { opacity: 0, y: 24, scale: 1 });
          if (img) gsap.set(img, { clipPath: 'inset(0% 0% 0% 0%)' });
          if (badge) gsap.set(badge, { opacity: 1, y: 0 });
        } else {
          gsap.set(card, { opacity: 0, y: 60, scale: 0.98 });
          if (img) gsap.set(img, { clipPath: 'inset(100% 0% 0% 0%)' });
          if (badge) gsap.set(badge, { opacity: 0, y: 20 });
        }
      });

      batchTriggers = ScrollTrigger.batch('.project-card', {
        start: 'top 85%',
        once: true,
        onEnter: (batch) => {
          batch.forEach((card, idx) => {
            const img = card.querySelector('.project-card-image');
            const badge = card.querySelector('.project-card-badge');

            if (isMobile) {
              // Smooth, elegant fade-in pacing on mobile
              gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.75,
                delay: idx * 0.1,
                ease: 'power3.out',
                force3D: true,
              });
            } else {
              const tl = gsap.timeline({ delay: idx * 0.08 });

              tl.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                ease: 'power3.out',
              }, 0);

              if (img) {
                tl.to(img, {
                  clipPath: 'inset(0% 0% 0% 0%)',
                  duration: 0.85,
                  ease: 'power3.out',
                }, 0);
              }

              if (badge) {
                tl.to(badge, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: 'power3.out',
                }, 0.1);
              }
            }
          });
        },
      });

      ScrollTrigger.refresh();
    }, 80);

    return () => {
      clearTimeout(timer);
      batchTriggers.forEach((st) => st.kill());
    };
  }, [activeCategory]);

  return (
    <section id="our-work" ref={sectionRef} className="py-24 md:py-36 px-6 md:px-12 bg-[#F7F3EC] border-b border-[#111111]/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* BANNER HEADER (SECTION 04) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-[#111111]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C21EF]/10 text-[#8C21EF] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#111111] font-display uppercase tracking-tight">
              OUR <span className="text-[#8C21EF]">WORK</span>
            </h2>
          </div>

          <div className="bg-[#8C21EF] text-[#F7F3EC] rounded-xl px-5 py-2.5 sm:px-6 sm:py-3 flex items-center gap-4 sm:gap-6 shadow-md">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider font-display">
              FEATURED CASES
            </span>
            <span className="text-xl sm:text-3xl font-black font-display opacity-90 border-l border-white/20 pl-3">
              04
            </span>
          </div>
        </div>

        {/* HERO HEADLINE SPLIT REVEAL */}
        <div className="max-w-4xl space-y-4 pt-4">
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-black font-display text-[#111111] uppercase tracking-tight leading-[1.05]">
            We let the Work speak, <span className="text-[#8C21EF]">loudly</span>
          </h3>

          <p className="text-base sm:text-xl text-[#111111]/80 font-medium leading-relaxed max-w-2xl">
            Explore our curated collection of high-impact web architectures, mobile experiences, visual campaigns, and performance marketing engines.
          </p>
        </div>

        {/* INTERACTIVE FILTER PILLS */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-2 border-b border-[#111111]/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                ? 'bg-[#111111] text-[#F7F3EC] shadow-md scale-105'
                : 'bg-[#EFE8DE] text-[#111111]/70 hover:bg-[#111111]/10 hover:text-[#111111]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-COLUMN GRID OF PROJECT CARDS (2 BOXES PER LINE ON DESKTOP/TABLET) */}
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={onOpenConsultation}
                className="project-card group relative rounded-3xl overflow-hidden shadow-2xl border border-[#111111]/10 bg-[#111111] cursor-pointer h-[460px] sm:h-[540px] flex items-end"
              >
                {/* FULL-BLEED IMAGE BLOCK WITH CLIP-PATH REVEAL */}
                <div className="project-card-image absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-[0.88] group-hover:brightness-[0.95] group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#111111]/40 group-hover:bg-transparent transition-colors" />
                </div>

                {/* TITLE & TAG OVERLAY BADGE WITH STAGGERED REVEAL */}
                <div className="project-card-badge relative z-20 p-5 sm:p-7 w-full">
                  <div className="bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/40 shadow-2xl flex flex-col justify-between gap-3 group-hover:bg-white transition-colors duration-300">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-[#8C21EF] tracking-wider uppercase font-display bg-[#8C21EF]/10 px-2.5 py-1 rounded-md">
                          {project.category}
                        </span>
                        <span className="text-xl font-black font-display text-[#111111]/30">
                          {project.num}
                        </span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-black text-[#111111] font-display tracking-tight leading-tight uppercase">
                        {project.title}
                      </h4>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-[#111111]/10 mt-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="text-[10px] font-bold text-[#111111]/70 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-[#111111] text-[#F7F3EC] flex items-center justify-center group-hover:bg-[#8C21EF] transition-colors duration-300 shadow-md flex-shrink-0">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA BUTTON */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={onOpenConsultation}
            className="group px-8 py-4 rounded-xl bg-[#111111] text-[#F7F3EC] text-xs font-black uppercase tracking-widest hover:bg-[#8C21EF] transition-all duration-300 shadow-xl flex items-center gap-2"
          >
            <span>Launch Your Case Study</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
