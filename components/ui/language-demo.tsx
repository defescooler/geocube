'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useTranslations } from '@/lib/use-translations';
import LanguageSwitcher from './language-switcher';

export default function LanguageDemo() {
  const { t, language } = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 bg-gray-900/95 backdrop-blur-md rounded-2xl p-4 border border-gray-700/50 shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-3">
        <LanguageSwitcher variant="button" />
        <div className="text-sm text-gray-300">
          <span className="font-medium">{t('language.switch')}</span>
          <div className="text-xs text-gray-400 mt-1">
            Current: {language.toUpperCase()}
          </div>
        </div>
      </div>
      
      <div className="space-y-2 text-xs text-gray-400">
        <div>
          <span className="font-medium">Hero:</span> {t('hero.title')}
        </div>
        <div>
          <span className="font-medium">Products:</span> {t('products.title')}
        </div>
        <div>
          <span className="font-medium">Team:</span> {t('team.title')}
        </div>
      </div>
    </motion.div>
  );
}
