import React from 'react';
import ProductCarousel from './ProductCarousel';

// Sample data for Featured Products
const featuredProducts = [
  {
    id: "fruit-loops",
    image: "/lovable-uploads/froot-loops.jpg",
    name: "Fruit by the Foot Fruit Flavoured Snacks, Variety Pack",
    price: 2.50,
    originalPrice: null,
    description: "Betty Crocker",
    unit: "128 g",
    unitPrice: "$2.16/100g",
    badge: "Hit of the Month",
    saveAmount: null
  },
  {
    id: "stewing-beef",
    image: "/lovable-uploads/beef.jpg",
    name: "Stewing Beef, Club Pack",
    price: 20.41,
    originalPrice: 22.46,
    unit: null,
    unitPrice: "$22.02/kg $9.99/lb",
    badge: null,
    saveAmount: "$2.05"
  },
  {
    id: "orange-juice",
    image: "/lovable-uploads/orange-juice.jpg",
    name: "Pulp Free Orange Juice",
    price: 3.49,
    originalPrice: 5.00,
    description: "President's Choice",
    unit: "1.54 L",
    unitPrice: "$0.23/100ml",
    badge: "Prepared in Canada",
    saveAmount: "$1.51"
  },
  {
    id: "chicken-thigh",
    image: "/lovable-uploads/chicken.jpg",
    name: "Free From Chicken Thigh, Boneless, Skinless, Club Pack",
    price: 17.40,
    originalPrice: 26.11,
    description: "President's Choice",
    unitPrice: "$16.41/kg $6.99/lb",
    badge: "Prepared in Canada",
    saveAmount: "$8.71"
  },
  {
    id: "cabbage",
    image: "/lovable-uploads/cabbage.jpg",
    name: "Cabbage, Green",
    price: 3.70,
    originalPrice: 4.77,
    unitPrice: "$2.20/kg $1.00/lb",
    badge: null,
    saveAmount: "$1.07"
  },
  {
    id: "rice-stick",
    image: "/lovable-uploads/rice.jpg",
    name: "Longmoon Rice Stick Vermicelli",
    price: 1.49,
    originalPrice: 1.99,
    description: "Rooster",
    unit: "400 g",
    unitPrice: "$0.37/100g",
    badge: null,
    saveAmount: "$0.50"
  }
];

// Sample data for Best Sellers
const bestSellers = [
  {
    id: "pitted-dates",
    image: "/lovable-uploads/dates.jpg",
    name: "Pitted Dates",
    price: 6.49,
    originalPrice: 7.50,
    unit: "907 g",
    unitPrice: "$0.72/100g",
    badge: null,
    saveAmount: "$1.01"
  },
  {
    id: "coffee-beans",
    image: "/lovable-uploads/coffee.jpg",
    name: "Organic Coffee Beans, Dark Roast",
    price: 12.99,
    originalPrice: 14.99,
    description: "Kirkland Signature",
    unit: "907 g",
    unitPrice: "$1.43/100g",
    badge: "Organic",
    saveAmount: "$2.00"
  },
  {
    id: "olive-oil",
    image: "/lovable-uploads/olive-oil.jpg",
    name: "Extra Virgin Olive Oil",
    price: 17.99,
    originalPrice: 19.99,
    description: "Kirkland Signature",
    unit: "2 L",
    unitPrice: "$0.90/100ml",
    badge: "Imported",
    saveAmount: "$2.00"
  },
  {
    id: "almonds",
    image: "/lovable-uploads/almonds.jpg",
    name: "Whole Natural Almonds",
    price: 14.49,
    originalPrice: 16.99,
    unit: "1.36 kg",
    unitPrice: "$1.07/100g",
    badge: null,
    saveAmount: "$2.50"
  },
  {
    id: "paper-towels",
    image: "/lovable-uploads/paper-towels.jpg",
    name: "Create-A-Size Paper Towels, 12-pack",
    price: 19.99,
    originalPrice: 22.99,
    description: "Kirkland Signature",
    unitPrice: "$1.67/roll",
    badge: "Best Value",
    saveAmount: "$3.00"
  },
  {
    id: "rotisserie-chicken",
    image: "/lovable-uploads/rotisserie-chicken.jpg",
    name: "Rotisserie Chicken",
    price: 7.99,
    description: "Hot & Fresh",
    unit: "~1.2 kg",
    unitPrice: "$6.66/kg",
    badge: "Ready to Eat",
    saveAmount: null
  }
];

const ProductCarouselsDemo = () => {
  return (
    <>
      <ProductCarousel title="Featured Products" products={featuredProducts} />
      <ProductCarousel title="Best Sellers" products={bestSellers} />
    </>
  );
};

export default ProductCarouselsDemo;