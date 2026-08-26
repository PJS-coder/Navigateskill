'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, ExternalLink, Lock, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger Plugin explicitly at module top level
gsap.registerPlugin(ScrollTrigger);

export interface RealProject {
  id: string;
  num: string;
  title: string;
  domain: string;
  url: string;
  image: string;
  category: 'Wellness' | 'Healthcare' | 'E-Commerce' | 'Education';
  categoryBadge: string;
  badgeBg: string;
  description: string;
  tags: string[];
}

const allProjects: RealProject[] = [
  {
    id: 'ebadat',
    num: '01',
    title: 'Ebadat',
    domain: 'ebadat.in',
    url: 'https://ebadat.in/',
    image: '/projects/ebadat.png',
    category: 'Wellness',
    categoryBadge: 'WELLNESS',
    badgeBg: 'bg-[#00A389]',
    description: 'Islamic lifestyle and spiritual wellness platform with curated content and spiritual resources.',
    tags: ['WordPress', 'Lifestyle', 'Community'],
  },
  {
    id: 'dentalverse',
    num: '02',
    title: 'DentalVerse',
    domain: 'dentalverse.in',
    url: 'https://dentalverse.in/',
    image: '/projects/dentalverse.png',
    category: 'Healthcare',
    categoryBadge: 'HEALTHCARE',
    badgeBg: 'bg-[#2563EB]',
    description: 'Modern dental care platform showcasing dental services and patient resources.',
    tags: ['WordPress', 'Healthcare', 'Clinic'],
  },
  {
    id: 'tulsiveda',
    num: '03',
    title: 'TulsiVeda',
    domain: 'tulsiveda.in',
    url: 'https://www.tulsiveda.in/',
    image: '/projects/tulsiveda.png',
    category: 'Wellness',
    categoryBadge: 'WELLNESS',
    badgeBg: 'bg-[#10B981]',
    description: 'Ayurvedic wellness brand with traditional remedies and modern health solutions.',
    tags: ['E-Commerce', 'Health', 'Ayurveda'],
  },
  {
    id: 'krishvanta',
    num: '04',
    title: 'KrishVanta',
    domain: 'krishvanta.in',
    url: 'https://www.krishvanta.in/',
    image: '/projects/krishvanta.png',
    category: 'Wellness',
    categoryBadge: 'WELLNESS',
    badgeBg: 'bg-[#F59E0B]',
    description: 'Premium organic and Ayurvedic health & wellness brand delivering natural products nationwide.',
    tags: ['Ayurveda', 'Organic', 'E-Commerce'],
  },
  {
    id: 'drmen',
    num: '05',
    title: 'DrMen',
    domain: 'drmen.in',
    url: 'https://drmen.in/',
    image: '/projects/drmen.png',
    category: 'Healthcare',
    categoryBadge: 'HEALTHCARE',
    badgeBg: 'bg-[#EF4444]',
    description: "Men's health and wellness platform offering consultations and health resources.",
    tags: ['Health', 'Consultation', 'Wellness'],
  },
  {
    id: 'eximluxe',
    num: '06',
    title: 'Exim Luxe',
    domain: 'eximluxe.com',
    url: 'https://eximluxe.com/',
    image: '/projects/eximluxe.png',
    category: 'E-Commerce',
    categoryBadge: 'E-COMMERCE',
    badgeBg: 'bg-[#A855F7]',
    description: 'Premium digital storefront for luxury import/export goods with global reach.',
    tags: ['Shopify', 'Luxury', 'Trade'],
  },
  {
    id: 'avmgannitgyanacademy',
    num: '07',
    title: 'AVM Gannit Gyan Academy',
    domain: 'avmgannitgyanacademy.in',
    url: 'https://avmgannitgyanacademy.in/',
    image: '/projects/avmgannitgyanacademy.png',
    category: 'Education',
    categoryBadge: 'EDUCATION',
    badgeBg: 'bg-[#6366F1]',
    description: 'Interactive mathematics learning platform with courses & student tools.',
    tags: ['E-Learning', 'LMS', 'Math'],
  },
  {
    id: 'sensationz',
    num: '08',
    title: 'Sensationz Shop',
    domain: 'shop.sensationzperformingarts.com',
    url: 'https://shop.sensationzperformingarts.com/',
    image: '/projects/sensationz.png',
    category: 'E-Commerce',
    categoryBadge: 'E-COMMERCE',
    badgeBg: 'bg-[#EC4899]',
    description: 'Online merchandise store for performing arts studio with dance apparel and gear.',
    tags: ['Shopify', 'Merchandise', 'Arts'],
  },
  {
    id: 'dental-two-sepia',
    num: '09',
    title: 'Dental Two Sepia',
    domain: 'dental-two-sepia.vercel.app',
    url: 'https://dental-two-sepia.vercel.app/',
    image: '/projects/dental-two-sepia.png',
    category: 'Healthcare',
    categoryBadge: 'HEALTHCARE',
    badgeBg: 'bg-[#0EA5E9]',
    description: 'Modern dental clinic platform with online appointment booking & patient management.',
    tags: ['React', 'Next.js', 'Booking'],
  },
  {
    id: 'pepperdent',
    num: '10',
    title: 'PepperDent',
    domain: 'pepperdent.in',
    url: 'https://pepperdent.in/',
    image: '/projects/pepperdent.png',
    category: 'Healthcare',
    categoryBadge: 'HEALTHCARE',
    badgeBg: 'bg-[#1D4ED8]',
    description: 'Comprehensive healthcare platform for modern dental clinic management & patient care.',
    tags: ['Healthcare', 'Dental', 'Clinic'],
  },
];

