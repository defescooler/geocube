'use client'
import React, { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

// Memoized logo component for better performance
const Logo = memo(({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <div className="flex">
    <Image
      className={cn("mx-auto h-8 w-fit", className)}
      src={src}
      alt={alt}
      height={32}
      width={100}
      priority={false}
    />
  </div>
));

Logo.displayName = 'Logo';

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="py-28 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Explore 10x Faster with GeoCube</h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg">AI platform for mineral discovery — built from decades of geological archives, fused with real-time satellite data and machine learning.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="flex-1 h-12 rounded-full px-5 text-base bg-transparent backdrop-blur-sm border border-white/30 placeholder:text-white/60 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        />
                                        <Button
                                            size="lg"
                                            className="h-12 rounded-full px-6 text-base bg-emerald-600 hover:bg-emerald-700 text-white font-semibold whitespace-nowrap">
                                            Join Waitlist
                                        </Button>
                                    </div>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="h-12 rounded-full px-6 text-base border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300">
                                        <Link href="#contact">
                                            Book a Call
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
                            <div className="absolute inset-0 bg-black/60"></div>
                            <Image
                                className="size-full object-cover opacity-50"
                                src="/images/hero-section/geology.jpg"
                                alt="Geological landscape"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            />
                        </div>
                    </div>
                </section>
                <section className="pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Trusted by industry leaders</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <Logo
                                        src="/logos/kazatomprom.svg"
                                        alt="Kazatomprom Logo"
                                    />
                                    <Logo
                                        src="/logos/rio_tinto.svg"
                                        alt="Rio Tinto Logo"
                                    />
                                    <Logo
                                        src="/logos/glencore.svg"
                                        alt="Glencore Logo"
                                    />
                                    <Logo
                                        src="/logos/erg.svg"
                                        alt="ERG Logo"
                                        className="h-12"
                                    />
                                    <Logo
                                        src="/logos/chevron.svg"
                                        alt="Chevron Logo"
                                        className="h-12"
                                    />
                                    <Logo
                                        src="/logos/airbus.svg"
                                        alt="Airbus Logo"
                                    />
                                    <Logo
                                        src="/logos/maxar.svg"
                                        alt="Maxar Logo"
                                    />
                                    <Logo
                                        src="/logos/ministry_geology.svg"
                                        alt="Ministry of Geology Logo"
                                        className="h-12"
                                    />
                                    <Logo
                                        src="/logos/kazzinc.svg"
                                        alt="Kazzinc Logo"
                                        className="h-12"
                                    />
                                    <Logo
                                        src="/logos/kazakhmys.svg"
                                        alt="Kazakhmys Logo"
                                        className="h-12"
                                    />
                                </InfiniteSlider>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const HeroHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const unsubscribe = scrollY.on('change', (latest) => {
            setIsScrolled(latest > 0);
        });
        return unsubscribe;
    }, [scrollY]);

    const navigation = [
        { name: 'Features', href: '#features' },
        { name: 'Solution', href: '#solution' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg rounded-b-3xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">GeoCube</span>
                        <Image
                            className="h-8 w-auto"
                            src="/logos/geocube_white.svg"
                            alt="GeoCube Logo"
                            width={120}
                            height={32}
                            priority
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-white hover:text-emerald-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="#contact"
                        className="text-sm font-semibold leading-6 text-white hover:text-emerald-400 transition-colors"
                    >
                        Get Started <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">GeoCube</span>
                                <Image
                                    className="h-8 w-auto"
                                    src="/logos/geocube_white.svg"
                                    alt="GeoCube Logo"
                                    width={120}
                                    height={32}
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="#contact"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};