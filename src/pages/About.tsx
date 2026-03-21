import { useEffect, useRef, useState } from 'react';
import { Award, Shield, Globe, Users, Target, Eye, TrendingUp, MapPin, Calendar, Star } from 'lucide-react';

const About = () => {
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

  const milestones = [
    { year: '2003', title: 'Company Founded', desc: 'Everest Security established in Rajkot, Gujarat' },
    { year: '2007', title: 'ISO Certification', desc: 'Achieved ISO 9001:2000 certification' },
    { year: '2010', title: 'Banking Sector Entry', desc: 'First major bank security contract' },
    { year: '2015', title: 'Ahmedabad Branch', desc: 'Expanded operations to Ahmedabad' },
    { year: '2018', title: '5000+ Clients', desc: 'Reached milestone of 5000 satisfied clients' },
    { year: '2023', title: '20 Years of Excellence', desc: 'Celebrated two decades of service' },
  ];

  const team = [
    { name: 'Rajesh Patel', role: 'Founder & CEO', experience: '25+ years in security industry' },
    { name: 'Amit Shah', role: 'Technical Director', experience: 'Expert in Israeli security systems' },
    { name: 'Priya Desai', role: 'Operations Manager', experience: '15+ years in operations' },
    { name: 'Dr. Vikram Mehta', role: 'Security Consultant', experience: 'Former IPS officer' },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', desc: 'Quality Management System' },
    { name: 'ISO 14001:2015', desc: 'Environmental Management' },
    { name: 'BIS Certified', desc: 'Bureau of Indian Standards' },
    { name: 'RBI Approved', desc: 'Reserve Bank of India Approved' },
  ];

  const values = [
    { icon: Shield, title: 'Integrity', desc: 'We operate with honesty and transparency in all our dealings.' },
    { icon: Target, title: 'Excellence', desc: 'We strive for the highest standards in everything we do.' },
    { icon: Eye, title: 'Innovation', desc: 'We continuously adopt the latest security technologies.' },
    { icon: Users, title: 'Customer First', desc: 'Our clients\' safety and satisfaction are our top priorities.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-everest-blue overflow-hidden">
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
              About Everest Security
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Rajdhani'] mb-6">
              Two Decades of Protecting What Matters Most
            </h1>
            <p className="text-white/80 text-lg">
              Since 2003, we have been at the forefront of security innovation, 
              providing Israeli hi-tech solutions to organizations across India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white" ref={sectionRef}>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-everest-blue font-['Rajdhani'] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-everest-blue">Everest Security Pvt. Ltd.</strong> was founded in 2003 
                  with a vision to bring world-class security solutions to India. Starting from a small office in 
                  Rajkot, Gujarat, we have grown to become one of the most trusted names in the security industry.
                </p>
                <p>
                  Our partnership with leading Israeli security technology companies has allowed us to offer 
                  cutting-edge solutions that meet international standards. Today, we serve over 5,000 clients 
                  across multiple sectors including banking, logistics, industrial, and residential.
                </p>
                <p>
                  What sets us apart is our commitment to excellence and our 24/7 monitoring center that ensures 
                  our clients' premises are always protected. Our team of certified security professionals brings 
                  decades of combined experience to every project.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-everest-light p-4 rounded-xl">
                  <p className="text-3xl font-bold text-everest-orange font-['Rajdhani']">20+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-everest-light p-4 rounded-xl">
                  <p className="text-3xl font-bold text-everest-orange font-['Rajdhani']">5000+</p>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="bg-everest-light p-4 rounded-xl">
                  <p className="text-3xl font-bold text-everest-orange font-['Rajdhani']">50+</p>
                  <p className="text-gray-600">Products</p>
                </div>
                <div className="bg-everest-light p-4 rounded-xl">
                  <p className="text-3xl font-bold text-everest-orange font-['Rajdhani']">100+</p>
                  <p className="text-gray-600">Team Members</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/images/products/about-us-everest.png" 
                alt="Everest Security Office" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-everest-orange text-white p-6 rounded-2xl shadow-xl">
                <Award className="w-10 h-10 mb-2" />
                <p className="text-2xl font-bold">ISO 9001:2015</p>
                <p className="text-sm opacity-90">Certified Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-everest-light">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="w-14 h-14 bg-everest-blue rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class security solutions that protect lives, assets, and properties 
                through innovative technology, professional service, and unwavering commitment to 
                excellence. We aim to make every home, business, and institution in India secure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="w-14 h-14 bg-everest-orange rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be India's most trusted security partner, recognized for our technological excellence, 
                customer-centric approach, and contribution to making communities safer. We envision a 
                future where advanced security is accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Everest Security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group p-6 bg-everest-light rounded-2xl hover:bg-everest-blue transition-all duration-500"
              >
                <div className="w-14 h-14 bg-everest-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                  <value.icon className="w-7 h-7 text-white group-hover:text-everest-blue" />
                </div>
                <h3 className="text-xl font-bold text-everest-blue font-['Rajdhani'] mb-2 group-hover:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-everest-blue">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Rajdhani'] mb-4">
              Our Journey
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Two decades of growth, innovation, and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-everest-orange" />
                  <span className="text-2xl font-bold text-everest-orange font-['Rajdhani']">
                    {milestone.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-white/70 text-sm">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-everest-light p-6 rounded-2xl text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-everest-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-everest-blue font-['Rajdhani']">
                  {member.name}
                </h3>
                <p className="text-everest-orange font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-everest-light">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
              Our Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognized and certified by leading industry bodies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-everest-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-everest-blue" />
                </div>
                <h3 className="text-lg font-bold text-everest-blue font-['Rajdhani'] mb-1">
                  {cert.name}
                </h3>
                <p className="text-gray-500 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
              Our Technology Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with world-leading security technology companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-everest-light p-8 rounded-2xl text-center">
              <Globe className="w-12 h-12 text-everest-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-everest-blue font-['Rajdhani'] mb-2">
                Israeli Technology
              </h3>
              <p className="text-gray-600">
                Strategic partnership with leading Israeli security technology providers 
                for cutting-edge solutions.
              </p>
            </div>

            <div className="bg-everest-light p-8 rounded-2xl text-center">
              <Shield className="w-12 h-12 text-everest-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-everest-blue font-['Rajdhani'] mb-2">
                Global Standards
              </h3>
              <p className="text-gray-600">
                Our products meet international quality and safety standards, 
                ensuring reliability and performance.
              </p>
            </div>

            <div className="bg-everest-light p-8 rounded-2xl text-center">
              <TrendingUp className="w-12 h-12 text-everest-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-everest-blue font-['Rajdhani'] mb-2">
                Continuous Innovation
              </h3>
              <p className="text-gray-600">
                Regular technology updates and training to stay ahead of 
                emerging security threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20 bg-everest-blue">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Rajdhani'] mb-6">
            Join Our Team
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about security 
            and want to make a difference. Explore career opportunities at Everest Security.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white">
              <Star className="w-5 h-5 inline mr-2" />
              Competitive Salary
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white">
              <Users className="w-5 h-5 inline mr-2" />
              Growth Opportunities
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white">
              <MapPin className="w-5 h-5 inline mr-2" />
              Multiple Locations
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
