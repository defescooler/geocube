'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Zap, Shield, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/i18n';

const ValuePropositionSection = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Main Value Prop */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#079669]/10 text-[#079669] rounded-full text-sm font-medium border border-[#079669]/20">
              ✨ {language === 'ru' ? 'Новое поколение геологоразведки' : 'New Generation of Geological Exploration'}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6"
          >
            {language === 'ru' ? (
              <>
                От <span className="text-[#079669] font-normal">традиционной геологии</span>
                <br />к <span className="text-[#079669] font-normal">интеллектуальным решениям</span>
              </>
            ) : (
              <>
                From <span className="text-[#079669] font-normal">Traditional Geology</span>
                <br />to <span className="text-[#079669] font-normal">Intelligent Solutions</span>
              </>
            )}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {language === 'ru' 
              ? 'Мы объединяем 30+ лет геологического опыта с передовыми технологиями ИИ, спутниковой аналитикой и big data для революции в поиске месторождений'
              : 'We combine 30+ years of geological expertise with advanced AI technologies, satellite analytics, and big data to revolutionize mineral discovery'
            }
          </motion.p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: language === 'ru' ? "В 10 раз быстрее" : "10x Faster",
              description: language === 'ru' ? "От месяцев исследований к неделям точного анализа" : "From months of research to weeks of precise analysis",
              metric: language === 'ru' ? "18 месяцев → 2 недели" : "18 months → 2 weeks"
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              title: language === 'ru' ? "90%+ точность" : "90%+ Accuracy",
              description: language === 'ru' ? "ИИ-модели обучены на данных успешных месторождений" : "AI models trained on successful deposit data",
              metric: language === 'ru' ? "Точность прогнозов 93%" : "93% Prediction Accuracy"
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: language === 'ru' ? "Снижение рисков" : "Risk Reduction",
              description: language === 'ru' ? "Минимизация инвестиций в неперспективные участки" : "Minimizing investments in unpromising areas",
              metric: language === 'ru' ? "Экономия до $2M" : "Savings up to $2M"
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: language === 'ru' ? "Глобальное покрытие" : "Global Coverage",
              description: language === 'ru' ? "Анализ любых территорий через спутниковые данные" : "Analysis of any territories through satellite data",
              metric: language === 'ru' ? "Любая точка мира" : "Any point in the world"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-b from-gray-900/50 to-gray-900/20 rounded-2xl p-6 border border-gray-800/50 hover:border-[#079669]/30 transition-all duration-300 group"
            >
              <div className="text-[#079669] mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="text-[#079669] font-medium text-sm">
                {item.metric}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#079669]/10 via-transparent to-[#079669]/10 rounded-3xl p-8 border border-[#079669]/20">
            <h3 className="text-2xl font-light text-white mb-4">
              <span className="text-[#079669]">Terra Intelligence Systems</span> — 
              {language === 'ru' ? 'ваш партнёр в геологоразведке будущего' : 'your partner in the future of geological exploration'}
            </h3>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              {language === 'ru' 
                ? 'Полный цикл услуг: от сбора спутниковых данных до полевого подтверждения находок. Работаем с ведущими горнодобывающими компаниями Казахстана и мира.'
                : 'Full cycle of services: from satellite data collection to field confirmation of findings. We work with leading mining companies in Kazakhstan and worldwide.'
              }
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
