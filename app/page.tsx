export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-700 flex items-center justify-center">
        <h2 className="text-5xl font-bold">Featured Movie</h2>
      </section>

      {/* Movie Rows */}
      <section className="px-8 space-y-4">
        <h3 className="text-2xl font-semibold">Trending Now</h3>
        <div className="flex space-x-4 overflow-x-auto">
          <div className="w-48 h-64 bg-gray-600 flex-shrink-0 rounded">Movie 1</div>
          <div className="w-48 h-64 bg-gray-600 flex-shrink-0 rounded">Movie 2</div>
          <div className="w-48 h-64 bg-gray-600 flex-shrink-0 rounded">Movie 3</div>
          <div className="w-48 h-64 bg-gray-600 flex-shrink-0 rounded">Movie 4</div>
        </div>
      </section>

      <section className="px-8 space-y-4">
        <h3 className="text-2xl font-semibold">New Releases</h3>
        <div className="flex space-x-4 overflow-x-auto">
          <div className="w-48 h-64 bg-gray-600 flex-shrink-0 rounded">Movie A</div>
          <div className="w-48 h-64 bg-gray-600 flex-shrink-0 rounded">Movie B</div>
          <div className="w-48 h-64 bg-gray-600 flex-shrink-0 rounded">Movie C</div>
          <div className="w-48 h-64 bg-gray-600 flex-shrink-0 rounded">Movie D</div>
        </div>
      </section>
    </div>
  )
}
