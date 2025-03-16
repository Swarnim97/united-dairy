import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Brand</h3>
            <p className="text-sm text-muted-foreground">
              Beautifully designed products for every space. Premium quality with minimalist aesthetic.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-[#2a6db6] button-transition" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2a6db6] button-transition" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2a6db6] button-transition" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#2a6db6] button-transition" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  123 Design Street, Creative City, 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:+11234567890"
                  className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a
                  href="mailto:hello@brand.com"
                  className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition"
                >
                  hello@brand.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {currentYear} Brand. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <Link
              to="/signup"
              className="rounded-full bg-[#2a6db6] px-4 py-2 text-xs font-medium text-white shadow-button hover:bg-[#2a6db6]/90 button-transition mr-4"
            >
              Create Account
            </Link>
            <p className="text-xs text-muted-foreground">
              Designed with precision and care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;