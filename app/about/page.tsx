'use client';

import React from 'react';
import UnifiedNavbar from '@/components/layout/unified-navbar';
import Footer from '@/components/layout/footer';
import { Container, Heading, Section } from '@/lib/design-system';
import TeamSection from '@/components/sections/team-section';

/**
 * About Page
 * 
 * Information about the company, team, and mission
 */
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Unified Navbar */}
      <UnifiedNavbar variant="solid" />
      
      {/* About Hero */}
      <Section className="pt-32 pb-20 bg-gradient-to-b from-surface-900 to-surface-950">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-6">
              О компании
            </span>
            <Heading level={1} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Инновации в геологоразведке
            </Heading>
            <p className="text-lg text-white/70 mb-8">
              Мы объединяем передовые технологии и глубокую экспертизу в области геологии для решения сложных задач недропользования
            </p>
          </div>
        </Container>
      </Section>
      
      {/* Company Story */}
      <Section className="py-20 bg-surface-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-400 font-medium">Наша история</span>
              <Heading level={2} className="text-3xl text-white my-4">
                От стартапа к лидеру отрасли
              </Heading>
              <div className="space-y-4 text-white/70">
                <p>
                  Компания GeoCube была основана в 2018 году группой геологов и разработчиков ПО с целью создания революционного инструмента для геологоразведки.
                </p>
                <p>
                  За 5 лет работы мы выросли из небольшой команды энтузиастов в полноценную компанию с офисами в Казахстане и партнерами по всему миру.
                </p>
                <p>
                  Сегодня GeoCube — это признанный эксперт в области геоинформационных систем для недропользования, работающий с ведущими добывающими компаниями.
                </p>
              </div>
            </div>
            
            {/* Timeline placeholder */}
            <div className="h-80 bg-surface-800 rounded-lg flex items-center justify-center">
              <p className="text-white/50">Временная шкала развития компании</p>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Offices Map */}
      <Section className="py-20 bg-gradient-to-b from-surface-900 to-surface-950">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="text-3xl text-white mb-4">
              Наши офисы
            </Heading>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Работаем в ключевых регионах для более эффективного взаимодействия с клиентами
            </p>
          </div>
          
          {/* Map placeholder */}
          <div className="h-80 bg-surface-800 rounded-xl flex items-center justify-center">
            <p className="text-white/50">Карта офисов компании</p>
          </div>
        </Container>
      </Section>
      
      {/* Careers */}
      <Section className="py-20 bg-surface-950">
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} className="text-3xl text-white mb-4">
              Карьера в GeoCube
            </Heading>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Присоединяйтесь к команде инноваторов и профессионалов
            </p>
          </div>
          
          {/* Jobs list placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-surface-800 border border-surface-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">Вакансия {item}</h3>
                <p className="text-white/70 mb-4">Описание вакансии и требования к кандидатам</p>
                <button className="text-primary-400 hover:text-primary-300 transition-colors">
                  Подробнее →
                </button>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
