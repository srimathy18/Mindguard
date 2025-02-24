import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="w-full z-50 text-white py-4 px-6 shadow-md flex justify-between items-center"
      style={{ backgroundImage: 'url("1.png")', backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-300 transition-all">
          🏠 Home
        </Link>
        <Link to="/about" className="hover:text-blue-300 transition-all">
          📖 About
        </Link>
      </div>
      <div>
        <Link
          to="/signup"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
