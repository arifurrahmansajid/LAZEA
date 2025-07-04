import React from "react";
import { useNavigate } from "react-router-dom";
const UpcomingEvents = () => {
  const navigate = useNavigate();
  const events = [
    {
      id: 1,
      title: "Urban Gardening Workshop",
      date: "June 5, 2025",
      location: "Online (Zoom)",
      description: "Learn to grow plants in small spaces with expert tips.",
      icon: "🌱"
    },
    {
      id: 2,
      title: "Succulent Propagation Class",
      date: "June 12, 2025",
      location: "Botanical Garden, Portland",
      description: "Hands-on session for multiplying your succulent collection.",
      icon: "🌵"
    },
    {
      id: 3,
      title: "Plant Swap Meetup",
      date: "June 20, 2025",
      location: "Central Park, New York",
      description: "Trade rare plants with fellow enthusiasts.",
      icon: "🔄"
    },
    {
      id: 4,
      title: "Terrarium Building Workshop",
      date: "July 3, 2025",
      location: "Green Thumb Nursery, Austin",
      description: "Create your own miniature ecosystem.",
      icon: "🏺"
    }
  ];

  return (
    <div className="py-10 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-800">
          Upcoming Plant Events
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <li
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-400"
            >
              <div className="text-4xl mb-3">{event.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-1 flex items-center">
                <span className="mr-2">📅</span> {event.date}
              </p>
              <p className="text-gray-600 mb-1 flex items-center">
                <span className="mr-2">📍</span> {event.location}
              </p>
              <p className="text-gray-700 mt-3 text-sm">{event.description}</p>
              <button className="mt-4 text-green-600 hover:text-green-800 font-medium text-sm flex items-center">
                Learn more →
              </button>
            </li>
          ))}
        </ul>
        <div className="text-center mt-8">
          <button   onClick={() => navigate("/notfound")} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;