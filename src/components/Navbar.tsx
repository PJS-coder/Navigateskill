'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F3EC]/90 backdrop-blur-md border-b border-[#111111]/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo Left */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#111111] text-[#F7F3EC] flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:scale-110">
            NS
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#111111] font-display uppercase">
              NAVIGATE SKILL
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#111111]/50 font-bold -mt-0.5">
              CREATIVE &amp; DIGITAL STUDIO
            </span>
          </div>
        </a>

        {/* Center Nav Links (Editorial Style like ashleybrookecs.com) */}
        <nav className="hidden md:flex items-center gap-8 border border-[#111111]/10 px-6 py-2 rounded-full bg-[#EFE8DE]/50 backdrop-blur-sm">
          {[
            { label: 'Web Dev', href: '#web-development' },
            { label: 'App Dev', href: '#app-development' },
            { label: 'Social Media', href: '#social-media' },
            { label: 'Ad Management', href: '#ad-management' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-wider text-[#111111]/70 hover:text-[#111111] transition-colors relative py-1 group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#111111] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button with Diagonal Arrow ↗ */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="group px-6 py-2.5 rounded-full bg-[#111111] text-[#F7F3EC] text-xs font-bold uppercase tracking-wider hover:bg-[#333333] transition-all duration-300 flex items-center gap-2 shadow-xs"
          >
            <span>Create With Us</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenConsultation}
            className="px-3.5 py-2 rounded-full bg-[#111111] text-white text-xs font-bold uppercase"
          >
            Create
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#EFE8DE] text-[#111111] border border-[#111111]/10"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F3EC] border-b border-[#111111]/10 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {[
              { label: 'Web Dev', href: '#web-development' },
              { label: 'App Dev', href: '#app-development' },
              { label: 'Social Media', href: '#social-media' },
              { label: 'Ad Management', href: '#ad-management' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-[#111111]/80 hover:text-[#111111] py-2 border-b border-[#111111]/[0.05]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-3 rounded-full bg-[#111111] text-[#F7F3EC] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Create With Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
