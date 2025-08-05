'use client'

import Link from 'next/link'
import { Home, ArrowRight } from 'lucide-react'
import { BackgroundPaths } from '@/components/ui/background-paths'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <BackgroundPaths title="404" />
      
      <div className="absolute inset-0 flex items-center justify-center z-50 px-4">
        <div className="text-center w-full max-w-md mx-auto">
          {/* White 404 sign */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white">
              404
            </h1>
          </div>

          {/* Go Home button */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Page not found text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-sm mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Decorative dots */}
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  )
}
