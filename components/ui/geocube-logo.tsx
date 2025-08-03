import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GeoCubeLogoProps {
  variant?: 'default' | 'hero' | 'compact' | 'animated'
  className?: string
  showText?: boolean
}

export function GeoCubeLogo({ 
  variant = 'default', 
  className,
  showText = true 
}: GeoCubeLogoProps) {
  
  if (variant === 'hero') {
    return (
      <motion.div 
        className={cn("flex flex-col items-center", className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/logos/geocube_white.svg"
          alt="GeoCube Logo"
          className="h-16 w-auto object-contain"
        />
        {showText && (
          <motion.span 
            className="text-lg font-semibold text-white mt-2 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            GeoCube
          </motion.span>
        )}
      </motion.div>
    )
  }
  
  if (variant === 'compact') {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <img
          src="/logos/geocube_white.svg"
          alt="GeoCube Logo"
          className="h-6 w-auto object-contain"
        />
        {showText && (
          <span className="text-sm font-medium font-sans">GeoCube</span>
        )}
      </div>
    )
  }
  
  if (variant === 'animated') {
    return (
      <motion.div 
        className={cn("flex flex-col items-center", className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src="/logos/geocube_white.svg"
          alt="GeoCube Logo"
          className="h-12 w-auto object-contain"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {showText && (
          <span className="text-sm font-medium font-sans mt-1">GeoCube</span>
        )}
      </motion.div>
    )
  }
  
  // Default variant
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <img
        src="/logos/geocube_white.svg"
        alt="GeoCube Logo"
        className="h-10 w-auto object-contain"
      />
      {showText && (
        <span className="text-sm font-medium font-sans mt-1">GeoCube</span>
      )}
    </div>
  )
}

// Header logo component
export function HeaderLogo() {
  return (
    <div className="flex items-center">
      <img
        src="/logos/geocube_white.svg"
        alt="GeoCube Logo"
        className="h-8 w-auto object-contain"
      />
    </div>
  )
}

// Footer logo component
export function FooterLogo() {
  return (
    <div className="flex flex-col items-start gap-2">
      <img
        src="/logos/geocube.svg"
        alt="GeoCube Logo"
        className="h-12 w-auto object-contain"
      />
      <span className="text-sm text-gray-600 dark:text-gray-400 font-sans">
        Advanced Mineral Intelligence Platform
      </span>
    </div>
  )
} 