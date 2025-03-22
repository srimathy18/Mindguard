import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Clear the user's session
    localStorage.removeItem("authToken");
    navigate("/login"); // Redirect to the login page
  };

  const colors = {
    dark: {
      background: "#607D8B",
      
      hover: "#455A64",
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
      className={`h-screen flex flex-col transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      style={{ backgroundColor: colors.dark.background, color: colors.dark.text }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-opacity-70">
          <Menu size={24} style={{ color: colors.dark.text }} />
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center p-2 rounded-md hover:bg-opacity-50"
            style={{ backgroundColor: colors.dark.hover }}
          >
            <span>{item.icon}</span>
            {isSidebarOpen && <span className="ml-2">{item.title}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="flex items-center p-2 rounded-md hover:bg-opacity-50 w-full"
          style={{ backgroundColor: colors.dark.hover }}
        >
          <LogOut size={20} />
          {isSidebarOpen && <span className="ml-2">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
