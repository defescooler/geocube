'use client';

import { motion } from 'framer-motion';

const personas = [
  {
    title: 'Field Geologists',
    subtitle: 'The Data-Driven Explorer',
    icon: '⛏️',
    description: 'Transform field work from educated guesswork into precision science',
    pain: 'Spending months analyzing samples that lead nowhere',
    solution: 'AI-powered target identification reduces field time by 60%',
    features: [
      'Real-time anomaly mapping in the field',
      'Historical site correlation and prediction',
      'Mobile-first data collection integration',
      'Instant geological report synthesis'
    ],
    quote: '"GeoCube turned our hit rate from 15% to 75%. We\'re not just finding more—we\'re finding better."',
    author: 'Senior Exploration Geologist, Kazatomprom',
    color: 'from-amber-500 to-orange-500',
    bgGlow: 'amber'
  },
  {
    title: 'Government Agencies',
    subtitle: 'The Strategic Resource Planner',
    icon: '🏛️',
    description: 'National resource assessment and policy development at unprecedented scale',
    pain: 'Outdated maps and fragmented geological databases',
    solution: 'Unified national geological intelligence platform',
    features: [
      'Complete territorial resource mapping',
      'Strategic metal reserve assessment',
      'Environmental impact modeling',
      'Policy-ready analytical reports'
    ],
    quote: '"GeoCube provides the comprehensive view we need for long-term resource strategy."',
    author: 'Director, Ministry of Geology Kazakhstan',
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'blue'
  },
  {
    title: 'Investment Analysts',
    subtitle: 'The Risk Calculator',
    icon: '📈',
    description: 'Due diligence and investment risk assessment with geological precision',
    pain: 'Making $100M+ decisions on incomplete geological data',
    solution: 'Quantified risk metrics and probabilistic resource models',
    features: [
      'Investment-grade geological reports',
      'Risk-adjusted resource valuations',
      'Comparative site analysis dashboards',
      'JORC/NI 43-101 compliant documentation'
    ],
    quote: '"GeoCube de-risks our mining investments. We see what others miss."',
    author: 'Portfolio Manager, Rio Tinto Ventures',
    color: 'from-emerald-500 to-teal-500',
    bgGlow: 'emerald'
  },
  {
    title: 'ESG & Compliance Teams',
    subtitle: 'The Sustainability Guardian',
    icon: '🌱',
    description: 'Minimize environmental impact through intelligent site selection',
    pain: 'Balancing resource extraction with environmental responsibility',
    solution: 'Precision targeting eliminates unnecessary environmental disturbance',
    features: [
      'Environmental impact optimization',
      'Sustainable exploration planning',
      'Carbon footprint reduction tracking',
      'ESG compliance reporting automation'
    ],
    quote: '"85% fewer drill sites means 85% less environmental impact. It\'s a win-win."',
    author: 'Head of Sustainability, Glencore',
    color: 'from-green-500 to-emerald-500',
    bgGlow: 'green'
  }
];

export default function UseCases() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200 mb-6">
            Built for Every Stakeholder
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From field boots to boardrooms, GeoCube delivers 
            <span className="text-emerald-400 font-semibold"> actionable intelligence</span> tailored to your role.
          </p>
        </motion.div>

        <div className="space-y-16">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${persona.color} flex items-center justify-center text-3xl`}>
                    {persona.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{persona.title}</h3>
                    <p className="text-lg text-slate-400">{persona.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed">
                  {persona.description}
                </p>

                {/* Pain vs Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <div className="text-red-400 font-semibold mb-2">❌ Current Pain Point</div>
                    <p className="text-sm text-slate-300">{persona.pain}</p>
                  </div>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <div className="text-emerald-400 font-semibold mb-2">✅ GeoCube Solution</div>
                    <p className="text-sm text-slate-300">{persona.solution}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {persona.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="flex-1 max-w-lg">
                <div className="relative p-8 bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl">
                  {/* Quote */}
                  <div className="text-6xl text-slate-600 absolute top-4 left-6">"</div>
                  <blockquote className="text-lg text-slate-200 italic mb-6 relative z-10 pt-8">
                    {persona.quote}
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${persona.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {persona.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{persona.author}</div>
                      <div className="text-slate-400 text-xs">Verified Client</div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${persona.color} opacity-5 rounded-2xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-2xl">
            <h3 className="text-2xl font-bold text-white">
              Ready to transform your workflow?
            </h3>
            <p className="text-slate-400 max-w-2xl">
              Join industry leaders who've already made the switch to data-driven exploration. 
              See GeoCube in action with your own geological data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-white/5">
                Download Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}