import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "BusinessPort has been instrumental in streamlining our office supply chain. Their wholesale pricing and reliable delivery have saved us both time and money.",
    author: "Sarah Johnson",
    position: "Operations Manager",
    company: "TechGrowth Inc."
  },
  {
    id: 2,
    quote: "As a restaurant owner, I need reliable food service suppliers. BusinessPort delivers quality products on time, every time, which is essential for our daily operations.",
    author: "Michael Chen",
    position: "Owner",
    company: "Fusion Bistro"
  },
  {
    id: 3,
    quote: "Their customer service is exceptional. Any time we've had questions or special requirements, the team has gone above and beyond to accommodate our needs.",
    author: "Jennifer Williams",
    position: "Procurement Director",
    company: "Global Solutions Ltd."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;