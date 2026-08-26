'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  HeartHandshake,
  Target,
  Compass,
  Cpu,
  Layers,
  Rocket,
  Check,
  Award,
  Globe,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ConsultationModal } from '@/components/ConsultationModal';

const coreValues = [
  {
    title: 'Relentless Focus',
    description: 'Eliminating corporate bloat and bureaucracy to engineer fast, high-impact digital tools.',
    icon: Zap,
    iconBg: 'bg-[#FEF3C7] text-[#D97706] border border-[#F59E0B]/20',
  },
  {
    title: 'Uncompromising Integrity',
    description: 'Transparent timelines, direct builder access, clear milestones, and zero hidden costs.',
    icon: ShieldCheck,
    iconBg: 'bg-[#DBEAFE] text-[#2563EB] border border-[#3B82F6]/20',
  },
  {
    title: 'Obsessive Refinement',
    description: 'Testing and iterating until every pixel, motion line, and interaction feels fluid and flawless.',
    icon: Target,
    iconBg: 'bg-[#F3E8FF] text-[#8C21EF] border border-[#8C21EF]/20',
  },
  {
    title: 'Radical Collaboration',
    description: 'Working as an embedded technical team dedicated to multiplying your bottom-line revenue.',
    icon: HeartHandshake,
    iconBg: 'bg-[#D1FAE5] text-[#059669] border border-[#10B981]/20',
  },
];

const processSteps = [
  {
    num: '01',
    phase: 'PHASE 01',
    title: 'Discovery & Blueprint',
    description: 'Deep dive into target audience personas, competitor audits, and technical scope to map ROI goals.',
    side: 'right',
  },
  {
    num: '02',
    phase: 'PHASE 02',
    title: 'Architecture & Tokens',
    description: 'Wireframing, database schema design, and high-performance component token architecture.',
    side: 'left',
  },
  {
    num: '03',
    phase: 'PHASE 03',
    title: 'UI/UX Design System',
    description: 'High-fidelity design tokens, interactive prototypes, micro-interactions, and luxury typography.',
    side: 'right',
  },
  {
    num: '04',
    phase: 'PHASE 04',
    title: 'Full-Stack Engineering',
    description: 'Next.js 15 & React Native engineering with sub-second page performance optimization.',
    side: 'left',
  },
  {
    num: '05',
    phase: 'PHASE 05',
    title: 'Performance QA & Launch',
    description: 'Rigorous QA testing, Core Web Vitals audit, security checks, and automated cloud deployment.',
    side: 'right',
  },
  {
    num: '06',
    phase: 'PHASE 06',
    title: 'Growth & Scale',
    description: 'Ongoing real-time analytics monitoring, A/B campaign optimization, and dedicated support.',
    side: 'left',
  },
];

