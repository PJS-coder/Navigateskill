'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '@/assets/navigate.png';

const logoSrc = typeof logo === 'string' ? logo : (logo as { src: string }).src;

interface NavbarProps {
  onOpenConsultation?: () => void;
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

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F3EC]/90 backdrop-blur-md border-b border-[#111111]/10 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo Left */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#111111] flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105 shadow-md overflow-hidden">
            <img src={logoSrc} alt="Navigate Skill Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm sm:text-base tracking-tight text-[#111111] font-display uppercase leading-none">
              NAVIGATE <span className="text-[#8C21EF]">SKILL</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#111111]/50 font-black pt-0.5">
              Delhi, India
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 border border-[#111111]/10 px-6 py-2 rounded-full bg-[#EFE8DE]/60 backdrop-blur-sm shadow-xs">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs font-extrabold uppercase tracking-wider text-[#111111]/80 hover:text-[#8C21EF] transition-colors relative py-1 group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8C21EF] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="group px-5 py-2.5 rounded-full bg-[#111111] text-[#F7F3EC] text-xs font-black uppercase tracking-wider hover:bg-[#8C21EF] transition-all duration-300 flex items-center gap-2 shadow-md"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            className="px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-black uppercase tracking-wider"
          >
            Contact
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#EFE8DE] text-[#111111] border border-[#111111]/10 shadow-xs active:scale-95 transition-transform"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F3EC] border-b border-[#111111]/10 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navItems.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-black uppercase tracking-wider text-[#111111] hover:text-[#8C21EF] py-2.5 border-b border-[#111111]/[0.06] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8C21EF]" />
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 rounded-xl bg-[#111111] text-[#F7F3EC] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
          >
            <span>Start A Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
};

