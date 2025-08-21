'use client';

import { useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';
import { TeamMember } from '@/types/team';
import { useLanguage } from '@/lib/language-context';
import { getTranslation } from '@/lib/i18n';

const getLeaders = (language: 'ru' | 'en'): TeamMember[] => [
    {
        id: 'leader-2',
        name: 'Борис Гельдыев',
        role: language === 'ru' ? 'Научный директор и основатель, 15+ лет в геологии' : 'Chief Science Officer and Founder, 15+ years in geology',
        bio: language === 'ru' 
          ? 'Генеральный директор Terra GIS с более чем 20-летним опытом в области дистанционного зондирования, спектрального картирования и анализа рельефа. Руководил более 50 проектами по геологическому картированию в Центральной Азии. Борис отвечает за научную основу GeoCube, преобразуя спутниковые данные в готовую для полевых работ геологическую информацию.'
          : 'CEO of Terra GIS with over 20 years of experience in remote sensing, spectral mapping, and terrain analysis. Led more than 50 geological mapping projects in Central Asia. Boris is responsible for the scientific foundation of GeoCube, transforming satellite data into geological information ready for field work.',
        image: '/images/team/boris.jpeg',
        socialLinks: {
          linkedin: 'https://www.linkedin.com/in/boris-geldyyev-8a325016/',
          email: 'boris@geocube.kz'
        }
      },
  {
    id: 'leader-1',
    name: 'Дастан Кожабеков',
    role: language === 'ru' ? 'Генеральный директор и сооснователь, ex-Kazatomprom' : 'CEO and Co-founder, ex-Kazatomprom',
    bio: language === 'ru' 
      ? 'Бывший генеральный директор K.I.N.G. Бывший председатель правления АО «Национальный научно-технический центр «Парасат». Имеет обширные связи в горнодобывающей отрасли Казахстана и более 15 лет опыта в управлении высокотехнологичными компаниями.'
      : 'Former CEO of K.I.N.G. Former Chairman of the Board of JSC "National Scientific and Technical Center "Parasat". Has extensive connections in Kazakhstan\'s mining industry and over 15 years of experience in managing high-tech companies.',
    image: '/images/team/dastan.png',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/dastan-kozhabekov-793b413/',
      email: 'dastan@geocube.kz'
    }
  }
];

const getExecutiveBoard = (language: 'ru' | 'en'): TeamMember[] => [
  {
    id: 'board-1',
    name: 'Д-р Юрий Локтионов',
    role: language === 'ru' ? 'Финансовый директор и член совета директоров' : 'CFO and Board Member',
    bio: language === 'ru' 
      ? 'Экономист и технолог с опытом работы в MIT, USC и Boston Sloan Capital. Имеет докторскую степень в области финансов и более 20 лет опыта работы с инвестициями в технологические проекты. Юрий разрабатывает финансовую модель GeoCube и руководит ее инвестиционной стратегией на стыке ИИ, геологии и инфраструктуры.'
      : 'Economist and technologist with experience at MIT, USC, and Boston Sloan Capital. Holds a PhD in finance and over 20 years of experience in technology project investments. Yuri develops GeoCube\'s financial model and leads its investment strategy at the intersection of AI, geology, and infrastructure.',
    image: '/images/team/yuri.png',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/yuri-loktionov-ph-d-cfa-2385732/'
    }
  },
  {
    id: 'board-2',
    name: 'Д-р Монту Саксена',
    role: language === 'ru' ? 'Руководитель по исследованиям и член совета директоров' : 'Head of Research and Board Member',
    bio: language === 'ru' 
      ? 'Бывший ведущий научный сотрудник Европейского космического агентства с глубокой экспертизой в гиперспектральной съемке и моделировании недр. В GeoCube Монту руководит исследованиями и разработками в области обнаружения аномалий с помощью ИИ и обеспечивает научную строгость всех геологоразведочных процессов.'
      : 'Former Senior Scientist at the European Space Agency with deep expertise in hyperspectral imaging and subsurface modeling. At GeoCube, Montu leads research and development in AI-powered anomaly detection and ensures scientific rigor in all geological exploration processes.',
    image: '/images/team/montu.png',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/siddharthsaxenacambridge/'
    }
  },
  {
    id: 'board-3',
    name: 'Ануар Альдербаев',
    role: language === 'ru' ? 'Член совета директоров' : 'Board Member',
    bio: language === 'ru' 
      ? 'Опытный юридический профессионал с более чем 20-летним опытом работы в корпоративном, банковском и консалтинговом секторах. Доказанная экспертиза в корпоративном праве, судебных разбирательствах и корпоративном управлении с сильным послужным списком успешных судебных дел и разрешения споров.'
      : 'Experienced legal professional with over 20 years of experience in corporate, banking, and consulting sectors. Proven expertise in corporate law, litigation, and corporate governance with a strong track record of successful court cases and dispute resolution.',
    image: '/images/team/anuar.png',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/anuar-alderbayev-mciarb-26334467/',
      email: 'AAlderbayev@hotmail.com'
    }
  },
];

