export default function Test404() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Test 404 Page</h1>
        <p>This page exists to test the 404 functionality.</p>
        <p className="text-sm text-gray-500 mt-2">
          Try navigating to /this-page-does-not-exist to see the 404 page
        </p>
      </div>
    </div>
  )
} 