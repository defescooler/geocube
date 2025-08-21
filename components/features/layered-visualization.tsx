'use client';

import React, { useState, useEffect } from 'react';
import { BarChart3, DollarSign, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface LayeredVisualizationProps {
  className?: string;
}

interface LayerData {
  id: number;
  image: string;
  title: string;
}

// Services carousel data
const servicesData = [
  { id: 1, image: "/images/services/1.jpg", title: "Сбор данных", description: "Комплексный сбор геологической информации: спутниковые снимки, геофизические данные, исторические исследования" },
  { id: 2, image: "/images/services/2.jpg", title: "Интеграция данных", description: "Объединение разнородных источников в единую платформу для комплексного анализа территорий" },
  { id: 3, image: "/images/services/3.jpg", title: "ИИ-анализ", description: "Машинное обучение для выявления скрытых геологических паттернов и прогнозирования месторождений" },
  { id: 4, image: "/images/services/4.jpg", title: "Прогнозирование", description: "Построение предиктивных моделей для оценки перспективности участков и планирования инвестиций" },
  { id: 5, image: "/images/services/5.jpg", title: "Полевые работы", description: "Подтверждение прогнозов командой опытных геологов с использованием современного оборудования" },
];

export default function LayeredVisualization({ className }: LayeredVisualizationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % servicesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  return (
    <div 
      className={cn(
        "relative w-full min-h-screen flex items-center justify-center py-16",
        className
      )}
    >
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title and Description */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white leading-tight mb-4">
            Полный спектр <span className="text-[#079669]">геологоразведочных услуг</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-3xl mx-auto">
            От сбора данных до полевого подтверждения находок
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={servicesData[currentSlide].image}
                  alt={servicesData[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                      {servicesData[currentSlide].title}
                    </h3>
                    <p className="text-gray-200 text-lg max-w-3xl">
                      {servicesData[currentSlide].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {servicesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentSlide
                    ? "bg-[#079669] scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                )}
              />
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          {/* Data Collection */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#079669]/10 text-[#079669] mb-4 group-hover:bg-[#079669]/20 transition-colors duration-300">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-normal mb-3">Сбор данных</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Комплексный сбор геологической информации: спутниковые снимки, геофизические данные, исторические исследования
            </p>
          </div>

          {/* Data Integration */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#079669]/10 text-[#079669] mb-4 group-hover:bg-[#079669]/20 transition-colors duration-300">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-normal mb-3">Интеграция данных</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Объединение разнородных источников в единую платформу для комплексного анализа территорий
            </p>
          </div>

          {/* AI Analysis */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#079669]/10 text-[#079669] mb-4 group-hover:bg-[#079669]/20 transition-colors duration-300">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-normal mb-3">ИИ-анализ</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Машинное обучение для выявления скрытых геологических паттернов и прогнозирования месторождений
            </p>
          </div>

          {/* Forecasting */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#079669]/10 text-[#079669] mb-4 group-hover:bg-[#079669]/20 transition-colors duration-300">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-normal mb-3">Прогнозирование</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Построение предиктивных моделей для оценки перспективности участков и планирования инвестиций
            </p>
          </div>

          {/* Field Work */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#079669]/10 text-[#079669] mb-4 group-hover:bg-[#079669]/20 transition-colors duration-300">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-normal mb-3">Полевые работы</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Подтверждение прогнозов командой опытных геологов с использованием современного оборудования
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-3 rounded-full border border-gray-600 text-white font-light hover:border-[#079669] hover:bg-[#079669]/10 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
}
