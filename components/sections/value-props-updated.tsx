'use client';

import React from 'react';
import { Container, Heading, Section } from '@/lib/design-system';
import { motion } from 'motion/react';
import { BarChart3, DollarSign, Cpu, Database, Map, Clock, BanknoteIcon, AlertTriangle, FileWarning, Layers, Satellite, Mountain, Microscope } from 'lucide-react';

/**
 * Updated ValuePropsSection with company services
 * Includes layered visualization image
 */
export default function ValuePropsSection() {
  // Problem Statement data
  const problemPoints = [
    { icon: <Clock size={20} />, text: "18-24 месяца на оценку участка" },
    { icon: <BanknoteIcon size={20} />, text: "$2-5 млн стоимость исследований" }, 
    { icon: <AlertTriangle size={20} />, text: "70% ошибок в прогнозировании" },
    { icon: <FileWarning size={20} />, text: "Огромные объемы данных обрабатываются вручную" }
  ];

  // Solution Vision data
  const solutionPoints = [
    {
      icon: <Satellite size={24} />,
      title: "ИИ анализирует терабайты спутниковых данных",
      description: "Автоматический сбор и обработка спутниковых снимков и геологической информации"
    },
    {
      icon: <Layers size={24} />,
      title: "Автоматическое выявление геологических паттернов",
      description: "Обнаружение геологических структур и аномалий с помощью машинного обучения"
    },
    {
      icon: <Cpu size={24} />,
      title: "Прогнозные модели для оценки перспективности",
      description: "Точные алгоритмы для определения наиболее перспективных участков"
    },
    {
      icon: <Mountain size={24} />,
      title: "Интеграция с полевыми исследованиями",
      description: "Объединение данных дистанционного зондирования и полевых работ"
    }
  ];



  return (
    <Section className="py-20 bg-surface-950">
      <Container>
        {/* Problem Statement */}
        <div className="text-center mb-16">
          <Heading level={2} className="text-3xl md:text-4xl font-normal text-white mb-4">
            Геологоразведка <span className="text-[#079669]">застряла в прошлом веке</span>
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
            {problemPoints.map((point, index) => (
              <motion.div 
                key={index} 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#079669] mr-3 bg-[#079669]/10 p-2 rounded-full">
                  {point.icon}
                </div>
                <p className="text-white/90 text-lg">{point.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xl text-white font-medium mt-8 max-w-3xl mx-auto">
            Мы создаем ИИ-платформу, которая изменит это навсегда
          </p>
        </div>

        {/* Layered Visualization Image - reduced size */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-xl">
            <img 
              src="/images/layers/layers.png" 
              alt="Геологические слои данных" 
              className="w-full object-contain max-h-[350px]"
            />
          </div>
        </div>



        {/* Solution Vision */}
        <div className="mb-16 text-center">
          <Heading level={2} className="text-3xl md:text-4xl font-normal text-white mb-8">
            Наше <span className="text-[#079669]">видение GeoCube</span>
          </Heading>
        </div>
        
        {/* Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionPoints.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#079669]/10 text-[#079669] mb-4 group-hover:bg-[#079669]/20 transition-all duration-300 transform group-hover:scale-110">
                {solution.icon}
              </div>
              
              <h3 className="text-white text-lg font-normal mb-3">{solution.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>


      </Container>
    </Section>
  );
}
