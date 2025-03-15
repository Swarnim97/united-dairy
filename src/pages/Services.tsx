
import { Check } from 'lucide-react';
import Layout from '@/components/Layout';

const services = [
  {
    title: 'Interior Design Consultation',
    description: 'Get expert advice on how to transform your space with our products.',
    features: [
      'One-on-one consultation with a design expert',
      'Personalized product recommendations',
      'Space planning and layout suggestions',
      'Color scheme and styling advice',
      'Follow-up support and revisions'
    ],
    price: 'From $199',
    popular: true
  },
  {
    title: 'Product Customization',
    description: 'Create bespoke pieces tailored to your specific needs and preferences.',
    features: [
      'Custom dimensions and proportions',
      'Material and finish selection',
      'Hardware and detail customization',
      'Regular updates throughout the process',
      'Extended warranty on custom pieces'
    ],
    price: 'Custom quote',
    popular: false
  },
  {
    title: 'Installation & Assembly',
    description: 'Professional setup of your purchased products by our skilled team.',
    features: [
      'Professional installation by certified experts',
      'Careful handling of all items',
      'Placement according to design plan',
      'Packaging removal and cleanup',
      'Basic functionality tutorial'
    ],
    price: 'From $99',
    popular: false
  },
  {
    title: 'Corporate Outfitting',
    description: 'Complete solutions for offices, hospitality, and commercial spaces.',
    features: [
      'Bulk pricing and volume discounts',
      'Project management from concept to completion',
      'Space planning and 3D visualization',
      'Coordinated delivery and installation',
      'Post-installation support'
    ],
    price: 'Custom quote',
    popular: false
  }
];

const Services = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 md:pb-24">
        {/* Hero */}
        <div className="bg-secondary py-16 md:py-24">
          <div className="layout-grid">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 animate-fade-in">
                Services
              </h1>
              <p className="text-lg text-muted-foreground animate-slide-in-up">
                We offer a range of professional services to help you make the most of our products and create your ideal space.
              </p>
            </div>
          </div>
        </div>
        
        {/* Services */}
        <div className="layout-grid mt-16">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col rounded-2xl p-8 shadow-elegant transition-all hover:shadow-elegant-lg animate-slide-in-up ${
                  service.popular ? 'border-2 border-primary' : 'border border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-4 right-6 bg-primary px-4 py-1 text-xs font-medium text-white rounded-full">
                    Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <p className="text-lg font-semibold mb-4">{service.price}</p>
                  <button className={`w-full rounded-md py-2.5 px-4 text-sm font-medium transition-colors ${
                    service.popular 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}>
                    Request Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Process Section */}
        <div className="bg-secondary mt-24 py-16">
          <div className="layout-grid">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl">How It Works</h2>
              <p className="mt-4 text-muted-foreground">Our simple process ensures a smooth experience</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { step: '01', title: 'Consultation', description: 'Schedule an initial consultation to discuss your needs.' },
                { step: '02', title: 'Proposal', description: 'Receive a detailed proposal tailored to your requirements.' },
                { step: '03', title: 'Execution', description: 'We implement the service with attention to every detail.' },
                { step: '04', title: 'Follow-up', description: 'Enjoy continued support after service completion.' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="layout-grid mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold sm:text-3xl mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss how our services can help bring your vision to life.
            </p>
            <button className="rounded-md bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
