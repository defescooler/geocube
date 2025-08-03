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
  Activity
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
    anomalyType: 'Hydrothermal',
    source: 'ASTER + Reports',
    depth: '200–450m',
    mineralClass: 'Cu + Au',
    certainty: '82%'
  },
  {
    blockId: 'KZ-1047',
    anomalyType: 'Magnetic',
    source: 'Landsat-9 + ML',
    depth: '100–300m',
    mineralClass: 'Ni + Co',
    certainty: '90%'
  },
  {
    blockId: 'KZ-0075',
    anomalyType: 'Radiometric',
    source: 'WV-3 + Legacy',
    depth: '50–160m',
    mineralClass: 'U, Th',
    certainty: '76%'
  },
  {
    blockId: 'KZ-2231',
    anomalyType: 'Structural',
    source: 'Vectorized',
    depth: '300–700m',
    mineralClass: 'Mo, REE',
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
                    Block ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider border-r border-white dark:border-white">
                    Anomaly Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider border-r border-white dark:border-white">
                    Source
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider border-r border-white dark:border-white">
                    <div className="flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      Depth
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                    Mineral Class
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
      title: "1300+ Soviet-Era Reports, Reborn as Digital Intelligence",
      description:
        "GeoCube ingests and vectorizes historic geology — borehole logs, field sketches, seismic charts — dating back to 1954. What was once trapped in paper is now searchable, analyzable, and mappable. We don't just preserve the past — we weaponize it for modern discovery.",
      skeleton: <SkeletonTwo />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "From 700km Above to 700m Below — in Perfect Sync",
      description:
        "GeoCube fuses ultra-high-res imagery from WorldView-3, ASTER, Landsat, and Sentinel with real-world field data. Every pixel is georeferenced to WGS 84, delivering sub-meter accuracy in mapping topography and spectral anomalies. The result: satellite data that actually works in the field.",
      skeleton: <SkeletonFive />,
      className: "col-span-1 lg:col-span-3 border-b dark:border-neutral-800",
    },
    // Row 2
    {
      title: "Kazakhstan's Subsurface, Real-Time and Reclassed",
      description:
        "We process anomalies and geological signals across 1300+ blocks — classifying by anomaly type, depth, and mineral group. With real-time detection and grid-based insights, this is a live intelligence layer for national-scale mineral exploration.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Built in Kazakhstan. Engineered for the World.",
      description:
        "GeoCube's framework is dataset-agnostic and globally scalable. From South America's lithium triangle to Australia's gold belts, our platform adapts to national archives and satellite feeds — enabling countries to unlock the full value of their subsurface assets.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b dark:border-neutral-800",
    },
    // Row 3
    {
      title: "AI-Powered Geological Intelligence at Scale",
      description:
        "Machine learning algorithms trained on 70+ years of Soviet-era geological surveys automatically classify mineral signatures, predict exploration targets, and rank blocks by commercial viability — turning decades of field experience into algorithmic precision.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Mapping & Block Ranking Engine",
      description:
        "Divides land into blocks for resource potential scoring. Applies a custom block-ranking algorithm based on vectors, AI, and economic factors. Supports strategic land selection and claim decisions.",
      skeleton: <SkeletonLightningFast />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none dark:border-neutral-800",
    },
  ];
  return (
    <div id="features" className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Every Layer Tells a Story
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        GeoCube transforms fragmented geological inputs into a unified, high-precision system — combining legacy data, satellite analytics, 
        and AI-driven modeling. Each feature is engineered to reduce risk, compress timelines, and uncover what others overlook.

        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 border border-neutral-200/50 dark:border-neutral-800/50 rounded-xl overflow-hidden bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm">
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
        "text-neutral-600 dark:text-neutral-300 font-normal mb-6",
        "text-outline"
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
          <OpenAILogo className="h-10 w-10 dark:text-white" />
        </Container>
        <Container className="h-20 w-20 circle-2">
          <AWSLogo className="h-12 w-12 dark:text-white" />
        </Container>
        <Container className="h-24 w-24 circle-3">
          <ArcGISLogo className="h-14 w-14 dark:text-white" />
        </Container>
        <Container className="h-20 w-20 circle-4">
          <TensorFlowLogo className="h-12 w-12" />
        </Container>
        <Container className="h-16 w-16 circle-5">
          <DockerLogo className="h-10 w-10" />
        </Container>
        <Container className="h-20 w-20 circle-6">
          <PythonLogo className="h-12 w-12" />
        </Container>
        <Container className="h-16 w-16 circle-7">
          <ReactLogo className="h-10 w-10" />
        </Container>
        <Container className="h-20 w-20 circle-8">
          <PostgreSQLLogo className="h-12 w-12" />
        </Container>
      </div>


    </div>
  );
};

