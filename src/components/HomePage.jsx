import React, { useState } from 'react';
import Logo from './Logo';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-center items-center">
        <div className="w-full max-w-6xl flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <span className="ml-2 px-2 py-1 text-sm font-bold text-black border border-gray-300 rounded">CONF'24</span>
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm items-center">
            <a href="#speakers" className="hover:text-gray-600 flex items-center">SPEAKERS</a>
            <a href="#sponsors" className="hover:text-gray-600 flex items-center">SPONSORS</a>
            <a href="#location" className="hover:text-gray-600 flex items-center">LOCATION</a>
            <a 
              href="https://www.accupass.com/event/2411191318271681933268" 
              target="_blank"
              rel="noreferrer"
              className="bg-primary-blue text-white px-4 py-2 hover:bg-blue-600 flex items-center"
            >
              GET TICKETS
            </a>
          </div>

          {/* Mobile Menu */}
          <div className={`
            fixed inset-0 bg-white z-40 flex flex-col items-center justify-center
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}
            md:hidden
          `}>
            <div className="flex flex-col space-y-8 text-xl">
              <a href="#speakers" className="hover:text-gray-600">SPEAKERS</a>
              <a href="#sponsors" className="hover:text-gray-600">SPONSORS</a>
              <a href="#location" className="hover:text-gray-600">LOCATION</a>
              <a 
                href="https://www.accupass.com/event/2411191318271681933268"
                target="_blank"
                rel="noreferrer"
                className="bg-primary-blue text-white px-4 py-2 hover:bg-blue-600 text-center"
              >
                GET TICKETS
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        {/* Grid Pattern (decorative) */}
        <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-10 pointer-events-none">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="border border-gray-200"></div>
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center z-10">
          <h1 className="text-7xl font-bold mb-4">
            JSDC 2024 IS HERE.
          </h1>
          <p className="text-2xl mb-8">
            DECEMBER 21ST - VIRTUAL EVENT
          </p>
          <a 
            href="https://www.accupass.com/event/2411191318271681933268"
            target="_blank"
            rel="noreferrer"
            className="bg-primary-blue text-white px-8 py-4 text-lg hover:bg-blue-600 inline-block"
          >
            GET TICKETS
            <span className="block text-sm mt-1">ONLINE EVENT</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 