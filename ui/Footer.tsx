'use client';

export default function Footer() {
  return (
    <footer className='bg-slate-900/50 border-t border-slate-800 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>G</span>
              </div>
              <div>
                <h3 className='text-2xl font-bold text-white'>GeoCube</h3>
                <p className='text-slate-400 text-sm'>by Terra Exploration</p>
              </div>
            </div>
            <p className='text-slate-400 max-w-md mb-6'>
              Precision mineral intelligence at enterprise scale. Transforming geological exploration through AI-powered data fusion and 25+ years of industry expertise.
            </p>
            <div className='flex items-center gap-4'>
              <a href='mailto:hello@terra.is' className='text-slate-400 hover:text-emerald-400 transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' stroke='currentColor' strokeWidth={2} fill='none' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </a>
              <a href='#' className='text-slate-400 hover:text-emerald-400 transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
                </svg>
              </a>
              <a href='#' className='text-slate-400 hover:text-emerald-400 transition-colors'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' />
                  <circle cx='4' cy='4' r='2' />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Platform</h4>
            <ul className='space-y-2 text-slate-400'>
              <li><a href='#' className='hover:text-emerald-400 transition-colors'>GeoCube Explorer</a></li>
              <li><a href='#' className='hover:text-emerald-400 transition-colors'>Satellite Analytics</a></li>
              <li><a href='#' className='hover:text-emerald-400 transition-colors'>Legacy Data Engine</a></li>
              <li><a href='#' className='hover:text-emerald-400 transition-colors'>Enterprise API</a></li>
              <li><a href='#' className='hover:text-emerald-400 transition-colors'>Mobile Field App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className='text-white font-semibold mb-4'>Company</h4>
            <ul className='space-y-2 text-slate-400'>
              <li><a href='#' className='hover:text-emerald-400 transition-colors'>About Terra</a></li>
              <li><a href='#' className='hover:text-emerald-400 transition-colors'>Case Studies</a></li>
              <li><a href='#' className='hover:text-emerald-400 transition-colors'>Client Success</a></li>
              <li><a href='#' className='hover:text-emerald-400 transition-colors'>Partner Program</a></li>
              <li><a href='#' className='hover:text-emerald-400 transition-colors'>Careers</a></li>
            </ul>
          </div>
        </div>

        <div className='border-t border-slate-800 pt-8 mt-12'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex items-center gap-6 text-sm text-slate-400'>
              <span>© {new Date().getFullYear()} Terra Exploration</span>
              <span>Astana, Kazakhstan</span>
            </div>
            <div className='flex items-center gap-6 text-sm text-slate-400'>
              <a href='#' className='hover:text-emerald-400 transition-colors'>Privacy Policy</a>
              <a href='#' className='hover:text-emerald-400 transition-colors'>Terms of Service</a>
              <a href='#' className='hover:text-emerald-400 transition-colors'>Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
