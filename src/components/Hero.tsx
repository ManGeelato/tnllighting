import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToCategories = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/WhatsApp Video 2025-12-11 at 18.40.28.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>

      {/* Red blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Text */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          TNL<span className="text-red-500">lighting</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Illuminating Your World with Quality Solutions
        </p>
        <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Premium lighting systems, solar solutions, and accessories for every need
        </p>
        <button
          onClick={scrollToCategories}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/50"
        >
          Explore Products
        </button>
      </div>

      {/* Chevron */}
      <button
        onClick={scrollToCategories}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

export default Hero;
