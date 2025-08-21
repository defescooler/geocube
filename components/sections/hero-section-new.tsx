'use client';

import React, { useEffect, useState } from 'react';
import { Button, Container, Heading } from '@/lib/design-system';
import Image from 'next/image';
import { motion } from 'motion/react';

/**
 * New Hero Section with clear value proposition and CTA hierarchy
 */
export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Hero content structure following the suggested interface
  const heroContent = {
    headline: "Находите месторождения в 10 раз быстрее",
    subheadline: "Высокоточное определение перспективных территорий для геологоразведки с помощью интеллектуальной ГИС",
    primaryCTA: "Получить демо",
    secondaryCTA: "Смотреть кейсы",
    // Display only top 3 logos for focused social proof
    socialProof: [
      { name: "Barrick", logo: "/logos/barrick.svg", url: "https://www.barrick.com/" },
      { name: "Rio Tinto", logo: "/logos/rio_tinto.svg", url: "https://www.riotinto.com/" },
      { name: "ERG", logo: "/logos/erg-logo.svg", url: "https://www.erg.kz/ru" },
    ],
  };
  
  // Background images for the hero section
  const backgroundImages = [
    '/images/hero-section/geology-1.jpg',
    '/images/hero-section/geology-3.jpg',
  ];
  
  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black">
      {/* Background images with subtle transition */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentImageIndex ? 0.6 : 0 
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Image with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </motion.div>
      ))}
      
      {/* Green gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-primary-800/20 to-transparent mix-blend-overlay" />
      
      {/* Content container */}
      <Container className="relative z-10 h-full pt-36 pb-20 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <span className="text-white/90 text-xs font-light">✨ Новый опыт геологоразведки</span>
          </div>
          
          {/* Main headline */}
          <Heading level={1} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {heroContent.headline}
          </Heading>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
            {heroContent.subheadline}
          </p>
          
          {/* CTA Buttons with clear hierarchy */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              variant="primary" 
              size="lg"
              href="#demo"
              className="justify-center sm:justify-start"
            >
              {heroContent.primaryCTA}
            </Button>
            
            <Button 
              variant="secondary"
              size="lg"
              href="#cases"
              className="justify-center sm:justify-start"
            >
              {heroContent.secondaryCTA}
            </Button>
          </div>
          
          {/* Social proof - compact display of key clients */}
          <div className="mt-auto">
            <p className="text-sm text-white/60 mb-4">Нам доверяют лидеры отрасли</p>
            
            <div className="flex items-center gap-8">
              {heroContent.socialProof.map((client) => (
                <a 
                  key={client.name}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} Logo`}
                    className="h-10 w-auto" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
