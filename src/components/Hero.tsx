
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface CarouselImage {
  src: string;
  alt: string;
}

const images: CarouselImage[] = [
  {
    src: "/lovable-uploads/fae6630c-3ee6-4d44-815d-6e97e456cc36.png",
    alt: "Natural One 100% natural juice beverages"
  },
  {
    src: "/lovable-uploads/e364d746-d5ba-49f8-b29f-9c65864036bf.png",
    alt: "Happy Wolf snack bars variety pack"
  },
  {
    src: "/lovable-uploads/5aaf7f3b-b15c-4098-a6aa-a26c3c089c75.png",
    alt: "Zaaki Akawi soft unripened cheese"
  },
  {
    src: "/lovable-uploads/9bc32d2d-5566-464b-b4ba-b1b59a4bdc9a.png",
    alt: "Mr. Brownie rich, moist and fluffy brownies"
  }
];

const Hero = () => {
  const [api, setApi] = React.useState<any>(null);
  const autoplayPlugin = React.useMemo(() => 
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }), 
    []
  );

  return (
    <section className="relative py-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent opacity-90 z-0"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Hero Content */}
      <div className="layout-grid relative z-10 mb-12">
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
      
      {/* Carousel Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of premium wholesale products for your business
          </p>
        </div>
        
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          plugins={[autoplayPlugin]}
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-full lg:basis-full">
                <div className="p-1 h-full">
                  <div className="rounded-xl overflow-hidden shadow-elegant bg-white p-2 h-full">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className={cn(
                        "w-full h-auto object-contain rounded-lg",
                        "transition-all duration-300 hover:scale-[1.02]"
                      )}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-4 gap-2">
            <CarouselPrevious className="static translate-y-0 h-10 w-10" />
            <CarouselNext className="static translate-y-0 h-10 w-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
