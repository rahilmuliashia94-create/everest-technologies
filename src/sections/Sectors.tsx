import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Building2, Truck, Warehouse, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Sector {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  color: string;
}

const Sectors = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const sectors: Sector[] = [
    {
      icon: Building2,
      title: 'Banking & Finance',
      description: 'Complete security infrastructure for banks, ATMs, and financial institutions. Our solutions include real-time monitoring, access control, and advanced threat detection systems.',
      image: '/images/products/ALARM-CONTROL-PANELS.jpg',
      color: 'from-everest-blue to-everest-blue-dark',
    },
    {
      icon: Truck,
      title: 'Logistics & Transport',
      description: 'Fleet tracking and cargo protection for logistics companies. GPS tracking, fuel monitoring, and route optimization for complete fleet management.',
      image: '/images/products/CSB-DIGILON.jpg',
      color: 'from-everest-orange to-red-600',
    },
    {
      icon: Warehouse,
      title: 'Industrial & Warehousing',
      description: 'Perimeter security and surveillance for industrial facilities. Protect your assets with 24/7 monitoring, intrusion detection, and access control.',
      image: '/images/products/EXTERNAL-DETECTION-SENSORS-EDS-SERIES.jpg',
      color: 'from-emerald-600 to-emerald-800',
    },
    {
      icon: Home,
      title: 'Residential & Commercial',
      description: 'Smart security solutions for homes and businesses. From basic alarm systems to comprehensive smart home security integration.',
      image: '/images/products/INTEGRATED-WIRELESS-CONTROL-PANELS.jpg',
      color: 'from-purple-600 to-purple-800',
    },
  ];

  return (
    <section
      id="sectors"
      ref={sectionRef}
      className="py-20 md:py-32 bg-everest-light relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #003366 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-white text-everest-blue text-sm font-semibold rounded-full mb-4 shadow-sm transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Industries We Serve
          </span>
          
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-everest-blue font-['Rajdhani'] mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Securing Every Sector
          </h2>
          
          <p
            className={`text-gray-600 text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            From financial institutions to logistics, we provide specialized security solutions tailored to your industry.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <sector.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-everest-blue font-['Rajdhani'] mb-3 group-hover:text-everest-orange transition-colors">
                    {sector.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {sector.description}
                  </p>
                  
                  <Button
                    variant="outline"
                    className="w-fit border-everest-blue text-everest-blue hover:bg-everest-blue hover:text-white rounded-full group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
