import Image from 'next/image'

export function MediaExample() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Media Assets Examples
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Video Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Video Demo</h3>
            <video 
              src="/videos/demo.mp4" 
              controls 
              className="w-full h-48 object-cover rounded-lg"
              poster="/images/video-thumbnail.jpg"
            >
              Your browser does not support the video tag.
            </video>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Place videos in: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">public/videos/</code>
            </p>
          </div>

          {/* Logo Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Company Logo</h3>
            <div className="flex items-center justify-center h-48 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <img 
                src="/logos/logo.svg" 
                alt="Company Logo" 
                className="h-16 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  ;(e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'block'
                }}
              />
              <div className="hidden text-gray-500 text-center">
                <p>Logo not found</p>
                <p className="text-sm">Place in: <code>public/logos/logo.svg</code></p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Place logos in: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">public/logos/</code>
            </p>
          </div>

          {/* Image Example */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Hero Image</h3>
            <div className="relative h-48 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <Image 
                src="/images/hero-bg.jpg" 
                alt="Hero Background"
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="flex items-center justify-center h-full text-gray-500 text-center">
                      <div>
                        <p>Image not found</p>
                        <p class="text-sm">Place in: <code class="bg-gray-200 dark:bg-gray-600 px-1 rounded">public/images/hero-bg.jpg</code></p>
                      </div>
                    </div>
                  `
                }}
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Place images in: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">public/images/</code>
            </p>
          </div>

        </div>

        {/* File Structure Info */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">📁 File Structure</h3>
          <pre className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto">
{`public/
├── videos/           # MP4, WebM, MOV files
│   ├── demo.mp4
│   └── intro.webm
├── logos/            # SVG, PNG logo files
│   ├── logo.svg
│   └── logo-dark.svg
├── images/           # JPG, PNG, WebP files
│   ├── hero-bg.jpg
│   └── team-photos/
└── static/           # Existing favicons
    └── favicons/`}
          </pre>
        </div>

      </div>
    </section>
  )
} 