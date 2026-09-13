import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load JSON Data with useEffect
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Data loading error:', err);
        setLoading(false);
      });
  }, []);

  // Add to stack handler
  const handleAdd = (tech) => {
    const exists = selectedStack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already added!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`Added ${tech.name} to stack!`);
  };

  // Remove single item
  const handleRemove = (id) => {
    const item = selectedStack.find((i) => i.id === id);
    setSelectedStack(selectedStack.filter((i) => i.id !== id));
    toast.info(`Removed ${item?.name} from stack.`);
  };

  // Remove all
  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error('Cleared all stack items!');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <ToastContainer position="top-right" autoClose={2000} />
      
      <Navbar />
      <Hero />

      {/* Main Grid Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Explore the <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Pick one technology per category to build your ideal stack.</p>
        </div>

        {loading ? (
          <div className="py-20 text-center text-gray-400 font-medium">
            Loading technologies...
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Cards Area (3 Columns) */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={selectedStack.some((item) => item.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>

            {/* Sidebar (1 Column) */}
            <div className="lg:col-span-1">
              <Sidebar
                selectedStack={selectedStack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
} 