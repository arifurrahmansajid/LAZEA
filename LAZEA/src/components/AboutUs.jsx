import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaLeaf, FaSeedling, FaHandHoldingHeart } from "react-icons/fa";

const AboutUs = () => (
  <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-4">
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 font-serif">
          About <span className="text-green-600">LAZEA</span>
        </h1>
        <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cultivating green spaces and nurturing plant lovers since 2023
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 md:order-1">
          <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Our Story</h2>
            <div className="space-y-5 text-gray-700">
              <p className="text-lg">
                Founded in a small apartment with just three houseplants, LAZEA has grown into a thriving community of plant enthusiasts. What began as a passion project between friends has blossomed into a mission to make plant care accessible to everyone.
              </p>
              <p>
                We believe that plants make life better - they purify our air, boost our moods, and bring natural beauty into our spaces. Our goal is to help you succeed in your plant parenthood journey, no matter your experience level.
              </p>
              <p>
                Today, we serve thousands of customers nationwide with premium plants, expert advice, and innovative tools to simplify plant care.
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Team caring for plants" 
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaLeaf className="text-4xl text-green-600 mb-4" />,
              title: "Sustainability",
              description: "We source plants responsibly and use eco-friendly packaging to minimize our environmental impact."
            },
            {
              icon: <FaSeedling className="text-4xl text-green-600 mb-4" />,
              title: "Education",
              description: "We empower our community with knowledge through workshops, care guides, and expert support."
            },
            {
              icon: <FaHandHoldingHeart className="text-4xl text-green-600 mb-4" />,
              title: "Community",
              description: "We foster connections between plant lovers through events, forums, and local partnerships."
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow">
              {value.icon}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team CTA */}
      <div className="bg-green-700 rounded-2xl p-8 md:p-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Community</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Whether you're a seasoned plant parent or just starting your green journey, we'd love to connect with you.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium flex items-center transition-colors"
          >
            <FaFacebook className="mr-2" /> Facebook
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium flex items-center transition-colors"
          >
            <FaInstagram className="mr-2" /> Instagram
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium flex items-center transition-colors"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;