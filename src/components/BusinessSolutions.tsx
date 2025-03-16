import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Features data
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

const BusinessSolutions = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-7xl">
        
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
      </div>
    </section>
  );
};

export default BusinessSolutions;