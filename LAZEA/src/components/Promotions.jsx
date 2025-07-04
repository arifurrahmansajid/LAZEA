import React from "react";
import { FaLeaf, FaRegClock, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Promotions = () => {
  const navigate = useNavigate();
  const deals = [
    {
      id: 1,
      title: "Starter Plant Bundle",
      description: "Perfect for beginners - 3 easy-care plants with guide",
      discount: "30% OFF",
      originalPrice: "$99",
      price: "$69",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500",
      expires: "06/30/2025"
    },
    {
      id: 2,
      title: "Premium Potting Mix",
      description: "Organic blend for tropical plants (5lb bag)",
      discount: "BUY 1 GET 1",
      originalPrice: "$24",
      price: "$24",
      image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=500",
      expires: "06/15/2025"
    },
    {
      id: 3,
      title: "Annual Membership",
      description: "Get free shipping + exclusive plant care workshops",
      discount: "20% OFF",
      originalPrice: "$50/year",
      price: "$40/year",
      image: "https://i.ibb.co/jPjzCs4P/image.png",
      expires: "Limited time"
    }
  ];

  return (
    <div className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-3 font-serif">
            Seasonal Promotions
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Limited-time offers to help your garden thrive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {deal.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-green-600 font-bold text-xl">{deal.price}</span>
                    {deal.originalPrice && (
                      <span className="text-gray-400 line-through ml-2">{deal.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-amber-600">
                    <FaRegClock className="mr-1" />
                    <span>{deal.expires}</span>
                  </div>
                </div>

                <button onClick={() => navigate("/notfound")} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotions;