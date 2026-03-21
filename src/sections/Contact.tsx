import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
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
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      content: 'Everest House, R.K. Park, Between Mavdi Circle & Gondal Circle, 150 Feet Ring Road, Rajkot - 360004, Gujarat, India',
    },
    {
      icon: MapPin,
      title: 'Branch Office',
      content: '104 - Akik Tower, Opp. Rajpath Club, S.G.Road, Bodakdev, Ahmedabad - 380054',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9624696247\n+91 9624796248',
      href: 'tel:+919624696247',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@everestsecurityonline.com',
      href: 'mailto:info@everestsecurityonline.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: '24/7 Support Available',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-everest-light relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-everest-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-everest-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-1.5 bg-white text-everest-blue text-sm font-semibold rounded-full mb-4 shadow-sm transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Get In Touch
          </span>
          
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-everest-blue font-['Rajdhani'] mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Contact Us
          </h2>
          
          <p
            className={`text-gray-600 text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Ready to secure your premises? Contact us for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info - Left Side */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-everest-blue rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold font-['Rajdhani'] mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-everest-orange" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{item.title}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-white/80 text-sm hover:text-everest-orange transition-colors whitespace-pre-line"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-white/80 text-sm whitespace-pre-line">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0123456789012!2d70.12345678901234!3d22.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzI0LjQiTiA3MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Everest Security Location"
              />
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-everest-blue font-['Rajdhani'] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-everest-blue font-['Rajdhani'] mb-6">
                    Send Us a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
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

                    <div className="grid md:grid-cols-2 gap-6">
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
                          </SelectContent>
                        </Select>
                      </div>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
