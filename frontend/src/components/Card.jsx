// src/components/Card.jsx
import React from "react";

const Card = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-4 bg-gray-800 rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
