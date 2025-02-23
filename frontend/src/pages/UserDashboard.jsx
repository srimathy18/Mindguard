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
        {activeTab === "Home" ? (
          <div>
            <h1 className="text-3xl font-bold mb-4 text-cyan-200 drop-shadow-lg">
              Mental Health Dashboard
            </h1>
            {/* Add your dashboard content here */}
          </div>
        ) : (
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <p className="text-gray-300">Content for {activeTab} will be here.</p>
          </div>
        )}
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
