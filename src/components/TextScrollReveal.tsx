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
          
          // Ashley Brooke CS style: Faded opacity (0.1) -> Solid Black (1.0), with fine upward slide (y: 10 -> 0)
          const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
          const color = useTransform(
            scrollYProgress,
            [start, end],
            ['#D1D5DB', '#111111']
          );
          const y = useTransform(scrollYProgress, [start, end], [8, 0]);

          return (
            <motion.span
              key={i}
              style={{ opacity, color, y }}
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
