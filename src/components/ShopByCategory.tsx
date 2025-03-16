import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 1,
    title: "Office Supplies",
    description: "Paper, writing instruments, and organizational tools",
    imageUrl: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    link: "/products/office-supplies"
  },
  {
    id: 2,
    title: "Food & Beverages",
    description: "Wholesale food and drinks for businesses",
    imageUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    link: "/products/food-beverages"
  },
  {
    id: 3,
    title: "Electronics",
    description: "Computers, printers, and office technology",
    imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    link: "/products/electronics"
  },
  {
    id: 4,
    title: "Cleaning Supplies",
    description: "Professional-grade cleaning and maintenance products",
    imageUrl: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    link: "/products/cleaning-supplies"
  }
];

const ShopByCategory = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Shop By Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {categories.map((category) => (
              <CategoryCard 
                key={category.id}
                title={category.title}
                description={category.description}
                imageUrl={category.imageUrl}
                link={category.link}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button 
              className="bg-[#2a6db6] hover:bg-[#1d5a9a]"
              size="lg"
              asChild
            >
              <Link to="/products">
                <ShoppingCart className="mr-2" size={18} />
                View All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  };

export default ShopByCategory;