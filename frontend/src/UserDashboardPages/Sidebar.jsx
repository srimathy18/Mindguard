import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  UserCheck,
  Brain,
  Star,
  Bell,
  ClipboardList,
  LineChart,
  BarChart,
  Settings,
  Users,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const colors = {
    dark: {
      background: "#2D3748",
      hover: "#4A5568",
      text: "#E2E8F0",
    },
  };

  const menuItems = [
    { title: "Wellness Overview", icon: <UserCheck size={20} />, path: "/dashboard/wellness-overview" },
    { title: "AI Insights", icon: <Brain size={20} />, path: "/dashboard/ai-insights" },
    { title: "Resources", icon: <Star size={20} />, path: "/dashboard/resources" },
    { title: "Risk Alerts", icon: <Bell size={20} />, path: "/dashboard/risk-alerts" },
    { title: "Suggestions", icon: <ClipboardList size={20} />, path: "/dashboard/suggestions" },
    { title: "Trend Graphs", icon: <LineChart size={20} />, path: "/dashboard/trend-graphs" },
    { title: "Self-Assessment", icon: <BarChart size={20} />, path: "/dashboard/self-assessment" },
    { title: "Settings", icon: <Settings size={20} />, path: "/dashboard/settings" },
    { title: "Community", icon: <Users size={20} />, path: "/dashboard/community" },
  ];

  return (
    <div
      className={`transition-all duration-300 h-screen ${isSidebarOpen ? "w-64" : "w-20"} bg-gray-800 text-gray-100 flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-700 focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center p-2 rounded-md hover:bg-gray-700"
          >
            <span>{item.icon}</span>
            {isSidebarOpen && <span className="ml-4">{item.title}</span>}
          </Link>
        ))}
      </nav>

      {/* Always Visible Logout Button */}
      <div className="p-4 mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center w-full p-2 rounded-md hover:bg-gray-700"
        >
          <LogOut size={20} />
          {isSidebarOpen && <span className="ml-4">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
