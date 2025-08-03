"use client";

import { AnimatedCarousel } from "./logo-carousel";

const partnerLogos = [
  "/logos/geocube_coloured.svg",
  "/logos/erg.svg",
  "/logos/glencore.svg",
  "/logos/rio_tinto.svg",
  "/logos/maxar.svg",
  "/logos/airbus.svg",
  "/logos/kazatomprom.svg",
  "/logos/geocube_white.svg",
  "/logos/geocube.svg",
  "/logos/Group 362.svg",
];

export const PartnerLogosSection = () => {
  return (
    <AnimatedCarousel 
      title="Trusted by Industry Leaders"
      logos={partnerLogos}
      autoPlay={true}
      autoPlayInterval={3000}
      itemsPerViewMobile={3}
      itemsPerViewDesktop={5}
      logoContainerWidth="w-32"
      logoContainerHeight="h-16"
      logoImageWidth="w-auto"
      logoImageHeight="h-8"
      padding="py-16 lg:py-24"
      spacing="gap-8"
    />
  );
}; 