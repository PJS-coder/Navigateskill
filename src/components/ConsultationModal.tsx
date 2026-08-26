'use client';

import React from 'react';
import { X, Mail, MessageCircle, Compass, ArrowUpRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const whatsappNumber = "919218187041";
  const whatsappMessage = encodeURIComponent("Hello Navigate Skill! I would like to discuss a project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const mailtoUrl = "mailto:hello@navigateskill.com?subject=Project%20Inquiry%20-%20Navigate%20Skill&body=Hello%20Navigate%20Skill%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20a%20new%20project.%0A%0A";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#F7F3EC] rounded-[32px] border border-[#111111]/10 p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#EFE8DE] text-[#111111] hover:bg-[#111111] hover:text-[#F7F3EC] transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-[#111111] text-[#D6BFA8] flex items-center justify-center shadow-md">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-[#111111] font-display uppercase tracking-tight">Connect With Us</h3>
            <p className="text-xs font-semibold text-[#111111]/60">Navigate Skill Digital Consultation</p>
          </div>
        </div>

        <p className="text-sm font-medium text-[#111111]/75 mb-6">
          Select your preferred option to get in touch with our team directly:
        </p>

        {/* Options */}
        <div className="space-y-4">
          {/* WhatsApp Option */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-[#111111]/10 shadow-sm hover:shadow-md hover:border-[#25D366]/50 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <div className="text-base font-extrabold text-[#111111] flex items-center gap-2">
                  WhatsApp Direct
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#25D366]/15 text-[#1b9e4b]">Instant</span>
                </div>
                <div className="text-xs text-[#111111]/60 font-medium">+91 9218187041</div>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#F7F3EC] group-hover:bg-[#25D366] group-hover:text-white text-[#111111] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          {/* Mail Option */}
          <a
            href={mailtoUrl}
            onClick={onClose}
            className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-[#111111]/10 shadow-sm hover:shadow-md hover:border-[#8C21EF]/50 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#8C21EF]/10 text-[#8C21EF] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <div className="text-base font-extrabold text-[#111111] flex items-center gap-2">
                  Email Support
                </div>
                <div className="text-xs text-[#111111]/60 font-medium">hello@navigateskill.com</div>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#F7F3EC] group-hover:bg-[#8C21EF] group-hover:text-white text-[#111111] flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

