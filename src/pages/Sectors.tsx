import { useEffect, useRef, useState } from 'react';
import { Building2, Truck, Warehouse, Home, Building, Landmark, CheckCircle, ArrowRight, Users, TrendingUp, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

  const sectors = [
    {
      id: 'banking',
      icon: Building2,
      title: 'Banking & Finance',
      subtitle: 'Securing Financial Institutions',
      description: 'Complete security infrastructure for banks, ATMs, and financial institutions. Our solutions include real-time monitoring, access control, CCTV surveillance, and advanced threat detection systems that meet RBI guidelines.',
      challenges: [
        'ATM skimming and card fraud',
        'Branch security and access control',
        'Cash handling security',
        'Customer and staff safety',
        'Regulatory compliance',
      ],
      solutions: [
        'Anti-skimming devices for ATMs',
        'Centralized monitoring system',
        'Biometric access control',
        'High-definition CCTV surveillance',
        'Panic button systems',
        '24/7 control room support',
      ],
      stats: { clients: '100+', atms: '2000+', branches: '500+' },
      image: '/images/products/ALARM-CONTROL-PANELS.jpg',
      testimonials: [
        { client: 'SBI Rajkot', quote: 'Everest Security transformed our branch security completely.' },
      ],
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Logistics & Transport',
      subtitle: 'Fleet & Cargo Protection',
      description: 'Fleet tracking and cargo protection for logistics companies. Our GPRS-based solutions provide real-time vehicle tracking, fuel monitoring, route optimization, and driver behavior analysis.',
      challenges: [
        'Vehicle theft and hijacking',
        'Fuel theft and pilferage',
        'Route deviations',
        'Cargo tampering',
        'Driver safety',
      ],
      solutions: [
        'Real-time GPS tracking',
        'Fuel monitoring system',
        'Geofencing and alerts',
        'Driver behavior monitoring',
        'Emergency SOS button',
        'Detailed analytics reports',
      ],
      stats: { vehicles: '5000+', clients: '200+', savings: '20%' },
      image: '/images/products/CSB-DIGILON.jpg',
      testimonials: [
        { client: 'FastTrack Transport', quote: 'Reduced fuel costs by 20% with their tracking system.' },
      ],
    },
    {
      id: 'industrial',
      icon: Warehouse,
      title: 'Industrial & Warehousing',
      subtitle: 'Facility & Asset Protection',
      description: 'Perimeter security and surveillance for industrial facilities. Protect your assets with 24/7 monitoring, intrusion detection, access control, and comprehensive security infrastructure.',
      challenges: [
        'Inventory theft and shrinkage',
        'Unauthorized access',
        'Equipment vandalism',
        'Fire safety',
        'Employee safety',
      ],
      solutions: [
        'Perimeter intrusion detection',
        'High-definition CCTV network',
        'Access control systems',
        'Fire and smoke detection',
        'Night vision surveillance',
        'Central monitoring station',
      ],
      stats: { facilities: '300+', coverage: '10M+ sqft', reduction: '95%' },
      image: '/images/products/EXTERNAL-DETECTION-SENSORS-EDS-SERIES.jpg',
      testimonials: [
        { client: 'Apex Warehousing', quote: 'Zero inventory loss since implementation.' },
      ],
    },
    {
      id: 'residential',
      icon: Home,
      title: 'Residential',
      subtitle: 'Home Security Solutions',
      description: 'Smart security solutions for homes and apartments. From basic alarm systems to comprehensive smart home security integration, we protect what matters most - your family.',
      challenges: [
        'Break-ins and burglaries',
        'Fire and gas leaks',
        'Elderly and child safety',
        'Property monitoring',
        'Remote access',
      ],
      solutions: [
        'Smart door locks',
        'Motion sensors',
        'Video door phones',
        'Smoke and gas detectors',
        'Mobile app control',
        '24/7 monitoring',
      ],
      stats: { homes: '2000+', societies: '150+', satisfaction: '99%' },
      image: '/images/products/KD-SERIES.jpg',
      testimonials: [
        { client: 'Green Valley Society', quote: 'Peace of mind for all residents.' },
      ],
    },
    {
      id: 'commercial',
      icon: Building,
      title: 'Commercial',
      subtitle: 'Office & Retail Security',
      description: 'Comprehensive security for offices, retail stores, and commercial complexes. Protect your business, employees, and customers with our tailored solutions.',
      challenges: [
        'Shoplifting and theft',
        'Employee safety',
        'After-hours security',
        'Access management',
        'Emergency response',
      ],
      solutions: [
        'CCTV surveillance',
        'Access control',
        'Intrusion alarms',
        'POS integration',
        'Emergency systems',
        'Security guards',
      ],
      stats: { offices: '500+', retail: '300+', malls: '50+' },
      image: '/images/products/INTEGRATED-WIRELESS-CONTROL-PANELS.jpg',
      testimonials: [
        { client: 'City Mall', quote: 'Enhanced shopping experience with better security.' },
      ],
    },
    {
      id: 'government',
      icon: Landmark,
      title: 'Government',
      subtitle: 'Public Sector Solutions',
      description: 'Security solutions for government buildings, public institutions, and critical infrastructure. We understand the unique security requirements of the public sector.',
      challenges: [
        'High-security requirements',
        'Public safety',
        'Sensitive data protection',
        'Vandalism prevention',
        'Emergency preparedness',
      ],
      solutions: [
        'Multi-layer security',
        'Visitor management',
        'Perimeter protection',
        'Surveillance systems',
        'Disaster recovery',
        'Compliance reporting',
      ],
      stats: { projects: '100+', institutions: '75+', uptime: '99.9%' },
      image: '/images/products/EVEREST-PLATINUM.jpg',
      testimonials: [
        { client: 'Rajkot Municipal Corp', quote: 'Reliable partner for public safety.' },
      ],
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
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Rajdhani'] mb-6">
              Securing Every Sector
            </h1>
            <p className="text-white/80 text-lg">
              From financial institutions to residential complexes, we provide specialized 
              security solutions tailored to the unique needs of each industry.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Overview */}
      <section className="py-20 bg-white" ref={sectionRef}>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="space-y-24">
            {sectors.map((sector, index) => (
              <div 
                key={sector.id} 
                id={sector.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-everest-blue rounded-xl flex items-center justify-center">
                      <sector.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="text-everest-orange font-medium text-sm">{sector.subtitle}</span>
                      <h2 className="text-2xl md:text-3xl font-bold text-everest-blue font-['Rajdhani']">
                        {sector.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6">{sector.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-everest-blue mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Challenges We Solve
                      </h4>
                      <ul className="space-y-2">
                        {sector.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-everest-blue mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Our Solutions
                      </h4>
                      <ul className="space-y-2">
                        {sector.solutions.slice(0, 5).map((solution, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    {Object.entries(sector.stats).map(([key, value]) => (
                      <div key={key} className="bg-everest-light px-4 py-2 rounded-lg">
                        <span className="text-2xl font-bold text-everest-orange font-['Rajdhani']">{value}</span>
                        <span className="text-gray-600 text-sm ml-1 capitalize">{key}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button className="bg-everest-blue hover:bg-everest-orange text-white rounded-full">
                      Get Sector Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={sector.image} 
                      alt={sector.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-everest-blue/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      {sector.testimonials.map((testimonial, i) => (
                        <div key={i} className="bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                          <p className="text-gray-700 italic mb-2">"{testimonial.quote}"</p>
                          <p className="text-everest-blue font-medium">— {testimonial.client}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-everest-light">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
              Industry Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Years of experience across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '5000+', label: 'Clients Served' },
              { icon: TrendingUp, value: '95%', label: 'Incident Reduction' },
              { icon: Shield, value: '20+', label: 'Years Experience' },
              { icon: CheckCircle, value: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-lg">
                <div className="w-14 h-14 bg-everest-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-everest-blue" />
                </div>
                <p className="text-3xl font-bold text-everest-orange font-['Rajdhani']">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-everest-blue">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Rajdhani'] mb-6">
            Find Your Industry Solution
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contact our industry experts for a customized security assessment and quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-everest-orange hover:bg-white hover:text-everest-blue text-white px-8 py-6 rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectors;
