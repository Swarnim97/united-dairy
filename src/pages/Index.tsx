
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

const features = [
  {
    title: 'Retail Food Supply',
    description: 'Premium quality food products for retailers at competitive wholesale prices.',
  },
  {
    title: 'Food Service',
    description: 'Complete food service solutions for restaurants, caterers, and institutional kitchens.',
  },
  {
    title: '3PL Services',
    description: 'Efficient third-party logistics with temperature-controlled storage and distribution.',
  },
  {
    title: 'Wholesale Solutions',
    description: 'Bulk purchasing options designed specifically for business customers.',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section (now includes the carousel) */}
      <Hero />
      
      {/* Features Section */}
      <section className="section-spacing bg-white">
        <div className="layout-grid">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Business Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive wholesale services tailored for businesses of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col p-6 bg-secondary rounded-lg animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center text-primary font-medium link-underline"
            >
              Explore our collection <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="layout-grid">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to streamline your business supplies?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join thousands of businesses who trust us with their wholesale needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="w-full sm:w-auto rounded-full bg-white px-6 py-3 text-sm font-medium text-primary hover:bg-white/90 shadow-button button-transition"
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-full bg-primary border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-primary/90 button-transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
