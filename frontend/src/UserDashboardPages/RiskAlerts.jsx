import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const RiskAnalysis = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchAlerts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/chatbot/risk-alerts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAlerts(res.data.alerts);
      } catch (err) {
        console.error("Error fetching alerts:", err);
      }
    };

    fetchAlerts();
  }, []);

  // Map Risk Levels to numeric for chart
  const riskToNumber = level =>
    level === "Low" ? 1 : level === "Moderate" ? 2 : level === "High" ? 3 : 0;

  const chartData = {
    labels: alerts.map(a => new Date(a.createdAt).toLocaleDateString()),
    datasets: [
      {
        label: "Risk Level Over Time",
        data: alerts.map(a => riskToNumber(a.riskLevel)),
        borderColor: "#ef4444",
        backgroundColor: "#fecaca",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const riskLevelLabel = level => {
    if (level === "Low") return "🟢 Low";
    if (level === "Moderate") return "🟡 Moderate";
    if (level === "High") return "🔴 High";
    return level;
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#297194] via-[#D1E1F7] to-[#E7F2F7] text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">📌 Alert Notifications</h2>

      {/* Recent High-Risk Alerts */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-red-600 mb-3">🔺 Recent High-Risk Alerts</h3>
        <ul className="space-y-3">
          {alerts
            .filter(a => a.riskLevel === "High")
            .slice(-3)
            .reverse()
            .map((a, i) => (
              <li key={i} className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
                <strong>{new Date(a.createdAt).toLocaleString()}</strong> - {a.recommendation}
              </li>
            ))}
        </ul>
      </div>

      {/* Risk Level Trend */}
      <div className="bg-white shadow rounded p-5 mb-10">
        <h3 className="text-lg font-semibold mb-4 text-blue-800">📈 Risk Level Trend</h3>
        <Line
          data={chartData}
          options={{
            scales: {
              y: {
                ticks: {
                  callback: function (value) {
                    return ["", "Low", "Moderate", "High"][value];
                  },
                  stepSize: 1,
                },
                beginAtZero: true,
                max: 3,
              },
            },
          }}
        />
      </div>

      {/* Full Timeline */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-indigo-700">🕒 Timeline of Past Alerts</h3>
        <div className="space-y-4">
          {alerts
            .slice()
            .reverse()
            .map((a, i) => (
              <div key={i} className="p-4 border border-gray-300 rounded bg-white/70 shadow">
                <p className="text-sm text-gray-500">{new Date(a.createdAt).toLocaleString()}</p>
                <p className="font-medium">
                  {riskLevelLabel(a.riskLevel)} –{" "}
                  <span className="text-gray-700">{a.recommendation}</span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysis;
