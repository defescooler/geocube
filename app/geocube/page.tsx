import { Features as Features6 } from '@/components/ui/features-6';
import TestimonialSection from '@/components/ui/testimonial-section';
import FAQs from '@/components/ui/faq';
import { UnifiedNavbar } from '@/components/ui/unified-navbar';
import NewFooter from '@/components/layout/new-footer';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// "Каждый слой данных — это новая возможность" section
const FeaturesSectionDemo = dynamic(() => import('@/components/ui/features-section-demo-3'), {
  ssr: true,
  loading: () => (
    <div className="min-h-96 bg-white dark:bg-black flex items-center justify-center">
      <div className="text-neutral-500 animate-pulse">Loading Features...</div>
    </div>
  ),
});





export default function GeoCubePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Unified Navbar */}
      <UnifiedNavbar />
      
      {/* 1. Каждый слой данных — это новая возможность */}
      <div className="relative">
        <Suspense fallback={
          <div className="flex items-center justify-center p-8 min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
          </div>
        }>
          <FeaturesSectionDemo />
        </Suspense>
      </div>
      
      {/* 2. Экосистема GeoCube объединяет наши модели */}
      <div className="relative">
        <Features6 />
      </div>
      

      
      {/* 3. Testimonial */}
      <div className="relative">
        <TestimonialSection />
      </div>
      
      {/* 4. FAQ */}
      <div className="relative">
        <FAQs />
      </div>
      
      {/* 5. Футер */}
      <NewFooter />
    </div>
  );
} 