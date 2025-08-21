import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Карьера | Terra Exploration',
  description: 'Присоединяйтесь к нашей команде Terra Exploration. Открытые вакансии в области AI, геологии и технологий. Создаем будущее минеральной разведки.',
  keywords: [
    'карьера Terra',
    'вакансии геология',
    'работа AI технологии',
    'геологоразведка вакансии',
    'Terra Exploration карьера',
    'инженер вакансии',
    'машинное обучение работа'
  ],
  openGraph: {
    title: 'Карьера в Terra Exploration',
    description: 'Присоединяйтесь к команде лидеров в области AI-powered геологоразведки',
    type: 'website',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
