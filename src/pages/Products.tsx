import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: 'Minimalist Ceramic Vase',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1602816681424-c488970efab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW1hbCUyMHZhc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    category: 'Decor'
  },
  {
    id: 2,
    name: 'Marble Coffee Table',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW1hbCUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Furniture'
  },
  {
    id: 3,
    name: 'Scandinavian Wooden Chair',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1pbmltYWwlMjBjaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Furniture'
  },
  {
    id: 4,
    name: 'Linen Throw Pillow',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Textile'
  },
  {
    id: 5,
    name: 'Modern Desk Lamp',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    category: 'Lighting'
  },
  {
    id: 6,
    name: 'Handcrafted Wall Art',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1582966839614-8164255abf2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW1hbCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Art'
  },
  {
    id: 7,
    name: 'Premium Wool Rug',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1531895861205-9042b5403a4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW1hbCUyMHJ1Z3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Textile'
  },
  {
    id: 8,
    name: 'Bamboo Storage Basket',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1605905337371-591af8044b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMGJhc2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Storage'
  },
  {
    id: 9,
    name: 'Glass Pendant Light',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbCUyMHBlbmRhbnQlMjBsaWdodHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Lighting'
  },
  {
    id: 10,
    name: 'Wooden Serving Tray',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1541456054-7a4d9559c1c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMHRyYXl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    category: 'Kitchen'
  },
  {
    id: 11,
    name: 'Concrete Planter',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMHBsYW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    category: 'Garden'
  },
  {
    id: 12,
    name: 'Walnut Bookshelf',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1515511624704-b3be465296ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWluaW1hbCUyMGJvb2tzaGVsZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Furniture'
  },
  {
    id: 13,
    name: 'Cotton Throw Blanket',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1586774098851-1ce0122c3ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbCUyMGJsYW5rZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    category: 'Textile'
  },
  {
    id: 14,
    name: 'Geometric Wall Clock',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1560174972-ae0c7dad45a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMGNsb2NrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Decor'
  },
  {
    id: 15,
    name: 'Metal Floor Lamp',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1606170033648-5d55a3efd3d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWluaW1hbCUyMGZsb29yJTIwbGFtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Lighting'
  },
  {
    id: 16,
    name: 'Glass Carafe Set',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1609108585228-7eb901e9d195?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWluaW1hbCUyMGNhcmFmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    category: 'Kitchen'
  },
  {
    id: 17,
    name: 'Terrazzo Coasters',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1529186607619-44d4128b1735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbCUyMGNvYXN0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    category: 'Kitchen'
  },
  {
    id: 18,
    name: 'Leather Desk Pad',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1585314062604-1a357de8b000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW1hbCUyMGRlc2slMjBwYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    category: 'Office'
  }
];

// More products to make 9x9 grid (81 total)
const generateMoreProducts = () => {
  const products = [...sampleProducts];
  
  // Generate more products based on the sample ones until we have 81
  while (products.length < 81) {
    const template = sampleProducts[products.length % sampleProducts.length];
    products.push({
      id: products.length + 1,
      name: `${template.name} - Edition ${Math.floor(products.length / 18) + 1}`,
      price: template.price + (Math.random() * 10 - 5), // Slight price variation
      image: template.image,
      category: template.category
    });
  }
  
  return products;
};

const Products = () => {
  const [products, setProducts] = useState(generateMoreProducts());
  const [isLoading, setIsLoading] = useState(false);
  
  // Categories for filtering
  const categories = Array.from(new Set(products.map(product => product.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filtering
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;
  
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
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="animate-scale-in"
                style={{ animationDelay: `${(product.id % 10) * 0.05}s` }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
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
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2a6db6] hover:bg-white/90 shadow-button button-transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;