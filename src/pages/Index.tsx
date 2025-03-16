import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import PromotionalOffer from '@/components/PromotionalOffer';
import ShopByCategory from '@/components/ShopByCategory';
import ProductCarousel from '@/components/ProductCarousel';
import BrandTicker from '@/components/BrandTicker';

const featuredProducts = [
  {
    id: "fruit-loops",
    image: "/lovable-uploads/orange.png",
    name: "NOJ Orange",
    price: 5.54,
    originalPrice: null,
    description: "Natural One",
    unit: "1.5 L",
    unitPrice: "$0.55/100ml",
    badge: "Hit of the Month",
    saveAmount: null
  },
  {
    id: "stewing-beef",
    image: "/lovable-uploads/blondies.png",
    name: "Mr Brownie Blondie",
    price: 4.99,
    originalPrice: 5.50,
    unit: null,
    unitPrice: "$0.62/unit",
    badge: null,
    saveAmount: "$0.50"
  },
  {
    id: "orange-juice",
    image: "/lovable-uploads/galactic.png",
    name: "Mr Brownie Galactic",
    price: 4.99,
    originalPrice: 5.50,
    unit: null,
    unitPrice: "$0.62/unit",
    badge: null,
    saveAmount: "$0.50"
  },
  {
    id: "chicken-thigh",
    image: "/lovable-uploads/guava.png",
    name: "NOJ Guava",
    price: 4.99,
    originalPrice: null,
    description: "Natural One",
    unit: "900 ML",
    unitPrice: "$0.55/100ml",
    badge: "Hit of the Month",
    saveAmount: null
  },
  {
    id: "cabbage",
    image: "/lovable-uploads/brownie-choco.png",
    name: "Mr Brownie Chocolate",
    price: 4.99,
    originalPrice: 5.50,
    unit: null,
    unitPrice: "$0.62/unit",
    badge: null,
    saveAmount: "$0.50"
  },
  {
    id: "rice-stick",
    image: "/lovable-uploads/mango.png",
    name: "NOJ Mango",
    price: 4.99,
    originalPrice: null,
    description: "Natural One",
    unit: "900 ML",
    unitPrice: "$0.55/100ml",
    badge: "Hit of the Month",
    saveAmount: null
  }
];

// Sample data for Best Sellers
const bestSellers = [
  {
    id: "pitted-dates",
    image: "/lovable-uploads/dates.png",
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
    image: "/lovable-uploads/coffee.png",
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
    image: "/lovable-uploads/olive-oil.png",
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
    image: "/lovable-uploads/almonds.png",
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
    image: "/lovable-uploads/towel.png",
    name: "Bounty Towels, 12-pack",
    price: 19.99,
    originalPrice: 22.99,
    description: "Kirkland Signature",
    unitPrice: "$1.67/roll",
    badge: "Best Value",
    saveAmount: "$3.00"
  },
  {
    id: "rotisserie-chicken",
    image: "/lovable-uploads/chicken.png",
    name: "Rotisserie Chicken",
    price: 7.99,
    description: "Hot & Fresh",
    unit: "~1.2 kg",
    unitPrice: "$6.66/kg",
    badge: "Ready to Eat",
    saveAmount: null
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section (includes the carousel) */}
      <Hero />
      
      {/* Promotional Offer */}
      <PromotionalOffer />
      
      {/* Featured Products Carousel */}
      <ProductCarousel title="Featured Products" products={featuredProducts} />

      <BrandTicker/>
      
      {/* Shop By Category */}
      <ShopByCategory />
      
      {/* Best Sellers Carousel */}
      <ProductCarousel title="Best Sellers" products={bestSellers} />
      
      {/* CTA Section */}
      <section className="bg-[#2a6db6] py-24 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to streamline your business supplies?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of businesses who trust us with their wholesale needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="w-full sm:w-auto rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2a6db6] hover:bg-white/90 shadow-button button-transition"
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-full bg-[#2a6db6] border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-[#2a6db6]/90 button-transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;