export default function AboutPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#F7F3EC] text-[#111111] font-sans overflow-hidden">
        {/* Navigation Header */}
        <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* 1. TOP MINIMAL LUXURY HERO SECTION */}
        <section className="pt-32 md:pt-44 pb-16 px-6 md:px-12 max-w-5xl mx-auto text-center border-b border-[#111111]/10">
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111]/5 border border-[#111111]/10 text-xs font-black uppercase tracking-widest text-[#111111]">
              <Sparkles className="w-3.5 h-3.5 text-[#8C21EF]" />
              <span>OUR MANIFESTO</span>
            </div>

            {/* Minimal Display Typography */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight text-[#111111] leading-[0.95]">
              The Engineers <br />
              Of <span className="text-[#8C21EF]">Innovation.</span>
            </h1>

            {/* Sub-headline Paragraph */}
            <p className="text-base sm:text-xl text-[#111111]/75 font-semibold leading-relaxed max-w-2xl mx-auto pt-2">
              A collective of dreamers, builders, and strategists obsessed with pushing the absolute boundaries of the digital world.
            </p>

            {/* Minimal Pill Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
              {[
                'Sub-Second Speed Execution',
                '60 FPS Native Interactions',
                'Blended 4.8x ROAS Scale',
              ].map((pill, pIdx) => (
                <span
                  key={pIdx}
                  className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#111111]/5 text-[#111111]/75 border border-[#111111]/08"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 2. FROM HUMBLE BEGINNINGS TO DIGITAL DOMINANCE */}
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-[#111111] leading-tight">
                From Humble Beginnings <br />
                to <span className="bg-gradient-to-r from-[#8C21EF] to-[#10B981] bg-clip-text text-transparent">Digital Dominance</span>
              </h2>

              <p className="text-sm sm:text-base text-[#111111]/80 font-semibold leading-relaxed">
                Founded in New Delhi, Navigate Skill was created with a single vision: to eliminate bloated corporate processes and build high-performance web platforms, mobile apps, and ad campaigns.
              </p>

              <p className="text-xs sm:text-sm text-[#111111]/65 font-medium leading-relaxed">
                Over the past 5+ years, we have scaled from a localized engineering desk into a full-stack digital collective partnering with ambitious brands globally.
              </p>

              {/* CHECKLIST */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Sub-Second Speed Execution',
                  'Direct Access to Core Builders',
                  'Radical Transparency',
                  '100% Client Retention Focus',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#111111]">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN: 4 COLORFUL STAT CARDS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="grid grid-cols-2 gap-5">
                {/* Stat 1: Mint Green */}
                <div className="bg-[#D1FAE5] rounded-3xl p-7 border border-[#10B981]/20 space-y-2 text-[#065F46] shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl sm:text-6xl font-black font-display text-[#047857]">
                    50+
                  </div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#065F46]/80">
                    Happy Global Clients
                  </div>
                </div>

                {/* Stat 2: White */}
                <div className="bg-white rounded-3xl p-7 border border-[#111111]/10 space-y-2 text-[#111111] shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl sm:text-6xl font-black font-display text-[#8C21EF]">
                    5+
                  </div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#111111]/70">
                    Years of Experience
                  </div>
                </div>

                {/* Stat 3: White */}
                <div className="bg-white rounded-3xl p-7 border border-[#111111]/10 space-y-2 text-[#111111] shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl sm:text-6xl font-black font-display text-[#111111]">
                    50+
                  </div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#111111]/70">
                    Projects Delivered
                  </div>
                </div>

                {/* Stat 4: Gradient */}
                <div className="bg-gradient-to-br from-[#8C21EF] to-[#0072FF] text-white rounded-3xl p-7 space-y-2 shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="text-4xl sm:text-6xl font-black font-display">
                    10x
                  </div>
                  <div className="text-xs font-black uppercase tracking-wider opacity-90">
                    Average ROAS
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. OUR CORE VALUES */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#111111]/10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C21EF]/10 text-[#8C21EF] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GUIDING PRINCIPLES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-[#111111]">
              Our Core <span className="bg-gradient-to-r from-[#8C21EF] to-[#A78BFA] bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-sm sm:text-base text-[#111111]/75 font-semibold">
              The fundamental standards that guide every sprint, design decision, and line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl p-7 border border-[#111111]/10 shadow-md hover:shadow-2xl transition-all duration-300 space-y-4 group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${val.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-xl font-extrabold font-display text-[#111111] uppercase tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#111111]/70 font-medium leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 4. OUR DEVELOPMENT PROCESS (VERTICAL TIMELINE) */}
        <section className="py-20 md:py-32 px-6 md:px-12 max-w-6xl mx-auto relative border-t border-[#111111]/10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C21EF]/10 text-[#8C21EF] text-xs font-black uppercase tracking-wider">
              <span>HOW WE WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-[#111111]">
              Our Development <span className="bg-gradient-to-r from-[#8C21EF] to-[#00C6FF] bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-sm sm:text-base text-[#111111]/75 font-semibold">
              A battle-tested workflow engineered to turn bold ideas into high-converting digital platforms.
            </p>
          </div>

          {/* VERTICAL TIMELINE CONTAINER */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8C21EF] via-[#34D399] to-[#8C21EF] -translate-x-1/2" />

            <div className="space-y-12 md:space-y-16 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className={`flex flex-col md:flex-row items-center ${
                    step.side === 'left' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* CARD ITEM */}
                  <div className="w-full md:w-1/2 p-2">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#111111]/10 shadow-lg space-y-3 hover:shadow-2xl transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#8C21EF] bg-[#8C21EF]/10 px-2.5 py-1 rounded-md">
                          {step.phase}
                        </span>
                        <span className="text-2xl font-black font-display text-[#111111]/15 group-hover:text-[#8C21EF]/30 transition-colors">
                          {step.num}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold font-display uppercase tracking-tight text-[#111111]">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#111111]/75 font-medium leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* CENTER NODE CIRCLE */}
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-[#8C21EF] text-[#8C21EF] font-black text-xs flex items-center justify-center shadow-md my-4 md:my-0 flex-shrink-0 z-20">
                    {idx + 1}
                  </div>

                  {/* EMPTY HALF ON OPPOSITE SIDE */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. EMPOWERING BRANDS TO DEFY EXPECTATIONS */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#111111]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5500]/10 text-[#FF5500] text-xs font-black uppercase tracking-wider">
                <span>OUR MISSION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-[#111111] leading-tight">
                Empowering Brands to <br />
                <span className="bg-gradient-to-r from-[#FF5500] to-[#FF9233] bg-clip-text text-transparent">Defy Expectations.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#111111]/80 font-semibold leading-relaxed">
                We believe digital products shouldn't just exist—they should command attention. Every line of code, ad campaign, and visual token we create is engineered to deliver unmatched ROI.
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-white rounded-2xl p-4 border border-[#111111]/10 flex items-start gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#8C21EF]/10 text-[#8C21EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#111111] uppercase tracking-wider">
                      Engineered For Speed
                    </h4>
                    <p className="text-xs text-[#111111]/70 mt-0.5 font-medium">
                      Sub-second load times and native 60 FPS interactions that maximize user conversion rates.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-[#111111]/10 flex items-start gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#111111] uppercase tracking-wider">
                      Data-Driven Growth
                    </h4>
                    <p className="text-xs text-[#111111]/70 mt-0.5 font-medium">
                      Creative storytelling and viral 4K short-form media backed by transparent ROAS metrics.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE TECH IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="rounded-[32px] overflow-hidden border border-[#111111]/15 shadow-2xl bg-[#0A0714] p-2 relative group">
                <img
                  src="/images/about_studio_workstation_1787734040029.jpg"
                  alt="Navigate Skill Engineering Studio"
                  className="w-full h-72 sm:h-[400px] object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute bottom-6 left-6 bg-[#111111]/90 backdrop-blur-md text-[#F7F3EC] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#8C21EF]" />
                  <span>Delhi Studio HQ</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. BOTTOM CTA BANNER */}
        <section className="bg-[#111111] text-[#F7F3EC] py-20 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black font-display uppercase tracking-tight leading-tight">
              Ready to Build the <br />
              <span className="bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#34D399] bg-clip-text text-transparent">Extraordinary?</span>
            </h2>
            <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto font-medium">
              Join forces with our technical and creative team today and scale your brand.
            </p>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#8C21EF] text-white text-sm font-black uppercase tracking-wider hover:bg-white hover:text-[#111111] transition-all shadow-xl active:scale-95"
            >
              <span>Book Strategy Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
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
