'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm"
          >
            <span className="text-emerald-400 text-sm font-medium">
              🚀 Ready for Enterprise Deployment
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-emerald-200 leading-tight"
          >
            Let's accelerate your next discovery
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Terra Intelligence helps miners, funders, and ministries deploy 
            <span className="text-emerald-400 font-semibold"> data-driven exploration</span>.
            <br />
            <span className="text-slate-400 text-lg">
              Join the companies already transforming their geological intelligence.
            </span>
          </motion.p>

          {/* Value props */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-center py-8"
          >
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>White-Label Available</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-2 h-2 bg-amber-400 rounded-full" />
              <span>Custom Integration</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-2">
              <span className="relative z-10">📨 Request a Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300" />
            </button>
            
            <button className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-lg rounded-2xl transition-all duration-300 backdrop-blur-sm hover:bg-white/5 transform hover:-translate-y-1">
              <span>📄 Download 2-Pager</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="pt-12 border-t border-slate-800"
          >
            <div className="space-y-4">
              <p className="text-slate-400 text-sm">
                Or speak directly with our geological intelligence team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-slate-300">
                <a 
                  href="mailto:hello@terra.is" 
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@terra.is
                </a>
                <div className="hidden sm:block w-px h-4 bg-slate-600" />
                <span className="text-sm">Response within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="pt-8"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>Enterprise SSO</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}