"use client";

import { AnimatedCarousel } from "../ui/logo-carousel";

const partnerLogos = [
  "/logos/Barrick.svg",
  "/logos/ERG-logo.svg",
  "/logos/glencore.svg",
  "/logos/rio_tinto.svg",
  "/logos/maxar.svg",
  "/logos/Airbus_Defense_and_Space.svg",
  "/logos/kazatomprom.svg",
  "/logos/geocube_white.svg",
  "/logos/karachaganak.svg",
  "/logos/terra.svg",
];

export default function PartnerLogos() {
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
}
