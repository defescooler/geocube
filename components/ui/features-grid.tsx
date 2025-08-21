'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layers, BarChart3, MapPin, Satellite, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureGridProps {
  className?: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeaturesGrid({ className }: FeatureGridProps) {
  // Данные для сетки функций
  const features: Feature[] = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Гибкие среды",
      description: "Используйте собственный образ или создайте новый на Python, масштабируйте ресурсы по необходимости и используйте современные GPU для высокопроизводительных вычислений."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Бесшовная интеграция",
      description: "Экспортируйте логи функций в Datadog или любой OpenTelemetry-совместимый провайдер и легко монтируйте облачное хранилище от основных провайдеров."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Хранение данных",
      description: "Управляйте данными без усилий с решениями для хранения (сетевые тома, хранилища ключ-значение и очереди). Настраивайте типы хранилищ с помощью знакомого синтаксиса Python."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Планирование задач",
      description: "Возьмите под контроль свои рабочие нагрузки с мощным планированием. Настройте cron-задачи, повторные попытки и тайм-ауты или используйте пакетную обработку для оптимизации ресурсов."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Веб-конечные точки",
      description: "Разворачивайте и управляйте веб-сервисами с легкостью. Создавайте пользовательские домены, настраивайте потоковую передачу и веб-сокеты, и обслуживайте функции как безопасные HTTPS-конечные точки."
    },
    {
      icon: <Satellite className="w-6 h-6" />,
      title: "Встроенная отладка",
      description: "Эффективно устраняйте неполадки с помощью встроенных инструментов отладки. Используйте модальную оболочку для интерактивной отладки и устанавливайте точки останова для быстрого выявления проблем."
    }
  ];

  // Анимация для появления элементов
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className={cn("py-16 md:py-24 bg-black text-white", className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Наши <span className="text-[#079669]">услуги</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Полный спектр геологоразведочных услуг с использованием передовых технологий и искусственного интеллекта
          </p>
        </div>

        {/* Сетка функций */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-[#079669]/50 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-[#079669] to-emerald-700 p-3 rounded-lg inline-block mb-4">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesGrid;
