'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { LanguageProvider } from '@/lib/language-context';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
