import { Phone, Mail, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="w-full bg-everest-blue-dark text-white py-2.5 px-4 relative z-[1001]">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-2 mb-2 sm:mb-0 animate-fade-in">
          <span className="text-everest-orange font-medium">Welcome to Everest Security</span>
          <span className="hidden sm:inline text-white/70">|</span>
          <span className="text-white/80 hidden sm:inline">Your Safety, Our Priority</span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <a 
            href="tel:+919624696247" 
            className="flex items-center gap-2 hover:text-everest-orange transition-colors duration-300 group"
          >
            <Phone className="w-4 h-4 group-hover:animate-pulse" />
            <span className="font-medium">+91 9624696247</span>
          </a>
          
          <a 
            href="mailto:info@everestsecurityonline.com" 
            className="hidden md:flex items-center gap-2 hover:text-everest-orange transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            <span>info@everestsecurityonline.com</span>
          </a>

          <Link 
            to="/login" 
            className="flex items-center gap-2 px-3 py-1 bg-everest-orange/20 hover:bg-everest-orange rounded-full transition-colors duration-300"
          >
            <LogIn className="w-4 h-4" />
            <span className="font-medium">Client Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
