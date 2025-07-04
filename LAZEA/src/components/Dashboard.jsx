import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-green-700 text-white flex flex-col py-8 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard">Overview</Link>
          <Link to="/dashboard/all-items">All Items</Link>
          <Link to="/dashboard/add-item">Add Item</Link>
          <Link to="/dashboard/my-items">My Items</Link>
          <Link to="/">Back to Home</Link>
          {user && (
            <div className="mt-8 text-sm text-green-200">
              <div className="font-semibold">{user.displayName}</div>
              <div>{user.email}</div>
            </div>
          )}
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
