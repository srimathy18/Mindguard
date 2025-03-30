import React, { useState } from "react";
import { FaBell, FaPalette, FaGlobe } from "react-icons/fa";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#297194] via-[#D1E1F7] to-[#E7F2F7]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Settings</h2>

      <div className="max-w-2xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
        {/* Notification Preferences */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center space-x-3">
            <FaBell className="text-blue-500 text-xl" />
            <p className="text-lg font-semibold text-gray-700">Notifications</p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`px-4 py-1 rounded-full font-medium text-white transition duration-300 ${notifications ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {notifications ? "Enabled" : "Disabled"}
          </button>
        </div>

        {/* Theme Selection */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center space-x-3">
            <FaPalette className="text-purple-500 text-xl" />
            <p className="text-lg font-semibold text-gray-700">Theme</p>
          </div>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="px-3 py-1 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Language Selection */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaGlobe className="text-green-500 text-xl" />
            <p className="text-lg font-semibold text-gray-700">Language</p>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-3 py-1 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
