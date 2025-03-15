
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import Layout from '@/components/Layout';
import { useToast } from '@/components/ui/use-toast';

const SignIn = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'Success',
        description: 'You have successfully signed in.',
      });
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="pt-20 pb-16 md:pb-24 flex justify-center items-center">
        <div className="layout-grid">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-elegant animate-scale-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Sign In</h1>
              <p className="text-muted-foreground mt-2">
                Welcome back! Please sign in to continue.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
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
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs text-primary hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Enter your password"
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
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-muted-foreground"
                >
                  Remember me for 30 days
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary p-3 text-sm font-medium text-white shadow-button hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70"
              >
                {isLoading ? (
                  <>Signing in...</>
                ) : (
                  <>
                    <LogIn className="h-4 w-4" /> Sign In
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="font-medium text-primary hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
