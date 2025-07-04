import React, { useState, useEffect, useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthContext";

const MyEquipmentList = () => {
  const [myEquipments, setMyEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchMyEquipments = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://plant-server-iota.vercel.app/product");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMyEquipments(data);
      } catch (err) {
        console.error("Error fetching equipment:", err);
        setError(err instanceof Error ? err.message : "Failed to load equipment");
      } finally {
        setLoading(false);
      }
    };

    fetchMyEquipments();
  }, []);

  const handleDelete = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this equipment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#78cc44",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirmResult.isConfirmed) return;

    try {
      const response = await fetch(`https://plant-server-iota.vercel.app/product/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setMyEquipments(myEquipments.filter((item) => item._id !== id));
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "Equipment deleted successfully!",
        confirmButtonColor: "#78cc44",
      });
    } catch (err) {
      console.error("Error deleting equipment:", err);
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Failed to delete equipment. Please try again.",
        confirmButtonColor: "#78cc44",
      });
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update-equipment/${id}`);
  };

  // Filter equipments for the logged-in user using userEmail field.
  const userEquipments = myEquipments.filter(
    (equipment) => equipment.userEmail === user?.email
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading your equipment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Equipment List
        </h1>
        {userEquipments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              You have not added any equipment yet.
            </p>
            <button
              onClick={() => navigate("/add-product")}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
            >
              Add Your Plant
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {userEquipments.map((equipment) => (
              <div
                key={equipment._id}
                className="bg-white group rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300"
              >
                <div className="aspect-square w-full h-64 relative overflow-hidden">
                  <img
                    src={equipment.image || "/placeholder-equipment.jpg"}
                    alt={equipment.plantName}
                    className="object-cover h-full w-full group-hover:scale-105 transition duration-500 ease-in-out"
                    onError={(e) => {
                      e.target.src = "/placeholder-equipment.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900">
                      {equipment.plantName}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                      {equipment.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mt-2 line-clamp-2">
                    {equipment.description}
                  </p>

                  {/* Additional Plant Details */}
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-gray-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-600">
                        {equipment.careLevel}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-gray-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span
                        className={`font-medium ${
                          equipment.healthStatus === "Healthy"
                            ? "text-green-600"
                            : equipment.healthStatus === "Needs Care"
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {equipment.healthStatus}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleUpdate(equipment._id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
                    >
                      <FaEdit className="text-sm" /> Update
                    </button>
                    <button
                      onClick={() => handleDelete(equipment._id)}
                      className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
                    >
                      <FaTrashAlt className="text-sm" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEquipmentList;
