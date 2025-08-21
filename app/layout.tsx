import { Footer } from '@/components/ui/footer-section';
import './globals.css';
import Providers from './providers';
import { cn } from '@/lib/utils';
import AnimateEnter from '@/ui/AnimateEnter';
import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://geocube.terra.is'),
  authors: [{ name: 'Terra Exploration', url: 'https://terra.is' }],
  category: 'technology',
  creator: 'Terra Exploration',
  description: 'AI-powered geospatial platform for mineral exploration. Digitizing geology, analyzing satellite data, and accelerating discoveries in Kazakhstan and beyond.',
  icons: {
    apple: '/static/favicons/apple-touch-icon.png',
    icon: '/static/favicons/terra_favicon.png',
    shortcut: '/static/favicons/favicon.ico',
  },
  keywords: [
    'GeoCube',
    'Terra Exploration',
    'Mineral Exploration',
    'AI Geospatial',
    'Satellite Imagery',
    'Kazakhstan Mining',
    'Geological Data',
    'Critical Metals',
    'Lithium',
    'Copper',
    'Machine Learning',
    'GIS',
    'Remote Sensing',
  ],
  manifest: '/static/favicons/site.webmanifest',
  openGraph: {
    description: 'AI-powered geospatial platform revolutionizing mineral exploration with 25+ years of geological expertise.',
    images: [
      {
        alt: 'GeoCube - AI-Powered Mineral Intelligence',
        height: 1080,
        url: 'https://geocube.terra.is/static/images/og.png',
        width: 1920,
      },
    ],
    locale: 'en-US',
    siteName: 'GeoCube by Terra Exploration',
    title: 'GeoCube - Precision Mineral Intelligence at Enterprise Scale',
    type: 'website',
    url: 'https://geocube.terra.is',
  },
  publisher: 'Terra Exploration',
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  title: {
    default: 'GeoCube - Precision Mineral Intelligence',
    template: '%s | GeoCube',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@terraexploration',
    title: 'GeoCube - AI-Powered Mineral Intelligence',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { color: '#0f172a', media: '(prefers-color-scheme: light)' },
    { color: '#0f172a', media: '(prefers-color-scheme: dark)' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          `${inter.className}`,
          'h-full min-h-screen relative w-full',
          'motion-reduce:transform-none motion-reduce:transition-none'
        )}
      >
        <Providers>
          <AnimateEnter>
            {children}
          </AnimateEnter>
        </Providers>
      </body>
    </html>
  );
}
