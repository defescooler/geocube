"use client";

import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { GoCopilot } from "react-icons/go";
import { 
  Database, 
  MapPin, 
  Layers, 
  Zap,
  TrendingUp,
  Activity,
  Cpu,
  Lock,
  Sparkles
} from 'lucide-react';

interface DatasetRow {
  blockId: string;
  anomalyType: string;
  source: string;
  depth: string;
  mineralClass: string;
  certainty: string;
}

const syntheticData: DatasetRow[] = [
  {
    blockId: 'KZ-0911',
    anomalyType: 'Гидротермальная',
    source: 'ASTER + Отчеты',
    depth: '200–450м',
    mineralClass: 'Cu + Au',
    certainty: '82%'
  },
  {
    blockId: 'KZ-1047',
    anomalyType: 'Магнитная',
    source: 'Landsat-9 + МО',
    depth: '100–300м',
    mineralClass: 'Ni + Co',
    certainty: '90%'
  },
  {
    blockId: 'KZ-0075',
    anomalyType: 'Радиометрическая',
    source: 'WV-3 + Архивы',
    depth: '50–160м',
    mineralClass: 'U, Th',
    certainty: '76%'
  },
  {
    blockId: 'KZ-2231',
    anomalyType: 'Структурная',
    source: 'Векторизация',
    depth: '300–700м',
    mineralClass: 'Mo, РЗЭ',
    certainty: '88%'
  }
];

const getAnomalyIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'hydrothermal':
      return <Zap className="w-4 h-4" />;
    case 'magnetic':
      return <Activity className="w-4 h-4" />;
    case 'radiometric':
      return <TrendingUp className="w-4 h-4" />;
    case 'structural':
      return <Layers className="w-4 h-4" />;
    default:
      return <Database className="w-4 h-4" />;
  }
};

const getCertaintyColor = (certainty: string) => {
  const value = parseInt(certainty.replace('%', ''));
  if (value >= 85) return 'text-emerald-400';
  if (value >= 75) return 'text-yellow-400';
  return 'text-orange-400';
};

function VectorizedDatasetCard({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 bg-transparent backdrop-blur-sm",
        "shadow-lg shadow-black/5 dark:shadow-black/20",
        className
      )}
    >


      {/* Data Table */}
      <div className="p-6">
        <div className="overflow-hidden rounded-lg border border-white dark:border-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white dark:border-white bg-neutral-50/20 dark:bg-neutral-800/20">
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider border-r border-white dark:border-white">
                    ID Блока
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider border-r border-white dark:border-white">
                    Тип аномалии
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider border-r border-white dark:border-white">
                    Источник
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider border-r border-white dark:border-white">
                    <div className="flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      Глубина
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                    Класс минералов
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white dark:divide-white">
                {syntheticData.slice(0, 3).map((row, index) => (
                  <motion.tr
                    key={row.blockId}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.1 + index * 0.1,
                      ease: "easeOut" 
                    }}
                    className="group hover:bg-neutral-50/30 dark:hover:bg-neutral-800/30 transition-colors duration-200"
                  >
                    <td className="px-4 py-3 border-r border-white dark:border-white">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-neutral-500 dark:text-neutral-400" />
                        <span className="font-mono text-sm font-medium text-black dark:text-white">
                          {row.blockId}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-r border-white dark:border-white">
                      <div className="flex items-center gap-2">
                        {getAnomalyIcon(row.anomalyType)}
                        <span className="text-sm text-black dark:text-white">
                          {row.anomalyType}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-r border-white dark:border-white">
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {row.source}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-r border-white dark:border-white">
                      <span className="text-sm font-medium text-black dark:text-white">
                        {row.depth}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm font-medium text-emerald-400">
                        {row.mineralClass}
                      </span>
                    </td>
                  </motion.tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>


      </div>


    </motion.div>
  );
}

export default function FeaturesSectionDemo() {
  const features = [
    // Row 1
    {
      title: "Оцифровали 1300 архивных отчетов",
      description:
        "Переводим бумажные документы 1954-1991 годов в цифровой формат. Каротажные диаграммы, полевые зарисовки и сейсмические разрезы становятся доступными для поиска и анализа.",
      skeleton: <SkeletonTwo />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Спутники + полевая разведка = точность",
      description:
        "Объединяем спутниковые снимки с полевыми данными. Каждый пиксель имеет точную геопривязку. Результат — данные, которые работают в реальных условиях.",
      skeleton: <SkeletonFive />,
      className: "col-span-1 lg:col-span-3 border-b dark:border-neutral-800",
    },
    // Row 2
    {
      title: "Анализируем 1300 блоков в реальном времени",
      description:
        "Обрабатываем геологические аномалии по всей стране. Классифицируем по типу, глубине и минералам. Создаем оперативную карту для принятия решений.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Работаем в Казахстане, масштабируемся глобально",
      description:
        "Наша платформа адаптируется к любым данным. От литиевых месторождений Южной Америки до золотых поясов Австралии — помогаем странам найти свои ресурсы.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b dark:border-neutral-800",
    },
    // Row 3
    {
      title: "ИИ учится на 70 годах данных",
      description:
        "Алгоритмы анализируют минеральные сигнатуры и прогнозируют перспективные участки. Ранжируем блоки по коммерческой привлекательности.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Картируем и ранжируем участки",
      description:
        "Делим территорию на блоки и оцениваем потенциал каждого. Наш алгоритм учитывает геологию, экономику и доступность. Помогаем выбрать лучшие участки для лицензирования.",
      skeleton: <SkeletonLightningFast />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none dark:border-neutral-800",
    },
  ];
  return (
    <div id="features" className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Каждый слой данных — это новая возможность
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        Объединяем архивные данные, спутниковую аналитику и ИИ-модели. Каждая функция помогает найти то, что пропускают другие.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl overflow-hidden bg-white/5 dark:bg-neutral-900/10 backdrop-blur-sm">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-64 md:h-80 lg:h-96 w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden min-h-96 bg-transparent`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="w-full text-left tracking-tight text-black dark:text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight mb-4 font-medium">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "w-full text-left text-sm sm:text-base lg:text-lg leading-relaxed",
        "text-neutral-600 dark:text-neutral-300 font-normal mb-6"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-6",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-7",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-8",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore - Known framer-motion type issue
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, [sequence]);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-3">
        <Container className="h-16 w-16 circle-1">
          <MetaLogo className="h-10 w-10 dark:text-white" />
        </Container>
        <Container className="h-20 w-20 circle-2">
          <OpenAILogo className="h-12 w-12 dark:text-white" />
        </Container>
        <Container className="h-24 w-24 circle-3">
          <AWSLogo className="h-14 w-14 dark:text-white" />
        </Container>
        <Container className="h-20 w-20 circle-4">
          <KubernetesLogo className="h-12 w-12" />
        </Container>
        <Container className="h-16 w-16 circle-5">
          <DockerLogo className="h-10 w-10" />
        </Container>
        <Container className="h-20 w-20 circle-6">
          <PythonLogo className="h-12 w-12" />
        </Container>
      </div>


    </div>
  );
};

