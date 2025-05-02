import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import axios from 'axios';

Chart.register(...registerables);

const AIInsights = () => {
  const [wordCloudData, setWordCloudData] = useState([]);
  const [heatmapData, setHeatmapData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetchWordCloudData();
    fetchHeatmapData();
  }, []);

  const fetchWordCloudData = async () => {
    try {
      const token = localStorage.getItem("token");

      // Make the GET request using axios
      const response = await axios.get("http://localhost:4000/api/chatbot/insights/wordcloud", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Get the data from the response
      const data = response.data;

      const formattedWords = (data.words || [])
        .filter((word) => typeof word.weight === "number")
        .map((word) => ({
          text: word.text,
          value: Math.abs(word.weight),
        }));

      // Set the formatted word cloud data
      setWordCloudData(formattedWords);
    } catch (error) {
      console.error("Failed to fetch word cloud data", error);
    }
  };

  const fetchHeatmapData = async () => {
    try {
      const token = localStorage.getItem("token");

      // Make the GET request using axios for heatmap data
      const response = await axios.get("http://localhost:4000/api/chatbot/insights/visual", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const emotionData = response.data?.emotionHeatmap;
      if (emotionData) {
        setHeatmapData({
          labels: ["Sentiment", "Disorder"],
          datasets: [
            {
              label: "Confidence (%)",
              data: [
                emotionData.sentiment.confidence,
                emotionData.disorder.confidence,
              ],
              backgroundColor: ["#36A2EB", "#FF6384"],
              borderWidth: 1,
            },
          ],
        });
      }
    } catch (error) {
      console.error("Failed to fetch heatmap data", error);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#297194] via-[#D1E1F7] to-[#E7F2F7]">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explainable AI Insights
      </motion.h2>

      {/* Word Cloud */}
      <motion.div
        className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 text-center mb-8"
        whileHover={{ scale: 1.03 }}
      >
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">AI Word Cloud</h3>
        <p className="text-gray-600 mb-3 text-sm">
          Dynamically generated from model explanation.
        </p>
        {wordCloudData.length > 0 ? (
  <div className="max-w-xl mx-auto">
    <table className="w-full table-auto border border-gray-300 rounded-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left text-sm text-[#297194]">Keyword</th>
          <th className="px-4 py-2 text-left text-sm text-[#297194]">Weight</th>
        </tr>
      </thead>
      <tbody>
        {[...wordCloudData]
          .sort((a, b) => b.value - a.value)
          .slice(0, 10)
          .map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2 text-gray-700">{item.text}</td>
              <td className="px-4 py-2 text-gray-700">{item.value.toFixed(2)}</td>
            </tr>
        ))}
      </tbody>
    </table>
  </div>
) : (
  <p className="text-gray-500">Loading or no keywords available yet.</p>
)}

      </motion.div>

      {/* Emotion Heatmap */}
      <motion.div
        className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 text-center mb-8"
        whileHover={{ scale: 1.03 }}
      >
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">
          Emotion Heatmap
        </h3>
        <p className="text-gray-600 mb-3 text-sm">
          Visualization of dominant emotions detected.
        </p>
        <div className="w-3/4 mx-auto">
          <Bar
            data={heatmapData}
            options={{ responsive: true, scales: { y: { beginAtZero: true } } }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AIInsights;
