
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent opacity-90 z-0"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="layout-grid relative z-10 mt-12">
        <div className="max-w-3xl mx-auto text-center animate-slide-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance mb-6">
            Your Business Supply Partner
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 text-balance">
            Wholesale food products, food service solutions, and logistics services designed specifically for businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-button hover:bg-primary/90 button-transition group"
            >
              View Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 button-transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
