import { useEffect, useRef, useState } from 'react';
import { Search, CheckCircle, Shield, Zap, Award, Phone, Mail, Download, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useSearchParams } from 'react-router-dom';
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
  features: string[];
  specifications: { label: string; value: string }[];
  price?: string;
  badge?: string;
}

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchParams] = useSearchParams();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveFilter(category);
    }
  }, [searchParams]);

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
      features: ['Biometric fingerprint scanner', 'Smart card reader', 'PIN code entry', 'Audit trail logging', 'Anti-passback protection'],
      specifications: [
        { label: 'User Capacity', value: '10,000 users' },
        { label: 'Log Capacity', value: '100,000 events' },
        { label: 'Communication', value: 'TCP/IP, RS-485' },
        { label: 'Power', value: '12V DC' },
      ],
      badge: 'Popular',
    },
    {
      id: 2,
      name: 'Alarm Control Panels',
      category: 'Control Panels',
      image: '/images/products/ALARM-CONTROL-PANELS.jpg',
      description: 'Centralized alarm monitoring panels with multi-zone support and smartphone integration.',
      features: ['Multi-zone support', 'Smartphone app control', 'SMS alerts', 'Battery backup', 'Remote arming/disarming'],
      specifications: [
        { label: 'Zones', value: '8-128 zones' },
        { label: 'Users', value: 'Up to 250 users' },
        { label: 'Backup Battery', value: '7 Ah' },
        { label: 'GSM Module', value: 'Optional' },
      ],
    },
    {
      id: 3,
      name: 'EDS Series',
      category: 'Sensors',
      image: '/images/products/eds-series.jpg',
      description: 'External detection sensors with weatherproof design for outdoor perimeter security.',
      features: ['Weatherproof IP65 rated', 'Dual technology', 'Pet immunity', 'Adjustable sensitivity', 'Tamper protection'],
      specifications: [
        { label: 'Detection Range', value: '12m x 12m' },
        { label: 'Operating Temp', value: '-20°C to +50°C' },
        { label: 'IP Rating', value: 'IP65' },
        { label: 'Power', value: '9-16V DC' },
      ],
    },
    {
      id: 4,
      name: 'KD Series',
      category: 'Detectors',
      image: '/images/products/KD-SERIES.jpg',
      description: 'Indoor motion detectors with pet immunity and advanced false alarm prevention.',
      features: ['PIR technology', 'Pet immunity up to 25kg', 'Digital signal processing', 'Auto temperature compensation', 'LED walk test'],
      specifications: [
        { label: 'Detection Range', value: '15m x 15m' },
        { label: 'Mounting Height', value: '2.0-2.7m' },
        { label: 'Pet Immunity', value: 'Up to 25kg' },
        { label: 'Current', value: '15mA' },
      ],
    },
    {
      id: 5,
      name: 'MR Series',
      category: 'Detectors',
      image: '/images/products/MR-SERIES.jpg',
      description: 'Mirror optics PIR detectors - the world\'s smallest with superior detection range.',
      features: ['World\'s smallest design', 'Mirror optics technology', 'Wide detection angle', 'Low power consumption', 'Easy installation'],
      specifications: [
        { label: 'Size', value: '85 x 50 x 35mm' },
        { label: 'Detection Range', value: '18m' },
        { label: 'Angle', value: '110°' },
        { label: 'Power', value: '8-16V DC' },
      ],
      badge: 'New',
    },
    {
      id: 6,
      name: 'SD Series',
      category: 'Sensors',
      image: '/images/products/SD-SERIES.jpg',
      description: 'Smoke and fire detectors with early warning technology and central monitoring compatibility.',
      features: ['Photoelectric sensor', 'Early warning technology', 'Low battery alert', 'Test button', 'Central monitoring compatible'],
      specifications: [
        { label: 'Sensor Type', value: 'Photoelectric' },
        { label: 'Alarm Sound', value: '85dB' },
        { label: 'Battery Life', value: '10 years' },
        { label: 'Certification', value: 'UL, EN' },
      ],
    },
    {
      id: 7,
      name: 'Z Series',
      category: 'Detectors',
      image: '/images/products/Z-SERIES.jpg',
      description: 'Advanced PIR detectors with dual technology for maximum reliability and pet immunity.',
      features: ['Dual technology PIR+MW', 'Advanced DSP', 'Pet immunity', 'Anti-mask', 'Environmental adaption'],
      specifications: [
        { label: 'Technology', value: 'PIR + Microwave' },
        { label: 'Range', value: '15m' },
        { label: 'Pet Immunity', value: 'Up to 35kg' },
        { label: 'Mounting', value: 'Wall/Corner' },
      ],
    },
    {
      id: 8,
      name: 'Neptune',
      category: 'Accessories',
      image: '/images/products/NEPTUNE.jpg',
      description: 'Outdoor siren with strobe light, weather-resistant design, and loud 120dB alarm.',
      features: ['120dB siren', 'Strobe light', 'Weather resistant', 'Tamper switch', 'Multiple tones'],
      specifications: [
        { label: 'Sound Level', value: '120dB' },
        { label: 'Strobe', value: 'LED' },
        { label: 'IP Rating', value: 'IP54' },
        { label: 'Colors', value: 'Red/Blue/White' },
      ],
    },
    {
      id: 9,
      name: 'Freewave',
      category: 'Control Panels',
      image: '/images/products/FREEWAVE-ACCESSORIES.jpg',
      description: 'Wireless security system components with long-range communication and encrypted signals.',
      features: ['Wireless communication', '128-bit encryption', 'Long range', 'Easy installation', 'Expandable'],
      specifications: [
        { label: 'Frequency', value: '433/868 MHz' },
        { label: 'Range', value: 'Up to 1km' },
        { label: 'Encryption', value: 'AES-128' },
        { label: 'Devices', value: 'Up to 100' },
      ],
    },
    {
      id: 10,
      name: 'CSB Digilon',
      category: 'Sensors',
      image: '/images/products/CSB-DIGILON.jpg',
      description: 'Beam detectors for perimeter protection with adjustable range up to 100 meters.',
      features: ['Active infrared beam', 'Adjustable range', 'Anti-fog', 'Alignment LED', 'Weatherproof'],
      specifications: [
        { label: 'Range', value: '30-100m' },
        { label: 'Beams', value: '2/4 beams' },
        { label: 'Response', value: '<50ms' },
        { label: 'IP Rating', value: 'IP65' },
      ],
    },
    {
      id: 11,
      name: 'Everest Platinum',
      category: 'Control Panels',
      image: '/images/products/EVEREST-PLATINUM.jpg',
      description: 'Premium security control panel with touchscreen interface and smart home integration.',
      features: ['7" touchscreen', 'Smart home integration', 'Voice control', 'Mobile app', 'Cloud backup'],
      specifications: [
        { label: 'Display', value: '7" TFT LCD' },
        { label: 'Zones', value: 'Up to 256' },
        { label: 'Users', value: 'Unlimited' },
        { label: 'Connectivity', value: 'WiFi, 4G, Ethernet' },
      ],
      badge: 'Premium',
    },
    {
      id: 12,
      name: 'Universal Receiver',
      category: 'Accessories',
      image: '/images/products/UNIVERSAL-RECEIVER-INTERFACES.jpg',
      description: 'GSM interface modules for remote monitoring and control via mobile network.',
      features: ['Quad-band GSM', 'SMS commands', 'Voice call alerts', 'Remote control', 'Event logging'],
      specifications: [
        { label: 'Bands', value: '850/900/1800/1900' },
        { label: 'SIM', value: 'Standard SIM' },
        { label: 'Antenna', value: 'External' },
        { label: 'Power', value: '12V DC' },
      ],
    },
    {
      id: 13,
      name: 'Ceiling Mount Sensors',
      category: 'Sensors',
      image: '/images/products/CEILING-MOUNT.jpg',
      description: '360-degree ceiling mount PIR sensors for comprehensive area coverage.',
      features: ['360° coverage', 'Ceiling mount', 'Discrete design', 'Wide detection', 'Easy installation'],
      specifications: [
        { label: 'Coverage', value: '360°' },
        { label: 'Range', value: '6m diameter' },
        { label: 'Mounting', value: 'Ceiling' },
        { label: 'Height', value: '2.4-3.6m' },
      ],
    },
    {
      id: 14,
      name: 'Control Panel Accessories',
      category: 'Accessories',
      image: '/images/products/CONTROL-PANEL-ACCESSORIES.jpg',
      description: 'Keypads, remote controls, and expansion modules for security systems.',
      features: ['Wired/wireless keypads', 'Remote controls', 'Expansion modules', 'LED indicators', 'Backlit buttons'],
      specifications: [
        { label: 'Types', value: 'Multiple' },
        { label: 'Compatibility', value: 'Universal' },
        { label: 'Range', value: 'Up to 100m' },
        { label: 'Battery', value: '2-5 years' },
      ],
    },
    {
      id: 15,
      name: 'MS Series',
      category: 'Accessories',
      image: '/images/products/MS-SERIES.jpg',
      description: 'Professional security sirens and sounders with multiple tone options.',
      features: ['Multiple tones', 'High volume', 'Indoor/outdoor', 'Flash strobe', 'Tamper proof'],
      specifications: [
        { label: 'Volume', value: '110-120dB' },
        { label: 'Tones', value: '15+ selectable' },
        { label: 'Strobe', value: 'Optional' },
        { label: 'Colors', value: 'Red/White' },
      ],
    },
    {
      id: 16,
      name: 'Z-SRPG Series',
      category: 'Detectors',
      image: '/images/products/Z-SRPG-SERIES.jpg',
      description: 'Glass break detectors and door/window sensors for perimeter protection.',
      features: ['Glass break detection', 'Door/window sensors', 'Wireless', 'Long battery life', 'Easy install'],
      specifications: [
        { label: 'Type', value: 'Glass/Magnetic' },
        { label: 'Range', value: 'Up to 9m' },
        { label: 'Battery', value: '3 years' },
        { label: 'Frequency', value: '433 MHz' },
      ],
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === 'All' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-everest-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-everest-orange text-sm font-semibold rounded-full mb-4">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Rajdhani'] mb-6">
              Cutting-Edge Security Equipment
            </h1>
            <p className="text-white/80 text-lg">
              Explore our comprehensive range of Israeli-engineered security products 
              designed for maximum protection and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-everest-light border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-everest-blue" />
              <div>
                <p className="font-bold text-everest-blue">Israeli Technology</p>
                <p className="text-sm text-gray-500">World-class quality</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-everest-blue" />
              <div>
                <p className="font-bold text-everest-blue">5-Year Warranty</p>
                <p className="text-sm text-gray-500">On all products</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-everest-blue" />
              <div>
                <p className="font-bold text-everest-blue">ISO Certified</p>
                <p className="text-sm text-gray-500">Quality assured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-everest-blue" />
              <div>
                <p className="font-bold text-everest-blue">Easy Installation</p>
                <p className="text-sm text-gray-500">Professional support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white" ref={sectionRef}>
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-everest-blue text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-everest-light'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full ${
                      product.badge === 'Premium' ? 'bg-purple-500 text-white' :
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      'bg-everest-orange text-white'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-everest-blue/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-medium">View Details</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs text-everest-orange font-medium">{product.category}</span>
                  <h3 className="text-lg font-bold text-everest-blue font-['Rajdhani'] mb-2 group-hover:text-everest-orange transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>In Stock</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Our Products */}
      <section className="py-20 bg-everest-light">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our products are designed and manufactured to the highest standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-everest-blue rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-everest-blue font-['Rajdhani'] mb-3">
                Israeli Technology
              </h3>
              <p className="text-gray-600">
                Our products incorporate cutting-edge Israeli security technology, 
                known worldwide for innovation and reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-everest-orange rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-everest-blue font-['Rajdhani'] mb-3">
                Quality Assured
              </h3>
              <p className="text-gray-600">
                All products undergo rigorous testing and come with ISO certification 
                and up to 5-year warranty.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-everest-blue rounded-xl flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-everest-blue font-['Rajdhani'] mb-3">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Our team of certified technicians provides installation, training, 
                and 24/7 technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-everest-blue">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Rajdhani'] mb-6">
            Need Help Choosing the Right Products?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our security experts can help you select the perfect products for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-everest-orange hover:bg-white hover:text-everest-blue text-white px-8 py-6 rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Call Us: +91 9624696247
              </Button>
            </Link>
            <a href="mailto:info@everestsecurityonline.com">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-everest-blue px-8 py-6 rounded-full">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-everest-light text-everest-blue text-sm font-medium rounded-full">
                    {selectedProduct.category}
                  </span>
                  {selectedProduct.badge && (
                    <span className={`px-3 py-1 text-sm font-bold rounded-full ${
                      selectedProduct.badge === 'Premium' ? 'bg-purple-500 text-white' :
                      selectedProduct.badge === 'New' ? 'bg-green-500 text-white' :
                      'bg-everest-orange text-white'
                    }`}>
                      {selectedProduct.badge}
                    </span>
                  )}
                </div>
                <DialogTitle className="text-2xl font-bold text-everest-blue font-['Rajdhani']">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  {selectedProduct.description}
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
                  <div>
                    <h4 className="font-bold text-everest-blue mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {selectedProduct.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-everest-blue mb-2">Specifications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProduct.specifications.map((spec, i) => (
                        <div key={i} className="bg-everest-light p-2 rounded-lg">
                          <p className="text-xs text-gray-500">{spec.label}</p>
                          <p className="text-sm font-medium text-everest-blue">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Link to="/contact" className="flex-1">
                  <Button className="w-full bg-everest-blue hover:bg-everest-orange text-white rounded-full">
                    Request Quote
                  </Button>
                </Link>
                <Button variant="outline" className="rounded-full">
                  <Download className="w-4 h-4 mr-2" />
                  Datasheet
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
