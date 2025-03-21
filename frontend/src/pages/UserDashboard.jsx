import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../UserDashboardPages/Sidebar";
import WellnessOverview from "../UserDashboardPages/WellnessOverview";
import AIInsights from "./UserDashboardPages/AIInsights";
import Resources from "./UserDashboardPages/Resources";
import RiskAlerts from "./UserDashboardPages/RiskAlerts";
import Suggestions from "./UserDashboardPages/Suggestions";
import TrendGraphs from "./UserDashboardPages/TrendGraphs";
import SelfAssessment from "./UserDashboardPages/SelfAssessment";
import Settings from "./UserDashboardPages/Settings";
import Community from "./UserDashboardPages/Community";
import { ThemeProvider } from "./UserDashboardPages/Themes/ThemeProvider"; 

const UserDashboard = () => {
  const [theme, setTheme] = useState("light"); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen flex">
        {/* Sidebar for navigation */}
        <Sidebar theme={theme} toggleTheme={toggleTheme} />

        {/* Main content area */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="wellness-overview" element={<WellnessOverview />} />
            <Route path="ai-insights" element={<AIInsights />} />
            <Route path="resources" element={<Resources />} />
            <Route path="risk-alerts" element={<RiskAlerts />} />
            <Route path="suggestions" element={<Suggestions />} />
            <Route path="trend-graphs" element={<TrendGraphs />} />
            <Route path="self-assessment" element={<SelfAssessment />} />
            <Route path="settings" element={<Settings />} />
            <Route path="community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default UserDashboard;
