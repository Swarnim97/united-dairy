import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const PromotionalOffer = () => {
  return (
    <div className="bg-[#2a6db6] text-white py-6 px-4 rounded-lg overflow-hidden mx-auto mt-2 mb-8 max-w-7xl mt-10">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-wide">SPECIAL OFFERS FOR BUSINESS MEMBERS</h2>
        <p className="text-lg mb-4 max-w-3xl mx-auto">Save on bulk purchases and get exclusive pricing on office and food service supplies</p>
        <Button 
          className="bg-white hover:bg-gray-100 text-[#2a6db6] font-bold py-3 px-8 rounded-md"
          asChild
        >
          <Link to="/products">
            View Offers
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PromotionalOffer;