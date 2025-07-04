import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { FiPackage, FiUser, FiDatabase } from "react-icons/fi";

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ totalProducts: 0, myItems: 0 });

  useEffect(() => {
    // Fetch total products
    fetch("https://plant-server-iota.vercel.app/product")
      .then(res => res.json())
      .then(data => setStats(s => ({ ...s, totalProducts: data.length })));

    // Fetch my items
    if (user?.email) {
      fetch(`https://plant-server-iota.vercel.app/product?owner=${user.email}`)
        .then(res => res.json())
        .then(data => setStats(s => ({ ...s, myItems: data.length })));
    }
  }, [user]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Total Products Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-medium">Total Products</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">{stats.totalProducts}</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FiDatabase className="text-2xl text-green-600" />
            </div>
          </div>
        </div>

        {/* My Items Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-medium">My Items</p>
              <h3 className="text-3xl font-bold text-gray-800 mt-1">{stats.myItems}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FiPackage className="text-2xl text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* User Profile Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FiUser className="text-gray-600" /> User Information
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium text-gray-800">{user?.displayName || 'Not available'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium text-gray-800">{user?.email || 'Not available'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;