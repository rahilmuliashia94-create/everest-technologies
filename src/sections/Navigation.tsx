import { useState, useEffect } from 'react';
import { Menu, X, Shield, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/sectors', label: 'Sectors' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`w-full sticky top-0 z-[1000] transition-all duration-500 ${
        isScrolled
          ? 'glass-effect shadow-lg py-3'
          : 'bg-white/95 py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-everest-blue rounded-lg flex items-center justify-center group-hover:bg-everest-orange transition-colors duration-300">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-everest-blue font-['Rajdhani'] leading-tight">
              EVEREST
            </span>
            <span className="text-xs text-everest-orange font-medium tracking-wider">
              SECURITY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group rounded-lg ${
                isActive(link.href)
                  ? 'text-everest-blue bg-everest-light'
                  : 'text-gray-700 hover:text-everest-blue hover:bg-gray-50'
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-everest-orange transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login">
            <Button 
              variant="outline"
              className="border-everest-blue text-everest-blue hover:bg-everest-blue hover:text-white rounded-full px-5"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Client Login
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-everest-blue hover:bg-everest-orange text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-everest-blue hover:text-everest-orange transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 px-4 text-gray-700 hover:text-everest-blue hover:bg-everest-light rounded-lg transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full border-everest-blue text-everest-blue rounded-full">
                <LogIn className="w-4 h-4 mr-2" />
                Client Login
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-everest-blue hover:bg-everest-orange text-white rounded-full">
                Get Quote
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
