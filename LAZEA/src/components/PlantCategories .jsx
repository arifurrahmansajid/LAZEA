import React from "react";
import { Tooltip as ReactTooltip } from 'react-tooltip';

const PlantCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Succulents",
      image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tooltip: "Low-maintenance, drought-resistant plants"
    },
    {
      id: 2,
      name: "Tropical Plants",
      image: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tooltip: "Lush plants that thrive in humid environments"
    },
    {
      id: 3,
      name: "Ferns",
      image: "https://i.ibb.co/B5nWJK2Q/fern-4863373-1280.jpg",
      tooltip: "Delicate, shade-loving foliage plants"
    },
    {
      id: 4,
      name: "Bonsai",
      image: "https://i.ibb.co/MxY4d7z5/bonsai-7362259-1280.jpg",
      tooltip: "Miniature trees requiring careful pruning"
    },
  ];

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-800">
          Explore Plant Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 relative"
              data-tooltip-id={`tooltip-${category.id}`}
              data-tooltip-content={category.tooltip}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-xl font-semibold hover:border-b-2 hover:border-green-300 transition-all">
                    {category.name}
                  </p>
                </div>
              </div>
              <ReactTooltip 
                id={`tooltip-${category.id}`} 
                place="top" 
                effect="solid" 
                className="z-50"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantCategories;