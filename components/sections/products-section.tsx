'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Database, Satellite, Map, BarChart3, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/i18n';

const ProductsSection = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-white mb-6"
          >
            {getTranslation('products.title', language).split(' ').map((word, index, array) => {
              const isHighlighted = word.includes('технологические') || word.includes('Technological');
              return (
                <span key={index}>
                  {isHighlighted ? (
                    <span className="text-[#079669]">{word}</span>
                  ) : (
                    word
                  )}
                  {index < array.length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            {getTranslation('products.subtitle', language)}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* GeoCube - флагманский продукт */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-[#079669]/10 to-transparent rounded-3xl p-6 border border-[#079669]/20">
              <div className="flex items-center mb-4">
                <div className="w-40 h-40 bg-transparent rounded-xl flex items-center justify-center mr-8">
                  <img 
                    src="/logos/geocube_white.svg" 
                    alt="GeoCube Logo" 
                    className="w-36 h-36 object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {getTranslation('products.geocube.description', language)}
              </p>
              
              {/* GeoCube features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {[
                  { icon: <Satellite className="w-5 h-5" />, text: getTranslation('features.satellite', language) },
                  { icon: <Cpu className="w-5 h-5" />, text: getTranslation('features.ai', language) },
                  { icon: <BarChart3 className="w-5 h-5" />, text: getTranslation('features.predictive', language) },
                  { icon: <Map className="w-5 h-5" />, text: getTranslation('features.gis', language) }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="text-[#079669] mr-3">
                      {feature.icon}
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <motion.a
                href="/geocube"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 bg-[#079669] text-white rounded-xl hover:bg-[#079669]/80 transition-all duration-300 group"
              >
                <span className="mr-2">{getTranslation('products.geocube.open', language)}</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
          
          {/* GeoCube Visualization */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Layered visualization for GeoCube */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="relative w-full h-80">
                  <img 
                    src="/images/layers/layers.png" 
                    alt="GeoCube platform layers" 
                    className="w-full h-full object-contain"
                  />
                  {/* Overlay with GeoCube branding */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-[#079669]/20 backdrop-blur-sm rounded-lg p-3 border border-[#079669]/30">
                        <h4 className="text-white font-semibold mb-1">{getTranslation('products.geocube.inAction', language)}</h4>
                        <p className="text-gray-300 text-sm">{getTranslation('products.geocube.realTime', language)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-light text-white mb-8">
            {getTranslation('products.additional.title', language).split(' ').map((word, index, array) => {
              const isHighlighted = word.includes('решения') || word.includes('Solutions');
              return (
                <span key={index}>
                  {isHighlighted ? (
                    <span className="text-[#079669]">{word}</span>
                  ) : (
                    word
                  )}
                  {index < array.length - 1 ? ' ' : ''}
                </span>
              );
            })}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: getTranslation('solutions.terradb.title', language),
                description: getTranslation('solutions.terradb.description', language),
                status: getTranslation('status.inDevelopment', language)
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: getTranslation('solutions.fieldassist.title', language),
                description: getTranslation('solutions.fieldassist.description', language),
                status: getTranslation('status.planned', language)
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: getTranslation('solutions.mineoptim.title', language),
                description: getTranslation('solutions.mineoptim.description', language),
                status: getTranslation('status.concept', language)
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-gray-900/30 to-gray-900/10 rounded-2xl p-6 border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300"
              >
                <div className="text-[#079669] mb-4 flex justify-center">
                  {solution.icon}
                </div>
                <h4 className="text-white text-lg font-semibold mb-2">
                  {solution.title}
                </h4>
                <p className="text-gray-400 mb-3 text-sm">
                  {solution.description}
                </p>
                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">
                  {solution.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
