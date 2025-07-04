import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch(`https://plant-server-iota.vercel.app/product/${id}`);
        const data = await response.json();
        setEquipment(data);
      } catch (error) {
        console.error("Error fetching equipment:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedEquipment = {
      plantName: e.target.plantName.value,
      category: e.target.category.value,
      description: e.target.description.value,
      careLevel: e.target.careLevel.value,
      healthStatus: e.target.healthStatus.value,
      image: e.target.image.value,
    };

    try {
      const response = await fetch(`https://plant-server-iota.vercel.app/product/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEquipment),
      });

      const result = await response.json();
      console.log("Update response:", response.status, result);

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Equipment updated successfully!",
          confirmButtonColor: "#78cc44",
        });
        // Optionally, navigate or update state here:
        // navigate('/all-equipments');
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: result.message || "Failed to update equipment.",
          confirmButtonColor: "#78cc44",
        });
      }
    } catch (error) {
      console.error("Error updating equipment:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error updating equipment.",
        confirmButtonColor: "#78cc44",
      });
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Update Equipment</h1>
      {equipment ? (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 rounded shadow">
          {/* Plant Name */}
          <div className="mb-4">
            <label className="block font-bold mb-2">Plant Name</label>
            <input
              type="text"
              name="plantName"
              defaultValue={equipment.plantName}
              className="w-full border rounded p-2"
              required
            />
          </div>
          {/* Category */}
          <div className="mb-4">
            <label className="block font-bold mb-2">Category</label>
            <input
              type="text"
              name="category"
              defaultValue={equipment.category}
              className="w-full border rounded p-2"
              required
            />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label className="block font-bold mb-2">Description</label>
            <textarea
              name="description"
              defaultValue={equipment.description}
              className="w-full border rounded p-2"
              rows={4}
              required
            />
          </div>
          {/* Updated Care Level as Select */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Care Level *
            </label>
            <select
              name="careLevel"
              defaultValue={equipment.careLevel}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">Select Care Level</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>
          </div>
          {/* Health Status */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Health Status *
            </label>
            <select
              name="healthStatus"
              defaultValue={equipment.healthStatus}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            >
              <option value="">Select Health Status</option>
              <option value="healthy">Healthy</option>
              <option value="wilting">Wilting</option>
              <option value="drying">Drying</option>
              <option value="thriving">Thriving</option>
            </select>
          </div>
          {/* Image URL */}
          <div className="mb-4">
            <label className="block font-bold mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={equipment.image}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#78cc44] text-white px-4 py-2 mt-4 rounded hover:bg-[#66aa33] w-full"
          >
            Update
          </button>
        </form>
      ) : (
        <p>Equipment not found.</p>
      )}
    </div>
  );
};

export default UpdateProduct;