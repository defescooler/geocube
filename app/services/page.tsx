'use client';

import React from 'react';
import UnifiedNavbar from '@/components/layout/unified-navbar';
import Footer from '@/components/layout/footer';
import { Container, Heading, Section } from '@/lib/design-system';
import TeamSection from '@/components/sections/team-section';

/**
 * Services Page
 * 
 * Details about geological services offered
 */
export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Unified Navbar */}
      <UnifiedNavbar variant="solid" />
      
      {/* Services Hero */}
      <Section className="pt-32 pb-20 bg-gradient-to-b from-surface-900 to-surface-950">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-6">
              Услуги
            </span>
            <Heading level={1} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Комплексные геологические услуги
            </Heading>
            <p className="text-lg text-white/70 mb-8">
              От полевых исследований до интерпретации данных — полный спектр услуг для успешной геологоразведки
            </p>
          </div>
        </Container>
      </Section>
      
      {/* Geological Services */}
      <Section className="py-20 bg-surface-950">
        <Container>
          {/* This would be the current geological services section */}
          <div className="text-center mb-16">
            <Heading level={2} className="text-3xl text-white mb-4">
              Наши геологические услуги
            </Heading>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Предоставляем полный спектр услуг от полевых исследований до анализа данных
            </p>
          </div>
          
          {/* Services grid would go here */}
        </Container>
      </Section>
      
      {/* Process Flow */}
      <Section className="py-20 bg-gradient-to-b from-surface-950 to-surface-900">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="text-3xl text-white mb-4">
              Процесс работы
            </Heading>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Прозрачный и эффективный процесс реализации геологических проектов
            </p>
          </div>
          
          {/* Process flow visualization would go here */}
          <div className="h-64 bg-surface-800 rounded-xl flex items-center justify-center">
            <p className="text-white/50">Визуализация процесса работы</p>
          </div>
        </Container>
      </Section>
      
      {/* Team Section - Moved from homepage */}
      <TeamSection />
      
      {/* Contact Form */}
      <Section className="py-20 bg-gradient-to-b from-surface-900 to-surface-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Heading level={2} className="text-3xl text-white mb-4">
                Связаться с нами
              </Heading>
              <p className="text-lg text-white/70 mb-8">
                Готовы обсудить ваш проект? Заполните форму, и наши специалисты свяжутся с вами
              </p>
              
              {/* Contact info */}
              <div className="space-y-4 text-white/70">
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3 text-primary-400">📍</span>
                  <span>Алматы, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3 text-primary-400">📱</span>
                  <span>+7 (727) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3 text-primary-400">✉️</span>
                  <span>info@geocube.kz</span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-800 p-8 rounded-lg border border-surface-700">
              {/* Contact form would go here */}
              <p className="text-white/50 text-center py-12">Форма обратной связи</p>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
