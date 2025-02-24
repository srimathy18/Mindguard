import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import ChartPage from "./pages/ChartPage.jsx";
import Navbar from "./components/Navbar.jsx";

const AppContent = ({ token, setTokenAndStore }) => {
  const location = useLocation();
  // Only display the Navbar on Home ("/") and About ("/about") pages.
  // Note: If you’re on any other route (e.g. "/login" or "/dashboard"), the Navbar won’t be shown.
  const showNavbar = location.pathname === "/" || location.pathname === "/about";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Redirect to dashboard if already logged in */}
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
        {/* Protected dashboard route */}
        <Route
          path="/dashboard"
          element={token ? <UserDashboard /> : <Navigate to="/login" />}
        />
        {/* Chat route */}
        <Route path="/chat" element={<ChartPage />} />
      </Routes>
    </>
  );
};

export default AppContent;
