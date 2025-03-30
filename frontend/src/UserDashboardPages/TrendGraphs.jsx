import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

// Sample Data for Sentiment Trend
const sentimentData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Positive Sentiment",
      data: [60, 70, 80, 90],
      borderColor: "rgba(0, 200, 0, 0.8)",
      backgroundColor: "rgba(0, 200, 0, 0.2)",
      fill: true,
    },
    {
      label: "Negative Sentiment",
      data: [40, 30, 20, 10],
      borderColor: "rgba(255, 0, 0, 0.8)",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      fill: true,
    },
  ],
};

// Sample Data for Disorder Prediction Trend
const disorderData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Anxiety",
      data: [50, 55, 60, 70],
      borderColor: "rgba(255, 165, 0, 0.8)",
      backgroundColor: "rgba(255, 165, 0, 0.2)",
      fill: true,
    },
    {
      label: "Depression",
      data: [30, 35, 40, 50],
      borderColor: "rgba(75, 0, 130, 0.8)",
      backgroundColor: "rgba(75, 0, 130, 0.2)",
      fill: true,
    },
  ],
};

// Sample Data for Risk Level Trend
const riskData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Risk Level",
      data: [20, 40, 60, 80],
      borderColor: "rgba(255, 0, 0, 0.8)",
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      fill: true,
    },
  ],
};

const TrendGraphs = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#297194] via-[#D1E1F7] to-[#E7F2F7]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sentiment, Disorder & Risk Trend Graphs</h2>
      
      {/* Sentiment Trend Graph */}
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 text-center mb-8">
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">Sentiment Trend</h3>
        <p className="text-gray-600 mb-3 text-sm">Positive and negative sentiment fluctuations over time.</p>
        <div className="w-3/4 mx-auto">
          <Line data={sentimentData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>
      </div>
      
      {/* Disorder Prediction Trend */}
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 text-center mb-8">
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">Disorder Prediction Trend</h3>
        <p className="text-gray-600 mb-3 text-sm">Prediction trends for mental health disorders like anxiety and depression.</p>
        <div className="w-3/4 mx-auto">
          <Line data={disorderData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>
      </div>
      
      {/* Risk Level Trend */}
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 text-center">
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">Risk Level Trend</h3>
        <p className="text-gray-600 mb-3 text-sm">Visualization of changes in risk levels over time.</p>
        <div className="w-3/4 mx-auto">
          <Line data={riskData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>
      </div>
    </div>
  );
};

export default TrendGraphs;