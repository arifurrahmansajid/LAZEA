import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/3814263.jpg"; // adjust the path to your asset if needed

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src={notFoundImage} alt="404 Not Found" className="w-full max-w-md" />
      
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