import { useEffect, useState } from 'react';
import { ArrowRight, Phone, Shield, Lock, Eye, ChevronRight, CheckCircle, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingIcons = [
    { Icon: Shield, top: '15%', left: '10%', delay: 0, duration: 5 },
    { Icon: Lock, top: '25%', right: '15%', delay: 1, duration: 6 },
    { Icon: Eye, top: '60%', left: '8%', delay: 2, duration: 5.5 },
    { Icon: Shield, top: '70%', right: '10%', delay: 0.5, duration: 4.5 },
    { Icon: Lock, top: '40%', left: '5%', delay: 1.5, duration: 6.5 },
  ];

  const features = [
    { icon: Award, title: 'Israeli Technology', desc: 'World-class security systems' },
    { icon: Users, title: '5000+ Clients', desc: 'Trusted across India' },
    { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock assistance' },
    { icon: Shield, title: 'ISO Certified', desc: 'Quality assured services' },
  ];

  const partners = [
    'State Bank of India', 'ICICI Bank', 'HDFC Bank', 'Axis Bank', 
    'Bank of Baroda', 'Canara Bank', 'Indian Oil', 'Reliance'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-everest-blue-dark">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-everest-blue via-everest-blue-dark to-black">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,64,128,0.4)_0%,transparent_50%)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,102,0,0.15)_0%,transparent_40%)]" />
          </div>
        </div>

        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, top, left, right, delay, duration }, index) => (
          <div
            key={index}
            className="absolute text-white/10 pointer-events-none"
            style={{
              top,
              left,
              right,
              animation: `float ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <Icon className="w-12 h-12 md:w-20 md:h-20" strokeWidth={1} />
          </div>
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <span className="w-2 h-2 bg-everest-orange rounded-full animate-pulse" />
                <span className="text-sm font-medium tracking-wide">
                  ISRAELI TECHNOLOGY & SUPERVISION
                </span>
              </div>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold font-['Rajdhani'] leading-tight transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                24/7 Advanced{' '}
                <span className="text-everest-orange">Security</span>{' '}
                Solutions
              </h1>

              <p
                className={`text-lg text-white/80 max-w-xl leading-relaxed transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                Protecting what matters most with cutting-edge Israeli technology and 
                20+ years of expertise. Your safety is our mission, your trust is our commitment.
              </p>

              <div
                className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <Link to="/products">
                  <Button
                    size="lg"
                    className="bg-everest-orange hover:bg-white hover:text-everest-blue text-white px-8 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    Explore Solutions
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-everest-blue px-8 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Contact Us
                  </Button>
                </Link>
              </div>

              <div
                className={`flex flex-wrap gap-6 pt-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                {[
                  { value: '20+', label: 'Years Experience' },
                  { value: '5000+', label: 'Happy Clients' },
                  { value: '24/7', label: 'Support' },
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <span className="text-everest-orange font-bold text-lg">{badge.value}</span>
                    </div>
                    <span className="text-white/70 text-sm">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div
              className={`relative hidden lg:block transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/products/about-us-everest.png"
                    alt="Everest Security Headquarters"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-everest-blue-dark/60 via-transparent to-transparent" />
                </div>

                <div 
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl animate-float"
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-everest-blue rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-everest-blue">ISO</p>
                      <p className="text-sm text-gray-500">Certified</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="absolute -top-4 -right-4 bg-everest-orange text-white rounded-xl p-4 shadow-xl animate-float"
                >
                  <p className="text-3xl font-bold">20+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-everest-light rounded-2xl hover:bg-everest-blue transition-all duration-500"
              >
                <div className="w-14 h-14 bg-everest-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                  <feature.icon className="w-7 h-7 text-white group-hover:text-everest-blue" />
                </div>
                <h3 className="text-xl font-bold text-everest-blue font-['Rajdhani'] mb-2 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-everest-light">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white text-everest-blue text-sm font-semibold rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-everest-blue font-['Rajdhani'] mb-6">
                Your Security is Our Priority
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We combine cutting-edge Israeli technology with 20+ years of local expertise 
                to deliver security solutions that truly protect what matters most to you.
              </p>
              
              <div className="space-y-4">
                {[
                  '24/7 Online Monitoring Center with real-time alerts',
                  'Israeli technology & supervision for world-class security',
                  'Certified security professionals with extensive training',
                  'Customized solutions tailored to your specific needs',
                  'Quick response time with dedicated support team',
                  'Regular maintenance and system updates included',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-everest-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-everest-blue hover:bg-everest-orange text-white px-8 py-6 rounded-full">
                    Learn More About Us
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/products/ALARM-CONTROL-PANELS.jpg" 
                  alt="Security Systems" 
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="/images/products/eds-series.jpg" 
                  alt="Detection Systems" 
                  className="rounded-2xl shadow-lg mt-8"
                />
                <img 
                  src="/images/products/KD-SERIES.jpg" 
                  alt="Motion Detectors" 
                  className="rounded-2xl shadow-lg -mt-8"
                />
                <img 
                  src="/images/products/NEPTUNE.jpg" 
                  alt="Alarm Systems" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
            Trusted by leading organizations across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="text-xl font-bold text-gray-300 hover:text-everest-blue transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-everest-blue">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-['Rajdhani'] mb-6">
            Ready to Secure Your Premises?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free security assessment and quote. Our experts will analyze your 
            requirements and recommend the best solution for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-everest-orange hover:bg-white hover:text-everest-blue text-white px-8 py-6 rounded-full"
              >
                Get Free Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-everest-blue px-8 py-6 rounded-full"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
