'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

export function HeroSection() {
    React.useEffect(() => {
        const video1 = document.getElementById('video1') as HTMLVideoElement;
        const video2 = document.getElementById('video2') as HTMLVideoElement;
        
        if (video1 && video2) {
            let currentVideo = 1;
            
            const switchVideo = () => {
                if (currentVideo === 1) {
                    video1.style.opacity = '0';
                    video2.style.opacity = '0.5';
                    currentVideo = 2;
                } else {
                    video1.style.opacity = '0.5';
                    video2.style.opacity = '0';
                    currentVideo = 1;
                }
            };
            
            // Switch videos every 5 seconds
            const interval = setInterval(switchVideo, 5000);
            
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                                        <section className="relative min-h-screen">
                            <div className="py-12 md:py-24 md:pb-32 lg:pb-36 lg:pt-72 relative min-h-screen">
                                {/* Video container with frame */}
                                <div className="absolute inset-0 z-0 p-6 md:p-8 lg:p-12">
                                    <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-[3rem] border border-white/10 shadow-2xl">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="h-full w-full object-cover opacity-60 transition-opacity duration-1000"
                                            src="/videos/background-hero.mp4"
                                            id="video1"
                                        />
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000"
                                            src="/videos/Геохимия ходьба.mp4"
                                            id="video2"
                                        />
                                        {/* Dark overlay for better text readability */}
                                        <div className="absolute inset-0 bg-black/20"></div>
                                    </div>
                                </div>
                            <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12 h-full items-center justify-center lg:items-start">
                                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                    <h1 className="mt-32 sm:mt-8 max-w-2xl text-balance text-3xl sm:text-4xl md:text-6xl lg:mt-16 xl:text-7xl font-bold">Исследуйте месторождения в 10 раз быстрее</h1>
                                    <p className="mt-4 md:mt-8 max-w-2xl text-balance text-sm sm:text-base md:text-lg">Интеллектуальная и динамично обновляемая геоинформационная система (ГИС), обеспечивающая высокоточное определение перспективных территорий для геологоразведки и недропользования.</p>

                                    <div className="mt-8 md:mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="h-12 w-full sm:w-auto rounded-full pl-5 pr-3 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Попробовать бесплатно</span>
                                                <ChevronRight className="ml-1" />
                                            </Link>
                                        </Button>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="ghost"
                                            className="h-12 w-full sm:w-auto rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                            <Link href="#link">
                                                <span className="text-nowrap">Узнать больше</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
                <section className="bg-gray-50 dark:bg-gray-900 pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Работаем с лидерами отрасли</p>
                            </div>
                            <div className="py-6 md:w-[calc(100%-11rem)]">
                                {/* Static grid of logos in 3 rows */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                                    {/* Row 1 */}
                                    <a
                                        href="https://www.barrick.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <img
                                            className="h-8 md:h-10 lg:h-12 w-fit"
                                            src="/logos/barrick.svg"
                                            alt="Barrick Logo"
                                            height="32"
                                            width="auto"
                                        />
                                    </a>
                                    <a
                                        href="https://www.erg.kz/ru"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <img
                                            className="h-8 md:h-10 lg:h-12 w-fit"
                                            src="/logos/erg-logo.svg"
                                            alt="ERG Logo"
                                            height="32"
                                            width="auto"
                                        />
                                    </a>
                                    <a
                                        href="https://www.glencore.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <img
                                            className="h-8 md:h-10 lg:h-12 w-fit"
                                            src="/logos/glencore.svg"
                                            alt="Glencore Logo"
                                            height="32"
                                            width="auto"
                                        />
                                    </a>
                                    <a
                                        href="https://www.kpo.kz/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <img
                                            className="h-8 md:h-10 lg:h-12 w-fit"
                                            src="/logos/karachaganak.svg"
                                            alt="Karachaganak Logo"
                                            height="32"
                                            width="auto"
                                        />
                                    </a>
                                    <a
                                        href="https://www.kazakhmys.kz/ru"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <img
                                            className="h-8 md:h-10 lg:h-12 w-fit"
                                            src="/logos/kazakhmys.svg"
                                            alt="Kazakhmys Logo"
                                            height="32"
                                            width="auto"
                                        />
                                    </a>

                                    {/* Row 2 */}
                                    <a
                                        href="https://www.kazatomprom.kz/ru"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <img
                                            className="h-8 md:h-10 lg:h-12 w-fit"
                                            src="/logos/kazatomprom.svg"
                                            alt="Kazatomprom Logo"
                                            height="32"
                                            width="auto"
                                        />
                                    </a>
                                    <a
                                        href="https://www.kazzinc.com/rus"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <img
                                            className="h-8 md:h-10 lg:h-12 w-fit"
                                            src="/logos/kazzinc.svg"
                                            alt="Kazzinc Logo"
                                            height="32"
                                            width="auto"
                                        />
                                    </a>
                                    <a
                                        href="https://www.airbus.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <img
                                            className="h-8 md:h-10 lg:h-12 w-fit"
                                            src="/logos/airbus_defense_and_space.svg"
                                            alt="Airbus Logo"
                                            height="32"
                                            width="auto"
                                        />
                                    </a>
                                    <a
                                        href="https://www.riotinto.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                                    >
                                        <img
                                            className="h-8 md:h-10 lg:h-12 w-fit"
                                            src="/logos/rio_tinto.svg"
                                            alt="Rio Tinto Logo"
                                            height="32"
                                            width="auto"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Услуги', href: '#services' },
    { name: 'О нас', href: '#about' },
    { name: 'GeoCube', href: '/geocube' },
    { name: 'Команда', href: '#team' },
    { name: 'Контакты', href: '#contact' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white hover:text-gray-200 block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-white hover:text-gray-200 block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm">
                                    <Link href="mailto:info@geocube.kz">
                                        <span>Связаться с нами</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <img
            src="/logos/terra.svg"
            alt="Terra Logo"
            className={cn('h-12 w-auto', className)}
        />
    )
}