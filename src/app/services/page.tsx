'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ConsultationModal } from '@/components/ConsultationModal';

const servicesData = [
  {
    id: 'brand-creative',
    num: '01',
    title: 'BRAND STRATEGY',
    categoryTag: 'LOOK & FEEL, CORE ELEMENTS, BRAND GUIDELINES',
    priceBadge: 'STARTING AT $2,500',
    bgColor: 'bg-[#D6C76E]',
    textColor: 'text-[#111111]',
    badgeBg: 'bg-[#C2B258] text-[#111111]',
    image: '/images/service_brand_creative_1787731357820.jpg',
    description:
      'We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.',
    includedItems: [
      {
        title: 'Brand Positioning & Core Messaging',
        details: 'Deep competitor research, target persona mapping, brand voice guidelines, and market positioning strategy.',
      },
      {
        title: 'Visual Identity & Typography System',
        details: 'Custom color palettes, typography hierarchy, logo mark variations, and high-fidelity brand tokens.',
      },
      {
        title: 'Design Systems & Component Assets',
        details: 'Scalable UI component libraries, icon sets, and multi-platform visual guidelines for web and mobile.',
      },
      {
        title: 'Brand Guidelines & Digital Playbook',
        details: 'Complete brand book documentation, social media templates, pitch decks, and asset export suites.',
      },
    ],
  },
  {
    id: 'web-development',
    num: '02',
    title: 'WEBSITE DESIGN & DEV',
    categoryTag: 'REACT 19, NEXT.JS 15, SPEED OPTIMIZATION',
    priceBadge: 'STARTING AT $3,500',
    bgColor: 'bg-[#7EA8C4]',
    textColor: 'text-[#111111]',
    badgeBg: 'bg-[#6B95B1] text-[#111111]',
    image: '/images/service_web_development_1787731377193.jpg',
    description:
      'Custom, blazing-fast web applications engineered with Next.js 15 and React — optimized for SEO, sub-second speed, and conversion scale.',
    includedItems: [
      {
        title: 'Next.js 15 & React 19 Custom Architecture',
        details: 'Clean, modular code built for extreme sub-second page performance, high security, and seamless scaling.',
      },
      {
        title: 'Headless CMS & Database Integration',
        details: 'Easy content editing via Sanity or Contentful CMS paired with real-time API integrations.',
      },
      {
        title: 'SEO & Core Web Vitals Dominance',
        details: 'Technical SEO structure, automated metadata, structured data schemas, and 95+ Google Lighthouse scores.',
      },
      {
        title: 'GSAP & Framer Motion Smooth Animations',
        details: 'Bespoke scroll-driven micro-interactions, 3D card tilts, and fluid page transitions.',
      },
    ],
  },
  {
    id: 'app-development',
    num: '03',
    title: 'MOBILE APP DEVELOPMENT',
    categoryTag: 'IOS & ANDROID, 60 FPS UI, REACT NATIVE',
    priceBadge: 'STARTING AT $4,500',
    bgColor: 'bg-[#C98E5F]',
    textColor: 'text-[#111111]',
    badgeBg: 'bg-[#B57C4D] text-[#111111]',
    image: '/images/service_app_development_1787731396120.jpg',
    description:
      'Cross-platform mobile apps engineered with React Native and Swift — single codebase efficiency with native-tier 60 FPS smooth interactions.',
    includedItems: [
      {
        title: 'Cross-Platform React Native & Expo Engine',
        details: 'Deliver native iOS and Android apps simultaneously with shared codebase efficiency and top performance.',
      },
      {
        title: '60 FPS Gesture & UI Interaction System',
        details: 'Fluid gesture controls, biometric login, offline storage, and instantaneous state management.',
      },
      {
        title: 'Push Notifications & Native Device APIs',
        details: 'Full hardware access including camera, geolocation, background sync, and target notification push.',
      },
      {
        title: 'App Store & Google Play Publishing',
        details: 'End-to-end publishing management, TestFlight beta distribution, and store listing optimization.',
      },
    ],
  },
  {
    id: 'social-media',
    num: '04',
    title: 'CONTENT & SOCIAL REELS',
    categoryTag: 'VIRAL 4K REELS, ORGANIC GROWTH, STORYTELLING',
    priceBadge: 'STARTING AT $1,800',
    bgColor: 'bg-[#B99ED8]',
    textColor: 'text-[#111111]',
    badgeBg: 'bg-[#A68BC5] text-[#111111]',
    image: '/images/service_social_media_1787731415299.jpg',
    description:
      'Turn content into growth with viral 4K reel editing, organic brand storytelling, motion graphics, and targeted distribution.',
    includedItems: [
      {
        title: 'Viral 4K Short-Form Reel Production',
        details: 'High-retention video editing, dynamic captioning, sound design, and color grading tuned for algorithm virality.',
      },
      {
        title: 'High-Conversion Scriptwriting & Strategy',
        details: 'Hook-driven video concepts, brand storytelling frameworks, and content calendar planning.',
      },
      {
        title: 'Organic Feed & Story Distribution',
        details: 'Optimized posting schedules, targeted hashtag clusters, and cross-platform publishing on Instagram & TikTok.',
      },
      {
        title: 'Audience Scaling & Growth Analytics',
        details: 'Monthly reach tracking, engagement analytics, and continuous audience conversion reporting.',
      },
    ],
  },
  {
    id: 'ad-management',
    num: '05',
    title: 'AD MANAGEMENT & ROAS',
    categoryTag: 'META & GOOGLE ADS, 4.8X BLENDED ROAS, CRO',
    priceBadge: 'STARTING AT $2,200',
    bgColor: 'bg-[#84C4A0]',
    textColor: 'text-[#111111]',
    badgeBg: 'bg-[#70B18D] text-[#111111]',
    image: '/images/service_ad_management_1787731435224.jpg',
    description:
      'Data-driven bidding, budget optimization, and multi-channel attribution targeting a blended 4.8x ROAS across Meta and Google.',
    includedItems: [
      {
        title: 'Meta (FB & IG) & Google Ad Acquisition',
        details: 'Full funnel ad setup, audience targeting, bidding strategy, and dynamic catalog retargeting.',
      },
      {
        title: 'High-ROAS Direct Response Video Ads',
        details: 'High-converting ad creative variations, A/B copy split testing, and thumbnail optimization.',
      },
      {
        title: 'Multi-Touch Funnel Attribution & Tracking',
        details: 'GA4, Meta Pixel, and server-side Conversion API integration for exact revenue tracking.',
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        details: 'Landing page A/B testing, checkout friction reduction, and average order value (AOV) expansion.',
      },
    ],
  },
];

