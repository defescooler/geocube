'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'На какой стадии сейчас находится GeoCube?',
            answer: 'Мы вышли за рамки прототипа. Ключевые компоненты развернуты и работают в реальных проектах с коммерческими клиентами. Дополнительные функции создаются как модульные слои на основе запросов клиентов.',
        },
        {
            id: 'item-2',
            question: 'Кто ваши клиенты?',
            answer: 'Среди наших клиентов — Казатомпром, ERG, Glencore и Rio Tinto. В области спутниковых данных мы сотрудничаем с Airbus, Maxar и SpaceWill. Основные пользователи — это внутренние геологоразведочные команды и руководители, принимающие решения на уровне портфеля активов.',
        },
        {
            id: 'item-3',
            question: 'Можно ли создавать решения на базе GeoCube?',
            answer: 'Да. Мы предоставляем доступ по API к картам аномалий, спектральным композитам и структурированным наборам данных. Некоторые клиенты интегрируют наши решения в свои внутренние ГИС-платформы и инструменты отчетности.',
        },
        {
            id: 'item-4',
            question: 'В чем ваше преимущество по данным?',
            answer: 'Мы оцифровали более 1300 отчетов советской эпохи, многие из которых недоступны в других источниках. В сочетании с современными спутниковыми снимками высокого разрешения это дает нам как историческую глубину, так и актуальную точность.',
        },
        {
            id: 'item-5',
            question: 'Не устарели ли эти архивные данные?',
            answer: 'Не устарели, если знать, как их использовать. Мы векторизуем, перепроецируем и калибруем их с помощью новых спутниковых данных. На практике это помогает нам выявлять закономерности, которые невозможно обнаружить, используя только современные данные.',
        },
        {
            id: 'item-6',
            question: 'Вы просто добавили ИИ как надстройку к ArcGIS?',
            answer: 'Нет. Мы создали собственные конвейеры машинного обучения, которые подключаются к слоям дистанционного зондирования и используют результаты исторических геологоразведочных работ в качестве обучающих данных. Мы также используем собственные пространственные модели — PostGIS служит лишь для хранения геометрии.',
        },
        {
            id: 'item-7',
            question: 'Вы привлекаете инвестиции?',
            answer: 'Мы открыты для стратегического капитала, особенно если он ускорит выход на новые рынки или позволит нам создавать решения совместно с клиентами, а не просто продавать им готовый продукт.',
        },
    ]

    return (
        <section className="py-12 sm:py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl text-white">Часто задаваемые вопросы</h2>
                    <p className="text-gray-300 mt-3 sm:mt-4 text-balance text-sm sm:text-base">Ответы на основные вопросы о нашей платформе и услугах.</p>
                </div>

                <div className="mx-auto mt-8 sm:mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-gray-800 w-full rounded-xl sm:rounded-2xl border border-gray-700 px-4 sm:px-8 py-3 shadow-sm">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-gray-700">
                                <AccordionTrigger className="cursor-pointer text-sm sm:text-base hover:no-underline text-white hover:text-emerald-400 touch-manipulation text-left">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
} 