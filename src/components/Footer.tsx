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
            <h3 className="text-lg font-bold">United Dairy and Grocers</h3>
            <p className="text-sm text-muted-foreground">
              We've spent 40 years building relationships with top brands to provide exceptional service and quality products at the best prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-[#2a6db6] button-transition" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
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

          {/* Business Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Wholesale Distribution
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Dairy Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Grocery Supply
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Natural & Ethnic Market
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition">
                  Request a Quote
                </Link>
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
                  145 Sun Pac Blvd<br />
                  Brampton, Ontario L6S 5Z6<br />
                  Canada
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:9057932448"
                  className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition"
                >
                  905-793-2448
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a
                  href="mailto:info@uniteddairy.com"
                  className="text-sm text-muted-foreground hover:text-[#2a6db6] button-transition"
                >
                  info@uniteddairy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {currentYear} United Dairy and Grocers. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <Link
              to="/contact"
              className="rounded-full bg-[#2a6db6] px-4 py-2 text-xs font-medium text-white shadow-button hover:bg-[#2a6db6]/90 button-transition mr-4"
            >
              Contact Us
            </Link>
            <p className="text-xs text-muted-foreground">
              Serving businesses across Canada
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;