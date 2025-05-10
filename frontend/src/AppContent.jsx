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

// User Dashboard Pages
import BreathingExercise from "./UserDashboardPages/BreathingExercise";
import GuidedMeditation from "./UserDashboardPages/GuidedMeditation";
import CopingStrategies from "./UserDashboardPages/CopingStrategies";
import ChatbotSuggestionPage from "./UserDashboardPages/ChatbotSuggestionPage";

const AppContent = () => {
  const { user } = useAuth(); // Make sure AuthContext returns user object

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* ✅ Protected Dashboard */}
      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        }
      />

      {/* ✅ Additional Mental Health Tools */}
      <Route path="/breathing-exercise" element={<BreathingExercise />} />
      <Route path="/guided-meditation" element={<GuidedMeditation />} />
      <Route path="/coping-strategies" element={<CopingStrategies />} />
      <Route
        path="/chatbot-suggestions"
        element={<ChatbotSuggestionPage userId={user?._id} />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppContent;

