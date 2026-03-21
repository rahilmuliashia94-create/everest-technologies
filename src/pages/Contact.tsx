import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building2, User, MessageSquare, ChevronRight, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    }, 3000);
  };

  const locations = [
    {
      type: 'Head Office',
      name: 'Everest House',
      address: 'R.K. Park, Between Mavdi Circle & Gondal Circle, 150 Feet Ring Road, Rajkot - 360004, Gujarat, India',
      phone: ['+91 9624696247', '+91 9624796248'],
      email: 'info@everestsecurityonline.com',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0123456789012!2d70.12345678901234!3d22.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzI0LjQiTiA3MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
    },
    {
      type: 'Branch Office',
      name: 'Ahmedabad Office',
      address: '104 - Akik Tower, Opp. Rajpath Club, S.G.Road, Bodakdev, Ahmedabad - 380054, Gujarat, India',
      phone: ['+91 9624696247'],
      email: 'ahmedabad@everestsecurityonline.com',
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0123456789012!2d72.12345678901234!3d23.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzI0LjQiTiA3MsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
    },
  ];

  const quickLinks = [
    { icon: Phone, label: 'Sales', value: '+91 9624696247', href: 'tel:+919624696247' },
    { icon: Phone, label: 'Support', value: '+91 9624796248', href: 'tel:+919624796248' },
    { icon: Mail, label: 'Email', value: 'info@everestsecurityonline.com', href: 'mailto:info@everestsecurityonline.com' },
    { icon: Clock, label: 'Emergency', value: '24/7 Available', href: '#' },
  ];

  const faqs = [
    {
      question: 'How quickly can you install a security system?',
      answer: 'Installation time varies based on the system size and complexity. A basic home system can be installed in 4-6 hours, while commercial installations may take 1-3 days. We provide a detailed timeline during the consultation.',
    },
    {
      question: 'Do you provide maintenance services?',
      answer: 'Yes, we offer comprehensive AMC (Annual Maintenance Contract) packages that include regular maintenance, 24/7 support, and priority service calls.',
    },
    {
      question: 'What is the warranty on your products?',
      answer: 'All our products come with a standard 1-year warranty. Extended warranties up to 5 years are available with our AMC packages.',
    },
    {
      question: 'Can I monitor my system remotely?',
      answer: 'Absolutely! All our modern systems come with mobile app integration that allows you to monitor and control your security system from anywhere in the world.',
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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Rajdhani'] mb-6">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg">
              Ready to secure your premises? Reach out to us for a free consultation 
              and customized security solution.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-8 bg-everest-light border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-everest-blue transition-colors">
                  <link.icon className="w-5 h-5 text-everest-blue group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{link.label}</p>
                  <p className="font-medium text-everest-blue">{link.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white" ref={sectionRef}>
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className={`lg:col-span-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-everest-blue font-['Rajdhani'] mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-everest-blue rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-everest-blue font-['Rajdhani']">
                          Send Us a Message
                        </h3>
                        <p className="text-gray-500">Fill out the form below and we'll respond shortly</p>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-700">
                            Full Name <span className="text-everest-orange">*</span>
                          </Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="rounded-xl border-gray-200 focus:border-everest-blue focus:ring-everest-blue"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700">
                            Email Address <span className="text-everest-orange">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="rounded-xl border-gray-200 focus:border-everest-blue focus:ring-everest-blue"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-700">
                            Phone Number <span className="text-everest-orange">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            className="rounded-xl border-gray-200 focus:border-everest-blue focus:ring-everest-blue"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-gray-700">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="rounded-xl border-gray-200 focus:border-everest-blue focus:ring-everest-blue"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-700">
                          Subject <span className="text-everest-orange">*</span>
                        </Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        >
                          <SelectTrigger className="rounded-xl border-gray-200 focus:border-everest-blue focus:ring-everest-blue">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="products">Product Information</SelectItem>
                            <SelectItem value="services">Service Request</SelectItem>
                            <SelectItem value="quote">Get a Quote</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="distributorship">Distributorship</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700">
                          Message <span className="text-everest-orange">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your security requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={5}
                          className="rounded-xl border-gray-200 focus:border-everest-blue focus:ring-everest-blue resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-everest-blue hover:bg-everest-orange text-white py-6 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-xl group"
                      >
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className={`lg:col-span-2 space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
              {locations.map((location, index) => (
                <div key={index} className="bg-everest-blue rounded-3xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-everest-orange text-sm font-medium">{location.type}</span>
                      <h4 className="font-bold font-['Rajdhani']">{location.name}</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-everest-orange flex-shrink-0 mt-0.5" />
                      <p className="text-white/80">{location.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-everest-orange flex-shrink-0" />
                      <div>
                        {location.phone.map((phone, i) => (
                          <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-white/80 hover:text-everest-orange transition-colors">
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-everest-orange flex-shrink-0" />
                      <a href={`mailto:${location.email}`} className="text-white/80 hover:text-everest-orange transition-colors">
                        {location.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-everest-orange flex-shrink-0" />
                      <p className="text-white/80">{location.hours}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl overflow-hidden h-32">
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title={`${location.name} Location`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-everest-light">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
              Why Choose Everest Security?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best security solutions and customer service
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: '20+ Years Experience', desc: 'Trusted since 2003' },
              { icon: Star, title: '5000+ Clients', desc: 'Across India' },
              { icon: User, title: 'Expert Team', desc: 'Certified professionals' },
              { icon: Clock, title: '24/7 Support', desc: 'Always available' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-everest-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-everest-blue font-['Rajdhani'] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-everest-blue font-['Rajdhani'] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-everest-light p-6 rounded-2xl">
                <h3 className="font-bold text-everest-blue mb-2 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-everest-orange" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-everest-blue">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Rajdhani'] mb-6">
            Get Your Free Security Assessment
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our experts will analyze your requirements and provide a customized security solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919624696247">
              <Button className="bg-everest-orange hover:bg-white hover:text-everest-blue text-white px-8 py-6 rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 9624696247
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
