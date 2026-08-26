'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, ExternalLink, Lock, Globe, Filter } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ConsultationModal } from '@/components/ConsultationModal';

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

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All Work');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const filteredProjects =
    activeCategory === 'All Work'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#F7F3EC] text-[#111111] font-sans overflow-hidden">
        {/* Navbar */}
        <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* HERO BANNER MATCHING USER SCREENSHOT REFERENCE */}
        <section className="relative pt-36 md:pt-48 pb-24 md:pb-32 bg-gradient-to-br from-[#EBF5FB] via-[#F4ECFC] to-[#FDF2F8] overflow-hidden text-center">
          {/* Subtle Ambient Radial Glowing Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#00C6FF]/15 via-[#8C21EF]/15 to-[#FF52A2]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-[#111111] leading-none">
              Our Work
            </h1>

            {/* Breadcrumb Navigation */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-black uppercase tracking-widest text-[#111111]/70">
              <Link href="/" className="hover:text-[#8C21EF] transition-colors">
                Home
              </Link>
              <span className="text-[#111111]/30">/</span>
              <span className="text-[#8C21EF]">Work</span>
            </div>
          </div>

          {/* Smooth Bottom Organic Curved Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg
              className="relative block w-full h-12 sm:h-20 text-[#F7F3EC]"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path d="M0,0 C150,90 350,-40 500,65 C650,170 900,10 1200,50 L1200,120 L0,120 Z"></path>
            </svg>
          </div>
        </section>

        {/* INTERACTIVE CATEGORY FILTER PILLS */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto pb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-2 border-b border-[#111111]/10 pb-6">
            {categories.map((cat) => {
              const count =
                cat === 'All Work'
                  ? allProjects.length
                  : allProjects.filter((p) => p.category === cat).length;
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
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] ${
                      activeCategory === cat
                        ? 'bg-[#8C21EF] text-white'
                        : 'bg-[#111111]/10 text-[#111111]/60'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* PROJECTS GRID - MACOS BROWSER MOCKUP CARDS */}
        <section className="py-6 pb-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col justify-between"
              >
                {/* MACOS BROWSER WINDOW CONTAINER */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl overflow-hidden shadow-md border border-gray-200/90 bg-white hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col block"
                >
                  {/* BROWSER BAR */}
                  <div className="px-4 py-2.5 bg-[#F2F2F2] border-b border-gray-200/80 flex items-center justify-between gap-3 select-none">
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block"></span>
                    </div>

                    <div className="flex-1 max-w-[240px] bg-white rounded-full px-3 py-1 border border-gray-300/60 shadow-inner flex items-center justify-center gap-1.5 overflow-hidden">
                      <Lock className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                      <span className="text-[11px] font-mono font-semibold text-gray-700 truncate">
                        {project.domain}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 flex-shrink-0 text-gray-400 group-hover:text-[#8C21EF] transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>

                  {/* SCREENSHOT VIEWPORT */}
                  <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden group/viewport">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/viewport:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10 backdrop-blur-[2px]">
                      <div className="px-5 py-2.5 rounded-xl bg-[#111111] text-white text-xs font-black uppercase tracking-wider group-hover:bg-[#8C21EF] transition-all shadow-xl flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        <span>Visit Live Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* DETAILS BELOW BROWSER MOCKUP */}
                <div className="pt-4 px-1 space-y-2">
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

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#111111]/5 text-[#111111]/70 border border-[#111111]/06"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="bg-[#111111] text-[#F7F3EC] py-20 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight leading-tight">
              Have a Project <span className="text-[#8C21EF]">In Mind?</span>
            </h2>
            <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto font-medium">
              Let's engineer a custom digital experience that positions your brand at the forefront of your industry.
            </p>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#8C21EF] text-white text-sm font-black uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-all shadow-xl active:scale-95"
            >
              <span>Launch Your Custom Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}
