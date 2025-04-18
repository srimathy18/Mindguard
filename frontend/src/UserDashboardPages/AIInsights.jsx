import React from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { FaUserEdit, FaBrain, FaSmile, FaExclamationTriangle } from "react-icons/fa";

Chart.register(...registerables);

const words = [
  "Happy", "Anxious", "Excited", "Sad", "Calm", "Stressed", "Confident", "Joyful", "Worried", "Relaxed"
];

const heatmapData = {
  labels: ["Happiness", "Sadness", "Anxiety", "Confidence", "Excitement"],
  datasets: [
    {
      label: "Emotion Intensity",
      data: [85, 40, 60, 75, 90],
      backgroundColor: [
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 99, 132, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const Flowchart = () => (
  <div className="flex flex-col items-center space-y-4">
    <div className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md text-sm">
      <FaUserEdit className="mr-2" /> User Input
    </div>
    <div className="w-1 h-4 bg-black"></div>
    <div className="flex items-center bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md text-sm">
      <FaBrain className="mr-2" /> NLP Analysis
    </div>
    <div className="w-1 h-4 bg-black"></div>
    <div className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md text-sm">
      <FaSmile className="mr-2" /> Emotion Detection
    </div>
    <div className="w-1 h-4 bg-black"></div>
    <div className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg shadow-md text-sm">
      <FaExclamationTriangle className="mr-2" /> Risk Prediction
    </div>
  </div>
);

const AIInsights = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#297194] via-[#D1E1F7] to-[#E7F2F7]">
      <motion.h2 className="text-3xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explainable AI Insights
      </motion.h2>

      {/* Infinite Scrolling Word Cloud */}
      <motion.div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 text-center mb-8 overflow-hidden relative w-full h-32"
        whileHover={{ scale: 1.03 }}
      >
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">Word Cloud</h3>
        <p className="text-gray-600 mb-3 text-sm">Detected mood-related words from user input.</p>
        <div className="relative w-full overflow-hidden">
          <motion.div className="flex space-x-6 w-max"
            animate={{ x: [0, -200, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {words.map((word, index) => (
              <span key={index} className="text-lg font-bold text-gray-700 px-3">{word}</span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Emotion Heatmap */}
      <motion.div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 text-center mb-8"
        whileHover={{ scale: 1.03 }}
      >
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">Emotion Heatmap</h3>
        <p className="text-gray-600 mb-3 text-sm">Visualization of dominant emotions detected.</p>
        <div className="w-3/4 mx-auto">
          <Bar data={heatmapData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
        </div>
      </motion.div>

      {/* AI Decision Flowchart */}
      <motion.div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 text-center"
        whileHover={{ scale: 1.03 }}
      >
        <h3 className="text-xl font-semibold mb-3 text-[#297194]">AI Decision Flowchart</h3>
        <p className="text-gray-600 mb-3 text-sm">How AI determines mental health insights.</p>
        <Flowchart />
      </motion.div>
    </div>
  );
};

export default AIInsights;
