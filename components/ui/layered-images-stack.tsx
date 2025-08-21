'use client';

import React from 'react';
import { BarChart3, DollarSign, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayeredImagesStackProps {
  className?: string;
}

interface LayerData {
  id: number;
  image: string;
  title: string;
}

const layersData: LayerData[] = [
  { id: 1, image: "/images/layers/1.jpg", title: "Спутниковая съёмка" },
  { id: 2, image: "/images/layers/2.jpg", title: "Топографическая карта" },
  { id: 3, image: "/images/layers/3.jpg", title: "Метеорологические данные" },
  { id: 4, image: "/images/layers/4.jpg", title: "Геологическая съёмка" },
  { id: 5, image: "/images/layers/5.jpg", title: "Землепользование" },
  { id: 6, image: "/images/layers/6.jpg", title: "Транспортная сеть" },
  { id: 7, image: "/images/layers/7.jpg", title: "Гидрография" },
  { id: 8, image: "/images/layers/8.jpg", title: "Административное деление" },
  { id: 9, image: "/images/layers/9.jpg", title: "Индекс растительности" },
  { id: 10, image: "/images/layers/10.jpg", title: "Плотность населения" },
  { id: 11, image: "/images/layers/11.jpg", title: "Инфраструктура" },
  { id: 12, image: "/images/layers/12.jpg", title: "Экологические данные" }
];

export function LayeredImagesStack({ className }: LayeredImagesStackProps) {
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
            Наши <span className="text-[#079669]">геологические услуги</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-3xl mx-auto">
            Полный спектр решений для геологоразведки и недропользования
          </p>
        </div>

        {/* Simple Layered Stack Visualization */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl">
            <div className="relative w-full h-96">
              <img 
                src="/images/layers/layers.png" 
                alt="Геологические слои данных" 
                className="w-full h-full object-contain"
              />
            </div>
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
              Масштабный сбор геологической информации из всех доступных источников
            </p>
          </div>

          {/* Data Integration */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#079669]/10 text-[#079669] mb-4 group-hover:bg-[#079669]/20 transition-colors duration-300">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-normal mb-3">Интеграция данных</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Объединение разнородных данных в единую аналитическую платформу
            </p>
          </div>

          {/* AI Analysis */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#079669]/10 text-[#079669] mb-4 group-hover:bg-[#079669]/20 transition-colors duration-300">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-normal mb-3">Анализ с ИИ</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Алгоритмы машинного обучения для выявления скрытых закономерностей
            </p>
          </div>

          {/* Forecasting */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#079669]/10 text-[#079669] mb-4 group-hover:bg-[#079669]/20 transition-colors duration-300">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-normal mb-3">Прогнозирование</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Высокоточные модели для определения перспективных участков
            </p>
          </div>

          {/* Field Work */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#079669]/10 text-[#079669] mb-4 group-hover:bg-[#079669]/20 transition-colors duration-300">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-white text-lg font-normal mb-3">Полевые работы</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Исследования командой опытных геологов и инженеров
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

export default LayeredImagesStack;
