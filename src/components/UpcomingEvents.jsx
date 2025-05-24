import React from "react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Football Championship 2024",
      date: "March 15, 2024",
      location: "Los Angeles, CA",
    },
    {
      id: 2,
      title: "Tennis World Cup",
      date: "April 10, 2024",
      location: "Paris, France",
    },
    {
      id: 3,
      title: "Equi Sports Expo",
      date: "May 20, 2024",
      location: "New York, NY",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Upcoming Events
        </h2>
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
              <p className="text-gray-600">📅 {event.date}</p>
              <p className="text-gray-600">📍 {event.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingEvents;
