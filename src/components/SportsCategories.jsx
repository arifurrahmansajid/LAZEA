import React from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip';

const SportsCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Tennis sport",
      image: "https://i.ibb.co.com/cbsNd3m/athletex-sport-category-img-1-opt.jpg",
    },
    {
      id: 2,
      name: "Gymnastic",
      image: "https://i.ibb.co.com/2tqPtrJ/athletex-sport-category-img-4-opt.jpg",
      description: "Discover premium basketball gear.",
    },
    {
      id: 3,
      name: "Cycling",
      image: "https://i.ibb.co.com/hcMD9nK/athletex-sport-category-img-2-opt.jpg",
      description: "Find the best equipment for tennis.",
    },
    {
      id: 4,
      name: "Running",
      image: "https://i.ibb.co.com/hgKwgB9/athletex-sport-category-img-3-opt.jpg",
      description: "Browse top-quality swimming gear.",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Explore Sports Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 relative"
            >
              <ReactTooltip place="top" effect="solid" />

              <div className="relative image-container">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover hover-zoom"
                />
                <div className="absolute bottom-4 left-5 flex items-center justify-center">
                  <p className="text-white text-xl font-semibold hover:border-b-2 hover:border-orange-600">
                    {category.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsCategories;