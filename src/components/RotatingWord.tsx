'use client';

import React, { useState, useEffect } from 'react';

interface RotatingWordProps {
  words: string[];
  interval?: number;
}

export const RotatingWord: React.FC<RotatingWordProps> = ({
  words = ['Strategy', 'Automation', 'Marketing', 'Growth'],
  interval = 2400,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="inline-block relative overflow-hidden h-[1.25em] align-bottom text-[#8C21EF] font-serif-italic font-normal px-1">
      <span
        key={index}
        className="inline-block animate-in slide-in-from-bottom duration-500 fade-in"
      >
        {words[index]}
      </span>
    </span>
  );
};
