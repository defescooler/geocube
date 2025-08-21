'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'

export interface UnifiedNavbarProps {
  variant?: 'transparent' | 'solid';
  className?: string;
}

export function UnifiedNavbar({ variant = 'solid', className }: UnifiedNavbarProps) {
  const [menuState, setMenuState] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  // Оптимизированный обработчик скролла с дебаунсингом
  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const updateScrollState = (scrollPos: number) => {
      setScrolled(scrollPos > 50);
      ticking = false;
    };

    const onScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollState(lastScrollY);
        });
        ticking = true;
      }
    };

    const unsubscribe = scrollY.on('change', onScroll);
    return () => unsubscribe();
  }, [scrollY]);

  // Мемоизированная навигация для предотвращения повторных рендеров
  const navigation = React.useMemo(() => [
    { name: 'Услуги', href: '/#services' },
    { name: 'О нас', href: '/#about' },
    { name: 'Команда', href: '/#team' },
    { name: 'GeoCube', href: '/geocube' },
    { name: 'Карьера', href: '/#career' },
  ], []);

  const handleMenuToggle = useCallback(() => {
    setMenuState(prev => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuState(false);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className={cn(
          "group fixed z-50 w-full pt-2",
          className
        )}>
        <div className={cn(
          'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12',
          variant === 'transparent' && !scrolled ? 'bg-transparent' : 'bg-gray-900/95 backdrop-blur-2xl shadow-lg'
        )}>
          <motion.div
            className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2">
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

              <button
                onClick={handleMenuToggle}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 text-white duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 text-white duration-200" />
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
                href="mailto:info@geocube.kz"
                className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium transition-all hover:bg-white/90"
              >
                Связаться с нами <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <div className="bg-gray-900 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-800 p-6 shadow-2xl shadow-black/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
          <div className="lg:hidden">
            <ul className="space-y-6 text-base">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-emerald-400 block duration-150"
                    onClick={handleMenuClose}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Кнопка "Связаться с нами" убрана */}
        </div>
      </nav>
    </header>
  );
}
