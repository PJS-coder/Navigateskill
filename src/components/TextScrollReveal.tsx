'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface TextScrollRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

interface WordSpanProps {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const WordSpan: React.FC<WordSpanProps> = ({ word, index, total, scrollYProgress }) => {
  const start = index / total;
  const end = start + 1 / total;

  const opacity = useTransform(scrollYProgress, [0, start, end, 1], [0.2, 0.2, 1, 1]);
  const color = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    ['#888888', '#888888', '#111111', '#111111']
  );
  const y = useTransform(scrollYProgress, [0, start, end, 1], [8, 8, 0, 0]);

  return (
    <motion.span
      style={{ opacity, color, y, willChange: 'opacity, transform' }}
      className="inline-block mr-[0.25em] transition-colors duration-150"
    >
      {word}
    </motion.span>
  );
};

export const TextScrollReveal: React.FC<TextScrollRevealProps> = ({
  text,
  className = '',
  as: Component = 'p',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'end 0.3'],
  });

  if (isMobile) {
    return (
      <Component className={className}>
        {text}
      </Component>
    );
  }

  const words = text.split(' ');

  return (
    <div ref={containerRef} className="relative">
      <Component className={className}>
        {words.map((word, i) => (
          <WordSpan
            key={i}
            word={word}
            index={i}
            total={words.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </Component>
    </div>
  );
};


