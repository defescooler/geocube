import { Features as Features6 } from '@/components/ui/features-6';
import TestimonialSection from '@/components/ui/testimonial-section';
import FAQs from '@/components/ui/faq';
import { UnifiedNavbar } from '@/components/ui/unified-navbar';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';
import { Footer } from '@/components/ui/footer-section';
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

// Данные для RadialOrbitalTimeline
const timelineData = [
  {
    id: 1,
    title: "Сбор данных",
    date: "Этап 1",
    content: "Масштабный сбор геологической информации из всех доступных источников.",
    category: "Сбор данных",
    icon: "calendar",
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Интеграция данных",
    date: "Этап 2",
    content: "Интеллектуальное объединение разнородных данных в единую аналитическую платформу.",
    category: "Интеграция",
    icon: "file-text",
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Анализ с ИИ",
    date: "Этап 3",
    content: "Передовые алгоритмы машинного обучения анализируют комплексные данные.",
    category: "Анализ",
    icon: "code",
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Прогнозирование",
    date: "Этап 4",
    content: "Разработка высокоточных прогнозных моделей на основе ИИ-анализа.",
    category: "Прогноз",
    icon: "user",
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Полевые работы",
    date: "Этап 5",
    content: "Проведение целевых полевых исследований для подтверждения прогнозов ИИ.",
    category: "Полевые работы",
    icon: "clock",
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];



export default function GeoCubePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-900 via-gray-900 to-black">
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
      
      {/* 3. Orbital section */}
      <div className="relative h-screen" id="orbital-timeline">
        <div className="absolute inset-0">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </div>
      
      {/* 4. Testimonial */}
      <div className="relative">
        <TestimonialSection />
      </div>
      
      {/* 5. FAQ */}
      <div className="relative">
        <FAQs />
      </div>
      
      {/* 6. Футер */}
      <Footer />
    </div>
  );
} 