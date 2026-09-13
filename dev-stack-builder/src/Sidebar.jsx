import React from 'react';

export default function Sidebar({ selectedStack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-28">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
      <p className="text-xs text-gray-400 mt-1">{selectedStack.length} Technology Selected</p>

      {/* Empty State */}
      {selectedStack.length === 0 ? (
        <div className="py-12 text-center text-gray-400 text-xs">
          Your stack is currently empty. Click "Add to Stack" to select technologies.
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {selectedStack.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50/30">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="text-xs font-bold text-gray-800">{item.name}</h4>
                  <p className="text-[10px] text-gray-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-gray-600 text-sm px-1.5"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 border border-red-200 text-red-500 hover:bg-red-50 py-2 rounded-xl text-xs font-semibold transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
} 