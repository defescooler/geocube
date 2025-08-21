'use client';

import React from 'react';
import UnifiedNavbar from '@/components/layout/unified-navbar';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section-updated';
import ValuePropsSection from '@/components/sections/value-props-updated';
import TeamSection from '@/components/sections/team-section';
import CTASection from '@/components/sections/cta-section';

/**
 * Updated Landing Page Structure
 * 
 * 1. Hero with all logos (using fonts from previous version)
 * 2. Value Proposition showing company services with layers.png
 * 3. Team Section
 * 4. CTA Section
 * 
 * Removed: SocialProofSection (second "leaders" section)
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Unified Navbar with transparent variant */}
      <UnifiedNavbar variant="transparent" />
      
      {/* 1. Hero section with updated styling and all logos */}
      <HeroSection />
      
      {/* 2. Value Proposition section with company services and layers image */}
      <ValuePropsSection />
      
      {/* 3. Team Section */}
      <TeamSection />
      
      {/* 4. Clear CTA section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
