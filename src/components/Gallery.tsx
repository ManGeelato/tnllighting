import React, { useState, useEffect } from "react";
import { Users, Award, Handshake, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const galleryImages = [
    { url: "/WhatsApp Image 2025-12-1sd1 at 18.02.36.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
     { url: "WhatsApp Image 2025-12-11 at 18.40.36.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.36 (1).jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.36.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.32.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.32 (1).jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.31.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 1iyf8.02.35.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 15.21.14.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 15.21.15.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 15.26.15.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" }, 
    { url: "WhatsApp Image 2025-12-11 at 18uy.02.35.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 1890.02.35.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.02.34.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.02.35.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.27.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.38.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.28 (1).jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.28.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.29.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.30 (1).jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.30 (2).jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
    { url: "WhatsApp Image 2025-12-11 at 18.40.32 (1).jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
  ];

  const stats = [
    { icon: Users, value: "2,500+", label: "Active Clients", color: "text-blue-600" },
    { icon: Award, value: "150+", label: "Projects Finished", color: "text-red-600" },
    { icon: Handshake, value: "5,000+", label: "Connections Made", color: "text-blue-600" },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">TNL Lighting</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness real lighting experience done with the best professionals.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative mb-16">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.title}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {galleryImages[currentImage].title}
              </h3>
              <p className="text-gray-200 text-lg">
                {galleryImages[currentImage].description}
              </p>
            </div>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImage ? "bg-white w-8" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative h-24 rounded-lg overflow-hidden cursor-pointer group ${index === currentImage ? "ring-4 ring-blue-500" : ""}`}
              onClick={() => setCurrentImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-contain bg-gray-100"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mb-4 ${stat.color}`}>
                <stat.icon size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
