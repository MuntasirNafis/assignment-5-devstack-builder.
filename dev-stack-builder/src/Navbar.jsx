import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Mobile Hamburger Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-pink-500 text-white font-bold flex items-center justify-center text-sm">
            DS
          </span>
          <span className="font-bold text-xl text-gray-900">Dev Stack</span>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-pink-500 font-semibold">Home</a>
          <a href="#" className="hover:text-gray-900">Technologies</a>
          <a href="#" className="hover:text-gray-900">Projects</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>

        {/* Right Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
            Sign In
          </button>
          <button className="text-sm font-medium text-white bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3 text-sm font-medium text-gray-600">
          <a href="#" className="block text-pink-500">Home</a>
          <a href="#" className="block hover:text-gray-900">Technologies</a>
          <a href="#" className="block hover:text-gray-900">Projects</a>
          <a href="#" className="block hover:text-gray-900">About</a>
          <a href="#" className="block hover:text-gray-900">Contact</a>
        </div>
      )}
    </nav>
  );
} 