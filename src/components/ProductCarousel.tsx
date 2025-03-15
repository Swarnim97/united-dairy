
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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

const ProductCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Featured Products</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our curated selection of premium wholesale products for your business
        </p>
      </div>
      
      <Carousel className="w-full max-w-5xl mx-auto">
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
  );
};

export default ProductCarousel;
