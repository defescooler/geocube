'use client';

import HeroSectionShader from '@/components/sections/hero-section-shader';
import UnifiedNavbar from '@/components/layout/unified-navbar';
import LogoMarquee from '@/components/shared/logo-marquee';
import LayeredVisualization from '@/components/features/layered-visualization';
import TeamSection from '@/components/sections/team-section';
import Footer from '@/components/layout/footer';



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Unified Navbar with transparent variant */}
      <UnifiedNavbar variant="transparent" />
      
      {/* 1. Hero section - Separate background for images */}
      <div className="relative">
        <HeroSectionShader />
      </div>
      
      {/* Content sections with unified gradient background */}
      <div className="bg-gradient-to-b from-green-900 via-gray-900 to-black">
        {/* 2. Logos */}
        <div className="relative">
          <LogoMarquee />
        </div>
        
        {/* 3. Наши геологические услуги */}
        <div className="relative">
          <LayeredVisualization />
        </div>
        
        {/* 4. Команда */}
        <div className="relative">
          <TeamSection />
        </div>
        
        {/* 5. Футер */}
        <Footer />
      </div>
    </div>
  );
}
