import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useMemo } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

const productShowcase = [
  {
    src: "lovable-uploads/fae6630c-3ee6-4d44-815d-6e97e456cc36.png",
    alt: "Natural One 100% natural juice beverages",
    title: "Natural One",
    description: "Premium 100% natural juice beverages"
  },
  {
    src: "lovable-uploads/e364d746-d5ba-49f8-b29f-9c65864036bf.png",
    alt: "Happy Wolf snack bars variety pack",
    title: "Happy Wolf",
    description: "Nutritious snack bars for on-the-go"
  },
  {
    src: "lovable-uploads/5aaf7f3b-b15c-4098-a6aa-a26c3c089c75.png",
    alt: "Zaaki Akawi soft unripened cheese",
    title: "Zaaki Akawi",
    description: "Traditional soft unripened cheese"
  },
  {
    src: "lovable-uploads/9bc32d2d-5566-464b-b4ba-b1b59a4bdc9a.png",
    alt: "Mr. Brownie rich, moist and fluffy brownies",
    title: "Mr. Brownie",
    description: "Rich, moist gourmet brownies"
  }
];

const Hero = () => {
  const [api, setApi] = React.useState(null);
  const autoplayPlugin = useMemo(() => 
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }), 
    []
  );

  return (
    <section className="relative overflow-hidden mt-20 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <Carousel 
          className="w-full"
          plugins={[autoplayPlugin]}
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {productShowcase.map((product, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="relative w-full">
                  {/* Product Image with Gradient Overlay */}
                  <div className="relative w-full">
                    <img 
                      src={product.src} 
                      alt={product.alt}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 rounded-lg"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-block px-4 py-1 bg-blue-600 text-white font-bold text-sm rounded mb-4">
                      EXCLUSIVE OFFER
                    </div>
                    <h2 className="text-4xl font-bold mb-2">{product.title}</h2>
                    <p className="text-white/80 max-w-lg mb-6">
                      {product.description}. Kosher certified and made in a nut-free facility.
                    </p>
                    
                    {/* Navigation Dots */}
                    <div className="flex space-x-2 mb-4">
                      {productShowcase.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => api?.scrollTo(dotIndex)}
                          className={cn(
                            "w-2 h-2 rounded-full transition-colors",
                            index === dotIndex ? "bg-white" : "bg-white/50"
                          )}
                          aria-label={`Go to slide ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link
                      to={`/products/${product.title.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors"
                    >
                      View Product
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Carousel Navigation Arrows */}
          <CarouselPrevious 
            className="hidden md:flex absolute left-4 top-1/2 bg-white/10 hover:bg-white/20 text-white border-none" 
          />
          <CarouselNext 
            className="hidden md:flex absolute right-4 top-1/2 bg-white/10 hover:bg-white/20 text-white border-none" 
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;