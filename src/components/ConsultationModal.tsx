'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Send, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { ConsultationForm, ServiceCategory } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ConsultationForm>({
    name: '',
    email: '',
    company: '',
    services: ['web'],
    budget: '$5,000 - $15,000',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (svc: ServiceCategory) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D6BFA8', '#8C735B', '#111111', '#EFE8DE'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#F7F3EC] rounded-[28px] border border-[#111111]/10 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#EFE8DE] text-[#111111] hover:bg-[#111111] hover:text-[#F7F3EC] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#111111] text-[#D6BFA8] mx-auto flex items-center justify-center shadow-lg animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#111111]">Consultation Request Received!</h3>
            <p className="text-sm text-[#111111]/70 max-w-md mx-auto">
              Thank you, <strong>{formData.name}</strong>. The Navigate Skill team will review your project brief and get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-bold hover:bg-[#8C735B] transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#111111] text-[#D6BFA8] flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#111111]">Start Your Project</h3>
                <p className="text-xs text-[#111111]/60">Navigate Skill Digital Consultation</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-[#111111] mb-2 uppercase tracking-wider">
                Select Services Needed
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'web' as const, label: 'Web Development' },
                  { id: 'app' as const, label: 'App Development' },
                  { id: 'social' as const, label: 'Social Media' },
                  { id: 'ads' as const, label: 'Ad Management' },
                ].map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => toggleService(s.id)}
                    className={`p-3 rounded-xl text-xs font-bold border transition-all text-left flex items-center justify-between ${
                      formData.services.includes(s.id)
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-[#EFE8DE] text-[#111111] border-[#111111]/10 hover:bg-white'
                    }`}
                  >
                    <span>{s.label}</span>
                    {formData.services.includes(s.id) && <CheckCircle className="w-3.5 h-3.5 text-[#D6BFA8]" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#111111]/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#8C735B]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#111111] mb-1">Work Email</label>
                <input
                  required
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#111111]/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#8C735B]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1">Company / Brand Name</label>
              <input
                type="text"
                placeholder="Acme Growth Inc."
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#111111]/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#8C735B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1">Estimated Budget Range</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#111111]/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#8C735B]"
              >
                <option>$2,500 - $5,000</option>
                <option>$5,000 - $15,000</option>
                <option>$15,000 - $35,000</option>
                <option>$35,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#111111] mb-1">Project Goals &amp; Overview</label>
              <textarea
                rows={3}
                placeholder="Tell us about your project goals, timelines, or key deliverables..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#EFE8DE]/50 border border-[#111111]/10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#8C735B]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#111111] text-[#F7F3EC] text-xs font-bold hover:bg-[#8C735B] transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="w-4 h-4 text-[#D6BFA8]" />
              <span>Submit Consultation Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
