import { useEffect, useRef, useState } from 'react';
import { Building2, Shield, Truck, Warehouse, IdCard, Fence, CheckCircle, ArrowRight, Phone, Users, Clock, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const [, setIsVisible] = useState(false);
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
      id: 'banking',
      icon: Building2,
      title: 'Online Security for Banks',
      shortDesc: 'Complete turnkey security solutions for financial institutions.',
      fullDesc: 'We provide comprehensive security infrastructure for banks and financial institutions, including real-time monitoring, access control, CCTV surveillance, alarm systems, and ATM protection. Our solutions are designed to meet RBI guidelines and ensure complete protection of assets and customers.',
      features: [
        'Centralized monitoring system',
        'Multi-branch connectivity',
        'RBI compliant solutions',
        '24/7 control room support',
        'Integration with existing systems',
        'Regular security audits',
      ],
      benefits: [
        'Reduced security incidents by 95%',
        'Insurance premium reductions',
        'Enhanced customer confidence',
        'Regulatory compliance assured',
      ],
      image: '/images/products/ALARM-CONTROL-PANELS.jpg',
      stats: { clients: '100+', satisfaction: '99%' },
    },
    {
      id: 'atm',
      icon: Shield,
      title: 'ATM Protection',
      shortDesc: 'Advanced anti-skimming and surveillance systems for ATMs.',
      fullDesc: 'Our ATM protection solutions include anti-skimming devices, vibration sensors, thermal cameras, and real-time monitoring to prevent theft, skimming, and vandalism. We provide end-to-end protection for your ATM infrastructure.',
      features: [
        'Anti-skimming devices',
        'Vibration sensors',
        'Thermal imaging cameras',
        'Smoke and gas detection',
        'Emergency lockdown system',
        'Remote monitoring',
      ],
      benefits: [
        'Zero skimming incidents',
        'Reduced ATM downtime',
        'Lower maintenance costs',
        'Enhanced customer safety',
      ],
      image: '/images/products/INTEGRATED-WIRELESS-CONTROL-PANELS.jpg',
      stats: { clients: '500+', satisfaction: '98%' },
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'GPRS Logistics Tracking',
      shortDesc: 'Real-time vehicle tracking and fuel monitoring solutions.',
      fullDesc: 'Our GPRS-based fleet management system provides real-time vehicle tracking, route optimization, fuel monitoring, and driver behavior analysis. Reduce operational costs and improve efficiency with our comprehensive logistics solutions.',
      features: [
        'Real-time GPS tracking',
        'Fuel consumption monitoring',
        'Route optimization',
        'Geofencing alerts',
        'Driver behavior analysis',
        'Detailed reporting',
      ],
      benefits: [
        '20% reduction in fuel costs',
        'Improved delivery times',
        'Theft prevention',
        'Better fleet utilization',
      ],
      image: '/images/products/CSB-DIGILON.jpg',
      stats: { clients: '200+', satisfaction: '97%' },
    },
    {
      id: 'warehouse',
      icon: Warehouse,
      title: 'Warehouse Security',
      shortDesc: '24/7 surveillance and access control for industrial facilities.',
      fullDesc: 'Protect your valuable inventory with our comprehensive warehouse security solutions. We offer perimeter protection, intrusion detection, CCTV surveillance, access control, and fire safety systems tailored to your facility.',
      features: [
        'Perimeter intrusion detection',
        'High-definition CCTV',
        'Access control systems',
        'Fire and smoke detection',
        'Night vision cameras',
        'Central monitoring',
      ],
      benefits: [
        'Prevent inventory loss',
        'Insurance compliance',
        'Employee safety',
        'Operational continuity',
      ],
      image: '/images/products/EXTERNAL-DETECTION-SENSORS-EDS-SERIES.jpg',
      stats: { clients: '300+', satisfaction: '99%' },
    },
    {
      id: 'tracking',
      icon: IdCard,
      title: 'Employee Tracking',
      shortDesc: 'GPS-based personnel tracking for workforce management.',
      fullDesc: 'Monitor and manage your workforce with our employee tracking solutions. Ideal for security guards, sales teams, and field staff. Features include real-time location, attendance management, and emergency alerts.',
      features: [
        'Real-time location tracking',
        'Attendance management',
        'SOS emergency button',
        'Geofencing',
        'Route history',
        'Mobile app access',
      ],
      benefits: [
        'Improved productivity',
        'Enhanced employee safety',
        'Accurate attendance',
        'Better resource allocation',
      ],
      image: '/images/products/FREEWAVE-ACCESSORIES.jpg',
      stats: { clients: '150+', satisfaction: '96%' },
    },
    {
      id: 'fencing',
      icon: Fence,
      title: 'Decorative Fencing',
      shortDesc: 'Aesthetic security fencing solutions for properties.',
      fullDesc: 'Combine security with aesthetics using our decorative fencing solutions. We offer a range of designs from modern to traditional that enhance your property\'s appearance while providing robust perimeter protection.',
      features: [
        'Custom designs available',
        'High-strength materials',
        'Anti-climb features',
        'Integrated lighting',
        'Low maintenance',
        'Weather resistant',
      ],
      benefits: [
        'Enhanced curb appeal',
        'Property value increase',
        'Deterrent to intruders',
        'Privacy protection',
      ],
      image: '/images/products/NEPTUNE.jpg',
      stats: { clients: '400+', satisfaction: '98%' },
    },
  ];

  const caseStudies = [
    {
      title: 'SBI Branch Security Overhaul',
      client: 'State Bank of India',
      description: 'Implemented comprehensive security solution across 50 branches in Gujarat.',
      results: ['95% reduction in security incidents', 'RBI compliance achieved', 'Insurance savings of ₹20L annually'],
    },
    {
      title: 'Fleet Management for Logistics Co.',
      client: 'FastTrack Transport',
      description: 'Deployed GPRS tracking system for 200+ vehicle fleet.',
      results: ['20% fuel cost reduction', '30% improvement in delivery times', 'Theft incidents reduced to zero'],
    },
    {
      title: 'Warehouse Security Upgrade',
      client: 'Apex Warehousing',
      description: 'Complete security infrastructure for 100,000 sq ft facility.',
      results: ['Zero inventory loss', 'Insurance premium reduced by 15%', '24/7 monitoring implemented'],
    },
  ];

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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Rajdhani'] mb-6">
              Comprehensive Security Solutions
            </h1>
            <p className="text-white/80 text-lg">
              From banks to warehouses, we provide tailored security solutions 
              designed to protect your assets and give you peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-everest-light border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-everest-blue font-['Rajdhani']">5000+</p>
              <p className="text-gray-600">Clients Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-everest-blue font-['Rajdhani']">98%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-everest-blue font-['Rajdhani']">24/7</p>
              <p className="text-gray-600">Support Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-everest-blue font-['Rajdhani']">20+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white" ref={sectionRef}>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-everest-blue rounded-xl flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="text-everest-orange font-medium text-sm">Service {index + 1}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-everest-blue font-['Rajdhani']">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6">{service.fullDesc}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-bold text-everest-blue mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-everest-blue mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <TrendingUp className="w-4 h-4 text-everest-orange flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact">
                      <Button className="bg-everest-blue hover:bg-everest-orange text-white rounded-full">
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {service.stats.clients} Clients
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {service.stats.satisfaction} Satisfaction
                      </span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-everest-blue/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                        <p className="font-bold text-everest-blue">{service.stats.clients} Happy Clients</p>
                        <p className="text-sm text-gray-600">{service.shortDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-everest-light">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've helped organizations transform their security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-everest-blue rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-everest-blue font-['Rajdhani'] mb-2">
                  {study.title}
                </h3>
                <p className="text-everest-orange font-medium mb-3">{study.client}</p>
                <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we deliver security solutions that work
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free site assessment and requirement analysis' },
              { step: '02', title: 'Design', desc: 'Customized security solution design' },
              { step: '03', title: 'Installation', desc: 'Professional installation by certified technicians' },
              { step: '04', title: 'Support', desc: '24/7 monitoring and maintenance' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-everest-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-everest-blue font-['Rajdhani'] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-everest-blue">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Rajdhani'] mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contact us today for a free security assessment and customized quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-everest-orange hover:bg-white hover:text-everest-blue text-white px-8 py-6 rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
