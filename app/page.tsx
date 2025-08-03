import { HeroSection } from '@/components/ui/hero-section-5';
import { Features } from '@/components/ui/features-8';
import FeaturesSectionDemo from '@/components/ui/features-section-demo-3';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Features />
      <FeaturesSectionDemo />
    </div>
  );
}