const Sparkles = () => {
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

export const AWSLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M6.54 14.72c-1.07 0-1.93-.87-1.93-1.94s.86-1.94 1.93-1.94 1.93.87 1.93 1.94-.86 1.94-1.93 1.94zm0-3.32c-.76 0-1.37.62-1.37 1.38s.61 1.38 1.37 1.38 1.37-.62 1.37-1.38-.61-1.38-1.37-1.38zm4.42 3.32c-1.07 0-1.93-.87-1.93-1.94s.86-1.94 1.93-1.94 1.93.87 1.93 1.94-.86 1.94-1.93 1.94zm0-3.32c-.76 0-1.37.62-1.37 1.38s.61 1.38 1.37 1.38 1.37-.62 1.37-1.38-.61-1.38-1.37-1.38zm4.42 3.32c-1.07 0-1.93-.87-1.93-1.94s.86-1.94 1.93-1.94 1.93.87 1.93 1.94-.86 1.94-1.93 1.94zm0-3.32c-.76 0-1.37.62-1.37 1.38s.61 1.38 1.37 1.38 1.37-.62 1.37-1.38-.61-1.38-1.37-1.38zM3.17 18.05c2.8 2.07 6.68 3.17 10.08 3.17 4.77 0 9.07-1.76 12.33-4.68.32-.29.03-.69-.36-.46-4.04 2.35-9.03 3.77-14.18 3.77-3.47 0-7.27-.72-10.77-2.21-.43-.18-.89.28-.5.63l.4.78z"/>
      <path d="M22.32 16.75c-.36-.46-2.39-.22-3.3-.11-.28.03-.32-.21-.07-.39 1.61-1.13 4.26-.81 4.57-.43.31.39-.08 3.06-1.61 4.34-.23.19-.45.09-.35-.16.34-.85 1.12-2.78.76-3.25z"/>
    </svg>
  );
};

