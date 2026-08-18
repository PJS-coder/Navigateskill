'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextScrollReveal } from './TextScrollReveal';

interface AboutImageCard {
  id: string;
  numTag: string;
  title: string;
  image: string;
  accent?: boolean;
}

const aboutImages: AboutImageCard[] = [
  {
    id: 'img-1',
    numTag: '01 — Digital Solutions',
    title: 'Digital Solutions',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'img-2',
    numTag: '02 — Professional Services',
    title: 'Professional Services',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    accent: true,
  },
  {
    id: 'img-3',
    numTag: '03 — Skill Development',
    title: 'Skill Development',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'img-4',
    numTag: '04 — Modern Businesses',
    title: 'Modern Businesses',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
    accent: true,
  },
];

export const AboutUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic Scroll Parallax, Rotation & Scale Animations (gentler on mobile)
  const y1 = useTransform(scrollYProgress, [0, 1], isMobile ? [15, -15] : [60, -40]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const y2 = useTransform(scrollYProgress, [0, 1], isMobile ? [20, -20] : [80, -60]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [5, -5]);

  const y3 = useTransform(scrollYProgress, [0, 1], isMobile ? [12, -12] : [40, -30]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [3, -3]);

  const y4 = useTransform(scrollYProgress, [0, 1], isMobile ? [22, -22] : [90, -70]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <section ref={sectionRef} id="about" className="pt-16 pb-10 sm:pt-20 sm:pb-14 md:py-28 px-4 sm:px-6 md:px-12 border-b border-[#111111]/[0.08] bg-[#F7F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-12">

        {/* BANNER HEADER ALIGNED TO THE RIGHT SIDE */}
        <div className="flex justify-end relative z-20 mb-6 sm:mb-8">
          <div className="bg-[#8C21EF] text-[#F7F3EC] rounded-xl px-4 py-2 sm:px-6 sm:py-3 flex items-center gap-3 sm:gap-6 shadow-md">
            <span className="text-[10px] sm:text-sm font-extrabold uppercase tracking-wider font-display">
              THE FIRST THING YOU SHOULD KNOW ABOUT US
            </span>
            <span className="text-lg sm:text-3xl font-black font-display opacity-90 border-l border-white/20 pl-2 sm:pl-3">
              01
            </span>
          </div>
        </div>

        {/* MOBILE VIEW: COMPACT UNBOXED LAYOUT WITH MICRO CORNER CARDS & MASSIVE TEXT */}
        {isMobile ? (
          <div className="space-y-5 pt-4 pb-4 relative">
            {/* SUBTLE AMBIENT RADIAL PURPLE GLOW */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#8C21EF]/10 rounded-full blur-3xl pointer-events-none" />

            {/* TOP 2 MICRO CORNER CARDS (FAR LEFT & FAR RIGHT EDGES) */}
            <div className="flex items-center justify-between w-full relative z-10 mt-4 mb-4">
              {aboutImages.slice(0, 2).map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[26%] max-w-[85px] rounded-lg overflow-hidden shadow-xs border border-[#111111]/10 bg-white p-0.5 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="h-8 rounded-md overflow-hidden relative bg-[#EFE8DE]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                    />
                    <div className="absolute top-0.5 right-0.5 bg-[#111111]/85 text-white text-[7px] font-black font-display px-1 py-0.2 rounded">
                      {card.numTag.slice(0, 2)}
                    </div>
                  </div>
                  <div className="pt-0.5 pb-0.5 px-0.5">
                    <h3 className="text-[7.5px] font-black uppercase tracking-wider text-[#111111] truncate font-display text-center">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MAIN STATEMENT - MASSIVE BOLD TEXT WITH PROPER ALIGNMENT & SPACING */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative z-10 text-center px-2 py-4 my-4"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-[1.18] text-[#111111] font-display">
                NAVIGATE <span className="text-[#8C21EF]">SKILL</span> IS A DELHI-BASED COMPANY FOCUSED ON{' '}
                <span className="text-[#8C21EF] block my-1.5">
                  DIGITAL SOLUTIONS,
                </span>{' '}
                <span className="text-[#8C21EF] block my-1.5">
                  PROFESSIONAL SERVICES,
                </span>{' '}
                AND{' '}
                <span className="text-[#8C21EF] block my-1.5">
                  SKILL DEVELOPMENT
                </span>{' '}
                FOR MODERN BUSINESSES.
              </h2>
            </motion.div>

            {/* BOTTOM 2 MICRO CORNER CARDS (FAR LEFT & FAR RIGHT EDGES) */}
            <div className="flex items-center justify-between w-full relative z-10 my-1 pt-1">
              {aboutImages.slice(2, 4).map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[26%] max-w-[85px] rounded-lg overflow-hidden shadow-xs border border-[#111111]/10 bg-white p-0.5 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="h-8 rounded-md overflow-hidden relative bg-[#EFE8DE]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                    />
                    <div className="absolute top-0.5 right-0.5 bg-[#111111]/85 text-white text-[7px] font-black font-display px-1 py-0.2 rounded">
                      {card.numTag.slice(0, 2)}
                    </div>
                  </div>
                  <div className="pt-0.5 pb-0.5 px-0.5">
                    <h3 className="text-[7.5px] font-black uppercase tracking-wider text-[#111111] truncate font-display text-center">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* DESKTOP VIEW: ORIGINAL SCROLL PARALLAX FLOATING CARDS */
          <div className="relative min-h-[360px] sm:min-h-[480px] md:min-h-[540px] flex items-center justify-center my-2 sm:my-4 py-6 sm:py-8">

            {/* Top Left Corner Card */}
            <motion.div
              style={{ y: y1, rotate: rotate1 }}
              className="absolute top-0 left-0 w-20 sm:w-44 md:w-52 rounded-lg sm:rounded-2xl overflow-hidden shadow-md border border-white bg-white p-0.5 sm:p-1 z-20"
            >
              <div className="h-12 sm:h-28 md:h-36 rounded-md sm:rounded-xl overflow-hidden">
                <img
                  src={aboutImages[0].image}
                  alt={aboutImages[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-0.5 text-[7px] sm:text-[10px] font-black uppercase tracking-wider text-[#111111] text-center truncate">
                [01]
              </div>
            </motion.div>

            {/* Top Right Corner Card */}
            <motion.div
              style={{ y: y2, rotate: rotate2 }}
              className="absolute top-0 right-0 w-20 sm:w-44 md:w-52 rounded-lg sm:rounded-2xl overflow-hidden shadow-md border border-white bg-white p-0.5 sm:p-1 z-20"
            >
              <div className="h-12 sm:h-28 md:h-36 rounded-md sm:rounded-xl overflow-hidden">
                <img
                  src={aboutImages[1].image}
                  alt={aboutImages[1].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-0.5 text-[7px] sm:text-[10px] font-black uppercase tracking-wider text-[#8C21EF] text-center truncate">
                [02]
              </div>
            </motion.div>

            {/* Bottom Left Corner Card */}
            <motion.div
              style={{ y: y3, rotate: rotate3 }}
              className="absolute bottom-0 left-0 w-20 sm:w-44 md:w-52 rounded-lg sm:rounded-2xl overflow-hidden shadow-md border border-white bg-white p-0.5 sm:p-1 z-20"
            >
              <div className="h-12 sm:h-28 md:h-36 rounded-md sm:rounded-xl overflow-hidden">
                <img
                  src={aboutImages[2].image}
                  alt={aboutImages[2].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-0.5 text-[7px] sm:text-[10px] font-black uppercase tracking-wider text-[#111111] text-center truncate">
                [03]
              </div>
            </motion.div>

            {/* Bottom Right Corner Card */}
            <motion.div
              style={{ y: y4, rotate: rotate4 }}
              className="absolute bottom-0 right-0 w-20 sm:w-44 md:w-52 rounded-lg sm:rounded-2xl overflow-hidden shadow-md border border-white bg-white p-0.5 sm:p-1 z-20"
            >
              <div className="h-12 sm:h-28 md:h-36 rounded-md sm:rounded-xl overflow-hidden">
                <img
                  src={aboutImages[3].image}
                  alt={aboutImages[3].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-0.5 text-[7px] sm:text-[10px] font-black uppercase tracking-wider text-[#8C21EF] text-center truncate">
                [04]
              </div>
            </motion.div>

            {/* MAIN SCROLL REVEAL TEXT CENTERED IN MIDDLE */}
            <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto text-center px-4 sm:px-8 py-4 relative z-10">
              <TextScrollReveal
                as="h2"
                className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.18] font-display"
                text="Navigate Skill is a Delhi-based company focused on digital solutions, professional services, and skill development for modern businesses."
              />
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
