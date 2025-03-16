import React, { useMemo } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ProductCarouselCard from './ProductCarouselCard';

interface ProductCarouselProps {
  title: string;
  products: Array<{
    id: string;
    image: string;
    name: string;
    price: number;
    originalPrice?: number;
    description?: string;
    unit?: string;
    unitPrice?: string;
    badge?: string;
    saveAmount?: string;
  }>;
}

const ProductCarousel = ({ title, products }: ProductCarouselProps) => {
  const autoplayPlugin = useMemo(() => 
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }), 
    []
  );

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
        
        <div className="relative px-8">
          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[autoplayPlugin]}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-2">
                  <ProductCarouselCard {...product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-200 shadow-sm" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-200 shadow-sm" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;