export const OpenAILogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Zm-10.61 14.71c-1.412 0-2.505-.428-3.46-1.215.043-.023.119-.064.168-.094l5.65-3.22a.911.911 0 0 0 .464-.793v-7.86l2.389 1.36a.087.087 0 0 1 .046.065v6.508c0 2.952-2.491 5.248-5.257 5.248ZM4.062 21.354a5.17 5.17 0 0 1-.635-3.516c.042.025.115.07.168.1l5.65 3.22a.928.928 0 0 0 .928 0l6.898-3.93v2.72a.083.083 0 0 1-.034.072l-5.711 3.255a5.386 5.386 0 0 1-4.035.522 5.315 5.315 0 0 1-3.23-2.443ZM2.573 9.184a5.283 5.283 0 0 1 2.768-2.301V13.515a.895.895 0 0 0 .464.793l6.897 3.93-2.388 1.36a.087.087 0 0 1-.08.008L4.52 16.349a5.262 5.262 0 0 1-2.475-3.185 5.192 5.192 0 0 1 .527-3.98Zm19.623 4.506-6.898-3.93 2.388-1.36a.087.087 0 0 1 .08-.008l5.713 3.255a5.28 5.28 0 0 1 2.054 2.118 5.19 5.19 0 0 1-.488 5.608 5.314 5.314 0 0 1-2.39 1.742v-6.633a.896.896 0 0 0-.459-.792Zm2.377-3.533a7.973 7.973 0 0 0-.168-.099l-5.65-3.22a.93.93 0 0 0-.928 0l-6.898 3.93V8.046a.083.083 0 0 1 .034-.072l5.712-3.251a5.375 5.375 0 0 1 5.698.241 5.262 5.262 0 0 1 1.865 2.28c.39.92.506 1.93.335 2.913ZM9.631 15.009l-2.39-1.36a.083.083 0 0 1-.046-.065V7.075c.001-.997.29-1.973.832-2.814a5.297 5.297 0 0 1 2.231-1.935 5.382 5.382 0 0 1 5.659.72 4.89 4.89 0 0 0-.168.093l-5.65 3.22a.913.913 0 0 0-.465.793l-.003 7.857Zm1.297-2.76L14 10.5l3.072 1.75v3.5L14 17.499l-3.072-1.75v-3.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const GeminiLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"
        fill="url(#prefix__paint0_radial_980_20147)"
      />
      <defs>
        <radialGradient
          id="prefix__paint0_radial_980_20147"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"
        >
          <stop offset=".067" stopColor="#9168C0" />
          <stop offset=".343" stopColor="#5684D1" />
          <stop offset=".672" stopColor="#1BA1E3" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const ArcGISLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.962 0-9-4.037-9-9 0-4.962 4.038-9 9-9s9 4.038 9 9c0 4.963-4.037 9-9 9zm-1-16v2h2V5h-2zm0 4v8h2V9h-2z"/>
    </svg>
  );
};

export const TensorFlowLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.153 3.564v-5.31zm21.416 5.311l-10.248 5.931V24l4.095-2.378V9.603l6.153-3.564v5.128z"/>
    </svg>
  );
};

