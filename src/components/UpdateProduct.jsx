import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/product/${id}`);
        const data = await response.json();
        setEquipment(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching equipment:", error);
        setLoading(false);
      }
    };

    fetchEquipment();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedEquipment = {
      name: e.target.name.value,
      category: e.target.category.value,
      price: e.target.price.value,
      image: e.target.image.value,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEquipment),
      });

      if (response.ok) {
        alert("Equipment updated successfully!");
        navigate("/my-equipments");
      } else {
        alert("Failed to update equipment.");
      }
    } catch (error) {
      console.error("Error updating equipment:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Update Equipment</h1>
      {equipment ? (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 rounded shadow">
          <div className="mb-4">
            <label className="block font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={equipment.name}
              className="w-full border rounded p-2"
              required
            />
          </div>
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
          <div className="mb-4">
            <label className="block font-bold mb-2">Price</label>
            <input
              type="number"
              name="price"
              defaultValue={equipment.price}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder=""
              defaultValue={equipment.image}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 mt-4 rounded hover:bg-orange-600 w-full"
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