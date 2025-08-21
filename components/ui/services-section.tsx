'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Database, Layers, BarChart3, MapPin, Satellite } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ServicesSectionProps {
  className?: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const ServicesSection = ({ className }: ServicesSectionProps) => {
  const services: Service[] = [
    {
      id: "data-collection",
      title: "Сбор данных",
      description: "Масштабный сбор геологической информации из всех доступных источников: спутниковые снимки высокого разрешения, исторические геологические отчеты, геофизические и геохимические данные.",
      icon: <Satellite className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: "data-integration",
      title: "Интеграция данных",
      description: "Интеллектуальное объединение разнородных данных в единую аналитическую платформу с автоматической очисткой, структуризацией и подготовкой для глубокого анализа.",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "ai-analysis",
      title: "Анализ с помощью ИИ",
      description: "Передовые алгоритмы машинного обучения и нейронных сетей анализируют комплексные данные, выявляя скрытые геологические закономерности.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600"
    },
    {
      id: "prediction",
      title: "Прогнозирование",
      description: "Разработка высокоточных прогнозных моделей на основе ИИ-анализа, определяющих наиболее перспективные участки для разведки.",
      icon: <Layers className="w-6 h-6" />,
      color: "from-amber-500 to-orange-600"
    },
    {
      id: "field-work",
      title: "Полевые работы",
      description: "Проведение целевых полевых исследований силами команды опытных геологов, геофизиков и инженеров для подтверждения прогнозов ИИ.",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-red-500 to-rose-600"
    },
  ];

  return (
    <section id="services" className={cn("py-16 md:py-24 bg-gray-50 dark:bg-gray-900", className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Наши геологические услуги
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Полный цикл геологоразведочных работ с применением искусственного интеллекта и передовых технологий
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300"
    >
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      {/* Icon */}
      <div className={cn(
        "absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br text-white flex items-center justify-center",
        service.color
      )}>
        {service.icon}
      </div>
      
      {/* Content */}
      <div className="p-8 pt-16">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {service.description}
        </p>
      </div>
      
      {/* Corner brackets that appear on hover */}
      <div className="absolute top-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-4 h-0.5 bg-primary" />
        <div className="absolute top-0 left-0 w-0.5 h-4 bg-primary" />
      </div>
      <div className="absolute bottom-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-primary" />
        <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-primary" />
      </div>
    </motion.div>
  );
};

export default ServicesSection;