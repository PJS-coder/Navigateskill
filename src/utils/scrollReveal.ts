import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollReveal(): () => void {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // On mobile view or reduced motion: IMMEDIATELY reveal all target elements without fade/slide animations
  if (isMobile || prefersReducedMotion) {
    const elements = document.querySelectorAll('[data-reveal], [data-reveal-child]');
    elements.forEach((el) => {
      gsap.set(el, {
        opacity: 1,
        y: 0,
        clipPath: 'none',
        clearProps: 'all',
      });
    });
    return () => {};
  }

  // 1. Initial State Setup: Every target element starts hidden (Desktop only)
  const fadeElements = document.querySelectorAll<HTMLElement>('[data-reveal="fade"]');
  const imageElements = document.querySelectorAll<HTMLElement>('[data-reveal="image"]');
  const staggerContainers = document.querySelectorAll<HTMLElement>('[data-reveal="stagger"]');

  gsap.set(fadeElements, {
    opacity: 0,
    y: 60,
  });

  gsap.set(imageElements, {
    opacity: 0,
    y: 60,
    clipPath: 'inset(100% 0% 0% 0%)',
  });

  staggerContainers.forEach((container) => {
    const children = container.querySelectorAll<HTMLElement>('[data-reveal-child]');
    gsap.set(children, {
      opacity: 0,
      y: 60,
    });
  });

  // 2. Batch animation for data-reveal="fade"
  const fadeBatch = ScrollTrigger.batch('[data-reveal="fade"]', {
    start: 'top 85%',
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
      });
    },
  });

  // 3. Batch animation for data-reveal="image" (Opacity/Y + Clip-Path parallel)
  const imageBatch = ScrollTrigger.batch('[data-reveal="image"]', {
    start: 'top 85%',
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
      });
    },
  });

  // 4. Batch animation for data-reveal="stagger" containers
  const staggerBatch = ScrollTrigger.batch('[data-reveal="stagger"]', {
    start: 'top 85%',
    once: true,
    onEnter: (batch) => {
      batch.forEach((container) => {
        const children = container.querySelectorAll<HTMLElement>('[data-reveal-child]');
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.12,
        });
      });
    },
  });

  // Return cleanup function to kill triggers if component unmounts
  return () => {
    fadeBatch.forEach((st) => st.kill());
    imageBatch.forEach((st) => st.kill());
    staggerBatch.forEach((st) => st.kill());
  };
}

