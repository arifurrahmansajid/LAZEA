import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      feedback: "The best sports equipment I’ve ever used!",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Excellent service and quality products.",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "Mike Johnson",
      feedback: "Highly recommend Equi Sports for all your needs.",
      image: "https://via.placeholder.com/80",
    },
  ];

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center">{testimonial.name}</h3>
              <p className="text-gray-600 text-center mt-2">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;