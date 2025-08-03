export function FontExamples() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Font Examples
        </h2>
        
        <div className="space-y-12">
          
          {/* Inter (Sans-serif) Examples */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Inter (Sans-serif) - Body Text
            </h3>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold font-sans text-gray-900 dark:text-white">
                Heading 1 - Inter Bold
              </h1>
              <h2 className="text-3xl font-semibold font-sans text-gray-800 dark:text-gray-100">
                Heading 2 - Inter Semibold
              </h2>
              <h3 className="text-2xl font-medium font-sans text-gray-700 dark:text-gray-200">
                Heading 3 - Inter Medium
              </h3>
              <p className="text-lg font-sans text-gray-600 dark:text-gray-300">
                Body text - Inter Regular. This is the main font for body content, 
                paragraphs, and general text throughout the application.
              </p>
              <p className="text-sm font-sans text-gray-500 dark:text-gray-400">
                Small text - Inter Regular. Used for captions, metadata, and secondary information.
              </p>
            </div>
          </div>

          {/* Antler Examples */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Antler - Display Text
            </h3>
            <div className="space-y-4">
              <h1 className="text-5xl font-bold font-display text-gray-900 dark:text-white">
                Display Heading - Antler Bold
              </h1>
              <h2 className="text-4xl font-display text-gray-800 dark:text-gray-100">
                Hero Title - Antler Regular
              </h2>
              <p className="text-xl font-display text-gray-600 dark:text-gray-300">
                Display text - Antler Regular. Perfect for headlines, hero sections, 
                and prominent text that needs to stand out.
              </p>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">
              How to Use These Fonts
            </h3>
            <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
              <div>
                <strong>Inter (Sans-serif):</strong>
                <code className="ml-2 bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
                  font-sans
                </code>
                <span className="ml-2">- Body text, paragraphs, UI elements</span>
              </div>
              <div>
                <strong>Antler (Display):</strong>
                <code className="ml-2 bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
                  font-display
                </code>
                <span className="ml-2">- Headlines, hero titles, prominent text</span>
              </div>
              <div>
                <strong>Antler (Alternative):</strong>
                <code className="ml-2 bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
                  font-antler
                </code>
                <span className="ml-2">- Same as font-display</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
} 