export default function ServicesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>({});

  const toggleItem = (serviceId: string, itemIdx: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [serviceId]: prev[serviceId] === itemIdx ? null : itemIdx,
    }));
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#F7F3EC] text-[#111111] font-sans overflow-hidden">
        {/* Navigation Header */}
        <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* HERO SECTION MATCHING REFERENCE DESIGN - FULL VIEWPORT (100VH) */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 md:px-12 max-w-5xl mx-auto text-center relative">
          <div className="my-auto space-y-6">
            {/* Subtitle at top center */}
            <div className="flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#8C21EF]">
              <span className="text-[#8C21EF] font-bold text-sm">↴</span>
              <span>WELCOME TO NAVIGATE SKILL</span>
            </div>

            {/* Main Display Typography */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[1.08] text-[#111111]">
              <div>Your Next Best</div>
              <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap my-1">
                <span>Digital</span>
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl bg-[#8C21EF] text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <span className="text-xl sm:text-3xl md:text-4xl font-bold">↴</span>
                </div>
                <span className="text-[#111111]/35">Decision</span>
              </div>
              <div className="text-[#111111]/35">Starts Here</div>
            </h1>

            {/* Sub-headline Paragraph */}
            <p className="text-sm sm:text-lg text-[#111111]/75 font-semibold leading-relaxed pt-2 max-w-2xl mx-auto">
              We are a digital studio helping businesses grow through high-performance web engineering, paid campaigns, viral short-form reels, and mobile apps. Browse our work — the numbers do the talking.
            </p>
          </div>

          {/* Bottom Scroll Indicator Pill */}
          <div className="pt-6 pb-2 animate-bounce">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111]/5 border border-[#111111]/10 text-xs font-extrabold uppercase tracking-widest text-[#111111]/60">
              <span>Scroll For Services</span>
              <span className="text-[#8C21EF] text-sm">↴</span>
            </div>
          </div>
        </section>

        {/* MINIMALIST COLORFUL SERVICE CARDS SECTION MATCHING SCREENSHOT */}
        <section className="py-8 pb-28 px-4 sm:px-6 md:px-10 max-w-[1440px] mx-auto space-y-10">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45 }}
              className={`${service.bgColor} rounded-[32px] p-6 sm:p-10 border border-[#111111]/15 shadow-xl transition-all duration-300 relative overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* LEFT SIDE: TITLE + DESCRIPTION + INTERACTIVE ACCORDION LIST */}
                <div className="lg:col-span-7 space-y-6">
                  {/* TITLE & CATEGORY TAG */}
                  <div>
                    <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight leading-none text-[#111111]">
                      {service.title}
                    </h2>
                    <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#111111]/60 mt-2">
                      {service.categoryTag}
                    </p>
                  </div>

                  {/* SUMMARY DESCRIPTION */}
                  <p className="text-xs sm:text-sm font-bold text-[#111111]/85 leading-relaxed">
                    {service.description}
                  </p>

                  {/* ACCORDION DELIVERABLES LIST ("What's Included Goes Here +") */}
                  <div className="pt-2 space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#111111]/50 mb-3 border-b border-[#111111]/15 pb-2">
                      Click Any Item Below To View Details:
                    </div>

                    {service.includedItems.map((item, itemIdx) => {
                      const isOpen = openItems[service.id] === itemIdx;
                      return (
                        <div
                          key={itemIdx}
                          className="border-b border-[#111111]/15 pb-2.5 transition-colors cursor-pointer group"
                          onClick={() => toggleItem(service.id, itemIdx)}
                        >
                          <div className="flex items-center justify-between gap-4 py-1">
                            <span className="text-xs sm:text-sm font-extrabold text-[#111111] group-hover:opacity-80 transition-opacity">
                              {item.title}
                            </span>

                            <button
                              type="button"
                              className="w-6 h-6 rounded-full bg-[#111111]/10 group-hover:bg-[#111111] group-hover:text-white transition-all flex items-center justify-center text-[#111111] flex-shrink-0"
                              aria-label="Toggle details"
                            >
                              {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                            </button>
                          </div>

                          {/* EXPANDABLE DETAILS BODY */}
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <p className="text-xs font-semibold text-[#111111]/75 pt-2 pb-1 leading-relaxed pl-2 border-l-2 border-[#111111]/40 my-1">
                                  {item.details}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* REQUEST SERVICE BUTTON */}
                  <div className="pt-4">
                    <button
                      onClick={() => setIsConsultationOpen(true)}
                      className="px-6 py-3 rounded-full bg-[#111111] text-[#F7F3EC] text-xs font-black uppercase tracking-wider hover:bg-[#8C21EF] transition-all shadow-md active:scale-95 flex items-center gap-2"
                    >
                      <span>Request {service.title.split(' ')[0]} Service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE: CLASSY PURE IMAGE SHOWCASE (NO OVERLAID TEXT OR BUTTONS) */}
                <div className="lg:col-span-5 h-full flex items-center justify-center">
                  <div className="w-full h-64 sm:h-[360px] rounded-[24px] overflow-hidden relative shadow-md group border border-[#111111]/15 bg-[#111111]/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </section>

        {/* BOTTOM CALL TO ACTION BANNER */}
        <section className="bg-[#111111] text-[#F7F3EC] py-20 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight leading-tight">
              Ready to Accelerate <span className="text-[#8C21EF]">Your Growth?</span>
            </h2>
            <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto font-medium">
              Book a 30-minute free strategy consultation with our technical and creative team today.
            </p>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#8C21EF] text-white text-sm font-black uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-all shadow-xl active:scale-95"
            >
              <span>Book Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}