const SparklesEffect = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `rounded-full flex items-center justify-center bg-white/10 dark:bg-black/20
    shadow-[0px_0px_12px_0px_rgba(255,255,255,0.15)_inset,0px_8px_16px_-8px_rgba(0,0,0,0.30)]
    dark:shadow-[0px_0px_12px_0px_rgba(255,255,255,0.05)_inset,0px_8px_16px_-8px_rgba(0,0,0,0.60)]
    border border-white/20 dark:border-white/10 backdrop-blur-sm
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const MetaLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 5.457v13.909h-4.08V5.457H24zM5.019 5.457v13.909H.939V5.457h4.08zM12.01 5.457v13.909H7.93V5.457h4.08zM19.01 5.457v13.909h-4.08V5.457h4.08z"/>
    </svg>
  );
};

export const OpenAILogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
    </svg>
  );
};

export const AWSLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 304 182"
      fill="currentColor"
    >
      <path d="M86.4,66.4c0,3.7,0.4,6.7,1.1,8.9c0.8,2.2,1.8,4.6,3.2,7.2c0.5,0.8,0.7,1.6,0.7,2.3c0,1-0.6,2-1.9,3l-6.3,4.2
        c-0.9,0.6-1.8,0.9-2.6,0.9c-1,0-2-0.5-3-1.4C76.2,90,75,88.4,74,86.8c-1-1.7-2-3.6-3.1-5.9c-7.8,9.2-17.6,13.8-29.4,13.8
        c-8.4,0-15.1-2.4-20-7.2c-4.9-4.8-7.4-11.2-7.4-19.2c0-8.5,3-15.4,9.1-20.6c6.1-5.2,14.2-7.8,24.5-7.8c3.4,0,6.9,0.3,10.6,0.8
        c3.7,0.5,7.5,1.3,11.5,2.2v-7.3c0-7.6-1.6-12.9-4.7-16c-3.2-3.1-8.6-4.6-16.3-4.6c-3.5,0-7.1,0.4-10.8,1.3c-3.7,0.9-7.3,2-10.8,3.4
        c-1.6,0.7-2.8,1.1-3.5,1.3c-0.7,0.2-1.2,0.3-1.6,0.3c-1.4,0-2.1-1-2.1-3.1v-4.9c0-1.6,0.2-2.8,0.7-3.5c0.5-0.7,1.4-1.4,2.8-2.1
        c3.5-1.8,7.7-3.3,12.6-4.5c4.9-1.3,10.1-1.9,15.6-1.9c11.9,0,20.6,2.7,26.2,8.1c5.5,5.4,8.3,13.6,8.3,24.6V66.4z M45.8,81.6
        c3.3,0,6.7-0.6,10.3-1.8c3.6-1.2,6.8-3.4,9.5-6.4c1.6-1.9,2.8-4,3.4-6.4c0.6-2.4,1-5.3,1-8.7v-4.2c-2.9-0.7-6-1.3-9.2-1.7
        c-3.2-0.4-6.3-0.6-9.4-0.6c-6.7,0-11.6,1.3-14.9,4c-3.3,2.7-4.9,6.5-4.9,11.5c0,4.7,1.2,8.2,3.7,10.6
        C37.7,80.4,41.2,81.6,45.8,81.6z M126.1,92.4c-1.8,0-3-0.3-3.8-1c-0.8-0.6-1.5-2-2.1-3.9L96.7,10.2c-0.6-2-0.9-3.3-0.9-4
        c0-1.6,0.8-2.5,2.4-2.5h9.8c1.9,0,3.2,0.3,3.9,1c0.8,0.6,1.4,2,2,3.9l16.8,66.2l15.6-66.2c0.5-2,1.1-3.3,1.9-3.9c0.8-0.6,2.2-1,4-1
        h8c1.9,0,3.2,0.3,4,1c0.8,0.6,1.5,2,1.9,3.9l15.8,67l17.3-67c0.6-2,1.3-3.3,2-3.9c0.8-0.6,2.1-1,3.9-1h9.3c1.6,0,2.5,0.8,2.5,2.5
        c0,0.5-0.1,1-0.2,1.6c-0.1,0.6-0.3,1.4-0.7,2.5l-24.1,77.3c-0.6,2-1.3,3.3-2.1,3.9c-0.8,0.6-2.1,1-3.8,1h-8.6c-1.9,0-3.2-0.3-4-1
        c-0.8-0.7-1.5-2-1.9-4L156,23l-15.4,64.4c-0.5,2-1.1,3.3-1.9,4c-0.8,0.7-2.2,1-4,1H126.1z M254.6,95.1c-5.2,0-10.4-0.6-15.4-1.8
        c-5-1.2-8.9-2.5-11.5-4c-1.6-0.9-2.7-1.9-3.1-2.8c-0.4-0.9-0.6-1.9-0.6-2.8v-5.1c0-2.1,0.8-3.1,2.3-3.1c0.6,0,1.2,0.1,1.8,0.3
        c0.6,0.2,1.5,0.6,2.5,1c3.4,1.5,7.1,2.7,11,3.5c4,0.8,7.9,1.2,11.9,1.2c6.3,0,11.2-1.1,14.6-3.3c3.4-2.2,5.2-5.4,5.2-9.5
        c0-2.8-0.9-5.1-2.7-7c-1.8-1.9-5.2-3.6-10.1-5.2L246,52c-7.3-2.3-12.7-5.7-16-10.2c-3.3-4.4-5-9.3-5-14.5c0-4.2,0.9-7.9,2.7-11.1
        c1.8-3.2,4.2-6,7.2-8.2c3-2.3,6.4-4,10.4-5.2c4-1.2,8.2-1.7,12.6-1.7c2.2,0,4.5,0.1,6.7,0.4c2.3,0.3,4.4,0.7,6.5,1.1
        c2,0.5,3.9,1,5.7,1.6c1.8,0.6,3.2,1.2,4.2,1.8c1.4,0.8,2.4,1.6,3,2.5c0.6,0.8,0.9,1.9,0.9,3.3v4.7c0,2.1-0.8,3.2-2.3,3.2
        c-0.8,0-2.1-0.4-3.8-1.2c-5.7-2.6-12.1-3.9-19.2-3.9c-5.7,0-10.2,0.9-13.3,2.8c-3.1,1.9-4.7,4.8-4.7,8.9c0,2.8,1,5.2,3,7.1
        c2,1.9,5.7,3.8,11,5.5l14.2,4.5c7.2,2.3,12.4,5.5,15.5,9.6c3.1,4.1,4.6,8.8,4.6,14c0,4.3-0.9,8.2-2.6,11.6
        c-1.8,3.4-4.2,6.4-7.3,8.8c-3.1,2.5-6.8,4.3-11.1,5.6C264.4,94.4,259.7,95.1,254.6,95.1z"/>
      <g>
        <path d="M273.5,143.7c-32.9,24.3-80.7,37.2-121.8,37.2c-57.6,0-109.5-21.3-148.7-56.7c-3.1-2.8-0.3-6.6,3.4-4.4
          c42.4,24.6,94.7,39.5,148.8,39.5c36.5,0,76.6-7.6,113.5-23.2C274.2,133.6,278.9,139.7,273.5,143.7z"/>
        <path d="M287.2,128.1c-4.2-5.4-27.8-2.6-38.5-1.3c-3.2,0.4-3.7-2.4-0.8-4.5c18.8-13.2,49.7-9.4,53.3-5
          c3.6,4.5-1,35.4-18.6,50.2c-2.7,2.3-5.3,1.1-4.1-1.9C282.5,155.7,291.4,133.4,287.2,128.1z"/>
      </g>
    </svg>
  );
};

export const KubernetesLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="-105.4269 -170.4915 913.6998 1022.949"
      fill="currentColor"
    >
      <path d="M348.987.06a46.725 46.342 0 00-17.907 4.531L86.737 121.341a46.725 46.342 0 00-25.282 31.438l-60.28 262.25a46.725 46.342 0 006.343 35.531 46.725 46.342 0 002.656 3.688L179.3 664.528a46.725 46.342 0 0036.531 17.438l271.22-.062a46.725 46.342 0 0036.53-17.406l169.063-210.313a46.725 46.342 0 009.031-39.219L641.3 152.716a46.725 46.342 0 00-25.281-31.437L371.643 4.59A46.725 46.342 0 00348.987.06z" fill="#326ce5"/>
      <path d="M351.408 89.307c-8.077.001-14.626 7.276-14.625 16.25 0 .138.028.27.031.406-.012 1.22-.07 2.689-.031 3.75.192 5.176 1.32 9.138 2 13.907 1.23 10.206 2.26 18.667 1.625 26.531-.619 2.965-2.803 5.677-4.75 7.562l-.344 6.188a190.337 190.337 0 00-26.437 4.062c-37.975 8.623-70.67 28.184-95.563 54.594a245.167 245.167 0 01-5.281-3.75c-2.611.353-5.25 1.159-8.688-.844-6.545-4.405-12.506-10.486-19.719-17.812-3.305-3.504-5.698-6.841-9.625-10.219-.891-.767-2.252-1.804-3.25-2.594-3.07-2.447-6.69-3.724-10.187-3.843-4.496-.154-8.824 1.604-11.656 5.156-5.036 6.315-3.423 15.968 3.593 21.562.072.057.147.101.22.157.963.781 2.144 1.783 3.03 2.437 4.167 3.077 7.974 4.652 12.125 7.094 8.747 5.402 15.999 9.88 21.75 15.281 2.246 2.394 2.639 6.613 2.938 8.438l4.687 4.187c-25.093 37.764-36.706 84.41-29.843 131.938l-6.125 1.781c-1.615 2.085-3.896 5.365-6.282 6.344-7.525 2.37-15.994 3.24-26.218 4.312-4.8.4-8.942.161-14.032 1.125-1.12.212-2.68.619-3.906.906l-.125.032c-.067.015-.154.048-.219.062-8.62 2.083-14.157 10.006-12.375 17.813 1.784 7.808 10.204 12.556 18.875 10.687.063-.014.154-.017.22-.031.097-.022.183-.07.28-.094 1.21-.265 2.724-.56 3.782-.843 5.003-1.34 8.627-3.308 13.125-5.032 9.677-3.47 17.691-6.37 25.5-7.5 3.26-.255 6.697 2.012 8.406 2.969l6.375-1.094c14.67 45.483 45.414 82.245 84.344 105.313l-2.657 6.375c.958 2.475 2.014 5.824 1.3 8.27-2.838 7.36-7.7 15.13-13.237 23.792-2.68 4.002-5.425 7.108-7.844 11.688-.579 1.096-1.316 2.78-1.875 3.937-3.759 8.043-1.001 17.305 6.219 20.782 7.266 3.497 16.284-.192 20.187-8.25.006-.012.026-.02.032-.032.004-.009-.004-.022 0-.03.556-1.143 1.343-2.645 1.812-3.72 2.072-4.747 2.762-8.815 4.219-13.406 3.87-9.72 5.996-19.919 11.322-26.274 1.46-1.74 3.837-2.41 6.303-3.07l3.312-6c33.939 13.027 71.927 16.523 109.875 7.907a189.77 189.77 0 0025.094-7.563c.931 1.651 2.661 4.826 3.125 5.625 2.506.815 5.24 1.236 7.469 4.531 3.985 6.81 6.71 14.865 10.031 24.594 1.458 4.591 2.178 8.66 4.25 13.406.472 1.082 1.256 2.605 1.813 3.75 3.894 8.085 12.942 11.787 20.218 8.282 7.22-3.478 9.98-12.74 6.22-20.782-.56-1.158-1.328-2.841-1.907-3.937-2.42-4.58-5.163-7.655-7.844-11.656-5.537-8.662-10.13-15.858-12.969-23.22-1.187-3.796.2-6.157 1.125-8.624-.553-.635-1.738-4.22-2.437-5.906 40.457-23.889 70.298-62.022 84.312-106.063 1.893.298 5.182.88 6.25 1.094 2.2-1.45 4.222-3.344 8.188-3.031 7.808 1.129 15.823 4.03 25.5 7.5 4.498 1.723 8.122 3.723 13.125 5.062 1.057.283 2.572.547 3.781.813.097.023.183.071.281.093.066.015.157.017.22.032 8.672 1.866 17.093-2.88 18.874-10.688 1.78-7.807-3.754-15.732-12.375-17.812-1.254-.286-3.032-.77-4.25-1-5.089-.964-9.23-.727-14.031-1.125-10.225-1.072-18.694-1.943-26.219-4.313-3.068-1.19-5.25-4.841-6.312-6.344l-5.907-1.718c3.063-22.155 2.237-45.212-3.062-68.282-5.349-23.284-14.8-44.58-27.406-63.343 1.515-1.378 4.376-3.911 5.187-4.657.237-2.624.034-5.375 2.75-8.281 5.751-5.4 13.003-9.879 21.75-15.281 4.152-2.443 7.99-4.017 12.156-7.094.943-.696 2.23-1.798 3.22-2.594 7.014-5.596 8.63-15.248 3.593-21.562-5.037-6.314-14.797-6.91-21.813-1.313-.998.791-2.353 1.823-3.25 2.594-3.926 3.378-6.351 6.714-9.656 10.219-7.212 7.326-13.174 13.438-19.719 17.844-2.836 1.65-6.99 1.08-8.875.968l-5.562 3.969c-31.719-33.26-74.905-54.525-121.406-58.656-.13-1.949-.3-5.471-.344-6.532-1.904-1.821-4.203-3.376-4.781-7.312-.636-7.864.426-16.325 1.656-26.531.68-4.769 1.807-8.73 2-13.907.044-1.176-.026-2.884-.031-4.156-.001-8.974-6.548-16.25-14.625-16.25zm-18.313 113.438l-4.343 76.718-.313.157c-.291 6.863-5.94 12.343-12.875 12.343-2.84 0-5.463-.912-7.594-2.468l-.125.062-62.906-44.594c19.334-19.01 44.063-33.06 72.563-39.53a154.125 154.125 0 0115.593-2.688zm36.657 0c33.273 4.092 64.045 19.159 87.625 42.25l-62.5 44.312-.22-.093c-5.547 4.051-13.363 3.046-17.687-2.375a12.807 12.807 0 01-2.812-7.47l-.063-.03zM222.127 273.62l57.437 51.375-.062.312c5.184 4.507 5.948 12.328 1.625 17.75a12.892 12.892 0 01-6.688 4.406l-.062.25-73.625 21.25c-3.748-34.265 4.328-67.573 21.375-95.343zm258.156.03c8.534 13.833 14.996 29.283 18.844 46.032 3.8 16.548 4.754 33.067 3.187 49.031l-74-21.312-.062-.313c-6.627-1.81-10.7-8.551-9.157-15.312a12.786 12.786 0 014.094-6.844l-.031-.156 57.125-51.125zm-140.656 55.313h23.53l14.626 18.282-5.25 22.812-21.125 10.156-21.188-10.187-5.25-22.813zm75.437 62.563c1-.05 1.996.04 2.969.219l.125-.157 76.156 12.875c-11.145 31.314-32.473 58.44-60.969 76.594l-29.562-71.406.093-.125c-2.715-6.31.002-13.71 6.25-16.719 1.6-.77 3.271-1.197 4.938-1.281zm-127.906.312c5.811.082 11.024 4.116 12.375 10.032.632 2.77.324 5.513-.719 7.937l.219.281-29.25 70.688c-27.347-17.549-49.13-43.824-60.781-76.063l75.5-12.812.125.156c.844-.155 1.7-.23 2.53-.219zm63.781 30.97a12.764 12.764 0 016.031 1.28c2.56 1.233 4.537 3.174 5.782 5.5h.28l37.22 67.25a154.256 154.256 0 01-14.875 4.157c-28.465 6.463-56.84 4.504-82.532-4.25l37.125-67.125h.063a12.91 12.91 0 0110.906-6.813z" fill="#fff"/>
    </svg>
  );
};

export const DockerLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 1024 1024"
      fill="currentColor"
    >
      <circle cx="512" cy="512" r="512" fill="#0091e2"/>
      <path d="M827.3 461.5c-1.6-1.3-16.1-12.2-46.7-12.2-8.1 0-16.2.6-24.2 2.1-5.9-40.7-39.5-60.5-41-61.4l-8.2-4.8-5.4 7.8c-6.8 10.5-11.7 22-14.6 34.2-5.5 23.2-2.2 45 9.6 63.6-14.2 7.9-37.1 9.9-41.7 10H277c-9.9 0-17.9 8-17.9 17.9-.4 33.1 5.2 66 16.5 97.1 13 34.2 32.4 59.3 57.6 74.7 28.2 17.3 74.1 27.2 126.2 27.2 23.5.1 47-2.1 70.1-6.4 32.1-5.9 63-17.1 91.4-33.2 23.4-13.6 44.5-30.8 62.4-51.1 29.9-33.9 47.8-71.7 61.1-105.2h5.3c32.8 0 53-13.1 64.1-24.1 7.4-7 13.2-15.5 16.9-25l2.3-6.9-5.7-4.3zM312 489.9h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5H312c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.5 2 4.4 4.4 4.4m69.9 0h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5h-50.7c-2.5 0-4.5 2-4.5 4.5v45.1c0 2.5 2 4.4 4.5 4.4m70.8.1h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.4-2-4.4-4.4-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 2 4.3 4.4 4.4m70.1 0h50.7c2.4 0 4.4-2 4.5-4.4v-45.1c0-2.5-2-4.5-4.5-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 1.9 4.4 4.4 4.4m-141-65h50.7c2.4 0 4.4-2 4.4-4.5v-45.1c0-2.4-2-4.4-4.4-4.4h-50.7c-2.5 0-4.4 2-4.5 4.4v45.1c.1 2.5 2.1 4.5 4.5 4.5m70.9 0h50.7c2.4 0 4.4-2 4.4-4.5v-45.1c0-2.4-2-4.4-4.4-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.1c0 2.5 2 4.5 4.4 4.5m70.1 0h50.7c2.5 0 4.4-2 4.5-4.5v-45.1c0-2.5-2-4.4-4.5-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.1c0 2.5 1.9 4.5 4.4 4.5m0-64.9h50.7c2.5 0 4.5-2 4.5-4.5v-45.2c0-2.4-2-4.4-4.5-4.4h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.5 1.9 4.5 4.4 4.5M593.4 490h50.7c2.4 0 4.4-2 4.4-4.4v-45.1c0-2.5-2-4.4-4.4-4.5h-50.7c-2.4 0-4.4 2-4.4 4.4v45.2c0 2.4 2 4.4 4.4 4.4" fill="#fff"/>
    </svg>
  );
};

export const PythonLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
    </svg>
  );
};

export const ReactLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.990-1.36-1.56z"/>
    </svg>
  );
};

export const PostgreSQLLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M23.111 5.866c-.72-.662-1.907-.662-3.091-.078-.725.357-1.49.904-2.187 1.567-.697.662-1.318 1.412-1.793 2.24-.442.772-.749 1.618-.796 2.495-.047.877.135 1.795.654 2.598.519.803 1.374 1.491 2.375 1.888.725.286 1.508.357 2.267.252.759-.105 1.493-.395 2.093-.843.6-.448 1.065-1.055 1.287-1.738.221-.683.199-1.444-.126-2.132-.324-.688-.907-1.305-1.683-1.673-.776-.368-1.745-.487-2.674-.253.93-.28 1.897-.373 2.825-.155.927.218 1.815.738 2.478 1.463.663.725 1.099 1.656 1.204 2.616.105.96-.085 1.949-.547 2.794-.462.845-1.195 1.546-2.091 1.922-.896.375-1.954.426-2.946.069-.992-.357-1.918-1.1-2.607-2.011-.689-.911-1.141-2.069-1.232-3.245-.091-1.176.134-2.371.627-3.463.494-1.092 1.247-2.083 2.17-2.894.923-.811 2.016-1.443 3.135-1.808 1.119-.365 2.264-.463 3.384-.215 1.12.248 2.215.806 3.11 1.592.895.787 1.59 1.804 1.96 2.904.37 1.1.414 2.283.018 3.399-.396 1.116-1.288 2.164-2.489 2.909-1.201.745-2.712 1.186-4.212 1.179-1.5-.007-2.99-.464-4.246-1.241-1.256-.777-2.28-1.874-2.914-3.108-.635-1.234-.881-2.607-.632-3.958.249-1.351.895-2.68 1.873-3.77.978-1.09 2.289-1.941 3.692-2.367 1.403-.426 2.898-.427 4.301.001 1.403.428 2.706 1.281 3.683 2.373.977 1.092 1.627 2.421 1.88 3.773.253 1.352.009 2.726-.634 3.962-.643 1.236-1.666 2.334-2.921 3.112-1.255.778-2.743 1.236-4.241 1.243-1.498.007-3.007-.433-4.207-1.177-1.2-.744-2.092-1.79-2.489-2.905-.397-1.115-.354-2.296.015-3.395.369-1.099 1.063-2.115 1.957-2.901.894-.786 1.988-1.343 3.107-1.591 1.119-.248 2.263-.15 3.381.214 1.118.364 2.211.996 3.133 1.806.922.81 1.674 1.8 2.168 2.891.494 1.091.718 2.285.628 3.46-.09 1.175-.542 2.332-1.23 3.242-.688.91-1.613 1.652-2.604 2.009-.991.357-2.048.306-2.943-.069-.895-.375-1.627-1.075-2.089-1.919-.462-.844-.653-1.832-.548-2.791.105-.959.54-1.889 1.202-2.614.662-.725 1.549-1.244 2.476-1.462.927-.218 1.893-.125 2.823.155-.928-.234-1.897-.115-2.672.253-.775.368-1.358.985-1.682 1.673-.324.688-.346 1.449-.125 2.132.221.683.686 1.29 1.286 1.738.6.448 1.333.738 2.092.843.759.105 1.541.034 2.266-.252 1-.397 1.855-1.085 2.374-1.888.519-.803.701-1.721.654-2.598-.047-.877-.354-1.723-.796-2.495-.442-.772-1.063-1.522-1.76-2.184-.697-.663-1.462-1.21-2.187-1.567-1.184-.584-2.371-.584-3.091.078z"/>
    </svg>
  );
};

export const SkeletonThree = () => {
  return (
    <VectorizedDatasetCard />
  );
};

export const SkeletonTwo = () => {
  const firstRowImages = [
    "/images/features/ai-capture/sample-1.jpg",
    "/images/features/ai-capture/sample-2.jpg",
    "/images/features/ai-capture/sample-3.jpg",
    "/images/features/ai-capture/sample-4.jpg",
    "/images/features/ai-capture/sample-5.jpg",
  ];

  const secondRowImages = [
    "/images/features/ai-capture/sample-6.jpg",
    "/images/features/ai-capture/sample-7.jpg",
    "/images/features/ai-capture/sample-8.jpg",
    "/images/features/ai-capture/sample-9.jpg",
    "/images/features/ai-capture/sample-10.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {firstRowImages.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {secondRowImages.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const SkeletonFive = () => {
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      {/* Subtle background that matches website theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/5 via-transparent to-neutral-100/5 dark:from-neutral-900/20 dark:via-transparent dark:to-neutral-800/10" />
      
      {/* Optimized starfield - reduced count and simplified animations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-neutral-400/40 dark:bg-neutral-500/60 rounded-full"
            style={{
              top: `${20 + i * 10}%`,
              left: `${15 + i * 8}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Central satellite system - optimized with reduced animations */}
      <div className="relative scale-150 -mt-20">
        {/* Earth - optimized rotation */}
        <motion.div
          className="relative w-32 h-32 rounded-full bg-gradient-to-br from-neutral-600 via-neutral-700 to-neutral-800 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
        >
          {/* Subtle glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-500/15 to-transparent blur-sm" />
          
          {/* Continental patterns - static for performance */}
          <div className="absolute inset-2 rounded-full overflow-hidden">
            <div className="absolute top-2 left-4 w-8 h-6 bg-neutral-500/60 dark:bg-neutral-600/40 rounded-full transform rotate-12" />
            <div className="absolute top-6 right-2 w-6 h-8 bg-neutral-500/50 dark:bg-neutral-600/30 rounded-full transform -rotate-6" />
            <div className="absolute bottom-2 left-2 w-10 h-4 bg-neutral-500/70 dark:bg-neutral-600/50 rounded-full transform rotate-45" />
          </div>
          
          {/* Coordinate grid - static */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 dark:border-cyan-400/30" />
          <div className="absolute inset-2 rounded-full border border-cyan-500/10 dark:border-cyan-400/20" />
          <div className="absolute inset-4 rounded-full border border-cyan-500/5 dark:border-cyan-400/10" />
        </motion.div>

        {/* WorldView-3 High-Resolution Scanner - optimized */}
        <motion.div
          className="absolute inset-0 w-44 h-44 border border-dashed border-neutral-300/50 dark:border-neutral-600/50 rounded-full"
          style={{ left: '-24px', top: '-24px' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {/* Simplified Satellite Body - removed complex box-shadow animations */}
          <div
            className="absolute"
            style={{ top: '-4px', left: '50%', marginLeft: '-8px' }}
          >
            {/* Main Satellite Body */}
            <div className="w-4 h-3 bg-gradient-to-br from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-700 rounded-sm border border-slate-500/30" />
            
            {/* Solar Panels */}
            <div className="absolute -left-5 top-1/2 w-4 h-1.5 bg-gradient-to-r from-blue-500/60 to-blue-600/60 dark:from-blue-400/60 dark:to-blue-500/60 rounded-sm transform -translate-y-1/2 border border-blue-600/20" />
            <div className="absolute -right-5 top-1/2 w-4 h-1.5 bg-gradient-to-l from-blue-500/60 to-blue-600/60 dark:from-blue-400/60 dark:to-blue-500/60 rounded-sm transform -translate-y-1/2 border border-blue-600/20" />
            
            {/* High-Resolution Camera */}
            <div className="absolute -bottom-0.5 left-1/2 w-2 h-1 bg-gradient-to-br from-cyan-500/70 to-cyan-600/70 dark:from-cyan-400/70 dark:to-cyan-500/70 rounded-sm transform -translate-x-1/2 border border-cyan-600/30" />
            
            {/* Communication Dish */}
            <div className="absolute -top-0.5 left-1/2 w-1.5 h-0.5 bg-gradient-to-br from-neutral-400/70 to-neutral-500/70 dark:from-neutral-300/70 dark:to-neutral-400/70 rounded-full transform -translate-x-1/2" />
            
            {/* Antenna Array */}
            <div className="absolute top-1/2 -left-0.5 w-px h-2 bg-neutral-500/60 transform -translate-y-1/2" />
            <div className="absolute top-1/2 -right-0.5 w-px h-2 bg-neutral-500/60 transform -translate-y-1/2" />
            
            {/* Simplified Status Lights - reduced animation frequency */}
            <motion.div 
              className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-green-400/80 rounded-full"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-red-400/80 rounded-full"
              animate={{ opacity: [0.6, 0.4, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Simplified scanning cone - reduced complexity */}
          <motion.div
            className="absolute top-4 left-1/2 transform -translate-x-1/2"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scaleY: [1, 1.2, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-px h-8 bg-gradient-to-b from-cyan-400/40 to-transparent" />
            <div className="absolute top-0 left-1/2 w-3 h-8 bg-gradient-to-b from-cyan-400/15 to-transparent transform -translate-x-1/2" />
          </motion.div>
          
          {/* Simplified data collection - reduced count */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-4 left-1/2 w-1 h-1 bg-cyan-300/60 rounded-full transform -translate-x-1/2"
              animate={{ 
                y: [0, 20, 0],
                opacity: [0, 0.7, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: i * 1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* ASTER Thermal Infrared Scanner - optimized */}
        <motion.div
          className="absolute inset-0 w-56 h-56 border border-dashed border-neutral-300/40 dark:border-neutral-600/40 rounded-full"
          style={{ left: '-40px', top: '-40px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {/* Simplified Thermal Satellite */}
          <div
            className="absolute"
            style={{ top: '50%', right: '-10px', marginTop: '-6px' }}
          >
            {/* Main Satellite Body */}
            <div className="w-5 h-3 bg-gradient-to-br from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-700 rounded-sm border border-slate-500/30" />
            
            {/* Large Solar Panels */}
            <div className="absolute -left-6 top-1/2 w-5 h-2 bg-gradient-to-r from-blue-500/60 to-blue-600/60 dark:from-blue-400/60 dark:to-blue-500/60 rounded-sm transform -translate-y-1/2 border border-blue-600/20" />
            <div className="absolute -right-6 top-1/2 w-5 h-2 bg-gradient-to-l from-blue-500/60 to-blue-600/60 dark:from-blue-400/60 dark:to-blue-500/60 rounded-sm transform -translate-y-1/2 border border-blue-600/20" />
            
            {/* Thermal Sensor Array */}
            <div className="absolute -top-0.5 left-1/2 w-2.5 h-1 bg-gradient-to-br from-red-500/70 to-orange-500/70 dark:from-red-400/70 dark:to-orange-400/70 rounded-sm transform -translate-x-1/2 border border-red-600/30" />
            
            {/* Secondary Sensors */}
            <div className="absolute -bottom-0.5 left-1/2 w-2 h-0.5 bg-gradient-to-br from-neutral-400/70 to-neutral-500/70 dark:from-neutral-300/70 dark:to-neutral-400/70 rounded-full transform -translate-x-1/2" />
            
            {/* Communication Equipment */}
            <div className="absolute top-1/2 -left-0.5 w-px h-2.5 bg-neutral-500/60 transform -translate-y-1/2" />
            <div className="absolute top-1/2 -right-0.5 w-px h-2.5 bg-neutral-500/60 transform -translate-y-1/2" />
            
            {/* Simplified Status Indicators */}
            <motion.div 
              className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-orange-400/80 rounded-full"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-red-400/80 rounded-full"
              animate={{ opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
          </div>

          {/* Simplified thermal scanning */}
          <motion.div
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scaleX: [1, 1.3, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-6 h-px bg-gradient-to-r from-red-400/50 to-transparent" />
            <div className="absolute top-1/2 left-0 w-6 h-3 bg-gradient-to-r from-red-400/15 to-transparent transform -translate-y-1/2" />
          </motion.div>
          
          {/* Simplified thermal data waves - reduced count */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 right-3 border rounded-full transform -translate-y-1/2"
              style={{
                width: `${4 + i * 2}px`,
                height: `${3 + i * 1}px`,
                borderColor: ['#ef4444', '#f97316'][i] + '30'
              }}
              animate={{ 
                scale: [0.8, 1.5, 0.8],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                delay: i * 1.5
              }}
            />
          ))}
        </motion.div>

        {/* Landsat Multispectral Imager - optimized */}
        <motion.div
          className="absolute inset-0 w-68 h-68 border border-dashed border-neutral-300/30 dark:border-neutral-600/30 rounded-full"
          style={{ left: '-56px', top: '-56px' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Simplified Multispectral Satellite */}
          <div
            className="absolute"
            style={{ bottom: '-8px', left: '50%', marginLeft: '-12px' }}
          >
            {/* Main Satellite Body */}
            <div className="w-6 h-4 bg-gradient-to-br from-slate-400 to-slate-600 dark:from-slate-500 dark:to-slate-700 rounded-sm border border-slate-500/30" />
            
            {/* Large Solar Arrays */}
            <div className="absolute -left-7 top-1/2 w-6 h-2.5 bg-gradient-to-r from-blue-500/60 to-blue-600/60 dark:from-blue-400/60 dark:to-blue-500/60 rounded-sm transform -translate-y-1/2 border border-blue-600/20" />
            <div className="absolute -right-7 top-1/2 w-6 h-2.5 bg-gradient-to-l from-blue-500/60 to-blue-600/60 dark:from-blue-400/60 dark:to-blue-500/60 rounded-sm transform -translate-y-1/2 border border-blue-600/20" />
            
            {/* Multispectral Sensor Suite */}
            <div className="absolute -top-0.5 left-1/2 w-3.5 h-1.5 bg-gradient-to-br from-purple-500/70 to-indigo-500/70 dark:from-purple-400/70 dark:to-indigo-400/70 rounded-sm transform -translate-x-1/2 border border-purple-600/30" />
            
            {/* Secondary Sensors */}
            <div className="absolute -bottom-0.5 left-1/2 w-2.5 h-0.5 bg-gradient-to-br from-neutral-400/70 to-neutral-500/70 dark:from-neutral-300/70 dark:to-neutral-400/70 rounded-full transform -translate-x-1/2" />
            
            {/* Spectral Analysis Equipment */}
            <div className="absolute top-1/2 -left-0.5 w-0.5 h-2 bg-gradient-to-b from-green-500/70 to-blue-500/70 dark:from-green-400/70 dark:to-blue-400/70 rounded-sm transform -translate-y-1/2" />
            <div className="absolute top-1/2 -right-0.5 w-0.5 h-2 bg-gradient-to-b from-red-500/70 to-yellow-500/70 dark:from-red-400/70 dark:to-yellow-400/70 rounded-sm transform -translate-y-1/2" />
            
            {/* Communication Arrays */}
            <div className="absolute top-1/2 -left-1 w-px h-3 bg-neutral-500/60 transform -translate-y-1/2" />
            <div className="absolute top-1/2 -right-1 w-px h-3 bg-neutral-500/60 transform -translate-y-1/2" />
            
            {/* Simplified Spectral Status Indicators */}
            <motion.div 
              className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-purple-400/80 rounded-full"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-indigo-400/80 rounded-full"
              animate={{ opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Simplified multispectral scanning */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scaleY: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-px h-8 bg-gradient-to-t from-purple-400/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 w-3 h-8 bg-gradient-to-t from-purple-400/15 to-transparent transform -translate-x-1/2" />
          </motion.div>
          
          {/* Simplified spectral band analysis - reduced count */}
          {['#ef4444', '#22c55e', '#8b5cf6'].map((color, i) => (
            <motion.div 
              key={i} 
              className="absolute h-px rounded-full" 
              style={{ 
                backgroundColor: color + '40',
                top: `${i * 2}px`, 
                left: '-6px',
                width: '12px'
              }}
              animate={{
                width: ['10px', '14px', '10px'],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
          
          {/* Simplified data packets - reduced count */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-4 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2"
              style={{ 
                backgroundColor: ['#ef4444', '#8b5cf6'][i] + '70'
              }}
              animate={{ 
                y: [0, 20, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Simplified data collection points on Earth */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Mineral detection points - simplified animations */}
          <motion.div 
            className="w-1.5 h-1.5 bg-cyan-500/70 dark:bg-cyan-400/80 rounded-full absolute top-3 left-4"
            animate={{ 
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-cyan-500/70 dark:bg-cyan-400/80 rounded-full absolute bottom-3 right-3"
            animate={{ 
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-cyan-500/70 dark:bg-cyan-400/80 rounded-full absolute top-6 right-6"
            animate={{ 
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
          />
          
          {/* Simplified data transmission lines */}
          <motion.div
            className="absolute top-3 left-4 w-px h-6 bg-cyan-400/40 transform rotate-45"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-3 right-3 w-px h-4 bg-cyan-400/40 transform -rotate-45"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          />
        </div>
        
        {/* Simplified data fusion visualization */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            opacity: [0, 0.3, 0],
            scale: [0.9, 1.2, 0.9]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <div className="w-6 h-6 rounded-full border border-cyan-400/20 dark:border-cyan-300/30" />
          <div className="absolute inset-1 rounded-full border border-cyan-400/15 dark:border-cyan-300/20" />
        </motion.div>
      </div>
    </div>
  );
};

export const SkeletonSix = () => {
  const [activeLayer, setActiveLayer] = React.useState("geological");
  const [selectedBlock, setSelectedBlock] = React.useState("KZ-1047");
  
  const metrics = [
    { label: "Рудопроявления", value: "20 175", color: "from-yellow-400 to-orange-500", icon: "⛏️" },
    { label: "Обработано отчетов", value: "1 330", color: "from-green-400 to-emerald-500", icon: "📊" },
    { label: "Покрытие отчетов ГДП200", value: "70", color: "from-blue-400 to-cyan-500", icon: "📋" }
  ];

  const layers = [
    { id: "geological", name: "Геологический", active: true },
    { id: "magnetic", name: "Магнитный", active: false },
    { id: "thermal", name: "Тепловой", active: true },
    { id: "structural", name: "Структурный", active: false }
  ];

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg overflow-hidden min-h-64">
      {/* Map Background with Grid */}
      <div className="absolute inset-0 opacity-40">
        <div className="relative w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-30"
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '40px 40px'
               }} />
          
          {/* Geological blocks simulation */}
          <motion.div 
            className="absolute top-1/4 left-1/3 w-20 h-16 bg-green-500/60 rounded-sm"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-16 h-12 bg-red-500/60 rounded-sm"
            animate={{ opacity: [0.6, 0.4, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/4 w-24 h-20 bg-yellow-500/60 rounded-sm"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </div>
      </div>

      {/* Top Metrics Dashboard */}
      <div className="absolute top-4 right-4 space-y-2">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-black/70 backdrop-blur-sm rounded-lg p-3 min-w-48"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-neutral-400 mb-1">{metric.label}</div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
              </div>
              <div className="text-2xl opacity-60">{metric.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Layer Controls */}
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
        <div className="text-sm text-white mb-3 font-medium">Активные слои</div>
        <div className="space-y-2">
          {layers.map((layer) => (
            <motion.div
              key={layer.id}
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveLayer(layer.id)}
            >
              <motion.div
                className={`w-3 h-3 rounded border-2 ${
                  layer.active 
                    ? "bg-cyan-400 border-cyan-400" 
                    : "border-neutral-500"
                }`}
                animate={layer.active ? { boxShadow: "0 0 8px rgba(34, 211, 238, 0.6)" } : {}}
              />
              <span className="text-xs text-neutral-300">{layer.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Analysis Panel */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4">
        <div className="grid grid-cols-3 gap-4">
          {/* Mini Chart */}
          <div className="col-span-1">
            <div className="text-xs text-neutral-400 mb-2">Распределение минералов</div>
            <div className="flex items-end space-x-1 h-16">
              {[65, 85, 45, 75, 55, 90, 70].map((height, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-t from-cyan-500 to-blue-400 w-2 rounded-t"
                  style={{ height: `${height}%` }}
                  animate={{ height: [`${height * 0.3}%`, `${height}%`] }}
                  transition={{ delay: i * 0.1, duration: 1.5 }}
                />
              ))}
            </div>
          </div>

          {/* Block Details */}
          <div className="col-span-1">
            <div className="text-xs text-neutral-400 mb-2">Выбранный блок: {selectedBlock}</div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300">Глубина:</span>
                <span className="text-cyan-400">200-450м</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300">Уверенность:</span>
                <span className="text-green-400">90%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300">Минералы:</span>
                <span className="text-yellow-400">Cu + Au</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="col-span-1 flex flex-col space-y-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs px-3 py-2 rounded font-medium"
            >
              Создать отчет
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-2 rounded font-medium"
            >
              3D Визуализация
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scanning Animation Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ 
          background: [
            "linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)",
            "linear-gradient(90deg, transparent 100%, rgba(6, 182, 212, 0.1) 150%, transparent 200%)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Crosshair cursor simulation */}
      <motion.div
        className="absolute w-4 h-4 border border-cyan-400/60 pointer-events-none"
        animate={{
          top: ["25%", "75%", "40%", "60%"],
          left: ["30%", "70%", "50%", "35%"]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 border-l border-t border-cyan-400/60" />
        <div className="absolute inset-0 border-r border-b border-cyan-400/60" />
      </motion.div>
    </div>
  );
};

export const SkeletonLightningFast = () => {
  return (
    <div className="relative h-full w-full bg-white dark:bg-neutral-900 rounded-lg overflow-hidden min-h-64 border border-neutral-200 dark:border-neutral-800">
      {/* Chart Area - Full Width */}
      <div className="relative w-full h-full p-6">
        {/* Chart Window Controls */}
        <div className="absolute left-4 top-4 flex gap-1.5 z-10">
          <span className="block w-3 h-3 rounded-full bg-red-500/60"></span>
          <span className="block w-3 h-3 rounded-full bg-yellow-500/60"></span>
          <span className="block w-3 h-3 rounded-full bg-green-500/60"></span>
        </div>

        {/* Chart Content - Professional Green Style */}
        <div className="mt-8 h-full flex items-end px-4">
          <svg className="w-full h-4/5" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background grid */}
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
              <linearGradient id="green_gradient" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="0.5" stopColor="#10b981" stopOpacity="0.15" />
                <stop offset="1" stopColor="#10b981" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            
            {/* Grid background */}
            <rect width="500" height="200" fill="url(#grid)" />
            
            {/* Area chart with smooth curve */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 200V180L25 170L50 160L75 140L100 120L125 100L150 80L175 60L200 45L225 35L250 25L275 20L300 15L325 12L350 10L375 8L400 6L425 5L450 4L475 3L500 2V200H0Z"
              fill="url(#green_gradient)"
            />
            
            {/* Main line */}
            <path
              d="M0 180L25 170L50 160L75 140L100 120L125 100L150 80L175 60L200 45L225 35L250 25L275 20L300 15L325 12L350 10L375 8L400 6L425 5L450 4L475 3L500 2"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Data points */}
            <circle cx="100" cy="120" r="4" fill="#10b981" />
            <circle cx="200" cy="45" r="4" fill="#10b981" />
            <circle cx="300" cy="15" r="4" fill="#10b981" />
            <circle cx="400" cy="6" r="4" fill="#10b981" />
            <circle cx="500" cy="2" r="4" fill="#10b981" />
          </svg>
        </div>
        
        {/* Scoring metrics - Above graph */}
        <div className="absolute top-8 left-6 text-left">
          <div className="text-3xl font-bold text-emerald-400">↗ 94.2%</div>
          <div className="text-sm text-gray-400">Точность</div>
        </div>
        
        <div className="absolute top-20 right-6 text-right">
          <div className="text-xl font-semibold text-emerald-400">847</div>
          <div className="text-xs text-gray-400">Блоков проанализировано</div>
        </div>

        {/* Simple grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="h-full w-full" 
               style={{
                 backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                 backgroundSize: '30px 30px'
               }} />
        </div>
      </div>
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};