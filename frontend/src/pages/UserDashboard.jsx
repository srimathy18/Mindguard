// src/pages/UserDashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Notebook, Compass, LogOut, MessageSquare } from "lucide-react";
import axios from "axios";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("Home");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch user data on mount and check authentication
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    axios
      .get("http://localhost:4000/api/auth/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Render the main dashboard content based on activeTab
  const renderDashboardContent = () => {
    if (activeTab === "Home") {
      return (
        <div className="space-y-8">
          {/* Real-Time Sentiment & Mood Analysis Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">
                Real-Time Sentiment & Mood Analysis
              </h2>
              {/* Placeholder for Pie Chart / Bar Graph */}
              <div className="bg-gray-700 h-40 flex items-center justify-center">
                <span>Pie Chart / Bar Graph</span>
              </div>
              {/* Placeholder for Live Graph */}
              <div className="bg-gray-700 h-40 mt-4 flex items-center justify-center">
                <span>Live Mood Graph</span>
              </div>
            </div>
            {/* Predictive Risk Analysis Section */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">Predictive Risk Analysis</h2>
              {/* Placeholder for Heatmap or Risk Meter */}
              <div className="bg-gray-700 h-80 flex items-center justify-center">
                <span>Risk Meter / Heatmap</span>
              </div>
              <p className="mt-2">Future Depression Risk: ⚠ HIGH (80%)</p>
            </div>
          </div>

          {/* Mental Health Insights Panel */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Mental Health Insights</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-3 rounded-md">
                <p>Possible Signs of Anxiety (87%)</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-md">
                <p>Depression Risk: High (80%)</p>
              </div>
            </div>
          </div>

          {/* User Activity Timeline */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">User Activity Timeline</h2>
            <ul className="space-y-2">
              <li className="bg-gray-700 p-2 rounded">
                Post 1: Detected emotion – Happy
              </li>
              <li className="bg-gray-700 p-2 rounded">
                Post 2: Detected emotion – Sad
              </li>
              <li className="bg-gray-700 p-2 rounded">
                Post 3: Detected emotion – Anxious
              </li>
            </ul>
          </div>
        </div>
      );
    } else if (activeTab === "Journal") {
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Journal</h2>
          <p>Here, users can write and view their personal journal entries.</p>
          {/* Add Journal entries functionality here */}
        </div>
      );
    } else if (activeTab === "Explore") {
      return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Explore</h2>
          <p>
            Discover insights, articles, and trends. Use search and filters to find
            relevant mental health resources.
          </p>
          {/* Add grid or list of explore content here */}
        </div>
      );
    } else {
      return (
        <p className="text-gray-300">
          Content for {activeTab} will be here.
        </p>
      );
    }
  };

  return (
    <motion.div
      className="flex h-screen bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-gray-800 p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-center mb-6">
          {user ? `Welcome, ${user.name}` : "Loading..."}
        </h2>
        <nav className="space-y-4">
          <button
            className={`flex items-center gap-2 w-full p-3 rounded-lg transition ${
              activeTab === "Home"
                ? "bg-gray-700"
                : "hover:bg-gray-700 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("Home")}
          >
            <Home size={20} /> Home
          </button>
          <button
            className={`flex items-center gap-2 w-full p-3 rounded-lg transition ${
              activeTab === "Journal"
                ? "bg-gray-700"
                : "hover:bg-gray-700 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("Journal")}
          >
            <Notebook size={20} /> Journal
          </button>
          <button
            className={`flex items-center gap-2 w-full p-3 rounded-lg transition ${
              activeTab === "Explore"
                ? "bg-gray-700"
                : "hover:bg-gray-700 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("Explore")}
          >
            <Compass size={20} /> Explore
          </button>
        </nav>
        <motion.button
          className="mt-auto flex items-center justify-center gap-2 p-3 rounded-lg bg-red-600 hover:bg-red-700 transition text-white"
          onClick={handleLogout}
        >
          <LogOut size={20} /> Logout
        </motion.button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {renderDashboardContent()}
      </main>

      {/* Chatbot Icon Button */}
      <motion.button
        onClick={() => navigate("/chat")}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-10 right-10 bg-cyan-600 p-3 rounded-full shadow-lg hover:bg-cyan-700"
      >
        <MessageSquare size={24} />
      </motion.button>
    </motion.div>
  );
}
