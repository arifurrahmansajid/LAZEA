import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddPlant = async (e) => {
    e.preventDefault();

    const form = e.target;
    const newPlant = {
      plantName: form.plantName.value,
      image: form.image.value,
      category: form.category.value,
      description: form.description.value,
      careLevel: form.careLevel.value,
      wateringFrequency: form.wateringFrequency.value,
      lastWateredDate: form.lastWateredDate.value,
      nextWateringDate: form.nextWateringDate.value,
      healthStatus: form.healthStatus.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    try {
      const response = await fetch("https://plant-server-iota.vercel.app/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPlant),
      });
      
      const data = await response.json();
      
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Plant Added Successfully!",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/all-plants");
        });
        form.reset();
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add plant. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-green-600 py-4 px-6">
          <h2 className="text-2xl font-bold text-white justify-center items-center">Add New Plant</h2>
        </div>
        
        <form onSubmit={handleAddPlant} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Plant Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Plant Name *
              </label>
              <input
                type="text"
                name="plantName"
                placeholder="e.g., Snake Plant"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL *
              </label>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/plant-image.jpg"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                name="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select Category</option>
                <option value="succulent">Succulent</option>
                <option value="fern">Fern</option>
                <option value="flowering">Flowering</option>
                <option value="cactus">Cactus</option>
                <option value="herb">Herb</option>
                <option value="TropicalPlants">Tropical Plants</option>
              </select>
            </div>

            {/* Care Level Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Care Level *
              </label>
              <select
                name="careLevel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select Care Level</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>

            {/* Watering Frequency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Watering Frequency *
              </label>
              <input
                type="text"
                name="wateringFrequency"
                placeholder="e.g., every 2 weeks"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {/* Health Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Health Status *
              </label>
              <select
                name="healthStatus"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select Health Status</option>
                <option value="Healthy">Healthy</option>
                <option value="wilting">Wilting</option>
                <option value="Drying">Drying</option>
                <option value="Thriving">Thriving</option>
                <option value="Stable">Stable</option>
              </select>
            </div>

            {/* Last Watered Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Watered Date *
              </label>
              <input
                type="date"
                name="lastWateredDate"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {/* Next Watering Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Next Watering Date *
              </label>
              <input
                type="date"
                name="nextWateringDate"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              name="description"
              rows={4}
              placeholder="Describe the plant's characteristics and care needs..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {/* User Info (readonly) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Added By (Name)
              </label>
              <input
                type="text"
                value={user?.displayName || "Not available"}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Added By (Email)
              </label>
              <input
                type="email"
                value={user?.email || "Not available"}
                readOnly
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/all-plants")}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-sm"
            >
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;