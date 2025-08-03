'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const companies = [
  { name: 'Kazatomprom', file: 'kazatomprom.svg' },
  { name: 'Rio Tinto', file: 'rio_tinto.svg' },
  { name: 'Glencore', file: 'glencore.svg' },
  { name: 'ERG', file: 'erg.svg', size: 'large' },
  { name: 'Chevron', file: 'chevron.svg', size: 'large' },
  { name: 'Airbus', file: 'airbus.svg' },
  { name: 'Maxar', file: 'maxar.svg' }
]

interface AnimatedLogosProps {
  variant?: 'marquee' | 'fade' | 'grid' | 'carousel'
  className?: string
  speed?: number
  showText?: boolean
}

export function AnimatedLogos({ 
  variant = 'marquee', 
  className,
  speed = 50,
  showText = false 
}: AnimatedLogosProps) {
  
  if (variant === 'marquee') {
    return (
      <MarqueeLogos className={className} speed={speed} showText={showText} />
    )
  }
  
  if (variant === 'fade') {
    return (
      <FadeLogos className={className} showText={showText} />
    )
  }
  
  if (variant === 'grid') {
    return (
      <GridLogos className={className} showText={showText} />
    )
  }
  
  if (variant === 'carousel') {
    return (
      <CarouselLogos className={className} showText={showText} />
    )
  }
  
  return null
}

function MarqueeLogos({ className, speed, showText }: { className?: string, speed: number, showText: boolean }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex items-center gap-12"
        animate={{
          x: [0, -100 * companies.length]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...companies, ...companies].map((company, index) => (
          <div key={`${company.name}-${index}`} className="flex-shrink-0 flex flex-col items-center">
            <img
              src={`/logos/${company.file}`}
              alt={`${company.name} logo`}
              className={`w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 ${
                company.size === 'large' ? 'h-14' : 'h-12'
              }`}
            />
            {showText && (
              <span className="text-xs text-gray-500 mt-2 font-sans">{company.name}</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function FadeLogos({ className, showText }: { className?: string, showText: boolean }) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className={cn("relative h-16 flex items-center justify-center", className)}>
      {companies.map((company, index) => (
        <motion.div
          key={company.name}
          className="absolute flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 0.8
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={`/logos/${company.file}`}
            alt={`${company.name} logo`}
            className={`w-auto object-contain ${
              company.size === 'large' ? 'h-14' : 'h-12'
            }`}
          />
          {showText && (
            <span className="text-xs text-gray-500 mt-2 font-sans">{company.name}</span>
          )}
        </motion.div>
      ))}
    </div>
  )
}

function GridLogos({ className, showText }: { className?: string, showText: boolean }) {
  return (
    <div className={cn("grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center", className)}>
      {companies.map((company, index) => (
        <motion.div
          key={company.name}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={`/logos/${company.file}`}
            alt={`${company.name} logo`}
            className={`w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 ${
              company.size === 'large' ? 'h-12' : 'h-10'
            }`}
          />
          {showText && (
            <span className="text-xs text-gray-500 mt-2 font-sans text-center">{company.name}</span>
          )}
        </motion.div>
      ))}
    </div>
  )
}

function CarouselLogos({ className, showText }: { className?: string, showText: boolean }) {
  return (
    <div className={cn("flex items-center justify-center gap-8 overflow-hidden", className)}>
      {companies.map((company, index) => (
        <motion.div
          key={company.name}
          className="flex-shrink-0 flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          <img
            src={`/logos/${company.file}`}
            alt={`${company.name} logo`}
            className={`w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 ${
              company.size === 'large' ? 'h-14' : 'h-12'
            }`}
          />
          {showText && (
            <span className="text-xs text-gray-500 mt-2 font-sans">{company.name}</span>
          )}
        </motion.div>
      ))}
    </div>
  )
}

// Example usage component
export function LogosShowcase() {
  return (
    <div className="space-y-16 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-display mb-4">Trusted by Industry Leaders</h2>
        <p className="text-gray-600 font-sans">Leading mining and energy companies rely on our platform</p>
      </div>
      
      {/* Marquee Style */}
      <div className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold font-sans">Marquee Animation</h3>
        </div>
        <AnimatedLogos variant="marquee" speed={30} />
      </div>
      
      {/* Grid Style */}
      <div className="bg-white dark:bg-gray-800 py-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold font-sans">Grid Layout</h3>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedLogos variant="grid" showText />
        </div>
      </div>
      
      {/* Fade Style */}
      <div className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold font-sans">Fade Animation</h3>
        </div>
        <AnimatedLogos variant="fade" showText />
      </div>
      
      {/* Carousel Style */}
      <div className="bg-white dark:bg-gray-800 py-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold font-sans">Carousel Style</h3>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedLogos variant="carousel" showText />
        </div>
      </div>
    </div>
  )
}