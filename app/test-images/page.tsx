'use client';

import React from 'react';
import Image from 'next/image';

export default function TestImagesPage() {
  const logos = [
    '/logos/terra.svg',
    '/logos/geocube_white.svg',
    '/logos/Barrick.svg',
    '/logos/kazatomprom.svg',
    '/logos/ERG-logo.svg',
    '/logos/rio_tinto.svg',
    '/logos/glencore.svg',
    '/logos/Airbus_Defense_and_Space.svg',
  ];

  const images = [
    '/images/hero-section/geology-1.jpg',
    '/images/hero-section/geology-3.jpg',
    '/images/hero-section/geology-4.jpg',
    '/images/hero-section/geology-5.jpg',
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Test Images Page</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Logos Test</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {logos.map((logo, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm mb-2">{logo}</p>
              <div className="h-20 bg-gray-700 rounded flex items-center justify-center">
                <img 
                  src={logo} 
                  alt={`Logo ${index}`}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    console.error(`Failed to load: ${logo}`);
                    e.currentTarget.style.border = '2px solid red';
                    e.currentTarget.style.backgroundColor = 'rgba(255,0,0,0.1)';
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded: ${logo}`);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Images Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm mb-2">{image}</p>
              <div className="h-40 bg-gray-700 rounded overflow-hidden">
                <img 
                  src={image} 
                  alt={`Image ${index}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load: ${image}`);
                    e.currentTarget.style.border = '2px solid red';
                    e.currentTarget.style.backgroundColor = 'rgba(255,0,0,0.1)';
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded: ${image}`);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Next.js Image Component Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm mb-2">{image}</p>
              <div className="h-40 bg-gray-700 rounded overflow-hidden relative">
                <Image 
                  src={image} 
                  alt={`Next.js Image ${index}`}
                  fill
                  className="object-cover"
                  onError={() => {
                    console.error(`Next.js Image failed to load: ${image}`);
                  }}
                  onLoad={() => {
                    console.log(`Next.js Image successfully loaded: ${image}`);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Console Logs</h2>
        <p className="text-sm text-gray-400">
          Check the browser console for loading status of images and logos.
        </p>
      </div>
    </div>
  );
}