// Memoized social links component
const SocialLinks = memo(({ links }: { links: TeamMember['socialLinks'] }) => {
  if (!links) return null;

  return (
    <div className="flex space-x-3 mb-4">
      {links.linkedin && (
        <a
          href={links.linkedin}
          className="text-gray-400 hover:text-emerald-600 transition-colors"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      )}
      {links.twitter && (
        <a
          href={links.twitter}
          className="text-gray-400 hover:text-emerald-400 transition-colors"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-4 h-4" />
        </a>
      )}
      {links.email && (
        <a
          href={`mailto:${links.email}`}
          className="text-gray-400 hover:text-emerald-600 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      )}
    </div>
  );
});

SocialLinks.displayName = 'SocialLinks';

// Additional type for component props
interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  language: 'ru' | 'en';
}

// Memoized team member card component
const TeamMemberCard = memo(({ member, index, language }: TeamMemberCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleExpanded = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsExpanded(prev => !prev);
    
    // Clear animation state after animation completes - increased to match new duration
    setTimeout(() => {
      setIsAnimating(false);
    }, 1100);
  }, [isAnimating]);

  const fallbackInitials = useMemo(() => {
    return member.name.split(' ').map(n => n[0]).join('');
  }, [member.name]);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Profile Image */}
      <div className="aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
        <Image
          src={member.image!}
          alt={member.name}
          fill
          className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
          style={{
            objectPosition: 'center 25%'
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 2} // Prioritize first 2 images
          onError={(e) => {
            // Fallback to gradient if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.className = 'aspect-square w-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center';
              const fallback = document.createElement('div');
              fallback.className = 'w-full h-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center';
              fallback.innerHTML = `<span class="text-white text-4xl font-bold">${fallbackInitials}</span>`;
              parent.appendChild(fallback);
            }
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and Role */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2">
            {member.role}
          </p>
        </div>

        {/* Social Links */}
        <SocialLinks links={member.socialLinks} />

        {/* Expand/Collapse Button */}
        <button
          onClick={toggleExpanded}
          disabled={isAnimating}
          className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
            isAnimating
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300'
          }`}
        >
          <span>{isExpanded ? (language === 'ru' ? 'Свернуть' : 'Collapse') : (language === 'ru' ? 'Подробнее' : 'Learn More')}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        {/* Expanded Content */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              layout
              initial={{ opacity: 0, maxHeight: 0, paddingTop: 0, paddingBottom: 0 }}
              animate={{ 
                opacity: 1, 
                maxHeight: 300,
                paddingTop: 16,
                paddingBottom: 0
              }}
              exit={{ opacity: 0, maxHeight: 0, paddingTop: 0, paddingBottom: 0 }}
              transition={{ 
                duration: 1.0,
                ease: [0.04, 0.62, 0.23, 0.98], // Improved easing for smoother animation
                opacity: { duration: 0.6 } // Separate timing for opacity
              }}
              className="overflow-hidden border-t border-gray-200 dark:border-gray-700"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

TeamMemberCard.displayName = 'TeamMemberCard';

// Memoized section header component
const SectionHeader = memo(({ title, description, delay = 0 }: { title: string; description: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="mb-8"
  >
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400">
      {description}
    </p>
  </motion.div>
));

SectionHeader.displayName = 'SectionHeader';

export default function TeamSection() {
  const { language } = useLanguage();
  
  // Memoize the main header animation
  const mainHeaderAnimation = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }), []);

  const leaders = getLeaders(language);
  const executiveBoard = getExecutiveBoard(language);

  return (
    <section id="team" className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...mainHeaderAnimation}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'ru' ? 'Команда, которая воплотит это в жизнь' : 'The Team That Will Make It Happen'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {language === 'ru' 
              ? 'Уникальное сочетание геологической экспертизы с передовыми технологиями. Десятилетия опыта работы в горнодобывающей отрасли Казахстана и инновационных компаниях Кремниевой долины.'
              : 'Unique combination of geological expertise with cutting-edge technologies. Decades of experience in Kazakhstan\'s mining industry and Silicon Valley innovation companies.'
            }
          </p>
        </motion.div>

        {/* Leaders Section */}
        <div className="mb-16">
          <SectionHeader 
            title={language === 'ru' ? 'Руководство' : 'Leadership'}
            description={language === 'ru' ? 'Основатели, определяющие стратегию и развитие GeoCube.' : 'Founders defining GeoCube\'s strategy and development.'}
            delay={0.2}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leaders.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} language={language} />
            ))}
          </div>
        </div>

        {/* Executive Board Section */}
        <div>
          <SectionHeader 
            title={language === 'ru' ? 'Совет директоров' : 'Board of Directors'}
            description={language === 'ru' ? 'Стратегические советники, обеспечивающие отраслевую экспертизу и корпоративное управление.' : 'Strategic advisors providing industry expertise and corporate governance.'}
            delay={0.4}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveBoard.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index + 2} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
