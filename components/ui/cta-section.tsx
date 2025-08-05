'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useCallback } from 'react'

export default function CTASection() {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setIsSubmitting(false)
        setIsSubmitted(true)
        setEmail('')
        
        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000)
    }, [])

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }, [])

    return (
        <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
            {/* Wild YC-style gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-green-900 to-teal-950 animate-gradient-x"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-700/30 via-green-800/20 to-teal-900/30 animate-gradient-y"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-green-700/10 to-teal-800/10 animate-pulse"></div>
            
            {/* Animated background elements */}
            <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-emerald-300/20 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute bottom-20 right-20 w-32 sm:w-40 h-32 sm:h-40 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 w-20 sm:w-24 h-20 sm:h-24 bg-teal-300/20 rounded-full blur-lg animate-spin"></div>
            
            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 drop-shadow-2xl">
                    Explore 10x Faster <br />
                    <span className="bg-gradient-to-r from-white via-emerald-100 to-green-100 bg-clip-text text-transparent">
                        with GeoCube
                    </span>
                </h2>
                
                <p className="text-lg sm:text-xl md:text-2xl text-emerald-50 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                    Join thousands of geologists and mining professionals already transforming their workflow
                </p>

                {/* Newsletter Signup Form */}
                <div className="max-w-md mx-auto mb-8 sm:mb-12 px-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter your email"
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full text-white placeholder-emerald-100 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300 touch-manipulation"
                                required
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-green-500/20 blur-sm -z-10"></div>
                        </div>
                        
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-white text-emerald-600 hover:bg-emerald-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 touch-manipulation"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                                    <span>Joining...</span>
                                </div>
                            ) : isSubmitted ? (
                                <span className="text-green-600">✓ Joined Successfully!</span>
                            ) : (
                                'Join the Revolution'
                            )}
                        </Button>
                    </form>
                </div>


            </div>
        </section>
    )
} 