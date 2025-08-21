'use client';

import React from 'react';
import UnifiedNavbar from '@/components/layout/unified-navbar';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section-new';
import ValuePropsSection from '@/components/sections/value-props-section';
import SocialProofSection from '@/components/sections/social-proof-section';
import CTASection from '@/components/sections/cta-section';

/**
 * New Landing Page Structure
 * 
 * Following the improved architecture with:
 * 1. Hero (with clear CTA)
 * 2. Value Proposition (3 key benefits)
 * 3. Social Proof (focused logos + case study)
 * 4. CTA Section
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Unified Navbar with transparent variant */}
      <UnifiedNavbar variant="transparent" />
      
      {/* 1. Hero section with clearer value proposition */}
      <HeroSection />
      
      {/* 2. Value Proposition section with 3 key benefits */}
      <ValuePropsSection />
      
      {/* 3. Social Proof section - focused logos and case study */}
      <SocialProofSection />
      
      {/* 4. Clear CTA section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
