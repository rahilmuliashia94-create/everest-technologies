import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, Shield, Lock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-everest-blue-dark"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-everest-blue via-everest-blue-dark to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,64,128,0.4)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,102,0,0.15)_0%,transparent_40%)]" />
        </div>
      </div>

      {/* Floating Security Icons */}
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

      {/* Grid Pattern Overlay */}
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
            {/* Subtitle */}
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

            {/* Main Title */}
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

            {/* Description */}
            <p
              className={`text-lg text-white/80 max-w-xl leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Protecting what matters most with cutting-edge Israeli technology and 
              20+ years of expertise. Your safety is our mission, your trust is our commitment.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <Button
                onClick={() => scrollToSection('#products')}
                size="lg"
                className="bg-everest-orange hover:bg-white hover:text-everest-blue text-white px-8 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-everest-blue px-8 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Phone className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </div>

            {/* Trust Badges */}
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

          {/* Right Content - Image/Visual */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/products/about-us-everest.png"
                  alt="Everest Security Headquarters"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-everest-blue-dark/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
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

              {/* Floating Experience Badge */}
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
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="white"
            opacity="1"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
