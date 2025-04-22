// src/AppContent.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import { useAuth } from "./AuthContext"; 
import PrivateRoute from "./PrivateRoute"; 

const AppContent = () => {
  const { token, setToken } = useAuth(); 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />

      
<Route
  path="/dashboard/*"
  element={
    <PrivateRoute>
      <UserDashboard />
    </PrivateRoute>
  }
/>


      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppContent;
