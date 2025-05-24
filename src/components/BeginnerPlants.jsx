const BeginnerPlants = () => {
  const plants = [
    {
      id: 1,
      name: "ZAMIOCULCAS ZAMIIFOLIA",
      description: "Thrives in low light and neglect. Water monthly.",
      care: "🌱 Low maintenance",
      image: "https://i.ibb.co/Z6CqFQcr/OIP.jpg"
    },
    {
      id: 2,
      name: "Pothos",
      description: "Grows rapidly in any light. Tolerates irregular watering.",
      care: "💧 Forgiving with water",
      image: "https://i.ibb.co/jPvVW5SH/POTHOS-PLANT-FEATURE-compressed.jpg"
    },
    {
      id: 3,
      name: "Snake Plant",
      description: "Purifies air and survives droughts. Perfect for forgetful owners.",
      care: "☀️ Adapts to any light",
      image: "https://i.ibb.co/2YW5Qzxr/20190726080052-file-5d3b5bf494ecc-5d3b5c0d289ec.jpg"
    }
  ];

  return (
    <div className="py-12 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-800">
          Beginner-Friendly Plants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <div key={plant.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
              <img 
                src={plant.image} 
                alt={plant.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plant.name}</h3>
                <p className="text-gray-600 mb-3">{plant.description}</p>
                <div className="flex items-center text-teal-600 font-medium">
                  <span className="mr-2">{plant.care}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BeginnerPlants;