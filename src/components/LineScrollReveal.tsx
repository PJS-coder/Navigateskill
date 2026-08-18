'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LineScrollRevealProps {
  lines: { text: string; className?: string }[];
  containerClassName?: string;
}

export const LineScrollReveal: React.FC<LineScrollRevealProps> = ({
  lines,
  containerClassName = 'space-y-2',
}) => {
  return (
    <div className={containerClassName}>
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden py-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={line.className || 'text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight uppercase leading-[0.95]'}
          >
            {line.text}
          </motion.div>
        </div>
      ))}
    </div>
  );
};
