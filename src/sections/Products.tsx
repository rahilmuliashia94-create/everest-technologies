import { useEffect, useRef, useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const categories = ['All', 'Control Panels', 'Detectors', 'Sensors', 'Accessories'];

  const products: Product[] = [
    {
      id: 1,
      name: 'ACTEC Series',
      category: 'Accessories',
      image: '/images/products/ACTEC-SERIES.jpg',
      description: 'Advanced access control systems with biometric authentication and smart card readers for secure entry management.',
    },
    {
      id: 2,
      name: 'Alarm Control Panels',
      category: 'Control Panels',
      image: '/images/products/ALARM-CONTROL-PANELS.jpg',
      description: 'Centralized alarm monitoring panels with multi-zone support and smartphone integration.',
    },
    {
      id: 3,
      name: 'EDS Series',
      category: 'Sensors',
      image: '/images/products/eds-series.jpg',
      description: 'External detection sensors with weatherproof design for outdoor perimeter security.',
    },
    {
      id: 4,
      name: 'KD Series',
      category: 'Detectors',
      image: '/images/products/KD-SERIES.jpg',
      description: 'Indoor motion detectors with pet immunity and advanced false alarm prevention.',
    },
    {
      id: 5,
      name: 'MR Series',
      category: 'Detectors',
      image: '/images/products/MR-SERIES.jpg',
      description: 'Mirror optics PIR detectors - the world\'s smallest with superior detection range.',
    },
    {
      id: 6,
      name: 'SD Series',
      category: 'Sensors',
      image: '/images/products/SD-SERIES.jpg',
      description: 'Smoke and fire detectors with early warning technology and central monitoring compatibility.',
    },
    {
      id: 7,
      name: 'Z Series',
      category: 'Detectors',
      image: '/images/products/Z-SERIES.jpg',
      description: 'Advanced PIR detectors with dual technology for maximum reliability and pet immunity.',
    },
    {
      id: 8,
      name: 'Neptune',
      category: 'Accessories',
      image: '/images/products/NEPTUNE.jpg',
      description: 'Outdoor siren with strobe light, weather-resistant design, and loud 120dB alarm.',
    },
    {
      id: 9,
      name: 'Freewave',
      category: 'Control Panels',
      image: '/images/products/FREEWAVE-ACCESSORIES.jpg',
      description: 'Wireless security system components with long-range communication and encrypted signals.',
    },
    {
      id: 10,
      name: 'CSB Digilon',
      category: 'Sensors',
      image: '/images/products/CSB-DIGILON.jpg',
      description: 'Beam detectors for perimeter protection with adjustable range up to 100 meters.',
    },
    {
      id: 11,
      name: 'Everest Platinum',
      category: 'Control Panels',
      image: '/images/products/EVEREST-PLATINUM.jpg',
      description: 'Premium security control panel with touchscreen interface and smart home integration.',
    },
    {
      id: 12,
      name: 'Universal Receiver',
      category: 'Accessories',
      image: '/images/products/UNIVERSAL-RECEIVER-INTERFACES.jpg',
      description: 'GSM interface modules for remote monitoring and control via mobile network.',
    },
    {
      id: 13,
      name: 'Ceiling Mount Sensors',
      category: 'Sensors',
      image: '/images/products/CEILING-MOUNT.jpg',
      description: '360-degree ceiling mount PIR sensors for comprehensive area coverage.',
    },
    {
      id: 14,
      name: 'Control Panel Accessories',
      category: 'Accessories',
      image: '/images/products/CONTROL-PANEL-ACCESSORIES.jpg',
      description: 'Keypads, remote controls, and expansion modules for security systems.',
    },
    {
      id: 15,
      name: 'MS Series',
      category: 'Accessories',
      image: '/images/products/MS-SERIES.jpg',
      description: 'Professional security sirens and sounders with multiple tone options.',
    },
    {
      id: 16,
      name: 'Z-SRPG Series',
      category: 'Detectors',
      image: '/images/products/Z-SRPG-SERIES.jpg',
      description: 'Glass break detectors and door/window sensors for perimeter protection.',
    },
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-everest-light/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-everest-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span
            className={`inline-block px-4 py-1.5 bg-everest-light text-everest-blue text-sm font-semibold rounded-full mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our Products
          </span>
          
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-everest-blue font-['Rajdhani'] mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Cutting-Edge Security Equipment
          </h2>
          
          <p
            className={`text-gray-600 text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Explore our range of Israeli-engineered security products designed for maximum protection.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-everest-blue text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-everest-light hover:text-everest-blue'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 50}ms` }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gray-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-everest-blue/90 text-white text-xs font-medium rounded-full">
                  {product.category}
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-everest-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Search className="w-5 h-5 text-everest-blue" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-everest-blue font-['Rajdhani'] mb-2 group-hover:text-everest-orange transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <Button
            size="lg"
            className="bg-everest-blue hover:bg-everest-orange text-white px-8 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-everest-blue font-['Rajdhani']">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-everest-orange font-medium">
                  {selectedProduct.category}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-contain p-4"
                  />
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-everest-blue">Key Features:</h4>
                    <ul className="space-y-2">
                      {['Israeli Technology', '24/7 Monitoring Ready', 'Easy Installation', '5-Year Warranty'].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-everest-orange rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-everest-blue hover:bg-everest-orange text-white rounded-full"
                    onClick={() => {
                      setSelectedProduct(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
