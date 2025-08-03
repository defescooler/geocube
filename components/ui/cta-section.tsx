'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CTASection() {
    return (
        <section className="py-16 md:py-24 bg-emerald-600">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Explore 10x Faster <br />
                    with GeoCube
                </h2>
                <Button
                    asChild
                    size="lg"
                    className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-full"
                >
                    <Link href="#contact">
                        Start now for free
                    </Link>
                </Button>
            </div>
        </section>
    )
} 