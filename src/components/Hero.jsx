export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-indigo-600">Template</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          A modern starter template built with React, Vite, and Tailwind CSS v4.
          Perfect for your next web project.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-colors">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
