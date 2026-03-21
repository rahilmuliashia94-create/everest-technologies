import { Shield, Facebook, Twitter, Linkedin, Youtube, ArrowRight, LogIn } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Sectors', href: '/sectors' },
    { label: 'Contact', href: '/contact' },
  ];

  const services = [
    'Bank Security',
    'ATM Protection',
    'GPRS Tracking',
    'Warehouse Security',
    'Employee Tracking',
    'Decorative Fencing',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-everest-blue-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-everest-orange rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-['Rajdhani'] leading-tight">
                  EVEREST
                </span>
                <span className="text-xs text-everest-orange font-medium tracking-wider">
                  SECURITY
                </span>
              </div>
            </Link>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Leading security solutions provider with Israeli technology expertise. 
              Protecting what matters most since 2003. We offer comprehensive security 
              solutions for homes, businesses, and institutions across India.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-everest-orange transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Client Login CTA */}
            <Link to="/login">
              <Button className="bg-everest-orange hover:bg-white hover:text-everest-blue text-white rounded-full">
                <LogIn className="w-4 h-4 mr-2" />
                Client Login
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-['Rajdhani'] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-everest-orange transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-['Rajdhani'] mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/70 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-everest-orange rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold font-['Rajdhani'] mb-6">Stay Updated</h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe for latest security tips, product updates, and exclusive offers.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl focus:border-everest-orange focus:ring-everest-orange"
              />
              <Button
                type="submit"
                className="w-full bg-everest-orange hover:bg-white hover:text-everest-blue text-white rounded-xl transition-all duration-300"
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Everest Security Pvt. Ltd. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <Link to="/" className="text-white/60 hover:text-everest-orange text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-white/60 hover:text-everest-orange text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/login" className="text-white/60 hover:text-everest-orange text-sm transition-colors">
                Client Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