export const DockerLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186H5.136a.186.186 0 00-.186.186v1.887a.186.186 0 00.186.185M2.118 8.365h2.119a.186.186 0 00.185-.185V6.29a.185.185 0 00-.185-.185H2.118a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.185V6.29a.185.185 0 00-.185-.185H-.001a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186"/>
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
      
      {/* Minimal starfield - more subtle */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-neutral-400/40 dark:bg-neutral-500/60 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Central satellite system - moved up much more to center on card */}
      <div className="relative scale-150 -mt-20">
        {/* Earth - larger and more prominent */}
        <motion.div
          className="relative w-32 h-32 rounded-full bg-gradient-to-br from-neutral-600 via-neutral-700 to-neutral-800 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Subtle glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-500/15 to-transparent blur-sm" />
          
          {/* Continental patterns - more visible */}
          <div className="absolute inset-2 rounded-full overflow-hidden">
            <div className="absolute top-2 left-4 w-8 h-6 bg-neutral-500/60 dark:bg-neutral-600/40 rounded-full transform rotate-12" />
            <div className="absolute top-6 right-2 w-6 h-8 bg-neutral-500/50 dark:bg-neutral-600/30 rounded-full transform -rotate-6" />
            <div className="absolute bottom-2 left-2 w-10 h-4 bg-neutral-500/70 dark:bg-neutral-600/50 rounded-full transform rotate-45" />
          </div>
          
          {/* Coordinate grid - more visible */}
          <div className="absolute inset-0 rounded-full border border-cyan-500/20 dark:border-cyan-400/30" />
          <div className="absolute inset-2 rounded-full border border-cyan-500/10 dark:border-cyan-400/20" />
          <div className="absolute inset-4 rounded-full border border-cyan-500/5 dark:border-cyan-400/10" />
        </motion.div>

        {/* Satellite orbits - enhanced scanning visualization */}
        
        {/* WorldView-3 High-Resolution Scanner */}
        <motion.div
          className="absolute inset-0 w-44 h-44 border border-dashed border-neutral-300/50 dark:border-neutral-600/50 rounded-full"
          style={{ left: '-24px', top: '-24px' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {/* Detailed Satellite Body */}
          <motion.div
            className="absolute"
            style={{ top: '-4px', left: '50%', marginLeft: '-8px' }}
            animate={{ 
              boxShadow: [
                "0 0 4px rgba(6, 182, 212, 0.2)",
                "0 0 8px rgba(6, 182, 212, 0.3)",
                "0 0 4px rgba(6, 182, 212, 0.2)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
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
            
            {/* Status Lights */}
            <motion.div 
              className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-green-400/80 rounded-full"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-red-400/80 rounded-full"
              animate={{ opacity: [0.7, 0.3, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* Enhanced High-resolution scanning cone */}
          <motion.div
            className="absolute top-4 left-1/2 transform -translate-x-1/2"
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scaleY: [1, 1.3, 1],
              scaleX: [0.8, 1.1, 0.8]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-px h-8 bg-gradient-to-b from-cyan-400/40 to-transparent" />
            <div className="absolute top-0 left-1/2 w-4 h-8 bg-gradient-to-b from-cyan-400/10 via-cyan-400/5 to-transparent transform -translate-x-1/2" />
            <div className="absolute top-0 left-1/2 w-2 h-6 bg-gradient-to-b from-cyan-500/20 via-cyan-500/10 to-transparent transform -translate-x-1/2" />
          </motion.div>
          
          {/* Advanced scanning raster pattern */}
          <motion.div
            className="absolute top-4 left-1/2 transform -translate-x-1/2"
            animate={{ 
              opacity: [0, 0.6, 0],
              scaleX: [0.6, 1.3, 0.6]
            }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i} 
                className="absolute h-px bg-cyan-300/30" 
                style={{ 
                  top: `${i * 1.5}px`, 
                  left: '-6px',
                  width: '12px'
                }}
                animate={{ 
                  width: ['8px', '14px', '8px'],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  delay: i * 0.1 
                }}
              />
            ))}
          </motion.div>
          
          {/* Enhanced data collection streams */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-4 left-1/2 w-1 h-1 bg-cyan-300/60 rounded-full transform -translate-x-1/2"
              animate={{ 
                y: [0, 25, 0],
                opacity: [0, 0.8, 0],
                scale: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* ASTER Thermal Infrared Scanner */}
        <motion.div
          className="absolute inset-0 w-56 h-56 border border-dashed border-neutral-300/40 dark:border-neutral-600/40 rounded-full"
          style={{ left: '-40px', top: '-40px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Detailed Thermal Satellite */}
          <motion.div
            className="absolute"
            style={{ top: '50%', right: '-10px', marginTop: '-6px' }}
            animate={{ 
              boxShadow: [
                "0 0 4px rgba(239, 68, 68, 0.2)",
                "0 0 8px rgba(239, 68, 68, 0.3)",
                "0 0 4px rgba(239, 68, 68, 0.2)"
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
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
            
            {/* Thermal Status Indicators */}
            <motion.div 
              className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-orange-400/80 rounded-full"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-red-400/80 rounded-full"
              animate={{ opacity: [0.7, 0.3, 0.7] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </motion.div>

          {/* Enhanced thermal scanning sweep */}
          <motion.div
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scaleX: [1, 1.5, 1],
              scaleY: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-8 h-px bg-gradient-to-r from-red-400/50 to-transparent" />
            <div className="absolute top-1/2 left-0 w-8 h-4 bg-gradient-to-r from-red-400/15 via-orange-400/8 to-transparent transform -translate-y-1/2" />
            <div className="absolute top-1/2 left-0 w-6 h-3 bg-gradient-to-r from-red-500/20 via-red-500/10 to-transparent transform -translate-y-1/2" />
          </motion.div>
          
          {/* Advanced thermal data waves */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 right-3 border rounded-full transform -translate-y-1/2"
              style={{
                width: `${4 + i * 1.5}px`,
                height: `${3 + i * 1}px`,
                borderColor: ['#ef4444', '#f97316', '#eab308'][i] + '30'
              }}
              animate={{ 
                scale: [0.5, 2, 0.5],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 0.5
              }}
            />
          ))}
          
          {/* Enhanced temperature data visualization */}
          <motion.div
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
            animate={{ 
              opacity: [0, 0.7, 0]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          >
            {['#ef4444', '#f97316', '#eab308'].map((color, i) => (
              <motion.div 
                key={i} 
                className="absolute h-px rounded-full" 
                style={{ 
                  backgroundColor: color + '50',
                  top: `${i * 1.5 - 2}px`, 
                  right: '0px',
                  width: '4px'
                }}
                animate={{
                  width: ['2px', '5px', '2px'],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Landsat Multispectral Imager */}
        <motion.div
          className="absolute inset-0 w-68 h-68 border border-dashed border-neutral-300/30 dark:border-neutral-600/30 rounded-full"
          style={{ left: '-56px', top: '-56px' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {/* Detailed Multispectral Satellite */}
          <motion.div
            className="absolute"
            style={{ bottom: '-8px', left: '50%', marginLeft: '-12px' }}
            animate={{ 
              boxShadow: [
                "0 0 4px rgba(139, 92, 246, 0.2)",
                "0 0 8px rgba(139, 92, 246, 0.3)",
                "0 0 4px rgba(139, 92, 246, 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
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
            
            {/* Spectral Status Indicators */}
            <motion.div 
              className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-purple-400/80 rounded-full"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-indigo-400/80 rounded-full"
              animate={{ opacity: [0.7, 0.3, 0.7] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>

          {/* Enhanced multispectral scanning column */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scaleY: [1, 1.3, 1],
              scaleX: [0.6, 1.2, 0.6]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="w-px h-10 bg-gradient-to-t from-purple-400/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 w-5 h-10 bg-gradient-to-t from-purple-400/15 via-purple-400/8 to-transparent transform -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-3 h-8 bg-gradient-to-t from-purple-500/20 via-purple-500/10 to-transparent transform -translate-x-1/2" />
          </motion.div>
          
          {/* Advanced spectral band analysis */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }}
          >
            {['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6'].map((color, i) => (
              <motion.div 
                key={i} 
                className="absolute h-px rounded-full" 
                style={{ 
                  backgroundColor: color + '40',
                  top: `${i * 1.5}px`, 
                  left: '-8px',
                  width: '16px'
                }}
                animate={{
                  width: ['12px', '20px', '12px'],
                  opacity: [0.3, 0.6, 0.3],
                  x: [-2, 2, -2]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.15
                }}
              />
            ))}
          </motion.div>
          
          {/* Enhanced data packets with spectral colors */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-4 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2"
              style={{ 
                backgroundColor: ['#ef4444', '#f97316', '#22c55e', '#8b5cf6'][i] + '70'
              }}
              animate={{ 
                y: [0, 30, 0],
                opacity: [0, 0.9, 0],
                scale: [0.2, 1, 0.2]
              }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity, 
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Enhanced data collection points on Earth */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {/* Mineral detection points */}
          <motion.div 
            className="w-1.5 h-1.5 bg-cyan-500/70 dark:bg-cyan-400/80 rounded-full absolute top-3 left-4"
            animate={{ 
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 4px rgba(6, 182, 212, 0.3)",
                "0 0 8px rgba(6, 182, 212, 0.6)",
                "0 0 4px rgba(6, 182, 212, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-cyan-500/70 dark:bg-cyan-400/80 rounded-full absolute bottom-3 right-3"
            animate={{ 
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 4px rgba(6, 182, 212, 0.3)",
                "0 0 8px rgba(6, 182, 212, 0.6)",
                "0 0 4px rgba(6, 182, 212, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="w-1.5 h-1.5 bg-cyan-500/70 dark:bg-cyan-400/80 rounded-full absolute top-6 right-6"
            animate={{ 
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 4px rgba(6, 182, 212, 0.3)",
                "0 0 8px rgba(6, 182, 212, 0.6)",
                "0 0 4px rgba(6, 182, 212, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
          
          {/* Data transmission lines connecting points */}
          <motion.div
            className="absolute top-3 left-4 w-px h-8 bg-cyan-400/40 transform rotate-45"
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
          />
          <motion.div
            className="absolute bottom-3 right-3 w-px h-6 bg-cyan-400/40 transform -rotate-45"
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 2.5 }}
          />
        </motion.div>
        
        {/* Data fusion visualization in center */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-8 h-8 rounded-full border border-cyan-400/20 dark:border-cyan-300/30" />
          <div className="absolute inset-1 rounded-full border border-cyan-400/15 dark:border-cyan-300/20" />
          <div className="absolute inset-2 rounded-full border border-cyan-400/10 dark:border-cyan-300/15" />
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
    { id: "geological", name: "Geological", active: true },
    { id: "magnetic", name: "Magnetic", active: false },
    { id: "thermal", name: "Thermal", active: true },
    { id: "structural", name: "Structural", active: false }
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
        <div className="text-sm text-white mb-3 font-medium">Active Layers</div>
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
            <div className="text-xs text-neutral-400 mb-2">Mineral Distribution</div>
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
            <div className="text-xs text-neutral-400 mb-2">Selected Block: {selectedBlock}</div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300">Depth:</span>
                <span className="text-cyan-400">200-450m</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300">Confidence:</span>
                <span className="text-green-400">90%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300">Minerals:</span>
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
              Generate Report
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-2 rounded font-medium"
            >
              3D Visualization
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

        {/* Chart Content - YC Style */}
        <div className="mt-12 h-full flex items-end">
          <svg className="w-full h-3/4" viewBox="0 0 366 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Clean YC-style path with strong upward trend */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 180V160L8 155L16 150L24 140L32 135L40 125L48 120L56 115L64 105L72 100L80 95L88 85L96 80L104 75L112 65L120 60L128 55L136 45L144 40L152 35L160 30L168 25L176 20L184 15L192 12L200 10L208 8L216 6L224 5L232 4L240 3L248 2.5L256 2L264 1.5L272 1L280 0.8L288 0.6L296 0.4L304 0.3L312 0.2L320 0.15L328 0.1L336 0.08L344 0.06L352 0.04L360 0.02L366 0V180H0Z"
              fill="url(#yc_gradient)"
            />
            <path
              d="M0 160L8 155L16 150L24 140L32 135L40 125L48 120L56 115L64 105L72 100L80 95L88 85L96 80L104 75L112 65L120 60L128 55L136 45L144 40L152 35L160 30L168 25L176 20L184 15L192 12L200 10L208 8L216 6L224 5L232 4L240 3L248 2.5L256 2L264 1.5L272 1L280 0.8L288 0.6L296 0.4L304 0.3L312 0.2L320 0.15L328 0.1L336 0.08L344 0.06L352 0.04L360 0.02L366 0"
              stroke="#ff6600"
              strokeWidth="3"
              fill="none"
            />
            <defs>
              <linearGradient id="yc_gradient" x1="0" y1="0" x2="0" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ff6600" stopOpacity="0.2" />
                <stop offset="1" stopColor="#ff6600" stopOpacity="0.02" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Metrics overlay - YC style */}
        <div className="absolute bottom-6 left-6 text-left">
          <div className="text-3xl font-bold text-neutral-900 dark:text-white">↗ 847%</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">Block ranking accuracy</div>
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