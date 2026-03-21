import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, Shield, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Award, text: 'Israeli Technology & Supervision' },
    { icon: Globe, text: '24/7 Online Monitoring Center' },
    { icon: Shield, text: 'Certified Security Professionals' },
    { icon: Users, text: 'Customized Security Solutions' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #003366 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/products/about-us-everest.png"
                  alt="Everest Security Building"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-everest-blue/20 via-transparent to-everest-orange/10" />
              </div>

              {/* Floating Experience Badge */}
              <div 
                className="absolute -bottom-6 -right-6 bg-everest-orange text-white rounded-2xl p-5 shadow-xl animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold font-['Rajdhani']">20+</p>
                    <p className="text-sm opacity-90">Years Experience</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-everest-light rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-everest-orange/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Subtitle */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="inline-block px-4 py-1.5 bg-everest-light text-everest-blue text-sm font-semibold rounded-full">
                About Everest Security
              </span>
            </div>

            {/* Title */}
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-everest-blue font-['Rajdhani'] leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Two Decades of Protecting What Matters Most
            </h2>

            {/* Paragraphs */}
            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-gray-600 leading-relaxed">
                Since 2003, <strong className="text-everest-blue">Everest Security Pvt. Ltd.</strong> has been at the 
                forefront of security innovation, providing Israeli hi-tech online monitoring protection and 
                monitoring solutions to public, private, financial, and government organizations across India.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence and cutting-edge technology has earned us the trust of thousands 
                of satisfied customers, from banks and educational institutions to factories and private homes. 
                We understand that security is not just about technology—it's about peace of mind.
              </p>
            </div>

            {/* Features List */}
            <div
              className={`grid sm:grid-cols-2 gap-4 pt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group"
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-everest-light rounded-lg flex items-center justify-center group-hover:bg-everest-blue transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-everest-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div
              className={`pt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <Button
                size="lg"
                className="bg-everest-blue hover:bg-everest-orange text-white px-8 py-6 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
