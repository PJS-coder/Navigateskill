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
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollDistance = () => {
      const viewportWidth = window.innerWidth;
      const cardsWidth = track.scrollWidth;
      const startOffset = viewportWidth * 0.35;
      return startOffset + cardsWidth - viewportWidth + 80;
    };

    let ctx: gsap.Context;

    const initScroll = () => {
      const distance = getScrollDistance();

      ctx = gsap.context(() => {
        gsap.to(track, {
          x: -distance,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.3,
            anticipatePin: 1,
            start: 'top top',
            end: () => `+=${distance + 150}`,
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
    };

    const timer = setTimeout(() => {
      initScroll();
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [isMobile]);

  return (
    <section
      id="our-process"
      ref={sectionRef}
      className="relative bg-[#F7F3EC] text-[#111111] pt-8 pb-12 md:pt-14 md:pb-16 lg:pt-16 lg:pb-20 xl:pt-20 xl:pb-24 overflow-hidden border-b border-[#111111]/[0.08]"
    >
      {/* LIGHT MODE BACKGROUND PATTERN & AMBIENT GLOWS */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[300px] sm:w-[500px] xl:w-[700px] h-[300px] sm:h-[500px] xl:h-[700px] bg-[#8C21EF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        {/* BANNER HEADER ALIGNED TO THE RIGHT SIDE */}
        <div className="flex justify-start sm:justify-end relative z-20 mb-3 sm:mb-4 lg:mb-6">
          <div className="bg-[#8C21EF] text-[#F7F3EC] rounded-xl px-3 py-1.5 sm:px-5 sm:py-2 lg:px-6 lg:py-3 flex items-center gap-2 sm:gap-4 lg:gap-6 shadow-md max-w-full overflow-hidden">
            <span className="text-[9px] sm:text-xs lg:text-sm font-extrabold uppercase tracking-wider font-display truncate">
              THE FOURTH THING YOU SHOULD KNOW OUR PROCESS
            </span>
            <span className="text-xs sm:text-2xl lg:text-3xl font-black font-display opacity-90 border-l border-white/20 pl-2 sm:pl-3 flex-shrink-0">
              04
            </span>
          </div>
        </div>

        {/* HEADER BLOCK */}
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 pb-3 sm:pb-4 lg:pb-6 border-b border-[#111111]/10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#8C21EF]/10 border border-[#8C21EF]/20 text-[#8C21EF] text-[10px] sm:text-xs lg:text-sm font-black uppercase tracking-wider w-fit">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Our Process</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black font-display uppercase tracking-tight text-[#111111] leading-tight break-words">
            From Concept <span className="text-[#8C21EF]">To Reality.</span>
          </h2>
        </div>
      </div>

      {/* CARDS TRACK CONTAINER */}
      <div className="relative z-10 pt-4 md:pt-6 lg:pt-8 pb-6 md:pb-8 lg:pb-12">
        <div
          ref={trackRef}
          className={`${
            isMobile
              ? 'flex overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 gap-4 pt-1 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
              : 'flex items-stretch gap-5 md:gap-6 lg:gap-8 xl:gap-10 min-w-max pl-5 md:pl-[35vw] pr-5 md:pr-12 transform-gpu will-change-transform'
          }`}
        >
          {processSteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className={`w-[88vw] max-w-[360px] sm:w-[440px] md:w-[480px] lg:w-[540px] xl:w-[580px] 2xl:w-[620px] h-auto min-h-0 sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] flex-shrink-0 snap-center bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-5 sm:p-7 lg:p-8 border border-[#111111]/10 flex flex-col justify-between group hover:border-[#8C21EF]/50 hover:shadow-2xl transition-all duration-300 relative ${
                  activeStep === idx ? 'border-[#8C21EF]/40 shadow-xl' : 'shadow-md'
                }`}
              >
                {/* SUBTLE CARD BACKGROUND GLOW ON HOVER */}
                <div className="absolute -right-20 -bottom-20 w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-[#8C21EF]/5 group-hover:bg-[#8C21EF]/10 blur-3xl transition-all duration-500 pointer-events-none" />

                {/* CARD TOP ROW: GLOWING ICON BOX & BIG STEP NUMBER */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    {/* GLOWING ACCENT ICON BOX */}
                    <div
                      className={`w-11 h-11 sm:w-14 sm:h-14 lg:w-15 lg:h-15 rounded-xl sm:rounded-2xl ${step.glowGradient} ${step.glowShadow} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.2]" />
                    </div>

                    {/* BIG SUBTLE STEP NUMBER */}
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#111111]/15 group-hover:text-[#8C21EF]/30 transition-colors duration-300">
                      {step.num}
                    </span>
                  </div>

                  {/* TITLE & SUBTITLE */}
                  <div className="mt-4 sm:mt-5 space-y-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111111] tracking-tight leading-tight break-words">
                      {step.title}
                    </h3>
                    <p className={`text-[11px] sm:text-xs lg:text-sm font-black uppercase tracking-wider ${step.subtitleColor}`}>
                      {step.subtitle}
                    </p>
                  </div>

                  {/* DESCRIPTION PARAGRAPH */}
                  <p className="text-xs sm:text-sm lg:text-base text-[#111111]/75 font-medium leading-relaxed mt-2.5 sm:mt-3">
                    {step.description}
                  </p>
                </div>

                {/* CARD FOOTER LINK */}
                <div className="relative z-10 pt-3 sm:pt-4 mt-4 sm:mt-5 border-t border-[#111111]/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm lg:text-base font-semibold text-[#111111]/60 group-hover:text-[#8C21EF] transition-colors cursor-pointer">
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




