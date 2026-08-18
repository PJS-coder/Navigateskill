'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface LineScrollRevealProps {
  lines: { text: string; className?: string }[];
  containerClassName?: string;
}

export const LineScrollReveal: React.FC<LineScrollRevealProps> = ({
  lines,
  containerClassName = 'space-y-2',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.4'],
  });

  return (
    <div ref={containerRef} className={containerClassName}>
      {lines.map((line, index) => {
        const start = index / lines.length;
        const end = Math.min(1, start + 0.6 / lines.length);

        // Clamped motion values: slide smoothly into place (24px -> 0px) and stay at 0px without floating up out of bounds
        const y = useTransform(scrollYProgress, [0, start, end, 1], [24, 24, 0, 0]);
        const opacity = useTransform(scrollYProgress, [0, start, end, 1], [0.15, 0.15, 1, 1]);

        return (
          <div key={index} className="overflow-hidden py-1">
            <motion.div
              style={{ y, opacity }}
              className={line.className || 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tighter uppercase leading-[0.95]'}
            >
              {line.text}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
