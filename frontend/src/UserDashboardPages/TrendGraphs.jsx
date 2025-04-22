import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import axios from "axios";

Chart.register(...registerables);

const TrendGraphs = () => {
  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchTrendData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/chatbot/trends", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTrendData(response.data.trendData);
      } catch (error) {
        console.error("Error fetching trend data:", error);
      }
    };

    fetchTrendData();
  }, []);

  const labels = trendData.map(item =>
    new Date(item.date).toLocaleDateString("en-US", { day: "numeric", month: "short" })
  );

  const sentimentData = {
    labels,
    datasets: [
      {
        label: "Sentiment Confidence",
        data: trendData.map(item => item.sentiment_confidence),
        borderColor: "rgba(0, 200, 0, 0.8)",
        backgroundColor: "rgba(0, 200, 0, 0.2)",
        fill: true
      }
    ]
  };

  const disorderData = {
    labels,
    datasets: [
      {
        label: "Disorder Confidence",
        data: trendData.map(item => item.disorder_confidence),
        borderColor: "rgba(255, 165, 0, 0.8)",
        backgroundColor: "rgba(255, 165, 0, 0.2)",
        fill: true
      }
    ]
  };

  const riskLevelMapping = { Low: 20, Medium: 50, High: 80 };
  const riskData = {
    labels,
    datasets: [
      {
        label: "Risk Level (mapped)",
        data: trendData.map(item => riskLevelMapping[item.risk] || 0),
        borderColor: "rgba(255, 0, 0, 0.8)",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        fill: true
      }
    ]
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#297194] via-[#D1E1F7] to-[#E7F2F7]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Mental Health Trends</h2>

      {/* Sentiment Trend */}
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 mb-8">
        <h3 className="text-xl font-semibold mb-2">Sentiment Confidence Over Time</h3>
        <Line data={sentimentData} />
      </div>

      {/* Disorder Trend */}
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 mb-8">
        <h3 className="text-xl font-semibold mb-2">Disorder Confidence Over Time</h3>
        <Line data={disorderData} />
      </div>

      {/* Risk Level Trend */}
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 mb-8">
        <h3 className="text-xl font-semibold mb-2">Risk Level Over Time</h3>
        <Line data={riskData} />
      </div>
    </div>
  );
};

export default TrendGraphs;
