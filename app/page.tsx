import { HeroSection } from '@/components/ui/hero-section-5';
import { Features as Features6 } from '@/components/ui/features-6';
import TeamSection from '@/components/ui/team-section';
import TestimonialSection from '@/components/ui/testimonial-section';
import FAQs from '@/components/ui/faq';
import CTASection from '@/components/ui/cta-section';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic imports for client-side components with better loading states
const FeaturesSectionDemo = dynamic(() => import('@/components/ui/features-section-demo-3'), {
  ssr: true,
  loading: () => (
    <div className="min-h-96 bg-white dark:bg-black flex items-center justify-center">
      <div className="text-neutral-500 animate-pulse">Loading Features...</div>
    </div>
  ),
});

// Enhanced loading component for better mobile UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8 min-h-[200px]">
    <div className="relative">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-emerald-300 absolute top-0 left-0 animate-pulse"></div>
    </div>
  </div>
);

// Mobile-optimized loading component
const MobileLoadingSpinner = () => (
  <div className="flex items-center justify-center p-4 min-h-[150px] sm:hidden">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-500"></div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section with mobile optimizations */}
      <div className="relative">
        <HeroSection />
      </div>
      
      {/* Features section with enhanced mobile loading */}
      <div className="relative">
        <Suspense fallback={
          <div className="sm:hidden">
            <MobileLoadingSpinner />
          </div>
        }>
          <FeaturesSectionDemo />
        </Suspense>
      </div>
      
      {/* Core features with mobile optimizations */}
      <div className="relative">
        <Features6 />
      </div>
      
      {/* Team section optimized for mobile */}
      <div className="relative">
        <TeamSection />
      </div>
      
      {/* Testimonial section */}
      <div className="relative">
        <TestimonialSection />
      </div>
      
      {/* FAQ section with mobile enhancements */}
      <div className="relative">
        <FAQs />
      </div>
      
      {/* CTA section with mobile optimizations */}
      <div className="relative">
        <CTASection />
      </div>
    </div>
  );
}
