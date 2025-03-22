import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

const AppContent = ({ token, setTokenAndStore }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/login"
        element={
          token ? <Navigate to="/dashboard" /> : <Login setToken={setTokenAndStore} />
        }
      />
      <Route
        path="/signup"
        element={token ? <Navigate to="/dashboard" /> : <Signup />}
      />
      
      {/* Use /dashboard/* to allow sub-routes under /dashboard */}
      <Route
        path="/dashboard/*"
        element={token ? <UserDashboard /> : <Navigate to="/login" />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* Catch-all route for nonexistent paths */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppContent;
