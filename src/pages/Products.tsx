import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Tag, Heart, ShoppingCart } from 'lucide-react';

// All available products combined
const allProducts = [
  // Natural One Juices
  {
    id: "natural-one-orange",
    name: "NOJ Orange",
    description: "Natural One",
    price: 5.54,
    originalPrice: null,
    image: "lovable-uploads/orange.png",
    unit: "1.5 L",
    unitPrice: "$0.55/100ml",
    badge: "Hit of the Month",
    saveAmount: null,
    category: "Beverages"
  },
  {
    id: "natural-one-guava",
    name: "NOJ Guava",
    description: "Natural One",
    price: 4.99,
    originalPrice: null,
    image: "lovable-uploads/guava.png",
    unit: "900 ML",
    unitPrice: "$0.55/100ml",
    badge: "Hit of the Month",
    saveAmount: null,
    category: "Beverages"
  },
  {
    id: "natural-one-mango",
    name: "NOJ Mango",
    description: "Natural One",
    price: 4.99,
    originalPrice: null,
    image: "lovable-uploads/mango.png",
    unit: "900 ML",
    unitPrice: "$0.55/100ml",
    badge: "Hit of the Month",
    saveAmount: null,
    category: "Beverages"
  },
  
  // Mr. Brownie Products
  {
    id: "mr-brownie-blondie",
    name: "Mr Brownie Blondie",
    price: 4.99,
    originalPrice: 5.50,
    image: "lovable-uploads/blondies.png",
    unit: null,
    unitPrice: "$0.62/unit",
    badge: null,
    saveAmount: "$0.50",
    category: "Snacks"
  },
  {
    id: "mr-brownie-galactic",
    name: "Mr Brownie Galactic",
    price: 4.99,
    originalPrice: 5.50,
    image: "lovable-uploads/galactic.png",
    unit: null,
    unitPrice: "$0.62/unit",
    badge: null,
    saveAmount: "$0.50",
    category: "Snacks"
  },
  {
    id: "mr-brownie-chocolate",
    name: "Mr Brownie Chocolate",
    price: 4.99,
    originalPrice: 5.50,
    image: "lovable-uploads/brownie-choco.png",
    unit: null,
    unitPrice: "$0.62/unit",
    badge: null,
    saveAmount: "$0.50",
    category: "Snacks"
  },
  
  // Best Sellers
  {
    id: "pitted-dates",
    name: "Pitted Dates",
    price: 6.49,
    originalPrice: 7.50,
    image: "lovable-uploads/dates.png",
    unit: "907 g",
    unitPrice: "$0.72/100g",
    badge: null,
    saveAmount: "$1.01",
    category: "Pantry"
  },
  {
    id: "coffee-beans",
    name: "Organic Coffee Beans, Dark Roast",
    price: 12.99,
    originalPrice: 14.99,
    description: "Kirkland Signature",
    image: "lovable-uploads/coffee.png",
    unit: "907 g",
    unitPrice: "$1.43/100g",
    badge: "Organic",
    saveAmount: "$2.00",
    category: "Coffee & Tea"
  },
  {
    id: "olive-oil",
    name: "Extra Virgin Olive Oil",
    price: 17.99,
    originalPrice: 19.99,
    description: "Kirkland Signature",
    image: "lovable-uploads/olive-oil.png",
    unit: "2 L",
    unitPrice: "$0.90/100ml",
    badge: "Imported",
    saveAmount: "$2.00",
    category: "Pantry"
  },
  {
    id: "almonds",
    name: "Whole Natural Almonds",
    price: 14.49,
    originalPrice: 16.99,
    image: "lovable-uploads/almonds.png",
    unit: "1.36 kg",
    unitPrice: "$1.07/100g",
    badge: null,
    saveAmount: "$2.50",
    category: "Pantry"
  },
  {
    id: "paper-towels",
    name: "Bounty Towels, 12-pack",
    price: 19.99,
    originalPrice: 22.99,
    description: "Kirkland Signature",
    image: "lovable-uploads/towel.png",
    unitPrice: "$1.67/roll",
    badge: "Best Value",
    saveAmount: "$3.00",
    category: "Household"
  },
  {
    id: "rotisserie-chicken",
    name: "Rotisserie Chicken",
    price: 7.99,
    description: "Hot & Fresh",
    image: "lovable-uploads/chicken.png",
    unit: "~1.2 kg",
    unitPrice: "$6.66/kg",
    badge: "Ready to Eat",
    saveAmount: null,
    category: "Fresh Foods"
  }
];

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-elegant p-4 h-full flex flex-col">
      {/* Badge (if any) */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            {product.badge}
          </span>
        </div>
      )}
      
      {/* Product Image */}
      <Link 
        to={`/products/${product.id}`} 
        className="block aspect-square bg-white rounded-lg p-4 flex items-center justify-center mb-4 relative overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-48 object-contain group-hover:scale-105 transition-transform"
        />
      </Link>
      
      {/* Product Details */}
      <div className="flex-1 flex flex-col">
        {product.description && (
          <span className="text-xs text-muted-foreground mb-1">
            {product.description}
          </span>
        )}
        
        <Link to={`/products/${product.id}`} className="hover:text-[#2a6db6] transition-colors">
          <h3 className="font-medium text-lg mb-1 leading-tight">
            {product.name}
          </h3>
        </Link>
        
        {product.unit && (
          <p className="text-sm text-muted-foreground mb-1">
            {product.unit}
          </p>
        )}
        
        {product.unitPrice && (
          <p className="text-xs text-muted-foreground">
            {product.unitPrice}
          </p>
        )}
        
        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#2a6db6]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            {product.saveAmount && (
              <span className="text-xs text-red-600 font-medium">
                Save {product.saveAmount}
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <button 
              className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-[#2a6db6] border border-gray-200 hover:border-[#2a6db6] transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4" />
            </button>
            <button 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2a6db6] text-white hover:bg-[#2a6db6]/90 transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  // Extract unique categories
  const categories = Array.from(new Set(allProducts.map(product => product.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filtering
  const filteredProducts = selectedCategory
    ? allProducts.filter(product => product.category === selectedCategory)
    : allProducts;
  
  return (
    <Layout>
      <div className="pt-20 pb-16 md:pb-24">
        {/* Hero */}
        <div className="bg-[#2a6db6]/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 animate-fade-in">
                Our Products
              </h1>
              <p className="text-lg text-muted-foreground animate-slide-in-up">
                Browse our curated collection of premium grocery and dairy products
              </p>
            </div>
          </div>
        </div>
        
        {/* Filter and Products */}
        <div className="max-w-7xl mx-auto px-4 mt-8">
          {/* Category Filters */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                selectedCategory === null
                  ? 'bg-[#2a6db6] text-white'
                  : 'bg-[#2a6db6]/10 text-secondary-foreground hover:bg-[#2a6db6]/20'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-[#2a6db6] text-white'
                    : 'bg-[#2a6db6]/10 text-secondary-foreground hover:bg-[#2a6db6]/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Product Count */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </span>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-scale-in"
                style={{ animationDelay: `${(index % 8) * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-[#2a6db6] mt-24 py-16 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold sm:text-3xl mb-4">Partner With United</h2>
              <p className="mb-8">
                Looking for a reliable distributor for your grocery and dairy needs in the Greater Toronto Area?
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2a6db6] hover:bg-white/90 shadow-button button-transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;