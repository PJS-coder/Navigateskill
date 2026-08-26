'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, Search, Lightbulb, PenTool, Code, ShieldCheck, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ProcessStep {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  subtitleColor: string;
  glowGradient: string;
  glowShadow: string;
  icon: React.ElementType;
}

const processSteps: ProcessStep[] = [
  {
    id: 'sprint-planning',
    num: '01',
    title: 'Sprint Planning',
    subtitle: 'DEFINE & PRIORITIZE',
    description: 'We collaborate to identify business goals, define sprint objectives, and prioritize features—ensuring clarity, alignment, and maximum impact each cycle.',
    tag: 'Explore Phase',
    subtitleColor: 'text-[#00B4D8]',
    glowGradient: 'bg-gradient-to-br from-[#00C6FF] to-[#0072FF]',
    glowShadow: 'shadow-[0_8px_25px_rgba(0,153,255,0.35)]',
    icon: Search,
  },
  {
    id: 'ux-strategy',
    num: '02',
    title: 'Ideation & UX Strategy',
    subtitle: 'SHAPE THE SOLUTION',
    description: 'Our team explores user needs, crafts flows, and maps core experiences—transforming requirements into actionable, user-centric design direction.',
    tag: 'Explore Phase',
    subtitleColor: 'text-[#FF6B00]',
    glowGradient: 'bg-gradient-to-br from-[#FF9233] to-[#FF5500]',
    glowShadow: 'shadow-[0_8px_25px_rgba(255,107,0,0.35)]',
    icon: Lightbulb,
  },
  {
    id: 'design-sprint',
    num: '03',
    title: 'Design Sprint',
    subtitle: 'PROTOTYPE & VALIDATE',
    description: 'We rapidly design high-fidelity UI, iterate through feedback, and validate early—reducing risk and ensuring the experience aligns with business goals.',
    tag: 'Explore Phase',
    subtitleColor: 'text-[#FF2A85]',
    glowGradient: 'bg-gradient-to-br from-[#FF52A2] to-[#E60067]',
    glowShadow: 'shadow-[0_8px_25px_rgba(255,20,147,0.35)]',
    icon: PenTool,
  },
  {
    id: 'dev-sprint',
    num: '04',
    title: 'Development Sprint',
    subtitle: 'BUILD & ITERATE',
    description: 'Engineering brings the vision to life with clean, scalable code—delivering incremental releases, continuous integration, and seamless collaboration.',
    tag: 'Explore Phase',
    subtitleColor: 'text-[#10B981]',
    glowGradient: 'bg-gradient-to-br from-[#34D399] to-[#059669]',
    glowShadow: 'shadow-[0_8px_25px_rgba(16,185,129,0.35)]',
    icon: Code,
  },
  {
    id: 'qa-release',
    num: '05',
    title: 'QA & Release',
    subtitle: 'TEST & DEPLOY',
    description: 'We rigorously test for quality, performance, and security, followed by smooth deployments that deliver stable and reliable releases every sprint.',
    tag: 'Explore Phase',
    subtitleColor: 'text-[#8C21EF]',
    glowGradient: 'bg-gradient-to-br from-[#A78BFA] to-[#7C3AED]',
    glowShadow: 'shadow-[0_8px_25px_rgba(140,33,239,0.35)]',
    icon: ShieldCheck,
  },
  {
    id: 'retrospective',
    num: '06',
    title: 'Retrospective',
    subtitle: 'REVIEW & IMPROVE',
    description: 'Each sprint ends with structured reflection—analyzing wins, challenges, and opportunities to strengthen efficiency and continuously improve results.',
    tag: 'Explore Phase',
    subtitleColor: 'text-[#F59E0B]',
    glowGradient: 'bg-gradient-to-br from-[#FBBF24] to-[#D97706]',
    glowShadow: 'shadow-[0_8px_25px_rgba(245,158,11,0.35)]',
    icon: Sparkles,
  },
];

interface OurProcessSectionProps {
  onOpenConsultation?: () => void;
}

