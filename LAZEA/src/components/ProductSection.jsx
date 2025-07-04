import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductSection = ({ products }) => {
  const [showAll, setShowAll] = useState(false);
  const [viewAllLoading, setViewAllLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const plantName = product.plantName.toLowerCase();
    const lastWatered = product.lastWateredDate ? product.lastWateredDate.toLowerCase() : "";
    const search = searchTerm.toLowerCase();
    return plantName.includes(search) || lastWatered.includes(search);
  });

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  const handleViewAll = () => {
    setViewAllLoading(true);
    setTimeout(() => {
      setShowAll(true);
      setViewAllLoading(false);
    }, 1000);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-green-800 mb-3 font-serif">New Plants Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and manage your green companions
          </p>
        </div>

        {/* Search Input */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search plants by name or watering date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pr-12 rounded-full border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent shadow-sm"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute right-4 top-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Products Grid */}
        {displayedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-square h-64 overflow-hidden">
                    <img
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      src={product.image}
                      alt={product.plantName}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute top-4 right-4 bg-white/90 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{product.plantName}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    
                    {/* Plant Status Indicators */}
                    <div className="space-y-3 mb-5">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-2 ${
                          product.healthStatus === "Healthy" ? "bg-green-500" :
                          product.healthStatus === "Needs Care" ? "bg-yellow-500" : "bg-red-500"
                        }`} />
                        <span className="text-sm font-medium">{product.healthStatus}</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="text-sm text-gray-500">{product.careLevel} Care</span>
                      </div>
                      
                      {product.lastWateredDate && (
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Adding Plant Date: {product.lastWateredDate}
                        </div>
                      )}
                    </div>

                    <Link to={`/details-equipment/${product._id}`}>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                        <span>View Details</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            {!showAll && filteredProducts.length > 8 && (
              <div className="mt-12 text-center">
                <button
                  onClick={handleViewAll}
                  disabled={viewAllLoading}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
                >
                  {viewAllLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </>
                  ) : (
                    "View All Plants"
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">No plants found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or add a new plant to your collection.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;