
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

const features = [
  {
    title: 'Premium Quality',
    description: 'Our products are made with the highest quality materials and attention to detail.',
  },
  {
    title: 'Minimalist Design',
    description: 'Clean lines, neutral colors, and simple shapes define our design philosophy.',
  },
  {
    title: 'Functionality',
    description: 'Every product is designed with a purpose, focusing on both form and function.',
  },
  {
    title: 'Sustainability',
    description: 'We're committed to sustainable practices throughout our design and production process.',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="section-spacing bg-white">
        <div className="layout-grid">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Designed with Purpose
            </h2>
            <p className="text-lg text-muted-foreground">
              Our approach blends elegant aesthetics with thoughtful functionality
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
              Ready to transform your space?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Browse our curated collection and find the perfect piece for your home or office.
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
