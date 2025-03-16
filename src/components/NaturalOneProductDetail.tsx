import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Check, Star, ChevronDown, ChevronUp } from 'lucide-react';
import Layout from '@/components/Layout';

// Product data
const naturalOneProducts = [
  {
    id: "natural-one-orange",
    name: "NOJ Orange",
    description: "Natural One 100% pure orange juice, cold-pressed and never from concentrate. Rich in vitamin C, with no added sugar, preservatives or artificial flavors. Each bottle is crafted from the freshest oranges to deliver a naturally sweet taste and refreshing experience.",
    price: 5.54,
    originalPrice: null,
    image: "lovable-uploads/orange.png",
    unit: "1.5 L",
    unitPrice: "$0.55/100ml",
    badge: "Hit of the Month",
    saveAmount: null,
    stock: 42,
    rating: 4.8,
    reviewCount: 127,
    features: [
      "100% natural juice",
      "No preservatives",
      "No added sugar",
      "Cold-pressed process",
      "Rich in vitamin C",
      "Refrigerate after opening",
      "Kosher certified",
      "Made in a nut-free facility"
    ],
    nutritionalInfo: {
      servingSize: "8 fl oz (240 ml)",
      calories: 110,
      totalFat: "0g",
      sodium: "0mg",
      totalCarbohydrates: "26g",
      sugars: "22g",
      protein: "1g",
      vitaminC: "100%"
    }
  },
  {
    id: "natural-one-guava",
    name: "NOJ Guava",
    description: "Natural One 100% pure guava juice, bursting with exotic flavor and essential nutrients. Made from premium guavas, this refreshing beverage delivers authentic taste with no added sugar or preservatives. Enjoy the rich, tropical flavor and aromatic experience.",
    price: 4.99,
    originalPrice: null,
    image: "lovable-uploads/guava.png",
    unit: "900 ML",
    unitPrice: "$0.55/100ml",
    badge: "Hit of the Month",
    saveAmount: null,
    stock: 36,
    rating: 4.7,
    reviewCount: 93,
    features: [
      "100% natural juice",
      "No preservatives",
      "No added sugar",
      "Cold-pressed process",
      "Source of vitamin C",
      "Refrigerate after opening",
      "Kosher certified",
      "Made in a nut-free facility"
    ],
    nutritionalInfo: {
      servingSize: "8 fl oz (240 ml)",
      calories: 120,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbohydrates: "29g",
      sugars: "20g",
      protein: "1g",
      vitaminC: "80%"
    }
  },
  {
    id: "natural-one-mango",
    name: "NOJ Mango",
    description: "Natural One 100% pure mango juice, capturing the sun-ripened sweetness of premium mangoes. This vibrant juice delivers an authentic tropical taste experience with every sip. Packed with nutrients and refreshing flavor with no artificial additives.",
    price: 4.99,
    originalPrice: null,
    image: "lovable-uploads/mango.png",
    unit: "900 ML",
    unitPrice: "$0.55/100ml",
    badge: "Hit of the Month",
    saveAmount: null,
    stock: 28,
    rating: 4.9,
    reviewCount: 105,
    features: [
      "100% natural juice",
      "No preservatives",
      "No added sugar",
      "Cold-pressed process",
      "Rich in vitamins",
      "Refrigerate after opening",
      "Kosher certified",
      "Made in a nut-free facility"
    ],
    nutritionalInfo: {
      servingSize: "8 fl oz (240 ml)",
      calories: 130,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbohydrates: "31g",
      sugars: "29g",
      protein: "1g",
      vitaminC: "60%"
    }
  }
];

const NaturalOneProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [expanded, setExpanded] = useState({
    description: true,
    features: false,
    nutrition: false,
  });

  // Find the product by ID or default to the first one
  const product = naturalOneProducts.find(p => p.id === productId) || naturalOneProducts[0];
  
  // Related products (excluding the current one)
  const relatedProducts = naturalOneProducts.filter(p => p.id !== product.id);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const toggleSection = (section) => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Layout>
      <div className="pt-20 pb-16 md:pb-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-[#2a6db6]">Home</a>
              </li>
              <li className="text-muted-foreground">/</li>
              <li>
                <a href="/products" className="text-muted-foreground hover:text-[#2a6db6]">Products</a>
              </li>
              <li className="text-muted-foreground">/</li>
              <li>
                <a href="/products/natural-one" className="text-muted-foreground hover:text-[#2a6db6]">Natural One</a>
              </li>
              <li className="text-muted-foreground">/</li>
              <li className="font-medium text-[#2a6db6]">{product.name}</li>
            </ol>
          </nav>
        </div>
        
        {/* Product Detail */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="animate-fade-in">
              <div className="bg-white rounded-lg p-8 flex items-center justify-center shadow-elegant h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-96 object-contain"
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="animate-slide-in-right">
              {product.badge && (
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-4">
                  {product.badge}
                </span>
              )}
              
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < product.rating
                          ? "text-yellow-400 fill-yellow-400 opacity-50"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              <div className="mb-6">
                <p className="text-2xl font-bold text-[#2a6db6]">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {product.unit} • {product.unitPrice}
                </p>
                {product.saveAmount && (
                  <span className="inline-block bg-red-100 text-red-700 text-xs font-medium px-2 py-0.5 rounded mt-1">
                    Save ${product.saveAmount}
                  </span>
                )}
              </div>
              
              <div className="mb-6">
                <p className="text-sm mb-2">
                  Availability:
                  <span className={`ml-2 font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                  </span>
                </p>
              </div>
              
              {/* Short description */}
              <p className="text-muted-foreground mb-6">
                {product.description.split('.')[0]}.
              </p>
              
              {/* Quantity selector and Add to Cart */}
              <div className="flex flex-wrap md:flex-nowrap items-center gap-4 mb-8">
                <div className="flex items-center border border-gray-300 rounded-full w-32">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#2a6db6]"
                    aria-label="Decrease quantity"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <span className="flex-1 text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#2a6db6]"
                    aria-label="Increase quantity"
                  >
                    <ChevronUp className="h-4 w-4" />
                  </button>
                </div>
                
                <button
                  className="flex-1 flex items-center justify-center gap-2 bg-[#2a6db6] hover:bg-[#2a6db6]/90 text-white font-medium py-3 px-6 rounded-full shadow-button button-transition"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
                
                <button
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#2a6db6] text-gray-600 hover:text-[#2a6db6] button-transition"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              
              {/* Product details accordion (mobile) */}
              <div className="md:hidden space-y-4">
                {/* Description */}
                <div className="border-b pb-3">
                  <button
                    onClick={() => toggleSection("description")}
                    className="w-full flex items-center justify-between py-2 font-medium"
                  >
                    <span>Description</span>
                    {expanded.description ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expanded.description && (
                    <p className="text-muted-foreground py-2">{product.description}</p>
                  )}
                </div>
                
                {/* Features */}
                <div className="border-b pb-3">
                  <button
                    onClick={() => toggleSection("features")}
                    className="w-full flex items-center justify-between py-2 font-medium"
                  >
                    <span>Features</span>
                    {expanded.features ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expanded.features && (
                    <ul className="space-y-2 py-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-green-600 mr-2 mt-1 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                {/* Nutritional Info */}
                <div className="border-b pb-3">
                  <button
                    onClick={() => toggleSection("nutrition")}
                    className="w-full flex items-center justify-between py-2 font-medium"
                  >
                    <span>Nutritional Information</span>
                    {expanded.nutrition ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expanded.nutrition && (
                    <div className="py-2">
                      <p className="text-sm font-medium mb-2">
                        Serving Size: {product.nutritionalInfo.servingSize}
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Calories</span>
                          <span>{product.nutritionalInfo.calories}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Total Fat</span>
                          <span>{product.nutritionalInfo.totalFat}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Sodium</span>
                          <span>{product.nutritionalInfo.sodium}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Total Carbohydrates</span>
                          <span>{product.nutritionalInfo.totalCarbohydrates}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Sugars</span>
                          <span>{product.nutritionalInfo.sugars}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Protein</span>
                          <span>{product.nutritionalInfo.protein}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Vitamin C</span>
                          <span>{product.nutritionalInfo.vitaminC}</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs (desktop) */}
          <div className="hidden md:block mt-16">
            <div className="border-b">
              <div className="flex space-x-8">
                <button
                  onClick={() => handleTabChange("description")}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === "description"
                      ? "border-[#2a6db6] text-[#2a6db6]"
                      : "border-transparent text-muted-foreground hover:text-[#2a6db6] hover:border-[#2a6db6]/30"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => handleTabChange("features")}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === "features"
                      ? "border-[#2a6db6] text-[#2a6db6]"
                      : "border-transparent text-muted-foreground hover:text-[#2a6db6] hover:border-[#2a6db6]/30"
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => handleTabChange("nutrition")}
                  className={`py-4 text-sm font-medium border-b-2 ${
                    activeTab === "nutrition"
                      ? "border-[#2a6db6] text-[#2a6db6]"
                      : "border-transparent text-muted-foreground hover:text-[#2a6db6] hover:border-[#2a6db6]/30"
                  }`}
                >
                  Nutritional Information
                </button>
              </div>
            </div>
            
            <div className="py-6">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              )}
              
              {activeTab === "features" && (
                <ul className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {activeTab === "nutrition" && (
                <div>
                  <p className="font-medium mb-4">
                    Serving Size: {product.nutritionalInfo.servingSize}
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Calories</span>
                      <span>{product.nutritionalInfo.calories}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Total Fat</span>
                      <span>{product.nutritionalInfo.totalFat}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Sodium</span>
                      <span>{product.nutritionalInfo.sodium}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Total Carbohydrates</span>
                      <span>{product.nutritionalInfo.totalCarbohydrates}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Sugars</span>
                      <span>{product.nutritionalInfo.sugars}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Protein</span>
                      <span>{product.nutritionalInfo.protein}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Vitamin C</span>
                      <span>{product.nutritionalInfo.vitaminC}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="max-w-7xl mx-auto px-4 mt-20">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <a
                key={relatedProduct.id}
                href={`/products/natural-one/${relatedProduct.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-elegant p-4 transition-all hover:shadow-elegant-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-white rounded-lg p-4 flex items-center justify-center mb-4">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="max-h-48 object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-1 group-hover:text-[#2a6db6] transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {relatedProduct.unit}
                  </p>
                  <p className="font-bold text-[#2a6db6]">
                    ${relatedProduct.price.toFixed(2)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-[#2a6db6] mt-24 py-16 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold sm:text-3xl mb-4">Bulk Ordering Available</h2>
              <p className="mb-8">
                Looking for larger quantities for your business? Contact our wholesale team for special pricing.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2a6db6] hover:bg-white/90 shadow-button button-transition"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NaturalOneProductDetail;