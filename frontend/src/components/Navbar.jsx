import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav 
    className="w-full  text-white py-4 px-6 shadow-md flex justify-end items-center"
    style={{ backgroundImage: 'url("1.png")', backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="space-x-6 ml-auto">
      <Link to="/" className="hover:text-blue-300 transition-all">🏠 Home</Link>
      <Link to="/about" className="hover:text-blue-300 transition-all">📖 About</Link>
      
      {/* Signup Button */}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300"
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </button>
    </div>
  </nav>
  
  );
};

export default Navbar;
