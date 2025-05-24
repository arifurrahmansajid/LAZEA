import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-orange-600">404</h1>
      <p className="text-xl text-gray-700 dark:text-gray-200 mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-md text-lg hover:bg-orange-500"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
