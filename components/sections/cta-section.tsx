'use client';

import React from 'react';
import { Container, Heading, Section, Button } from '@/lib/design-system';
import { motion } from 'motion/react';
import { ChevronRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/i18n';

/**
 * CTASection
 * Clear call-to-action at the bottom of the landing page
 */
export default function CTASection() {
  const { language } = useLanguage();
  
  return (
    <Section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#079669]/10 via-transparent to-[#079669]/10 rounded-3xl p-12 md:p-16 border border-[#079669]/20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-[#079669]/10 text-[#079669] rounded-full text-sm font-medium border border-[#079669]/20">
                🚀 {language === 'ru' ? 'Начните сегодня' : 'Start Today'}
              </span>
            </motion.div>

            <Heading level={2} className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
              <span className="text-[#079669]">Terra Intelligence Systems</span> — 
              {language === 'ru' ? 'готовы найти месторождения будущего?' : 'ready to find the deposits of the future?'}
            </Heading>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              {language === 'ru' 
                ? 'Свяжитесь с нами для консультации или обсуждения партнерства'
                : 'Contact us for consultation or partnership discussion'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:info@terraintelligence.kz"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-[#079669] text-white rounded-full hover:bg-[#079669]/90 transition-all duration-300 text-lg font-medium group"
              >
                <Calendar className="mr-3 h-5 w-5" />
                {language === 'ru' ? 'Связаться с нами' : 'Contact Us'}
              </motion.a>
              
              <motion.a
                href="tel:+77273885544"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-transparent border border-[#079669]/30 text-white rounded-full hover:bg-[#079669]/10 hover:border-[#079669]/50 transition-all duration-300 text-lg font-medium group"
              >
                +7 (727) 388-55-44
                <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

// Helper component for info points
function InfoPoint({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex items-start">
      <div className="mt-1 mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-medium text-white mb-1">{title}</h4>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
}
