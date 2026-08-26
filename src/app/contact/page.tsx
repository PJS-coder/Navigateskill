'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Clock, Calendar, Mail, Phone, MapPin, ChevronDown, MessageCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { ConsultationModal } from '@/components/ConsultationModal';

const faqs = [
  {
    q: 'How fast can you start on our project?',
    a: 'We usually onboard new clients within 3 to 5 business days after our initial strategy call and alignment on sprint scope.',
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Web and mobile app sprints range from 2 to 6 weeks depending on feature complexity. Paid ad campaigns and social media management run on monthly continuous growth cycles.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes! We provide post-launch maintenance, security monitoring, infrastructure scaling, and continuous conversion rate optimization.',
  },
  {
    q: 'What budget range do you work with?',
    a: 'Our engagements typically start at $1,500 for focused design/development projects and scalable monthly retainers for performance marketing.',
  },
];

export default function ContactPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#F7F3EC] text-[#111111] font-sans overflow-hidden">
        {/* Navigation Header */}
        <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* HERO SECTION */}
        <section className="pt-32 md:pt-44 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight text-[#111111] leading-[0.95]">
              Let's Build <span className="text-[#8C21EF]">Your Vision.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#111111]/80 font-medium leading-relaxed pt-2 max-w-3xl">
              Have a high-impact project in mind? We are ready to turn your complex ideas into high-performance digital reality.
            </p>
          </div>
        </section>

        {/* CONTACT CARDS & FORM SECTION */}
        <section className="py-8 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Highlight cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 border border-[#111111]/10 shadow-sm space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#8C21EF]/10 flex items-center justify-center text-[#8C21EF] mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#111111]/50">
                    Response Time
                  </div>
                  <div className="text-lg font-extrabold text-[#111111]">
                    Within 24 hours
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-[#111111]/10 shadow-sm space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#8C21EF]/10 flex items-center justify-center text-[#8C21EF] mb-3">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#111111]/50">
                    Free Strategy Call
                  </div>
                  <div className="text-lg font-extrabold text-[#111111]">
                    30-min Consultation
                  </div>
                </div>
              </div>

              {/* Direct Info Box */}
              <div className="bg-white rounded-[32px] p-8 border border-[#111111]/10 shadow-lg space-y-6">
                <h3 className="text-xl font-extrabold font-display uppercase tracking-tight text-[#111111]">
                  Direct Contact Info
                </h3>

                <div className="space-y-4 text-sm font-semibold">
                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F7F3EC] border border-[#111111]/08">
                    <Mail className="w-5 h-5 text-[#8C21EF]" />
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#111111]/50">Email</div>
                      <div className="text-sm font-bold text-[#111111]">hello@navigateskill.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F7F3EC] border border-[#111111]/08">
                    <Phone className="w-5 h-5 text-[#8C21EF]" />
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#111111]/50">Phone</div>
                      <div className="text-sm font-bold text-[#111111]">+91 92181 87041</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F7F3EC] border border-[#111111]/08">
                    <MapPin className="w-5 h-5 text-[#8C21EF]" />
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#111111]/50">Studio Location</div>
                      <div className="text-sm font-bold text-[#111111]">Sector 7, Rohini, Delhi, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Contact Options */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#111111]/10 shadow-xl space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-[#111111]">
                    Get In Touch
                  </h3>
                  <p className="text-sm font-medium text-[#111111]/70 mt-1">
                    Connect directly with our strategy and engineering team via WhatsApp or Email.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* WhatsApp Option */}
                  <a
                    href="https://wa.me/919218187041?text=Hello%20Navigate%20Skill!%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-6 rounded-2xl bg-[#F7F3EC] border border-[#111111]/10 shadow-sm hover:shadow-md hover:border-[#25D366]/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <MessageCircle className="w-7 h-7 stroke-[2.5]" />
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-[#111111] flex items-center gap-2">
                          Chat on WhatsApp
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#25D366]/15 text-[#1b9e4b]">Fastest</span>
                        </div>
                        <div className="text-sm text-[#111111]/60 font-medium">+91 9218187041</div>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#25D366] group-hover:text-white text-[#111111] flex items-center justify-center transition-colors shadow-sm">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </a>

                  {/* Mail Option */}
                  <a
                    href="mailto:hello@navigateskill.com?subject=Project%20Inquiry%20-%20Navigate%20Skill&body=Hello%20Navigate%20Skill%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20a%20new%20project.%0A%0A"
                    className="group flex items-center justify-between p-6 rounded-2xl bg-[#F7F3EC] border border-[#111111]/10 shadow-sm hover:shadow-md hover:border-[#8C21EF]/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#8C21EF]/10 text-[#8C21EF] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Mail className="w-7 h-7 stroke-[2.5]" />
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-[#111111] flex items-center gap-2">
                          Send an Email
                        </div>
                        <div className="text-sm text-[#111111]/60 font-medium">hello@navigateskill.com</div>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#8C21EF] group-hover:text-white text-[#111111] flex items-center justify-center transition-colors shadow-sm">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <section className="py-16 pb-28 px-6 md:px-12 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-[#111111]">
              Frequently Asked <span className="text-[#8C21EF]">Questions.</span>
            </h2>
            <p className="text-sm font-medium text-[#111111]/75">
              Everything you need to know about partnering with Navigate Skill.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#111111]/10 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-extrabold text-[#111111] font-display">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#8C21EF] transition-transform duration-200 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm font-medium text-[#111111]/75 leading-relaxed border-t border-[#111111]/06">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}
