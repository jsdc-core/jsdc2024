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
            <a href="#speakers" className="hover:text-gray-600 flex items-center" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#speakers').scrollIntoView({ behavior: 'smooth' });
            }}>SPEAKERS</a>
            <a href="#sponsors" className="hover:text-gray-600 flex items-center" onClick={(e) => {
              e.preventDefault();
              const $jsdcTitle = document.querySelector('#jsdc-title');
              $jsdcTitle.textContent = 'DONATE & $HOW CODE';
              const symbols = ['♥', '$', '💰'];
              const colors = ['#ff69b4', '#32cd32', '#ffd700'];
              
              for(let i = 0; i < 50; i++) {
                const symbol = document.createElement('div');
                const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                
                symbol.style.position = 'fixed';
                symbol.style.left = Math.random() * window.innerWidth + 'px';
                symbol.style.top = '-50px';
                symbol.style.color = randomColor;
                symbol.style.fontSize = '24px';
                symbol.style.zIndex = '1000';
                symbol.innerHTML = randomSymbol;
                symbol.className = 'bouncing-symbol';
                
                document.body.appendChild(symbol);

                // Animate falling with bounce
                const keyframes = [
                  { transform: 'translateY(0) rotate(0deg)', offset: 0 },
                  { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, offset: 0.7 },
                  { transform: `translateY(${window.innerHeight - 50}px) rotate(${Math.random() * 360}deg)`, offset: 0.8 },
                  { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, offset: 0.9 },
                  { transform: `translateY(${window.innerHeight - 25}px) rotate(${Math.random() * 360}deg)`, offset: 0.95 },
                  { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, offset: 1 }
                ];

                const timing = {
                  duration: 3000 + Math.random() * 2000,
                  iterations: Infinity,
                  easing: 'ease-in-out'
                };

                symbol.animate(keyframes, timing);

                // Random horizontal movement
                setInterval(() => {
                  const newX = parseFloat(symbol.style.left) + (Math.random() - 0.5) * 100;
                  symbol.style.left = `${Math.max(0, Math.min(window.innerWidth, newX))}px`;
                }, 1000);

                // Fade out and remove after 30 seconds
                setTimeout(() => {
                  symbol.animate([
                    { opacity: 1 },
                    { opacity: 0 }
                  ], {
                    duration: 1000,
                    fill: 'forwards'
                  }).onfinish = () => symbol.remove();
                }, 19000);
              }

              // Change text back to "SPONSORS" after 5 seconds
              setTimeout(() => {
                $jsdcTitle.textContent = 'JSDC 2024 IS HERE.';
              }, 5000);
            }}>SPONSORS</a>
            <a href="#hosts" className="hover:text-gray-600 flex items-center" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#hosts').scrollIntoView({ behavior: 'smooth' });
            }}>HOST</a>
            <a 
              href="https://www.accupass.com/event/2411191318271681933268" 
              target="_blank"
              rel="noreferrer"
              className="bg-primary-blue text-white px-4 py-2 hover:bg-blue-600 flex items-center"
            >
              立即報名
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
              <a href="#speakers" className="hover:text-gray-600" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#speakers').scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => setIsMenuOpen(false), 100);
              }}>SPEAKERS</a>
              <a href="#sponsors" className="hover:text-gray-600" onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                setTimeout(() => {
                  const $jsdcTitle = document.querySelector('#jsdc-title');
                  $jsdcTitle.textContent = 'DONATE & $HOW CODE';
                  const symbols = ['♥', '$', '💰'];
                  const colors = ['#ff69b4', '#32cd32', '#ffd700'];
                  
                  for(let i = 0; i < 50; i++) {
                    const symbol = document.createElement('div');
                    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    
                    symbol.style.position = 'fixed';
                    symbol.style.left = Math.random() * window.innerWidth + 'px';
                    symbol.style.top = '-50px';
                    symbol.style.color = randomColor;
                    symbol.style.fontSize = '24px';
                    symbol.style.zIndex = '1000';
                    symbol.innerHTML = randomSymbol;
                    symbol.className = 'bouncing-symbol';
                    
                    document.body.appendChild(symbol);

                    // Animate falling with bounce
                    const keyframes = [
                      { transform: 'translateY(0) rotate(0deg)', offset: 0 },
                      { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, offset: 0.7 },
                      { transform: `translateY(${window.innerHeight - 50}px) rotate(${Math.random() * 360}deg)`, offset: 0.8 },
                      { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, offset: 0.9 },
                      { transform: `translateY(${window.innerHeight - 25}px) rotate(${Math.random() * 360}deg)`, offset: 0.95 },
                      { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, offset: 1 }
                    ];

                    const timing = {
                      duration: 3000 + Math.random() * 2000,
                      iterations: Infinity,
                      easing: 'ease-in-out'
                    };

                    symbol.animate(keyframes, timing);

                    // Random horizontal movement
                    setInterval(() => {
                      const newX = parseFloat(symbol.style.left) + (Math.random() - 0.5) * 100;
                      symbol.style.left = `${Math.max(0, Math.min(window.innerWidth, newX))}px`;
                    }, 1000);

                    // Fade out and remove after 30 seconds
                    setTimeout(() => {
                      symbol.animate([
                        { opacity: 1 },
                        { opacity: 0 }
                      ], {
                        duration: 1000,
                        fill: 'forwards'
                      }).onfinish = () => symbol.remove();
                    }, 19000);
                  }

                  // Change text back to "SPONSORS" after 5 seconds
                  setTimeout(() => {
                    $jsdcTitle.textContent = 'JSDC 2024 IS HERE.';
                  }, 5000);
                }, 300);
              }}>SPONSORS</a>
              <a href="#hosts" className="hover:text-gray-600" onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.querySelector('#hosts').scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => setIsMenuOpen(false), 100);
              }}>HOST</a>
              <a 
                href="https://www.accupass.com/event/2411191318271681933268"
                target="_blank"
                rel="noreferrer"
                className="bg-primary-blue text-white px-4 py-2 hover:bg-blue-600 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                立即報名
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
          <h1 id="jsdc-title" className="text-7xl font-bold mb-4">
            JSDC 2024 IS HERE.
          </h1>
          <p className="text-2xl mb-8">
            DECEMBER 21ST - 線上活動
          </p>
          <a 
            href="https://www.accupass.com/event/2411191318271681933268"
            target="_blank"
            rel="noreferrer"
            className="bg-primary-blue text-white px-8 py-4 text-lg hover:bg-blue-600 inline-block"
          >
            立刻報名
            <span className="block text-sm mt-1">ONLINE EVENT</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 