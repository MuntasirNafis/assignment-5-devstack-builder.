import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-24 py-16 text-gray-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-pink-500 text-white font-bold text-xs flex items-center justify-center">
              DS
            </span>
            <span className="font-bold text-sm text-gray-900">Dev Stack</span>
          </div>
          <p className="text-gray-400 max-w-xs leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 pt-2 text-gray-600 font-medium">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-3 tracking-wider uppercase text-[11px]">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
            <li><a href="#" className="hover:text-gray-900">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-3 tracking-wider uppercase text-[11px]">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-3 tracking-wider uppercase text-[11px]">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-600">Privacy</a>
          <a href="#" className="hover:text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
} 