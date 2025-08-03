'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const modules = [
  {
    id: 1,
    title: 'Legacy Geological Reports',
    description: '1,300+ Soviet-era archives digitized and vectorized',
    icon: '📚',
    color: 'from-amber-500 to-orange-500',
    position: { x: -200, y: -100 }
  },
  {
    id: 2,
    title: 'Satellite Imagery Integration',
    description: 'Landsat-8/9, ASTER, WorldView-3 data fusion',
    icon: '🛰️',
    color: 'from-blue-500 to-cyan-500',
    position: { x: 200, y: -100 }
  },
  {
    id: 3,
    title: 'ML Pattern Recognition',
    description: 'AI-powered anomaly detection and classification',
    icon: '🧠',
    color: 'from-purple-500 to-pink-500',
    position: { x: -200, y: 100 }
  },
  {
    id: 4,
    title: 'Vectorization Engine',
    description: 'National dataset compilation with WGS 84 precision',
    icon: '⚡',
    color: 'from-emerald-500 to-teal-500',
    position: { x: 200, y: 100 }
  },
  {
    id: 5,
    title: 'Risk Mapping & Ranking',
    description: 'Probability-based site prioritization algorithm',
    icon: '🎯',
    color: 'from-red-500 to-rose-500',
    position: { x: 0, y: -150 }
  },
  {
    id: 6,
    title: 'Enterprise Dashboard',
    description: 'Real-time visualization and decision intelligence',
    icon: '📊',
    color: 'from-indigo-500 to-blue-500',
    position: { x: 0, y: 150 }
  }
];

export default function GeoCubeAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Transform scroll progress into cube assembly phases
  const cubeOpacity = useTransform(scrollYProgress, [0, 0.2], [0.1, 1]);
  const cubeRotateX = useTransform(scrollYProgress, [0.2, 1], [0, 360]);
  const cubeRotateY = useTransform(scrollYProgress, [0.2, 1], [0, 180]);
  const cubeScale = useTransform(scrollYProgress, [0.6, 1], [0.8, 1.2]);

  return (
    <section ref={containerRef} className="min-h-[200vh] bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto px-4">
          
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200 mb-4">
              The GeoCube Assembly
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Six intelligent modules working in harmony to transform raw geological data into precision mineral intelligence
            </p>
          </motion.div>

          {/* Central Cube */}
          <div className="relative flex items-center justify-center h-96">
            <motion.div
              style={{
                opacity: cubeOpacity,
                rotateX: cubeRotateX,
                rotateY: cubeRotateY,
                scale: cubeScale,
              }}
              className="relative w-32 h-32 preserve-3d"
            >
              {/* Cube faces */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 border border-blue-400/30 backdrop-blur-sm transform rotateY-0 translateZ-16" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-sm transform rotateY-90 translateZ-16" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 backdrop-blur-sm transform rotateY-180 translateZ-16" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 backdrop-blur-sm transform rotateY-270 translateZ-16" />
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-rose-500/20 border border-red-400/30 backdrop-blur-sm transform rotateX-90 translateZ-16" />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-400/30 backdrop-blur-sm transform rotateX-270 translateZ-16" />
            </motion.div>

            {/* Module Cards */}
            {modules.map((module, index) => {
              const cardProgress = useTransform(
                scrollYProgress,
                [index * 0.1, (index + 1) * 0.1 + 0.1],
                [0, 1]
              );
              const cardX = useTransform(cardProgress, [0, 1], [module.position.x, 0]);
              const cardY = useTransform(cardProgress, [0, 1], [module.position.y, 0]);
              const cardOpacity = useTransform(cardProgress, [0, 0.5, 1], [0, 0.8, 1]);
              const cardScale = useTransform(cardProgress, [0, 1], [0.8, 1]);

              return (
                <motion.div
                  key={module.id}
                  style={{
                    x: cardX,
                    y: cardY,
                    opacity: cardOpacity,
                    scale: cardScale,
                  }}
                  className="absolute w-80 p-6 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center text-2xl`}>
                      {module.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{module.title}</h3>
                      <p className="text-sm text-slate-400">{module.description}</p>
                    </div>
                  </div>
                  
                  {/* Connection line to cube */}
                  <motion.div
                    style={{ opacity: cardProgress }}
                    className="absolute top-1/2 left-1/2 w-px h-16 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent transform -translate-x-1/2 -translate-y-1/2"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Assembly complete message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            style={{ 
              opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
            }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 font-medium">Assembly Complete • System Online</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}