import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyEquipmentList = () => {
  const [myEquipments, setMyEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the user's equipment from an API
    const fetchMyEquipments = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/...`);
        const data = await response.json();
        setMyEquipments(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching equipment:", error);
        setLoading(false);
      }
    };

    fetchMyEquipments();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this equipment?")) return;

    try {
      await fetch(`${import.meta.env.VITE_WEB_HOST_LINK}/product/${id}`, {
        method: "DELETE",
      });
      setMyEquipments(myEquipments.filter((item) => item.id !== id));
      alert("Equipment deleted successfully!");
    } catch (error) {
      console.error("Error deleting equipment:", error);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Equipment List</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : myEquipments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {myEquipments.map((equipment) => (
            <div
              key={equipment.id}
              className="bg-white p-4 shadow rounded-lg flex flex-col items-center"
            >
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-32 h-32 object-cover mb-4"
              />
              <h3 className="font-bold text-lg mb-2">{equipment.name}</h3>
              <p className="text-gray-600">{equipment.category}</p>
              <p className="text-gray-900 font-semibold mt-2">${equipment.price}</p>
              <div className="flex gap-2 mt-4">
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center gap-2">
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(equipment.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 flex items-center gap-2"
                >
                  <FaTrashAlt /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">You have not added any equipment yet.</p>
      )}
    </div>
  );
};

export default MyEquipmentList;