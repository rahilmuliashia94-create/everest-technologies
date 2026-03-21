import { useState } from 'react';
import { Shield, Eye, EyeOff, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Demo credentials check
      if (formData.username === 'demo' && formData.password === 'demo123') {
        navigate('/client');
      } else {
        setError('Invalid username or password. Try demo/demo123');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-everest-blue via-everest-blue-dark to-black flex items-center justify-center py-12 px-4">
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

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="w-14 h-14 bg-everest-orange rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-bold text-white font-['Rajdhani'] leading-tight">
                EVEREST
              </span>
              <span className="text-sm text-everest-orange font-medium tracking-wider">
                SECURITY
              </span>
            </div>
          </Link>
          <p className="text-white/60 mt-4">Client Portal Login</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-everest-blue font-['Rajdhani']">
                Welcome Back
              </h1>
              <p className="text-gray-500 text-sm">
                Sign in to access your account
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-700">
                  Username
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                    className="pl-10 rounded-xl border-gray-200 focus:border-everest-blue focus:ring-everest-blue"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className="pl-10 pr-10 rounded-xl border-gray-200 focus:border-everest-blue focus:ring-everest-blue"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="w-4 h-4 rounded border-gray-300 text-everest-blue focus:ring-everest-blue"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-everest-blue hover:text-everest-orange transition-colors">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-everest-blue hover:bg-everest-orange text-white py-6 rounded-xl text-base font-semibold transition-all duration-300 group"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Sign In
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Don't have an account?{' '}
                <Link to="/contact" className="text-everest-blue hover:text-everest-orange font-medium transition-colors">
                  Contact us
                </Link>
              </p>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="bg-everest-light p-4 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Demo Credentials:</span>{' '}
              <span className="text-everest-blue">username: demo</span>{' '}
              <span className="text-gray-400">|</span>{' '}
              <span className="text-everest-blue">password: demo123</span>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-white/60 hover:text-white text-sm transition-colors">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
