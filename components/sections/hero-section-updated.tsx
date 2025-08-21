'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/i18n';

// Import all images from previous hero section
const heroImages = [
  '/images/hero-section/geology-1.jpg',
  '/images/hero-section/geology-3.jpg',
  '/images/hero-section/geology-4.jpg',
  '/images/hero-section/geology-5.jpg',
];

// Import the rotating words from previous version
const heroWords = {
  ru: ['Оптимизируйте', 'Ускоряйте', 'Революционизируйте'],
  en: ['Optimize', 'Accelerate', 'Revolutionize']
};

/**
 * Updated Hero Section with elements from both versions
 * - Uses fonts and font weights from the old version
 * - Includes all partner logos
 * - Has dark green overlay
 * - Maintains clear CTA hierarchy
 */
export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { language } = useLanguage();
  
  // All partner logos
  const partnerLogos = [
    { name: "Barrick", logo: "/logos/Barrick.svg", url: "https://www.barrick.com/" },
    { name: "Kazatomprom", logo: "/logos/kazatomprom.svg", url: "https://www.kazatomprom.kz/ru" },
    { name: "Karachaganak", logo: "/logos/karachaganak.svg", url: "https://www.kpo.kz/" },
    { name: "ERG", logo: "/logos/ERG-logo.svg", url: "https://www.erg.kz/ru" },
    { name: "Rio Tinto", logo: "/logos/rio_tinto.svg", url: "https://www.riotinto.com/" },
    { name: "Kazakhmys", logo: "/logos/kazakhmys.svg", url: "https://www.kazakhmys.kz/ru" },
    { name: "Glencore", logo: "/logos/glencore.svg", url: "https://www.glencore.com/" },
    { name: "Kazzinc", logo: "/logos/kazzinc.svg", url: "https://www.kazzinc.com/rus" },
    { name: "Airbus", logo: "/logos/Airbus_Defense_and_Space.svg", url: "https://www.airbus.com/" },
    { name: "TSO", logo: "/logos/TSO.svg", url: "https://tso.kz/" },
  ];
  
  // Slideshow effect for both images and words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        // Make sure we don't exceed the bounds of our arrays
        const nextIndex = (prevIndex + 1) % heroWords[language].length;
        return nextIndex;
      });
    }, 5000); // Change every 5 seconds to allow for smoother transitions
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative min-h-[120vh] bg-black overflow-hidden">
      {/* SVG filters from original version */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Background with emerald green gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-[#079669] to-black" />
      
      {/* Slideshow Background Images with dark green overlay */}
      {heroImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage: `url('${image}')`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentImageIndex ? 0.6 : 0 
          }}
          transition={{ 
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smoother fade
          }}
          onError={(e) => {
            console.error(`Failed to load background image: ${image}`);
            // Fallback to gradient if image fails
            e.currentTarget.style.backgroundImage = 'none';
            e.currentTarget.style.backgroundColor = '#079669';
          }}
        >
          {/* Dark green overlay */}
          <div className="absolute inset-0 bg-[#079669]/30"></div>
        </motion.div>
      ))}
      
      {/* Placeholder for header - now using UnifiedNavbar */}
      <div className="h-16"></div>

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12 h-full items-center justify-center lg:items-start pt-32">
        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
          {/* Main Heading - restored slideshow with new words */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-white mb-4 flex flex-col space-y-2 md:space-y-3">
            {/* First line: animated word only */}
            <div className="min-w-[280px] sm:min-w-[350px] md:min-w-[430px] lg:min-w-[600px] relative">
              <span className="font-semibold italic relative inline-block h-8 sm:h-10 md:h-12 lg:h-14 overflow-visible">
                {heroWords[language].map((word, index) => (
                  <motion.span
                    key={word}
                    className="absolute inset-0 whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index === currentImageIndex ? 1 : 0,
                      y: index === currentImageIndex ? 0 : 20
                    }}
                    transition={{
                      duration: 1.8,
                      ease: [0.25, 0.1, 0.25, 1.0], // Improved easing curve for text
                      staggerChildren: 0.1
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
                {/* This invisible span maintains layout space */}
                <span className="invisible">{heroWords[language][0]}</span>
              </span>
            </div>
            {/* Second line: geological exploration */}
            <div className="font-normal tracking-tight text-white min-w-[280px] sm:min-w-[350px] md:min-w-[430px] lg:min-w-[600px]">
              {language === 'ru' ? 'геологоразведку' : 'geological exploration'}
            </div>
            {/* Third line: with AI */}
            <div className="font-normal tracking-tight text-white min-w-[280px] sm:min-w-[350px] md:min-w-[430px] lg:min-w-[600px]">
              {language === 'ru' ? 'с помощью ИИ' : 'with AI'}
            </div>
          </h1>

          {/* Description - using original font styles */}
          <p className="mt-4 md:mt-8 max-w-2xl text-balance text-sm sm:text-base md:text-lg text-white/70">
            {language === 'ru' 
              ? 'Terra Intelligence Systems — геологоразведочная компания полного цикла. Используем передовые технологии анализа данных, машинное обучение и 30+ лет экспертизы для поиска перспективных месторождений.'
              : 'Terra Intelligence Systems — a full-cycle geological exploration company. We use advanced data analysis technologies, machine learning, and 30+ years of expertise to find promising deposits.'
            }
          </p>

          {/* CTA Buttons with clear hierarchy but original styling */}
          <div className="mt-8 md:mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
            <button className="px-6 sm:px-8 py-3 rounded-full bg-white text-black font-normal text-sm sm:text-base transition-all duration-200 hover:bg-white/90 w-full sm:w-auto">
              {language === 'ru' ? 'Обсудить проект' : 'Discuss Project'}
            </button>
            <button className="px-6 sm:px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm sm:text-base transition-all duration-200 hover:bg-white/10 hover:border-white/50 w-full sm:w-auto">
              {language === 'ru' ? 'Наши решения' : 'Our Solutions'}
            </button>
          </div>
          
          {/* Partner Logos - All logos in a compact grid with more space */}
          <div className="mt-16 pt-8 border-t border-white/10 pb-16">
            <p className="text-white/70 text-sm mb-8">
              {language === 'ru' ? 'Партнеры и консультанты проекта' : 'Project Partners and Consultants'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8">
              {partnerLogos.map((partner) => (
                <a 
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                >
                  <img 
                    className={`w-fit ${
                      // Reduce the size for specified logos that need smaller sizing
                      partner.name === "Barrick" || 
                      partner.name === "Rio Tinto" || 
                      partner.name === "Airbus" || 
                      partner.name === "Glencore" 
                        ? "h-6 md:h-8" 
                        : "h-8 md:h-10"
                    }`}
                    src={partner.logo} 
                    alt={`${partner.name} Logo`}
                    height="32"
                    width="auto"
                    onError={(e) => {
                      console.error(`Failed to load logo: ${partner.logo}`);
                      // Show partner name as fallback
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-white text-sm font-medium">${partner.name}</span>`;
                      }
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
