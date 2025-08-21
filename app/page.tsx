'use client';

import React from 'react';
import UnifiedNavbar from '@/components/layout/unified-navbar';
import NewFooter from '@/components/layout/new-footer';
import HeroSection from '@/components/sections/hero-section-updated';
import ValuePropositionSection from '@/components/sections/value-proposition-section';
import LayeredVisualization from '@/components/features/layered-visualization';
import ProductsSection from '@/components/sections/products-section';
import TeamSection from '@/components/sections/team-section';
import CTASection from '@/components/sections/cta-section';

/**
 * Terra Intelligence Systems Landing Page Structure
 * 
 * 1. Hero - Terra Intelligence Systems focus
 * 2. Value Proposition - почему мы лучше
 * 3. Services - LayeredImagesStack (5 услуг)
 * 4. Solutions - GeoCube + другие продукты
 * 5. Social Proof - клиенты и партнёры
 * 6. Team - экспертиза
 * 7. CTA - Консультация/Партнёрство
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Unified Navbar with transparent variant */}
      <UnifiedNavbar variant="transparent" />
      
      {/* 1. Hero section with Terra Intelligence Systems focus */}
      <HeroSection />
      
      {/* 2. Value Proposition section with metrics */}
      <ValuePropositionSection />
      
      {/* 3. Services section with LayeredImagesStack */}
      <LayeredVisualization className="bg-black" />
      
      {/* 4. Products section with GeoCube as flagship */}
      <ProductsSection />
      
      {/* 5. Social Proof section - clients and partners */}
      {/* <SocialProofSection /> - will be created if needed */}
      
      {/* 6. Team Section - expertise */}
      <TeamSection />
      
      {/* 7. CTA section - consultation/partnership */}
      <CTASection />
      
      {/* New Footer */}
      <NewFooter />
    </div>
  );
}
