import { getAssetUrl } from '@/lib/utils';
import React from 'react';

// Sample brand logos - replace with your actual logo paths
const brandLogos = [
  {
    name: 'Brand 1',
    logo: 'lovable-uploads/zaaki.png',
    alt: 'Brand 1 logo'
  },
  {
    name: 'Brand 2',
    logo: 'lovable-uploads/agropur.png',
    alt: 'Brand 2 logo'
  },
  {
    name: 'Brand 3',
    logo: 'lovable-uploads/Sealtest.png',
    alt: 'Brand 3 logo'
  },
  {
    name: 'Brand 4',
    logo: 'lovable-uploads/gaylea.png',
    alt: 'Brand 4 logo'
  },
  {
    name: 'Brand 5',
    logo: 'lovable-uploads/gray-ridge.png',
    alt: 'Brand 5 logo'
  }
];

// Logo placeholder component with proper TypeScript props
interface LogoPlaceholderProps {
  name: string;
}

const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({ name }) => (
  <div className="flex items-center justify-center bg-gray-100 rounded-lg h-20 w-32 px-4">
    <span className="text-[#2a6db6] font-medium text-sm">{name}</span>
  </div>
);

const BrandTicker: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Trusted by Leading Brands</h2>
        
        {/* Using a technique with absolute positioning for seamless animation */}
        <div className="relative overflow-hidden">
          <div className="flex w-[200%] overflow-hidden">
            {/* First set of logos */}
            <div className="flex w-1/2 animate-marquee justify-around">
              {brandLogos.map((brand, index) => (
                <div key={`ticker-1-${index}`} className="flex-shrink-0 mx-6">
                  {brand.logo ? (
                    <img 
                      src={getAssetUrl(brand.logo)}
                      alt={brand.alt} 
                      className="h-12 sm:h-16 w-auto object-contain"
                    />
                  ) : (
                    <LogoPlaceholder name={brand.name} />
                  )}
                </div>
              ))}
            </div>
            
            {/* Duplicate set of logos for seamless loop */}
            <div className="flex w-1/2 animate-marquee justify-around">
              {brandLogos.map((brand, index) => (
                <div key={`ticker-2-${index}`} className="flex-shrink-0 mx-6">
                  {brand.logo ? (
                    <img 
                      src={getAssetUrl(brand.logo)} 
                      alt={brand.alt} 
                      className="h-12 sm:h-16 w-auto object-contain"
                    />
                  ) : (
                    <LogoPlaceholder name={brand.name} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTicker;