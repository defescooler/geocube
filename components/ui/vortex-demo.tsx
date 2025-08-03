'use client';

import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { Button } from "@/components/ui/button";

export default function VortexDemo() {
  return (
    <section className="py-16 md:py-24">
      <div className="w-[calc(100%-4rem)] mx-auto rounded-3xl h-[35rem] overflow-hidden">
        <Vortex
          backgroundColor="rgb(6, 78, 59)" // Dark green background like hero section
          baseHue={140} // Green hue for particles
          rangeHue={60} // Range around green
          particleCount={500}
          baseSpeed={0.1}
          rangeSpeed={0.8}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <p className="text-emerald-100 text-lg md:text-2xl max-w-3xl text-center leading-relaxed">
            Unlock the future of mineral discovery — faster, smarter, and with zero guesswork.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-12">
            <Button
              size="lg"
              className="h-14 px-8 text-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-[0px_2px_0px_0px_#FFFFFF40_inset] transition-all duration-300 hover:shadow-[0px_4px_0px_0px_#FFFFFF40_inset] hover:scale-105"
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-emerald-400 text-emerald-100 hover:bg-emerald-400 hover:text-emerald-900 rounded-full transition-all duration-300 hover:scale-105"
            >
              Download Brief
            </Button>
          </div>
        </Vortex>
      </div>
    </section>
  );
}