import { useEffect, useRef, useState } from 'react';
import { 
  Building2, 
  Shield, 
  Truck, 
  Warehouse, 
  IdCard, 
  Fence,
  ArrowRight
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const ServiceCard = ({ icon: Icon, title, description, delay, isVisible }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 
        hover:bg-white/10 hover:border-everest-orange/50 transition-all duration-500 cursor-pointer
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect on Hover */}
      <div 
        className={`absolute inset-0 rounded-2xl bg-everest-orange/10 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
          isHovered ? 'bg-everest-orange scale-110' : 'bg-white/10'
        }`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white font-['Rajdhani'] mb-3 group-hover:text-everest-orange transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-everest-orange text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

const Services = () => {
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

  const services = [
    {
      icon: Building2,
      title: 'Online Security for Banks',
      description: 'Complete turnkey security solutions for financial institutions with real-time monitoring and advanced threat detection.',
    },
    {
      icon: Shield,
      title: 'ATM Protection',
      description: 'Advanced anti-skimming and surveillance systems to protect your ATM infrastructure 24/7.',
    },
    {
      icon: Truck,
      title: 'GPRS Logistics Tracking',
      description: 'Real-time vehicle tracking and fuel monitoring for complete fleet management and optimization.',
    },
    {
      icon: Warehouse,
      title: 'Warehouse Security',
      description: '24/7 surveillance and access control systems for industrial facilities and storage units.',
    },
    {
      icon: IdCard,
      title: 'Employee Tracking',
      description: 'GPS-based personnel tracking systems for workforce management and employee safety.',
    },
    {
      icon: Fence,
      title: 'Decorative Fencing',
      description: 'Aesthetic security fencing solutions that protect without compromising on visual appeal.',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-everest-blue relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-everest-blue-light/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-everest-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-white/10 text-everest-orange text-sm font-semibold rounded-full mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our Services
          </span>
          
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white font-['Rajdhani'] mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Comprehensive Security Solutions
          </h2>
          
          <p
            className={`text-white/70 text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            From banks to warehouses, we provide tailored security solutions for every sector.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={300 + index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
