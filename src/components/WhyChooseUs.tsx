import React from 'react';
import { CheckCircle, CreditCard, Truck, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Quality Products",
      description: "All our products meet rigorous quality standards to ensure business reliability."
    },
    {
      icon: CreditCard,
      title: "Wholesale Pricing",
      description: "Competitive pricing that helps your business save on essential supplies."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Reliable shipping with options for express delivery when you need it most."
    },
    {
      icon: Clock,
      title: "Time Saving",
      description: "Our streamlined ordering process helps you focus on running your business."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose BusinessPort</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide wholesale business supplies to companies of all sizes. Our goal is to make purchasing easy, affordable, and hassle-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-[#2a6db6]" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;