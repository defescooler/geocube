'use client';

import { motion } from 'framer-motion';

const technologies = [
  {
    category: 'Geospatial Intelligence',
    icon: '🗺️',
    description: 'Enterprise-grade mapping and spatial analysis',
    technologies: ['ArcGIS Enterprise', 'PostGIS', 'QGIS', 'WGS 84 Standard'],
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'blue'
  },
  {
    category: 'Machine Learning Engine',
    icon: '🤖',
    description: 'GPU-accelerated pattern recognition and prediction',
    technologies: ['TensorFlow', 'PyTorch', 'CUDA', 'Apache Spark'],
    color: 'from-purple-500 to-pink-500',
    bgGlow: 'purple'
  },
  {
    category: 'Satellite Data Processing',
    icon: '🛰️',
    description: 'Multi-spectral imagery analysis and fusion',
    technologies: ['Landsat-8/9', 'ASTER', 'WorldView-3', 'Sentinel-2'],
    color: 'from-emerald-500 to-teal-500',
    bgGlow: 'emerald'
  },
  {
    category: 'Data Science Platform',
    icon: '📊',
    description: 'Advanced analytics and statistical modeling',
    technologies: ['Python', 'R', 'MATLAB', 'Jupyter Enterprise'],
    color: 'from-amber-500 to-orange-500',
    bgGlow: 'amber'
  },
  {
    category: '3D Visualization',
    icon: '🎮',
    description: 'WebGL-powered voxel rendering and interaction',
    technologies: ['Three.js', 'WebGL', 'OpenGL', 'Cesium'],
    color: 'from-red-500 to-rose-500',
    bgGlow: 'red'
  },
  {
    category: 'Cloud Infrastructure',
    icon: '☁️',
    description: 'Scalable processing and enterprise deployment',
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Redis'],
    color: 'from-indigo-500 to-blue-500',
    bgGlow: 'indigo'
  }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200 mb-6">
            Enterprise-Grade Technology Stack
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Built on proven, industry-standard technologies. No experimental frameworks—
            <span className="text-emerald-400 font-semibold"> just reliable, scalable solutions</span> that handle petabytes of geological data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative p-8 bg-slate-800/60 backdrop-blur-sm border border-slate-700 group-hover:border-slate-600 rounded-2xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                {/* Icon and category */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{tech.category}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-slate-300 mb-3">Core Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {tech.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 text-xs font-medium bg-slate-700/80 text-slate-300 rounded-full border border-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance indicator */}
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span>Production Ready • Enterprise Scale</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl">
            <div className="text-2xl">⚡</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Ready for Enterprise Deployment</h3>
              <p className="text-slate-400 mb-4">
                From proof-of-concept to full-scale operations in weeks, not years.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                View Architecture Docs
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}