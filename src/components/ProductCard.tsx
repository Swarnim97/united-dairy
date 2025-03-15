
import { useState } from 'react';
import { ShoppingCart, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  const handleAddToOrder = () => {
    toast({
      title: "Added to Order",
      description: `${name} has been added to your order.`,
    });
  };

  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-elegant transition-all duration-300 hover:shadow-elegant-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        {/* Category Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {category}
          </span>
        </div>
        
        {/* Image */}
        <div
          className={cn(
            "absolute inset-0 bg-muted",
            isLoading ? "animate-pulse" : ""
          )}
        >
          <img
            src={image}
            alt={name}
            className={cn(
              "h-full w-full object-cover transition-transform duration-500",
              isHovered ? "scale-105" : "scale-100",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 text-base font-medium">{name}</h3>
        <p className="mt-1 font-medium text-primary">${price.toFixed(2)}</p>
        <button
          onClick={handleAddToOrder}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 px-4 text-sm font-medium text-white shadow-button transition-all hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          <span>Add to Order</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
