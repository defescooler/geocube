import React from 'react';
import { Metadata } from 'next';
import JobDetailClient from './job-detail-client';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const jobTitles: Record<string, string> = {
    'founding-ml-engineer': 'Founding ML Engineer',
    'founding-system-architect': 'Founding System Architect',
  };

  const title = jobTitles[params.id] || 'Вакансия';
  
  return {
    title: `${title} | Terra Exploration`,
    description: `Подробная информация о вакансии ${title} в Terra Exploration. Присоединяйтесь к нашей команде!`,
    openGraph: {
      title: `${title} - Карьера в Terra Exploration`,
      description: `Открытая вакансия: ${title}. Узнайте больше о возможностях карьеры в Terra Exploration.`,
      type: 'website',
    },
  };
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  return <JobDetailClient jobId={params.id} />;
}
