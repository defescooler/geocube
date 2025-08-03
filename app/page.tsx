import { HeroSection } from '@/components/ui/hero-section-5';
import { Features as Features6 } from '@/components/ui/features-6';
import TeamSection from '@/components/ui/team-section';
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

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSectionDemo />
      </Suspense>
      
      <Features6 />
      <TeamSection />
      <FAQs />
      <CTASection />
    </div>
  );
}
