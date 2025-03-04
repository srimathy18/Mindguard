import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import ChartPage from "./pages/ChartPage.jsx";

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
      <Route
        path="/dashboard"
        element={token ? <UserDashboard /> : <Navigate to="/login" />}
      />
      <Route path="/chat" element={<ChartPage />} />
    </Routes>
  );
};

export default AppContent;