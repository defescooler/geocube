'use client';

import React from 'react';
import UnifiedNavbar from '@/components/layout/unified-navbar';
import NewFooter from '@/components/layout/new-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Building, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// Детальные данные о вакансиях
const jobDetails = {
  'founding-ml-engineer': {
    title: 'Founding ML Engineer',
    department: 'Engineering',
    location: 'Almaty, Kazakhstan (Remote friendly)',
    type: 'Full time',
    compensation: '$80K – $120K USD + Equity package',
    overview: {
      description: 'Ты станешь первым ML-инженером в команде и будешь строить AI-мозг GeoCube с нуля. Создашь модели машинного обучения, которые будут анализировать терабайты спутниковых данных и предсказывать местоположение месторождений.',
      background: 'Ты будешь работать с:',
      opportunities: [
        'Build ML Pipeline: Создать end-to-end ML pipeline для обработки satellite imagery и geological data',
        'Develop Models: Разработать и обучить deep learning модели для pattern recognition в геологических данных',
        'Data Engineering: Построить систему ingestion и preprocessing для multi-modal данных',
        'Research & Innovation: Исследовать state-of-the-art approaches в computer vision и geospatial ML',
        'Scale Infrastructure: Спроектировать scalable ML infrastructure для обработки петабайтов данных',
        'Cross-functional Work: Тесно работать с геологами для понимания domain expertise'
      ]
    },
    application: {
      title: 'Application',
      description: 'Мы ищем талантливого ML-инженера с опытом в computer vision и geospatial data.',
      requirements: [
        'Strong ML Background: 3+ года практического опыта с PyTorch/TensorFlow, scikit-learn',
        'Computer Vision: Опыт с image classification, object detection, segmentation',
        'Python Ecosystem: Уверенное владение Python, pandas, numpy, matplotlib',
        'Cloud Platforms: Опыт с AWS/GCP/Azure для ML workloads',
        'Data Engineering: Понимание data pipelines, ETL, работа с большими датасетами',
        'Geospatial Experience: Опыт с satellite imagery, GIS данными, rasterio/GDAL',
        'Deep Learning: Опыт с CNN, transformer architectures, self-supervised learning',
        'MLOps: Знание ML deployment, monitoring, A/B testing'
      ],
      niceToHave: [
        'Distributed Computing: Опыт с Spark, Dask для big data processing',
        'Research Background: Публикации в области computer vision или geoscience',
        'Startup Experience: Опыт в early-stage companies',
        'Geology Knowledge: Базовое понимание геологических процессов',
        'Open Source: Активные contributions в ML/AI проектах'
      ]
    }
  },
  'founding-system-architect': {
    title: 'Founding System Architect',
    department: 'Engineering',
    location: 'Almaty, Kazakhstan (Remote friendly)',
    type: 'Full time',
    compensation: '$100K – $140K USD + Equity package',
    overview: {
      description: 'Ты спроектируешь и построишь техническую архитектуру GeoCube platform с нуля. Создашь distributed system, который будет обрабатывать петабайты satellite data и обслуживать ML-модели для тысяч пользователей по всему миру.',
      background: 'Ты будешь работать с:',
      opportunities: [
        'System Design: Спроектировать scalable, fault-tolerant архитектуру для geospatial data processing',
        'Cloud Architecture: Построить multi-cloud infrastructure с focus на cost optimization и performance',
        'API Design: Создать RESTful APIs и GraphQL endpoints для web/mobile clients',
        'Data Architecture: Спроектировать data warehousing решения для multi-petabyte geological datasets',
        'Security & Compliance: Реализовать enterprise-grade security для работы с конфиденциальными геологическими данными',
        'Performance Optimization: Оптимизировать систему для real-time processing спутниковых данных',
        'Team Leadership: Mentoring junior developers и tech decision making'
      ]
    },
    application: {
      title: 'Application',
      description: 'Мы ищем опытного системного архитектора для построения масштабируемой платформы.',
      requirements: [
        'Distributed Systems: 5+ лет опыта проектирования distributed, high-availability systems',
        'Cloud Expertise: Deep knowledge AWS/GCP/Azure, serverless architectures, microservices',
        'Backend Engineering: Expert level в Python/Go/Rust, понимание async programming',
        'Database Design: Опыт с SQL/NoSQL, data modeling, query optimization',
        'API Design: RESTful services, GraphQL, API versioning и backward compatibility',
        'DevOps/Infrastructure: Docker, Kubernetes, CI/CD, Infrastructure as Code',
        'Security: Знание security best practices, compliance frameworks'
      ],
      niceToHave: [
        'Geospatial Systems: Опыт с GIS systems, spatial databases (PostGIS), map tile servers',
        'Big Data: Знание Spark, Kafka, data lakes, stream processing',
        'ML Infrastructure: Опыт построения ML platforms, model serving, feature stores',
        'Leadership: Опыт technical leadership, system architecture reviews',
        'Startup Experience: Опыт в early-stage companies, building 0->1 products'
      ]
    }
  }
};

interface JobDetailClientProps {
  jobId: string;
}

export default function JobDetailClient({ jobId }: JobDetailClientProps) {
  const job = jobDetails[jobId as keyof typeof jobDetails];

  if (!job) {
    return (
      <div className="flex flex-col min-h-screen bg-black text-white">
        <UnifiedNavbar variant="solid" />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Вакансия не найдена</h1>
            <Button asChild>
              <Link href="/careers">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Вернуться к вакансиям
              </Link>
            </Button>
          </div>
        </div>
        <NewFooter />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <UnifiedNavbar variant="solid" />
      
      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/careers" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад к вакансиям
            </Link>
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{job.title}</h1>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-1 text-gray-400">Локация</h3>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>{job.location}</span>
              </div>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-1 text-gray-400">Тип занятости</h3>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{job.type}</span>
              </div>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-1 text-gray-400">Отдел</h3>
              <div className="flex items-center space-x-1">
                <Building className="w-4 h-4 text-gray-500" />
                <span>{job.department}</span>
              </div>
            </div>
            
            <div className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-1 text-gray-400">Компенсация</h3>
              <span className="text-sm">{job.compensation}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Overview Tab */}
              <div className="border-b border-gray-700 pb-2 mb-6">
                <h2 className="text-xl font-bold">Обзор</h2>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">О позиции:</h3>
                <p className="text-gray-300 mb-6">{job.overview.description}</p>
                
                <p className="text-gray-300 mb-4">{job.overview.background}</p>
                
                <ul className="space-y-2 mb-6">
                  {job.overview.opportunities.map((opportunity, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span className="text-gray-300">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Sidebar */}
            <div className="space-y-6">
              <div className="border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">{job.application.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{job.application.description}</p>
                
                <h4 className="font-semibold mb-3">Требования:</h4>
                <ul className="space-y-2 mb-6">
                  {job.application.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{req}</span>
                    </li>
                  ))}
                </ul>

                {job.application.niceToHave && (
                  <>
                    <h4 className="font-semibold mb-3">Будет плюсом:</h4>
                    <ul className="space-y-2 mb-6">
                      {job.application.niceToHave.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <span className="text-blue-400 mt-1">•</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <Button className="w-full" size="lg">
                  Подать заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewFooter />
    </div>
  );
}
