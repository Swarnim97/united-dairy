
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, UserPlus, Check } from 'lucide-react';
import Layout from '@/components/Layout';
import { useToast } from '@/components/ui/use-toast';

const SignUp = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate account creation
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'Account Created',
        description: 'Your account has been created successfully.',
      });
    }, 1500);
  };
  
  // Password strength indicators
  const passwordStrength = () => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };
  
  const passwordStrengthColor = () => {
    const strength = passwordStrength();
    if (strength === 0) return 'bg-transparent';
    if (strength === 1) return 'bg-red-500';
    if (strength === 2) return 'bg-orange-500';
    if (strength === 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };
  
  return (
    <Layout>
      <div className="pt-20 pb-16 md:pb-24 flex justify-center items-center">
        <div className="layout-grid">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-elegant animate-scale-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Create Account</h1>
              <p className="text-muted-foreground mt-2">
                Join us to explore our premium products.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Create a password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                
                {/* Password strength meter */}
                {password && (
                  <div className="mt-2 space-y-2">
                    <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full ${passwordStrengthColor()} transition-all duration-300`}
                        style={{ width: `${passwordStrength() * 25}%` }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <div className={`flex items-center gap-1 ${password.length >= 8 ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {password.length >= 8 ? <Check className="h-3 w-3" /> : null} 8+ characters
                      </div>
                      <div className={`flex items-center gap-1 ${/[A-Z]/.test(password) ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {/[A-Z]/.test(password) ? <Check className="h-3 w-3" /> : null} Uppercase
                      </div>
                      <div className={`flex items-center gap-1 ${/[0-9]/.test(password) ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {/[0-9]/.test(password) ? <Check className="h-3 w-3" /> : null} Number
                      </div>
                      <div className={`flex items-center gap-1 ${/[^A-Za-z0-9]/.test(password) ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {/[^A-Za-z0-9]/.test(password) ? <Check className="h-3 w-3" /> : null} Special char
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                  required
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-muted-foreground"
                >
                  I agree to the{' '}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary p-3 text-sm font-medium text-white shadow-button hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70"
              >
                {isLoading ? (
                  <>Creating account...</>
                ) : (
                  <>
                    <UserPlus className="h-4 w-4" /> Create Account
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link
                  to="/signin"
                  className="font-medium text-primary hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
