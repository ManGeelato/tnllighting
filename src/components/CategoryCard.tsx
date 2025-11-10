import { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';

interface SubCategory {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface Category {
  id: string;
  title: string;
  subcategories: SubCategory[];
}

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  const [selectedProduct, setSelectedProduct] = useState<SubCategory | null>(null);
  const WHATSAPP_NUMBER = '27699406286';

  const handleEnquire = (product: SubCategory) => {
    const message = `Hi! I'm interested in enquiring about your ${product.name} from the ${category.title} category. Could you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 p-8">
      <h3 className="text-3xl font-bold mb-8 text-center">
        {category.title} <span className="text-red-500">Products</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.subcategories.map((subcategory) => (
          <div
            key={subcategory.id}
            className="group"
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
              <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src={subcategory.image}
                  alt={subcategory.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h4 className="font-semibold text-lg mb-2">{subcategory.name}</h4>
                <p className="text-gray-400 text-sm mb-4 flex-1">{subcategory.description}</p>
                <button
                  onClick={() => setSelectedProduct(subcategory)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                >
                  <MessageCircle size={16} />
                  <span>Enquire</span>
                  <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-gray-900 rounded-lg border border-gray-700 max-w-md w-full p-8 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-300"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
            <div className="w-16 h-1 bg-red-500 mb-6"></div>

            <div className="mb-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300 mb-2">{selectedProduct.description}</p>
              <p className="text-gray-400 text-sm">
                Category: <span className="text-red-500 font-semibold">{category.title}</span>
              </p>
            </div>

            <button
              onClick={() => {
                handleEnquire(selectedProduct);
                setSelectedProduct(null);
              }}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <MessageCircle size={20} />
              <span>Contact on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryCard;
