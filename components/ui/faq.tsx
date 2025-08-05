'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What stage is GeoCube in right now?',
            answer: 'We\'ve moved beyond prototype. Core components are deployed in live environments with commercial clients. Additional features are being built as modular layers based on client feedback.',
        },
        {
            id: 'item-2',
            question: 'Who\'s actually using this?',
            answer: 'Clients include Kazatomprom, ERG, Glencore, and Rio Tinto. We also collaborate with Airbus, Maxar, and SpaceWill on the satellite side. Early users are mostly internal exploration teams and decision-makers at the portfolio level.',
        },
        {
            id: 'item-3',
            question: 'Can others build on top of GeoCube?',
            answer: 'Yes. We offer API access to anomaly maps, spectral composites, and structured datasets. Some clients are integrating it into their internal GIS platforms or reporting tools.',
        },
        {
            id: 'item-4',
            question: 'What\'s your data advantage?',
            answer: 'We\'ve digitized over 1,300 Soviet-era reports, many of which aren\'t available elsewhere. Combined with recent high-res satellite layers, this gives us both historical depth and modern fidelity.',
        },
        {
            id: 'item-5',
            question: 'Isn\'t that legacy data outdated?',
            answer: 'Not if you know how to use it. We vectorize, reproject, and calibrate it with new satellite inputs. In practice, it helps us detect patterns modern data alone would miss.',
        },
        {
            id: 'item-6',
            question: 'Are you just wrapping ArcGIS in AI?',
            answer: 'No. We built custom ML pipelines that plug into remote sensing layers and use historic exploration results as training data. We also run our own spatial models — PostGIS just hosts the geometry.',
        },
        {
            id: 'item-7',
            question: 'Are you raising?',
            answer: 'We\'re open to strategic capital — particularly if it accelerates expansion into new regions or lets us build with clients instead of just selling to them.',
        },
    ]

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gray-900">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl text-white">Frequently Asked Questions</h2>
                    <p className="text-gray-300 mt-3 sm:mt-4 text-balance text-sm sm:text-base">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
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