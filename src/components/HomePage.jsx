import React from 'react';
import Logo from './Logo';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-center items-center">
        <div className="w-full max-w-6xl flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <span className="ml-2 px-2 py-1 text-sm font-bold text-black border border-gray-300 rounded">CONF'24</span>
          </div>
          
          <div className="flex space-x-6 text-sm items-center">
            <a href="#speakers" className="hover:text-gray-600 flex items-center">SPEAKERS</a>
            <a href="#sponsors" className="hover:text-gray-600 flex items-center">SPONSORS</a>
            <a href="#location" className="hover:text-gray-600 flex items-center">LOCATION</a>
            <a 
              href="https://your-ticket-link.com" 
              className="bg-primary-blue text-white px-4 py-2 hover:bg-blue-600 flex items-center"
            >
              GET TICKETS
            </a>
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
            DECEMBER 21ST - ONLINE EVENT
          </p>
          <a 
            href="https://your-ticket-link.com"
            className="bg-primary-blue text-white px-8 py-4 text-lg hover:bg-blue-600 inline-block"
          >
            GET TICKETS
            <span className="block text-sm mt-1">VIRTUAL EVENT</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 