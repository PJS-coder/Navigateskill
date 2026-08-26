'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Detect mobile or low-spec hardware for adaptive responsiveness
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 0.9 : 1.2, // Snappier response time for mobile & low-end GPUs
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential smooth inertia
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: isMobile ? 1.0 : 1.1,
      touchMultiplier: isMobile ? 1.4 : 1.8,
      infinite: false,
    });

    // Synchronize Lenis scroll updates directly with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Bind Lenis animation frame loop to GSAP Ticker for frame-perfect 120Hz sync on all devices
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};



