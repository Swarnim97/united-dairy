import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Home, ShoppingBag,
  Briefcase, Users, Mail, UserPlus, LogIn
} from 'lucide-react';
import { cn, getAssetUrl } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Products', href: '/products', icon: ShoppingBag },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Contact Us', href: '/contact', icon: Mail },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-elegant" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold font-display tracking-tight"
          >
            <img
              src={getAssetUrl("lovable-uploads/logo.png")}
              alt="Brand Logo"
              className="h-20 w-auto"
              style={{ filter: "brightness(0) invert(29%) sepia(56%) saturate(1552%) hue-rotate(196deg) brightness(93%) contrast(89%)" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium button-transition",
                  location.pathname === link.href
                    ? "text-[#2a6db6]"
                    : "text-muted-foreground hover:text-[#2a6db6]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Authentication Links - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/signin"
              className="text-sm font-medium text-muted-foreground hover:text-[#2a6db6] button-transition"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="rounded-full bg-[#2a6db6] px-4 py-2 text-sm font-medium text-white shadow-button hover:bg-[#2a6db6]/90 button-transition"
            >
              Create Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex items-center justify-between p-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold font-display tracking-tight"
            >
              Brand
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 p-4">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-2 text-lg font-medium",
                    location.pathname === link.href
                      ? "text-[#2a6db6]"
                      : "text-muted-foreground"
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center space-x-2 rounded-full border border-input bg-background py-2 text-sm font-medium"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center space-x-2 rounded-full bg-[#2a6db6] py-2 text-sm font-medium text-white"
              >
                <UserPlus className="h-4 w-4" />
                <span>Create Account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;