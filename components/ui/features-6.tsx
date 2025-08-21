import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'

export function Features() {
    return (
        <section id="solution" className="py-12 sm:py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12 px-4 sm:px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-3xl sm:text-4xl font-semibold">Экосистема GeoCube объединяет наши модели</h2>
                    <p className="max-w-sm sm:ml-auto text-sm sm:text-base">Предоставляем рабочие процессы, которые адаптируются к вашим потребностям. Синхронизация через git или интерфейс с ИИ-агентами.</p>
                </div>
                <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 md:-mx-8 lg:col-span-3">
                    <div className="aspect-[88/36] relative">
                        <div className="bg-gradient-to-t z-1 from-background absolute inset-0 to-transparent"></div>
                        <Image 
                            src="/images/dashboard_mvp.jpg" 
                            className="absolute inset-0 z-10 w-full h-full object-cover rounded-xl sm:rounded-2xl" 
                            alt="Digital workspace interface" 
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
                            priority
                            quality={85}
                        />
                        {/* Vignette overlay for MVP effect */}
                        <div className="absolute inset-0 z-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-black/40 via-transparent via-30% to-black/60 pointer-events-none"></div>
                        <div className="absolute inset-0 z-20 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-black/30 via-transparent via-40% to-black/40 pointer-events-none"></div>
                        {/* Dark mode overlay */}
                        <div className="absolute inset-0 z-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-black/20 via-transparent via-50% to-black/30 pointer-events-none dark:block hidden"></div>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-3 sm:gap-y-6 lg:grid-cols-4">
                    <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-xs sm:text-sm font-medium">Быстро</h3>
                        </div>
                        <p className="text-muted-foreground text-xs sm:text-sm">Обрабатываем геологические данные за минуты, а не месяцы.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-xs sm:text-sm font-medium">Точно</h3>
                        </div>
                        <p className="text-muted-foreground text-xs sm:text-sm">ИИ-алгоритмы находят аномалии, которые человек может пропустить.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-xs sm:text-sm font-medium">Безопасно</h3>
                        </div>
                        <p className="text-muted-foreground text-xs sm:text-sm">Ваши данные защищены на корпоративном уровне.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-xs sm:text-sm font-medium">Умно</h3>
                        </div>
                        <p className="text-muted-foreground text-xs sm:text-sm">Учимся на 70 годах геологических данных.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}