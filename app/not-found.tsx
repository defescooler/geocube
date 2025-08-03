import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-200 dark:text-gray-700 select-none">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <Link href="/#features" className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              Explore Features
            </Link>
          </Button>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <Link href="#" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Decorative Element */}
        <div className="mt-16">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/20 dark:to-emerald-800/20 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 dark:bg-emerald-400/20 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-emerald-500 dark:bg-emerald-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
