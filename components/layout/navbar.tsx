'use client'
import React, { useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useScroll } from 'motion/react'

export default function Navbar() {
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
        { name: 'Функционал', href: '#features' },
        { name: 'GeoCube', href: '/geocube' },
        { name: 'Решение', href: '#solution' },
        { name: 'Команда', href: '#team' },
    ];

    const handleMenuToggle = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const handleMenuClose = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg rounded-b-2xl sm:rounded-b-3xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Terra</span>
                        <Image
                            className="h-12 w-auto"
                            src="/logos/terra.svg"
                            alt="Terra Logo"
                            width={180}
                            height={48}
                            priority
                            sizes="(max-width: 640px) 144px, 180px"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white touch-manipulation"
                        onClick={handleMenuToggle}
                        aria-label="Open main menu"
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
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
                    <Link
                        href="mailto:info@geocube.kz"
                        className="text-sm font-semibold leading-6 text-white hover:text-emerald-400 transition-colors"
                    >
                        Связаться с нами <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </nav>

            {/* Enhanced mobile menu with better touch interactions and visibility */}
            {isMenuOpen && (
                <div className="lg:hidden">
                    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={handleMenuClose} />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Terra</span>
                                <Image
                                    className="h-12 w-auto"
                                    src="/logos/terra.svg"
                                    alt="Terra Logo"
                                    width={180}
                                    height={48}
                                    sizes="(max-width: 640px) 144px, 180px"
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300 touch-manipulation"
                                onClick={handleMenuClose}
                                aria-label="Close menu"
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
                                            className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 transition-colors touch-manipulation"
                                            onClick={handleMenuClose}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6 space-y-2">
                                    <Link
                                        href="mailto:info@geocube.kz"
                                        className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 transition-colors touch-manipulation"
                                        onClick={handleMenuClose}
                                    >
                                        Связаться с нами
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
