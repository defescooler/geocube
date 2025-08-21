'use client';

import React from 'react';
import UnifiedNavbar from '@/components/layout/unified-navbar';
import Footer from '@/components/layout/footer';
import { Container, Heading, Section } from '@/lib/design-system';
import LayeredVisualization from '@/components/features/layered-visualization';

/**
 * Platform Page
 * 
 * Detailed information about the GeoCube platform
 */
export default function PlatformPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Unified Navbar */}
      <UnifiedNavbar variant="solid" />
      
      {/* Platform Hero */}
      <Section className="pt-32 pb-20 bg-gradient-to-b from-surface-900 to-surface-950">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-6">
              Платформа GeoCube
            </span>
            <Heading level={1} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Интеллектуальная геоинформационная система нового поколения
            </Heading>
            <p className="text-lg text-white/70 mb-8">
              Революционный подход к обработке и анализу геологических данных для повышения эффективности разведки и добычи полезных ископаемых
            </p>
          </div>
        </Container>
      </Section>
      
      {/* Layered Visualization */}
      <Section className="py-20 bg-surface-950">
        <Container>
          <LayeredVisualization />
        </Container>
      </Section>
      
      {/* Features Grid - Placeholder */}
      <Section className="py-20 bg-gradient-to-b from-surface-950 to-surface-900">
        <Container>
          <Heading level={2} className="text-3xl text-white mb-16 text-center">
            Ключевые возможности платформы
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This would be replaced with actual feature components */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-surface-800 border border-surface-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">Функция {item}</h3>
                <p className="text-white/70">Подробное описание функциональности платформы GeoCube</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Workflow Section - Placeholder */}
      <Section className="py-20 bg-surface-900">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="text-3xl text-white mb-4">
              5-этапный рабочий процесс
            </Heading>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              От загрузки данных до принятия решений: как работает GeoCube
            </p>
          </div>
          
          {/* Workflow steps visualization would go here */}
          <div className="h-64 bg-surface-800 rounded-xl flex items-center justify-center">
            <p className="text-white/50">Визуализация рабочего процесса</p>
          </div>
        </Container>
      </Section>
      
      {/* Technical Specs - Placeholder */}
      <Section className="py-20 bg-gradient-to-b from-surface-900 to-surface-950">
        <Container>
          <Heading level={2} className="text-3xl text-white mb-16 text-center">
            Технические характеристики
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-800 border border-surface-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Системные требования</h3>
              <ul className="space-y-3 text-white/70">
                <li>• Серверные требования</li>
                <li>• Клиентские требования</li>
                <li>• Сетевые требования</li>
                <li>• Требования к хранилищу</li>
              </ul>
            </div>
            
            <div className="bg-surface-800 border border-surface-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Поддерживаемые форматы</h3>
              <ul className="space-y-3 text-white/70">
                <li>• Геологические форматы</li>
                <li>• Форматы 3D-моделей</li>
                <li>• Аналитические форматы</li>
                <li>• Форматы экспорта</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Request Demo - Placeholder */}
      <Section className="py-20 bg-primary-900">
        <Container>
          <div className="text-center mb-8">
            <Heading level={2} className="text-3xl text-white mb-4">
              Готовы попробовать GeoCube?
            </Heading>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Запишитесь на демонстрацию и узнайте, как GeoCube может улучшить ваши геологоразведочные работы
            </p>
            
            <button className="px-8 py-4 bg-white rounded-full text-primary-900 font-medium">
              Запросить демо
            </button>
          </div>
        </Container>
      </Section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
