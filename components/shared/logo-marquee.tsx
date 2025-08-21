'use client';

import React from 'react';

const Logos = {
  barrick: () => (
    <a href="https://www.barrick.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
      <img
        className="mx-auto h-12 md:h-16 lg:h-20 w-fit"
        src="/logos/Barrick.svg"
        alt="Barrick Logo"
        height="32"
        width="auto"
      />
    </a>
  ),
  kazatomprom: () => (
    <a href="https://www.kazatomprom.kz/ru" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
      <img
        className="mx-auto h-12 md:h-16 lg:h-20 w-fit"
        src="/logos/kazatomprom.svg"
        alt="KazAtomProm Logo"
        height="32"
        width="auto"
      />
    </a>
  ),
  karachaganak: () => (
    <a href="https://www.kpo.kz/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
      <img
        className="mx-auto h-12 md:h-16 lg:h-20 w-fit"
        src="/logos/karachaganak.svg"
        alt="Karachaganak Logo"
        height="32"
        width="auto"
      />
    </a>
  ),
  erg: () => (
    <a href="https://www.erg.kz/ru" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
      <img
        className="mx-auto h-12 md:h-16 lg:h-20 w-fit"
        src="/logos/ERG-logo.svg"
        alt="ERG Logo"
        height="32"
        width="auto"
      />
    </a>
  ),
  riotinto: () => (
    <a href="https://www.riotinto.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
      <img
        className="mx-auto h-12 md:h-16 lg:h-20 w-fit"
        src="/logos/rio_tinto.svg"
        alt="Rio Tinto Logo"
        height="32"
        width="auto"
      />
    </a>
  ),
  kazakhmys: () => (
    <a href="https://www.kazakhmys.kz/ru" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
      <img
        className="mx-auto h-12 md:h-16 lg:h-20 w-fit"
        src="/logos/kazakhmys.svg"
        alt="Kazakhmys Logo"
        height="32"
        width="auto"
      />
    </a>
  ),
  glencore: () => (
    <a href="https://www.glencore.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
      <img
        className="mx-auto h-12 md:h-16 lg:h-20 w-fit"
        src="/logos/glencore.svg"
        alt="Glencore Logo"
        height="32"
        width="auto"
      />
    </a>
  ),
  kazzinc: () => (
    <a href="https://www.kazzinc.com/rus" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
      <img
        className="mx-auto h-12 md:h-16 lg:h-20 w-fit"
        src="/logos/kazzinc.svg"
        alt="Kazzinc Logo"
        height="32"
        width="auto"
      />
    </a>
  ),
  airbus: () => (
    <a href="https://www.airbus.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
      <img
        className="mx-auto h-12 md:h-16 lg:h-20 w-fit"
        src="/logos/Airbus_Defense_and_Space.svg"
        alt="Airbus Logo"
        height="32"
        width="auto"
      />
    </a>
  ),
  tso: () => (
    <a href="https://tso.kz/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
      <img
        className="mx-auto h-12 md:h-16 lg:h-20 w-fit"
        src="/logos/TSO.svg"
        alt="TSO Logo"
        height="32"
        width="auto"
      />
    </a>
  ),
};

export default function LogoMarquee() {
  // Remove Terra and GeoCube logos, keep only client logos
  const logoComponents = [
    Logos.barrick,
    Logos.kazatomprom,
    Logos.airbus,
    Logos.erg,
    Logos.riotinto,
    Logos.kazakhmys,
    Logos.glencore,
    Logos.kazzinc,
    Logos.karachaganak,
    Logos.tso
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-100 mb-2">
            Работаем с лидерами отрасли
          </h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {logoComponents.map((Logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24"
            >
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
