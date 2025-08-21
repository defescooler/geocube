'use client';

import React from 'react';
import { Container, Heading, Section } from '@/lib/design-system';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/**
 * SocialProofSection
 * Combines client logos with a featured case study for stronger social proof
 */
export default function SocialProofSection() {
  // Top client logos (focused selection)
  const topClients = [
    { name: "Barrick", logo: "/logos/Barrick.svg" },
    { name: "Rio Tinto", logo: "/logos/rio_tinto.svg" },
    { name: "ERG", logo: "/logos/ERG-logo.svg" },
    { name: "Glencore", logo: "/logos/glencore.svg" },
    { name: "KazAtomProm", logo: "/logos/kazatomprom.svg" }
  ];
  
  // Case study data
  const caseStudy = {
    client: "Barrick Gold",
    title: "Открытие медно-порфирового месторождения на 30% быстрее",
    description: "Компания Barrick Gold использовала платформу GeoCube для анализа геологических данных в Центральной Азии. В результате было выявлено крупное медно-порфировое месторождение на 7 месяцев раньше запланированного срока с экономией бюджета в 2.4 млн долларов.",
    metrics: [
      { label: "Сокращение времени", value: "7 месяцев" },
      { label: "Экономия бюджета", value: "$2.4M" },
      { label: "Точность прогноза", value: "92%" }
    ],
    image: "/images/dashboard_mvp.jpg"
  };

  return (
    <Section className="py-20 bg-gradient-to-b from-surface-950 to-surface-900">
      <Container>
        {/* Client logos section */}
        <div className="mb-16">
          <Heading level={2} className="text-center text-2xl md:text-3xl font-semibold text-white mb-8">
            Нам доверяют лидеры отрасли
          </Heading>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {topClients.map((client) => (
              <div 
                key={client.name}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} Logo`}
                  className="h-10 md:h-12 w-auto" 
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured case study */}
        <div className="mt-20">
          <div className="text-center mb-6">
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">
              Кейс
            </span>
          </div>
          
          <motion.div 
            className="bg-surface-800 rounded-2xl overflow-hidden border border-surface-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Text content */}
              <div className="p-8 md:p-12">
                <div className="mb-2">
                  <span className="text-sm text-white/50">
                    {caseStudy.client}
                  </span>
                </div>
                
                <Heading level={3} className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {caseStudy.title}
                </Heading>
                
                <p className="text-white/70 mb-8">
                  {caseStudy.description}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {caseStudy.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <p className="text-xl md:text-2xl font-bold text-primary-400">
                        {metric.value}
                      </p>
                      <p className="text-xs text-white/50 mt-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                
                <a 
                  href="#fullcase" 
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <span className="mr-2">Подробнее о кейсе</span>
                  <ArrowRight size={16} />
                </a>
              </div>
              
              {/* Image */}
              <div className="h-full relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${caseStudy.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-800/90 via-surface-800/40 to-transparent lg:from-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
