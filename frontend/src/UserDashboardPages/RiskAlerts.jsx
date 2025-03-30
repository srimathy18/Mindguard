import React from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { FaBell, FaExclamationTriangle, FaClock } from "react-icons/fa";

Chart.register(...registerables);

const riskTrendData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Risk Level",
      data: [30, 50, 70, 90],
      borderColor: "rgba(255, 0, 0, 0.8)",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      fill: true,
    },
  ],
};

const alerts = [
  { id: 1, message: "Elevated stress detected!", time: "2 hours ago" },
  { id: 2, message: "Signs of anxiety increase.", time: "1 day ago" },
  { id: 3, message: "Potential depression indicators observed.", time: "3 days ago" },
];

const RiskAnalysis = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#297194] via-[#D1E1F7] to-[#E7F2F7]">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Risk Analysis & Alert Notifications
      </motion.h2>

      {/* Recent Alerts Section */}
      <motion.div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 text-center mb-8" whileHover={{ scale: 1.03 }}>
        <h3 className="text-xl font-semibold mb-3 text-[#297194] flex items-center justify-center">
          <FaBell className="mr-2 text-red-500" /> Recent Alerts
        </h3>
        <p className="text-gray-600 mb-3 text-sm">Notifications of high-risk assessments.</p>
        <ul className="space-y-3">
          {alerts.map((alert) => (
            <li key={alert.id} className="bg-red-100 p-3 rounded-lg shadow-sm flex items-center">
              <FaExclamationTriangle className="text-red-600 mr-3" />
              <div className="text-left">
                <p className="text-gray-700 font-semibold">{alert.message}</p>
                <p className="text-gray-500 text-sm flex items-center">
                  <FaClock className="mr-1" /> {alert.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Risk Level Trend Graph */}
      <motion.div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 text-center" whileHover={{ scale: 1.03 }}>
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">Risk Level Trend</h3>
        <p className="text-gray-600 mb-3 text-sm">Track risk fluctuations over time.</p>
        <div className="w-3/4 mx-auto">
          <Line data={riskTrendData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>
      </motion.div>
    </div>
  );
};

export default RiskAnalysis;
