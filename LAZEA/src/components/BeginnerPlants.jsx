import { useNavigate } from "react-router-dom";

const BeginnerPlants = () => {
  const navigate = useNavigate();
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
    <div className="py-12 bg-teal-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-800 dark:text-teal-200">
          Beginner-Friendly Plants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <div key={plant.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
              <img 
                src={plant.image} 
                alt={plant.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{plant.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{plant.description}</p>
                <div className="flex items-center text-teal-600 dark:text-teal-300 font-medium">
                  <span className="mr-2">{plant.care}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/notfound")}
            className="px-8 py-3 bg-teal-600 dark:bg-teal-700 text-white rounded-lg font-semibold shadow hover:bg-teal-700 dark:hover:bg-teal-800 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default BeginnerPlants;