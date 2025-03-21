import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full">
      <ul className="space-y-4 p-4">
        <li>Wellness Overview</li>
        <li>AI Insights</li>
        <li>Resources</li>
        <li>Risk Alerts</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
