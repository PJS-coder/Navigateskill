'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextScrollRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const TextScrollReveal: React.FC<TextScrollRevealProps> = ({
  text,
  className = '',
  as: Component = 'p',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.3'],
  });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className="relative">
      <Component className={className}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          
          // Clamped 4-point transform array [0, start, end, 1]:
          // Faded opacity -> Solid 1.0, subtle slide (8px -> 0px), locks at final position
          const opacity = useTransform(scrollYProgress, [0, start, end, 1], [0.2, 0.2, 1, 1]);
          const color = useTransform(
            scrollYProgress,
            [0, start, end, 1],
            ['#888888', '#888888', '#111111', '#111111']
          );
          const y = useTransform(scrollYProgress, [0, start, end, 1], [8, 8, 0, 0]);

          return (
            <motion.span
              key={i}
              style={{ opacity, color, y, willChange: 'opacity, transform' }}
              className="inline-block mr-[0.25em] transition-colors duration-150"
            >
              {word}
            </motion.span>
          );
        })}
      </Component>
    </div>
  );
};
