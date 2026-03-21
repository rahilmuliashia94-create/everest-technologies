import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: 'Rajesh Sharma',
      role: 'Bank Manager',
      company: 'SBI Rajkot',
      content: 'Everest Security has transformed our branch security. Their 24/7 monitoring gives us complete peace of mind. The Israeli technology they use is truly world-class, and their response time is exceptional.',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      role: 'Logistics Director',
      company: 'FastTrack Transport',
      content: 'The GPRS tracking system has reduced our fuel costs by 20% and improved fleet efficiency dramatically. Their team understood our needs perfectly and delivered a customized solution.',
      rating: 5,
    },
    {
      name: 'Amit Shah',
      role: 'Facility Manager',
      company: 'Apex Warehouse',
      content: 'Professional installation and excellent support. Their team understands industrial security needs perfectly. The perimeter detection system has prevented multiple intrusion attempts.',
      rating: 5,
    },
    {
      name: 'Dr. Meera Desai',
      role: 'Principal',
      company: 'Rajkot International School',
      content: 'We entrusted Everest Security with the safety of our students and staff. Their comprehensive CCTV and access control system has created a secure learning environment for everyone.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-everest-light/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-everest-orange/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-everest-light text-everest-blue text-sm font-semibold rounded-full mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Client Testimonials
          </span>
          
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-everest-blue font-['Rajdhani'] mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Main Testimonial Card */}
          <div className="relative bg-gradient-to-br from-everest-blue to-everest-blue-dark rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-32 h-32 text-white" />
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px',
                }}
              />
            </div>

            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-everest-orange text-everest-orange" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-white/70 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-everest-blue hover:bg-everest-blue hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-everest-blue w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-everest-blue hover:bg-everest-blue hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
