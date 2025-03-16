import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { getAssetUrl } from '@/lib/utils';

interface ProductCardProps {
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
}

const ProductCarouselCard = ({
  id,
  image,
  name,
  price,
  originalPrice,
  description,
  unit,
  unitPrice,
  badge,
  saveAmount
}: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={getAssetUrl(image)} 
          alt={name} 
          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* View Product Button (hidden until hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Link to={`/products/${id}`}>
            <Button 
              className="bg-[#2a6db6] hover:bg-[#1d5a9a] text-white"
              size="sm"
            >
              <Eye className="mr-1 h-4 w-4" />
              View Product
            </Button>
          </Link>
        </div>
        
        {/* Badge (if provided) */}
        {badge && (
          <div className="absolute top-2 left-2 bg-[#2a6db6] text-white text-xs py-1 px-2 rounded">
            {badge}
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        {/* Price */}
        <div className="flex items-baseline mb-1">
          <span className="text-lg font-bold text-red-600">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        {/* Save Amount */}
        {saveAmount && (
          <div className="mb-1">
            <span className="text-xs font-medium text-red-600">SAVE {saveAmount}</span>
          </div>
        )}
        
        {/* Product Name */}
        <h3 className="font-medium text-sm mb-1 line-clamp-2">{name}</h3>
        
        {/* Description */}
        {description && (
          <p className="text-gray-600 text-xs mb-1 line-clamp-2">{description}</p>
        )}
        
        {/* Unit Price */}
        {unitPrice && (
          <p className="text-gray-500 text-xs">{unitPrice}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCarouselCard;