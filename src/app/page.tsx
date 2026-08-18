'use client';

import React, { useState } from 'react';
import { SmoothScroll } from '@/components/SmoothScroll';
import { AmbientBackground } from '@/components/AmbientBackground';
import { Hero } from '@/components/Hero';
import { AboutUsSection } from '@/components/AboutUsSection';
import { WhatWeOfferSection } from '@/components/WhatWeOfferSection';
import { WhatWeDoSection } from '@/components/WhatWeDoSection';
import { OurWorkSection } from '@/components/OurWorkSection';
import { WhoWeAreSection } from '@/components/WhoWeAreSection';
import { CTASection } from '@/components/CTASection';
import { ConsultationModal } from '@/components/ConsultationModal';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#F7F3EC] text-[#111111] font-sans">
        {/* Background Particle Canvas & Ambient Blobs */}
        <AmbientBackground />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />
          <AboutUsSection />
          <WhatWeOfferSection />
          <WhatWeDoSection onOpenConsultation={() => setIsConsultationOpen(true)} />
          <OurWorkSection onOpenConsultation={() => setIsConsultationOpen(true)} />
          <WhoWeAreSection onOpenConsultation={() => setIsConsultationOpen(true)} />
          <CTASection onOpenConsultation={() => setIsConsultationOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Project Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}
