'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight, Satellite, Settings, Database } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'
import { HeaderLogo } from '@/components/ui/geocube-logo'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="relative min-h-screen overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/videos/background-hero.mp4" type="video/mp4" />
                        {/* Fallback gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
                    </video>
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Hero Content */}
                <section className="relative z-10 min-h-screen flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-8"
                            >
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                                    <Database className="w-4 h-4 text-emerald-400" />
                                    <span className="text-white/90 text-sm font-medium font-sans">
                                        Backed by 25+ Years of Geological Expertise
                                    </span>
                                </div>

                                {/* Main Headline */}
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight font-display">
                                    Build 10x Faster
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                                        Mineral Intelligence
                                    </span>
                                </h1>

                                {/* Subtext */}
                                <p className="text-xl text-white/80 max-w-2xl leading-relaxed font-sans">
                                    Highly customizable AI platform for accelerating mineral exploration 
                                    with precision targeting and enterprise-grade intelligence.
                                </p>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 px-6 bg-white text-black hover:bg-white/90 font-semibold rounded-full transition-all duration-300"
                                    >
                                        <Link href="#demo" className="inline-flex items-center gap-2">
                                            Start Building
                                            <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                    
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="h-12 px-6 border-white/30 text-white hover:bg-white/10 font-semibold rounded-full backdrop-blur-sm"
                                    >
                                        <Link href="#technology">
                                            Request a demo
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Client Logos Section */}
                <section className="relative z-10 bg-black/80 backdrop-blur-sm border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="flex flex-col items-center md:flex-row py-12">
                            <div className="md:w-48 md:border-r md:border-white/20 md:pr-8 mb-8 md:mb-0">
                                <p className="text-white/80 text-base font-medium text-center md:text-right font-sans leading-relaxed tracking-wide">
                                    Trusted by<br />
                                    <span className="text-white/60 text-sm font-normal">industry leaders</span>
                                </p>
                            </div>
                            <div className="flex-1 md:pl-8 relative">
                                <InfiniteSlider
                                    speed={40}
                                    speedOnHover={20}
                                    gap={80}
                                    className="py-4"
                                >
                                    {[
                                        { name: 'Kazatomprom', file: 'kazatomprom.svg' },
                                        { name: 'Rio Tinto', file: 'rio_tinto.svg' },
                                        { name: 'Glencore', file: 'glencore.svg' },
                                        { name: 'ERG', file: 'erg.svg', size: 'large' },
                                        { name: 'Chevron', file: 'chevron.svg', size: 'large' },
                                        { name: 'Airbus', file: 'airbus.svg' },
                                        { name: 'Maxar', file: 'maxar.svg' }
                                    ].map((company) => (
                                        <div key={company.name} className="flex items-center justify-center h-16 w-32">
                                            <img 
                                                src={`/logos/${company.file}`}
                                                alt={`${company.name} logo`}
                                                className={`w-auto object-contain transition-all duration-300 opacity-90 hover:opacity-100 ${
                                                    company.size === 'large' ? 'h-12' : 'h-10'
                                                }`}
                                            />
                                        </div>
                                    ))}
                                </InfiniteSlider>
                                
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={2}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={2}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Technology', href: '#technology' },
    { name: 'Use Cases', href: '#usecases' },
    { name: 'Platform', href: '#platform' },
    { name: 'About GeoCube', href: '#about' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.1)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header className="fixed top-0 w-full z-50">
            <nav className="group w-full pt-4">
                <div className={cn(
                    'mx-auto max-w-7xl px-6 lg:px-12 transition-all duration-300',
                    scrolled && 'bg-black/80 backdrop-blur-xl rounded-2xl mx-4 lg:mx-auto'
                )}>
                    <div className={cn(
                        'relative flex items-center justify-between py-4 transition-all duration-200',
                        scrolled && 'py-3'
                    )}>
                        {/* Logo */}
                        <Link href="/" aria-label="home" className="flex items-center space-x-2">
                            <Logo />
                        </Link>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-white/80 hover:text-white transition-colors duration-150 font-medium"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right side buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="text-white/80 hover:text-white hover:bg-white/10"
                            >
                                <Link href="mailto:info@geocube.kz">
                                    Contact
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                className="bg-white text-black hover:bg-white/90 font-semibold"
                            >
                                <Link href="#demo">
                                    Request Demo
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                            className="lg:hidden p-2 text-white hover:text-emerald-400 transition-colors"
                        >
                            <Menu className={cn("w-6 h-6 transition-all duration-200", menuState && "opacity-0 rotate-180")} />
                            <X className={cn("w-6 h-6 absolute inset-2 transition-all duration-200", !menuState && "opacity-0 -rotate-180")} />
                        </button>

                        {/* Mobile menu */}
                        <div className={cn(
                            "absolute top-full left-0 right-0 mt-2 lg:hidden transition-all duration-300",
                            menuState ? "opacity-100 visible" : "opacity-0 invisible"
                        )}>
                            <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-white/20 p-6 mx-4">
                                <ul className="space-y-4 mb-6">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white/80 hover:text-white block transition-colors duration-150 font-medium"
                                                onClick={() => setMenuState(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col gap-3">
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="text-white/80 hover:text-white hover:bg-white/10 justify-start"
                                    >
                                        <Link href="mailto:info@geocube.kz">
                                            Contact
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        className="bg-white text-black hover:bg-white/90 font-semibold"
                                    >
                                        <Link href="#demo">
                                            Request Demo
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return <HeaderLogo />
}