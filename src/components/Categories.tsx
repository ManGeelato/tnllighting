import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import CategoryCard from './CategoryCard';
import { categories } from '../data/categories';

function Categories() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="categories" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-red-500">Categories</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore our comprehensive range of lighting solutions and accessories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className={`w-full bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'border-red-500 shadow-lg shadow-red-500/50'
                      : 'border-gray-700 hover:border-red-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="text-red-500" size={40} />
                    <ChevronRight
                      className={`text-gray-400 transition-transform duration-300 ${
                        selectedCategory === category.id ? 'rotate-90' : ''
                      }`}
                      size={24}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-left">{category.title}</h3>
                  <p className="text-gray-400 text-sm text-left mt-2">{category.description}</p>
                </button>
              </div>
            );
          })}
        </div>

        {selectedCategory && (
          <div className="animate-fadeIn">
            <CategoryCard category={categories.find((c) => c.id === selectedCategory)!} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Categories;
