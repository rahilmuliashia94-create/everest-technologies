import { useEffect, useRef, useState } from 'react';
import { Calendar, Users, Package, Clock } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: string;
  label: string;
  suffix?: string;
  delay: number;
}

const StatItem = ({ icon: Icon, value, label, suffix = '', delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const targetValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <div
      ref={itemRef}
      className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-everest-blue/5 to-everest-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-everest-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-everest-blue transition-colors duration-300">
          <Icon className="w-7 h-7 text-everest-blue group-hover:text-white transition-colors duration-300" />
        </div>
        
        <div className="text-4xl md:text-5xl font-bold text-everest-blue font-['Rajdhani'] mb-2">
          {value.includes('24') ? value : `${count}${suffix}`}
        </div>
        
        <p className="text-gray-600 font-medium">{label}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { icon: Calendar, value: '20', suffix: '+', label: 'Years of Excellence' },
    { icon: Users, value: '5000', suffix: '+', label: 'Happy Clients' },
    { icon: Package, value: '50', suffix: '+', label: 'Security Products' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="py-16 md:py-24 bg-everest-light relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-everest-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-everest-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
