'use client'
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

const heroImages = [
  '/images/hero-section/geology-1.jpg',
  '/images/hero-section/geology-3.jpg',
  '/images/hero-section/geology-4.jpg',
  '/images/hero-section/geology-5.jpg',
]

const heroWords = [
  'Исследуйте',
  'Находите',
  'Разрабатывайте',
  'Прогнозируйте'
]

export default function HeroSectionShader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        // Make sure we don't exceed the bounds of our arrays
        const nextIndex = (prevIndex + 1) % heroWords.length;
        return nextIndex;
      })
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
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
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#4c1d95" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background with emerald green gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-[#079669] to-black" />
      
      {/* Slideshow Background Images */}
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
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      ))}
      

      {/* Placeholder for header - now using UnifiedNavbar */}
      <div className="h-16"></div>

      <main className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto z-20 max-w-lg">
        <div className="text-left">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-xs font-light relative z-10">✨ Новый опыт геологоразведки</span>
          </div>

          {/* Main Heading - Mobile optimized with animated word */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
            <span className="font-medium italic relative inline-block">
              {heroWords.map((word, index) => (
                <motion.span
                  key={word}
                  className="absolute inset-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentImageIndex ? 1 : 0,
                    y: index === currentImageIndex ? 0 : 20
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut"
                  }}
                >
                  {word}
                </motion.span>
              ))}
              {/* This invisible span maintains layout space */}
              <span className="invisible">{heroWords[0]}</span>
            </span>{' '}месторождения
            <br />
            <span className="font-light tracking-tight text-white">в 10 раз быстрее</span>
          </h1>

          {/* Description - Mobile optimized */}
          <p className="text-sm sm:text-xs font-light text-white/70 mb-6 leading-relaxed">
            Интеллектуальная и динамично обновляемая геоинформационная система (ГИС), обеспечивающая высокоточное определение перспективных территорий для геологоразведки и недропользования.
          </p>

          {/* Buttons - Mobile optimized */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button className="px-6 sm:px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm sm:text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer text-center">
              Узнать больше
            </button>
            <button className="px-6 sm:px-8 py-3 rounded-full bg-white text-black font-normal text-sm sm:text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer text-center">
              Попробовать бесплатно
            </button>
          </div>
        </div>
      </main>


    </div>
  )
}
