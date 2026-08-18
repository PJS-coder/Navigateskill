'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Apple,
  Cpu,
  FileCode,
  ShoppingCart,
  Cloud,
  Server,
  Bot,
  ShieldCheck,
  Database,
  Activity,
  ArrowUpRight,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: ServiceItem[] = [
  {
    id: 'web-dev',
    num: '01',
    title: 'Web Development',
    description:
      'Custom, blazing-fast websites built with React, Next.js, and modern frameworks — optimized for SEO and conversion.',
    icon: Code,
  },
  {
    id: 'app-dev',
    num: '02',
    title: 'App Development',
    description:
      'Cross-platform mobile apps with React Native and Flutter — one codebase, both app stores, native performance.',
    icon: Smartphone,
  },
  {
    id: 'ios-dev',
    num: '03',
    title: 'iOS Development',
    description:
      'Native Swift & SwiftUI apps for iPhone, iPad, and Apple Watch — designed for the Apple ecosystem from day one.',
    icon: Apple,
  },
  {
    id: 'software-solutions',
    num: '04',
    title: 'Software Solutions',
    description:
      'Custom enterprise software, SaaS platforms, and internal tooling that replaces spreadsheets with smart automation.',
    icon: Cpu,
  },
  {
    id: 'cms-dev',
    num: '05',
    title: 'CMS Development',
    description:
      'WordPress, Shopify, Sanity, and headless CMS integrations — easy content management without touching code.',
    icon: FileCode,
  },
  {
    id: 'ecommerce',
    num: '06',
    title: 'E-Commerce Solutions',
    description:
      'Shopify, WooCommerce, and custom storefronts with payment gateways, inventory management, and checkout optimization.',
    icon: ShoppingCart,
  },
  {
    id: 'cloud-devops',
    num: '07',
    title: 'Cloud & DevOps',
    description:
      'AWS, Azure, and GCP deployments with CI/CD pipelines, Docker containers, and auto-scaling infrastructure.',
    icon: Cloud,
  },
  {
    id: 'api-dev',
    num: '08',
    title: 'API Development',
    description:
      'RESTful and GraphQL APIs designed for speed, security, and seamless third-party integrations.',
    icon: Server,
  },
  {
    id: 'ai-automation',
    num: '09',
    title: 'AI & Automation',
    description:
      'AI chatbots, ML pipelines, and workflow automation using modern AI tools — saving hours of manual work daily.',
    icon: Bot,
  },
  {
    id: 'cybersecurity',
    num: '10',
    title: 'Cybersecurity',
    description:
      'Penetration testing, vulnerability scans, SSL/TLS setup, and GDPR compliance to keep your business secure.',
    icon: ShieldCheck,
  },
  {
    id: 'database-arch',
    num: '11',
    title: 'Database Architecture',
    description:
      'PostgreSQL, MongoDB, Redis, and data modeling — designed for speed, reliability, and infinite scale.',
    icon: Database,
  },
  {
    id: 'technical-audits',
    num: '12',
    title: 'Technical Audits',
    description:
      "Deep-dive technical analysis of your website's performance, codebase health, and security to uncover bottlenecks.",
    icon: Activity,
  },
];

interface ServiceCardsSectionProps {
  onOpenConsultation: () => void;
}

export const ServiceCardsSection: React.FC<ServiceCardsSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-[#111111]/[0.08] bg-[#EFE8DE]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#111111]/10 pb-6 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#8C21EF]/10 text-[#8C21EF] text-xs font-black uppercase tracking-wider mb-2">
              Capabilities Catalog
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] font-display uppercase tracking-tight">
              Our Core <span className="text-[#8C21EF]">Services</span>
            </h2>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-[#111111]/40">
            12 SPECIALIZED DISCIPLINES
          </span>
        </div>

        {/* 12 POP-UP CARDS GRID WITH STAGGERED SCROLL ANIMATION (ASHLEY BROOKE CS STYLE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
                className="group relative bg-[#E5E9EF] border border-[#111111]/10 p-7 rounded-3xl shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between h-[280px] overflow-hidden"
              >
                {/* Accent Corner Flash */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#8C21EF]/10 rounded-bl-full transition-transform group-hover:scale-125 duration-500 pointer-events-none" />

                {/* Top Row: Icon + Title */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#8C21EF] transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-2xl font-black font-display text-[#111111]/30 group-hover:text-[#8C21EF] transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#111111] font-display uppercase tracking-tight leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row: Action Link */}
                <div className="pt-4 flex items-center justify-between border-t border-[#111111]/10 mt-auto">
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-black uppercase tracking-wider text-[#111111] group-hover:text-[#8C21EF] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Request Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="w-2 h-2 rounded-full bg-[#8C21EF] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