export const OurProcessSection: React.FC<OurProcessSectionProps> = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const getScrollDistance = () => {
      const viewportWidth = window.innerWidth;
      const startOffset = viewportWidth * (viewportWidth >= 1024 ? 0.45 : 0.25);
      const endBuffer = viewportWidth * (viewportWidth >= 1024 ? 0.45 : 0.25);
      const cardsWidth = track.scrollWidth;
      return startOffset + cardsWidth - viewportWidth + endBuffer;
    };

    const ctx = gsap.context(() => {
      const distance = getScrollDistance();

      gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.2,
          anticipatePin: 1,
          start: 'top top',
          end: () => `+=${distance + 400}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const step = Math.min(
              processSteps.length - 1,
              Math.floor(self.progress * processSteps.length)
            );
            setActiveStep(step);
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="our-process"
      ref={sectionRef}
      className="relative bg-[#F7F3EC] text-[#111111] py-20 md:py-28 overflow-hidden border-b border-[#111111]/[0.08]"
    >
      {/* LIGHT MODE BACKGROUND PATTERN & AMBIENT GLOWS */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#8C21EF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER BLOCK */}
        <div className="flex flex-col gap-4 pb-8 border-b border-[#111111]/10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C21EF]/10 border border-[#8C21EF]/20 text-[#8C21EF] text-xs font-black uppercase tracking-wider w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display uppercase tracking-tight text-[#111111] leading-none">
            From Concept <span className="text-[#8C21EF]">To Reality.</span>
          </h2>
        </div>
      </div>

      {/* HORIZONTAL CARDS TRACK CONTAINER - STARTS FROM RIGHT & SCROLLS PAST LAST BOX INTO TRAILING EMPTY SPACE */}
      <div className="relative z-10 pt-12 pb-8 pl-8 sm:pl-32 md:pl-56 lg:pl-[45vw] pr-16 sm:pr-40 md:pr-64 lg:pr-[70vw] overflow-x-auto md:overflow-x-visible scrollbar-none snap-x snap-mandatory">
        <div
          ref={trackRef}
          className="flex items-stretch gap-6 sm:gap-8 min-w-max transform-gpu will-change-transform"
        >
          {processSteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className={`w-[310px] sm:w-[380px] md:w-[420px] min-h-[400px] flex-shrink-0 bg-white rounded-[28px] p-7 sm:p-9 border border-[#111111]/10 flex flex-col justify-between group hover:border-[#8C21EF]/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden snap-center ${
                  activeStep === idx ? 'border-[#8C21EF]/40 shadow-xl' : 'shadow-md'
                }`}
              >
                {/* SUBTLE CARD BACKGROUND GLOW ON HOVER */}
                <div className="absolute -right-20 -bottom-20 w-56 h-56 rounded-full bg-[#8C21EF]/5 group-hover:bg-[#8C21EF]/10 blur-3xl transition-all duration-500 pointer-events-none" />

                {/* CARD TOP ROW: GLOWING ICON BOX & BIG STEP NUMBER */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    {/* GLOWING ACCENT ICON BOX */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${step.glowGradient} ${step.glowShadow} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105`}
                    >
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>

                    {/* BIG SUBTLE STEP NUMBER */}
                    <span className="text-4xl sm:text-5xl font-black font-display text-[#111111]/15 group-hover:text-[#8C21EF]/30 transition-colors duration-300">
                      {step.num}
                    </span>
                  </div>

                  {/* TITLE & SUBTITLE */}
                  <div className="mt-8 space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight leading-tight">
                      {step.title}
                    </h3>
                    <p className={`text-xs sm:text-sm font-black uppercase tracking-wider ${step.subtitleColor}`}>
                      {step.subtitle}
                    </p>
                  </div>

                  {/* DESCRIPTION PARAGRAPH */}
                  <p className="text-xs sm:text-sm text-[#111111]/75 font-medium leading-relaxed mt-4">
                    {step.description}
                  </p>
                </div>

                {/* CARD FOOTER LINK */}
                <div className="relative z-10 pt-6 mt-6 border-t border-[#111111]/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#111111]/60 group-hover:text-[#8C21EF] transition-colors cursor-pointer">
                    Explore Phase
                    <ArrowRight className="w-4 h-4 text-[#111111]/40 group-hover:text-[#8C21EF] group-hover:translate-x-1 transition-all duration-300" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



