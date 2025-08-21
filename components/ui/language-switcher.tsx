'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/i18n';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'button' | 'icon';
}

export default function LanguageSwitcher({ className = '', variant = 'button' }: LanguageSwitcherProps) {
  const { language, toggleLanguage } = useLanguage();

  if (variant === 'icon') {
    return (
      <motion.button
        onClick={toggleLanguage}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`text-white hover:text-emerald-400 transition-colors ${className}`}
        title={getTranslation('language.switch', language)}
        aria-label={getTranslation('language.switch', language)}
      >
        <motion.span
          key={language}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-medium"
        >
          {language === 'ru' ? 'ENG' : 'RUS'}
        </motion.span>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative px-3 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white hover:bg-gray-700/70 transition-all duration-200 flex items-center gap-2 ${className}`}
      title={getTranslation('language.switch', language)}
      aria-label={getTranslation('language.switch', language)}
    >
      <motion.span
        key={language}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="text-sm font-medium"
      >
        {language === 'ru' ? 'ENG' : 'RUS'}
      </motion.span>
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    </motion.button>
  );
}
