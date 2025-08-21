'use client';

import React from 'react';
import { Container, Heading, Section, Card } from '@/lib/design-system';
import { motion } from 'motion/react';
import { 
  LineChart, 
  Search, 
  Layers 
} from 'lucide-react';

/**
 * ValueProps section with 3 key benefits 
 * Focused on clear, concise value communication
 */
export default function ValuePropsSection() {
  // Key benefits structured data
  const benefits = [
    {
      icon: <LineChart size={32} />,
      title: "Точные прогнозы месторождений",
      description: "Повышение точности прогнозирования до 87% благодаря интеллектуальному анализу геологических данных",
    },
    {
      icon: <Layers size={32} />,
      title: "Ускорение исследований",
      description: "Сокращение времени исследований на 70% за счет автоматизации анализа геологических слоев",
    },
    {
      icon: <Search size={32} />,
      title: "Оптимизация ресурсов",
      description: "Снижение затрат на разведку до 60% благодаря высокоточному определению перспективных зон",
    }
  ];

  return (
    <Section className="py-20 bg-surface-950">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level={2} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ключевые преимущества
          </Heading>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            GeoCube преобразует процесс геологоразведки, предоставляя революционные возможности для поиска месторождений
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card 
                className="h-full bg-surface-900 border-surface-800 text-white"
                padding="lg"
              >
                {/* Icon with accent background */}
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400">
                  {benefit.icon}
                </div>
                
                {/* Benefit title */}
                <h3 className="text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>
                
                {/* Benefit description */}
                <p className="text-white/70">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom statistic highlight */}
        <div className="mt-16 pt-8 border-t border-surface-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary-400">87%</p>
            <p className="text-sm text-white/70 mt-2">Точность обнаружения</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary-400">10x</p>
            <p className="text-sm text-white/70 mt-2">Быстрее традиционных методов</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-primary-400">60%</p>
            <p className="text-sm text-white/70 mt-2">Экономия ресурсов</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
