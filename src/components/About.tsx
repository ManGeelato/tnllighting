import { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Award, Users } from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Cutting-edge LED and solar technology for maximum efficiency',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Premium products with comprehensive warranties',
    },
    {
      icon: Award,
      title: 'Expert Service',
      description: 'Professional installation and support services',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Dedicated to exceeding your expectations',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-red-500">TNLlighting</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We are a leading provider of innovative lighting solutions, solar systems, and accessories.
            With years of expertise, we deliver quality products that combine efficiency, durability, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-red-500 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-red-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
