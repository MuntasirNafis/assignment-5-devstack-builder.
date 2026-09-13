import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg max-w-lg leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity">
            Explore Technologies
          </button>
          <button className="border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg text-sm hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Side Image Visual */}
      <div className="flex justify-center md:justify-end">
        <img 
          src="https://img.freepik.com/free-vector/isometric-devops-illustration_23-2149387396.jpg" 
          alt="3D Dev Stack Visual" 
          className="w-full max-w-md rounded-2xl shadow-xl border border-gray-100 object-cover"
        />
      </div>
    </section>
  );
} 