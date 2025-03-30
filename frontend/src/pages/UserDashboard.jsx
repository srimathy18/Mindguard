import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../UserDashboardPages/Sidebar";
import WellnessOverview from "../UserDashboardPages/WellnessOverview";
import AIInsights from "../UserDashboardPages/AIInsights";
import Resources from "../UserDashboardPages/Resourses";
import RiskAlerts from "../UserDashboardPages/RiskAlerts";
import Suggestions from "../UserDashboardPages/Suggestions";
import TrendGraphs from "../UserDashboardPages/TrendGraphs";
import SelfAssessment from "../UserDashboardPages/SelfAssessment";
import Settings from "../UserDashboardPages/Settings";
import Community from "../UserDashboardPages/Community";

const UserDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar for navigation */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 transition-all duration-300">
        <div className="p-6">
          <Routes>
            {/* Dashboard Routes */}
            <Route path="wellness-overview" element={<WellnessOverview />} />
            <Route path="ai-insights" element={<AIInsights />} />
            <Route path="resources" element={<Resources />} />
            <Route path="risk-alerts" element={<RiskAlerts />} />
            <Route path="suggestions" element={<Suggestions />} />
            <Route path="trend-graphs" element={<TrendGraphs />} />
            <Route path="self-assessment" element={<SelfAssessment />} />
            <Route path="settings" element={<Settings />} />
            <Route path="community" element={<Community />} />

            {/* Default Route */}
            <Route index element={<Navigate to="wellness-overview" />} />
            <Route path="*" element={<h1 className="text-center text-xl">404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
