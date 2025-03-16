import { Check, ArrowRight, Phone, CalendarDays } from 'lucide-react';
import Layout from '@/components/Layout';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import BusinessSolutions from '@/components/BusinessSolutions';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary to-primary/5 pt-24 pb-20">
        <div className="layout-grid">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">Business Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in">
              B2B <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-in-up max-w-2xl mx-auto">
              We offer specialized wholesale services designed to streamline your business procurement, reduce costs, and increase operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-md bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                Get Started
              </button>
              <button className="rounded-md bg-white border border-gray-200 px-6 py-3 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Business Solutions Section with Card Design */}
      <div className="py-20 bg-white">
        <div className="layout-grid">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-block px-3 py-1 bg-secondary/20 rounded-full mb-3">
            </div>
            <h2 className="text-3xl font-bold mb-4">Comprehensive Business Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored wholesale services that help your business thrive in a competitive marketplace.
            </p>
          </div>
          
          <BusinessSolutions/>
        </div>
      </div>
      
      {/* Why Choose Us Section with Background */}
      <div className="py-20 bg-gray-50">
        <div className="layout-grid">
          <WhyChooseUs />
        </div>
      </div>
      
      {/* CTA Section with Pattern Background */}
      <div className="py-24 bg-primary/5 relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
        
        <div className="layout-grid relative z-10">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to optimize your business procurement?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our B2B specialists today to discuss wholesale solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-md bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition-colors shadow-lg flex items-center justify-center gap-2">
                <Phone size={16} /> Schedule a Call
              </button>
              <button className="rounded-md bg-secondary px-6 py-3 text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2">
                <CalendarDays size={16} /> Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;