const categories = ['All Work', 'Wellness', 'Healthcare', 'E-Commerce', 'Education'] as const;

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

  // Ensure all project cards are instantly 100% visible without laggy fade effects
  useEffect(() => {
    gsap.set('.project-card', { opacity: 1, y: 0, scale: 1 });
  }, [activeCategory]);

  return (
    <section id="our-work" ref={sectionRef} className="py-24 md:py-36 px-6 md:px-12 bg-[#F7F3EC] border-b border-[#111111]/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* BANNER HEADER */}
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
              LIVE WEBSITES
            </span>
            <span className="text-xl sm:text-3xl font-black font-display opacity-90 border-l border-white/20 pl-3">
              10
            </span>
          </div>
        </div>

        {/* HERO HEADLINE */}
        <div className="max-w-4xl space-y-4 pt-4">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-[#111111] uppercase tracking-tight leading-[1.05]">
            We let the Work speak, <span className="text-[#8C21EF]">loudly</span>
          </h3>

          <p className="text-base sm:text-xl text-[#111111]/80 font-medium leading-relaxed max-w-3xl">
            Explore our showcase of real client web applications built for high performance, intuitive UX, and seamless design. Click any project box to visit the live site.
          </p>
        </div>

        {/* INTERACTIVE FILTER PILLS */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-2 border-b border-[#111111]/10 pb-6">
          {categories.map((cat) => {
            const count = cat === 'All Work' ? allProjects.length : allProjects.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat
                    ? 'bg-[#111111] text-[#F7F3EC] shadow-md scale-105'
                    : 'bg-[#EFE8DE] text-[#111111]/70 hover:bg-[#111111]/10 hover:text-[#111111]'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                  activeCategory === cat ? 'bg-[#8C21EF] text-white' : 'bg-[#111111]/10 text-[#111111]/60'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-COLUMN GRID OF LARGE 16:9 PC DESKTOP BROWSER MOCKUP CARDS */}
        <div className="py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
            {filteredProjects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="project-card group flex flex-col justify-between transition-all duration-300"
                >
                  {/* LARGE MINIMAL & SWEET BROWSER WINDOW CONTAINER */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl overflow-hidden shadow-md border border-gray-200/90 bg-white hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col block"
                  >
                    {/* MACOS BROWSER HEADER BAR */}
                    <div className="px-4 py-2.5 bg-[#F2F2F2] border-b border-gray-200/80 flex items-center justify-between gap-3 select-none">
                      {/* WINDOW CONTROLS */}
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block"></span>
                      </div>

                      {/* URL ADDRESS BAR */}
                      <div className="flex-1 max-w-[240px] bg-white rounded-full px-3 py-1 border border-gray-300/60 shadow-inner flex items-center justify-center gap-1.5 overflow-hidden">
                        <Lock className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                        <span className="text-[11px] font-mono font-semibold text-gray-700 truncate">
                          {project.domain}
                        </span>
                      </div>

                      {/* ACTION BUTTON */}
                      <div className="flex items-center gap-1 flex-shrink-0 text-gray-400 group-hover:text-[#8C21EF] transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>

                    {/* LIVE VIEWPORT FRAME (16:9 HD DESKTOP SCREENSHOT) */}
                    <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden group/viewport">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* HOVER OVERLAY WITH DIRECT VISIT LINK */}
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/viewport:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10 backdrop-blur-[2px]">
                        <div className="px-5 py-2.5 rounded-xl bg-[#111111] text-white text-xs font-black uppercase tracking-wider group-hover:bg-[#8C21EF] transition-all shadow-xl flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          <span>Visit Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* DETAILS BELOW THE BROWSER BOX */}
                  <div className="pt-4 px-1 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl sm:text-2xl font-black text-[#111111] font-display uppercase tracking-tight hover:text-[#8C21EF] transition-colors"
                      >
                        {project.title}
                      </a>
                      <span className="text-xs font-bold font-mono text-[#111111]/30">
                        {project.num}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-[#111111]/75 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA BUTTON */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={onOpenConsultation}
            className="group px-8 py-4 rounded-xl bg-[#111111] text-[#F7F3EC] text-xs font-black uppercase tracking-widest hover:bg-[#8C21EF] transition-all duration-300 shadow-xl flex items-center gap-2"
          >
            <span>Launch Your Custom Website</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

