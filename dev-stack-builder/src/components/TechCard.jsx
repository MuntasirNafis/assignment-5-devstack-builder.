import React from 'react';

export default function TechCard({ tech, isAdded, onAdd }) {
  // Badge color dynamic styling
  const badgeColors = {
    Popular: 'bg-blue-50 text-blue-500',
    Versatile: 'bg-emerald-50 text-emerald-500',
    Fast: 'bg-orange-50 text-orange-500',
    Standard: 'bg-emerald-50 text-emerald-500',
    'Top SQL': 'bg-blue-50 text-blue-500',
    Cache: 'bg-red-50 text-red-500',
    Ubiquitous: 'bg-amber-50 text-amber-600',
    Essential: 'bg-blue-50 text-blue-500',
    Robust: 'bg-sky-50 text-sky-500',
    Modern: 'bg-cyan-50 text-cyan-600',
    Containers: 'bg-sky-50 text-sky-500'
  };

  return (
    <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between hover:border-gray-200 transition-all">
      <div>
        <div className="flex items-center justify-between mb-4">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColors[tech.badge] || 'bg-gray-100 text-gray-600'}`}>
            {tech.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
        <p className="text-gray-500 text-xs mt-2 leading-relaxed min-h-[40px]">
          {tech.description}
        </p>

        <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="bg-white border border-gray-200 px-2.5 py-1 rounded-md text-gray-700 font-medium">
              {tech.category}
            </span>
            <span className="bg-white border border-gray-200 px-2.5 py-1 rounded-md text-gray-600">
              {tech.difficulty}
            </span>
          </div>
          <div className="flex items-center gap-1 font-bold text-gray-800">
            <span className="text-amber-400">★</span> {tech.rating}
          </div>
        </div>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full mt-6 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
          isAdded
            ? 'bg-emerald-600 text-white cursor-not-allowed'
            : 'bg-slate-900 hover:bg-slate-800 text-white'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
} 