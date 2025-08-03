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
                      <span className="text-sm font-medium text-blue-400">
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
      title: "Track issues effectively",
      description:
        "Track and manage your project issues with ease using our intuitive interface.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "New Section 2",
      description:
        "Description for the new section 2",
      skeleton: <div className="h-full w-full bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
        <p className="text-neutral-500 dark:text-neutral-400">New Card 2</p>
      </div>,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none dark:border-neutral-800",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
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
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
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
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <ClaudeLogo className="h-4 w-4 " />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <GoCopilot className="h-6 w-6 dark:text-white" />
        </Container>
        <Container className="circle-3">
          <OpenAILogo className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <MetaIconOutline className="h-6 w-6 " />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <GeminiLogo className="h-4 w-4 " />
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
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const ClaudeLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 512"
      className={className}
    >
      <rect fill="#CC9B7A" width="512" height="512" rx="104.187" ry="105.042" />
      <path
        fill="#1F1F1E"
        fillRule="nonzero"
        d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"
      />
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

export const MetaIconOutline = ({ className }: { className?: string }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 287.56 191"
      className={className}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="62.34"
          y1="101.45"
          x2="260.34"
          y2="91.45"
          gradientTransform="matrix(1, 0, 0, -1, 0, 192)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0064e1" />
          <stop offset="0.4" stopColor="#0064e1" />
          <stop offset="0.83" stopColor="#0073ee" />
          <stop offset="1" stopColor="#0082fb" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="41.42"
          y1="53"
          x2="41.42"
          y2="126"
          gradientTransform="matrix(1, 0, 0, -1, 0, 192)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0082fb" />
          <stop offset="1" stopColor="#0064e0" />
        </linearGradient>
      </defs>
      <path
        fill="#0081fb"
        d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z"
      />
      <path
        fill="url(#linear-gradient)"
        d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z"
      />
      <path
        fill="url(#linear-gradient-2)"
        d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z"
      />
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