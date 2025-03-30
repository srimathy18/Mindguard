import React, { useState } from "react";
import { motion } from "framer-motion";

const dummyData = {
  sentimentStatus: "Positive",
  disorderPrediction: "None",
  riskLevel: "Low",
  detailedInsights: [
    {
      title: "Mood Stability",
      description: "Your mood has remained stable over the past week.",
      icon: "😊",
    },
    {
      title: "Sleep Quality",
      description: "Your sleep quality was excellent last night.",
      icon: "😴",
    },
    {
      title: "Activity Level",
      description: "You've increased your daily physical activity by 20%.",
      icon: "🏃",
    },
  ],
};

// Shield Indicator Component
const ShieldIndicator = ({ level, label }) => {
  const styles = {
    Low: { bgColor: "green", icon: "✔️" },
    Medium: { bgColor: "orange", icon: "✔️" },
    High: { bgColor: "red", icon: "❌" },
  };

  const currentStyle = styles[level] || styles.Low;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center text-center transition-all"
    >
      {/* Shield with Icon */}
      <div
        className="relative w-20 h-28"
        style={{
          backgroundImage: `url('/shield.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Tick or Cross */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            color: "white",
            fontSize: "24px",
          }}
        >
          <motion.span
            className="w-8 h-8 flex items-center justify-center rounded-full"
            style={{
              backgroundColor: currentStyle.bgColor,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
            whileHover={{ rotate: 10 }}
          >
            {currentStyle.icon}
          </motion.span>
        </div>
      </div>
      {/* Sentiment Label */}
      <motion.span
        className="mt-2 text-lg font-semibold"
        style={{ color: currentStyle.bgColor }}
        whileHover={{ scale: 1.05 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

const WellnessOverview = () => {
  const [overviewData] = useState(dummyData);

  return (
    <div className="flex-1 min-h-screen p-6 bg-gradient-to-b from-[#297194] via-[#D1E1F7] to-[#E7F2F7]">
      {/* Header */}
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Wellness Overview
      </motion.h2>

      {/* Sentiment, Disorder Prediction, and Risk Level */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div
          className="bg-white bg-opacity-80 rounded-xl shadow-xl p-8 text-center transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShieldIndicator level="Low" label="Sentiment" />
          <h3 className="text-2xl font-semibold mt-4 transition-all hover:text-[#297194]">
            Sentiment
          </h3>
          <p>{overviewData.sentimentStatus}</p>
        </motion.div>

        <motion.div
          className="bg-white bg-opacity-80 rounded-xl shadow-xl p-8 text-center transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShieldIndicator level="Medium" label="Disorder Prediction" />
          <h3 className="text-2xl font-semibold mt-4 transition-all hover:text-[#297194]">
            Disorder Prediction
          </h3>
          <p>{overviewData.disorderPrediction}</p>
        </motion.div>

        <motion.div
          className="bg-white bg-opacity-80 rounded-xl shadow-xl p-8 text-center transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShieldIndicator level="High" label="Risk Level" />
          <h3 className="text-2xl font-semibold mt-4 transition-all hover:text-[#297194]">
            Risk Level
          </h3>
          <p>{overviewData.riskLevel}</p>
        </motion.div>
      </div>

      {/* Detailed Insights */}
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Detailed Insights
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {overviewData.detailedInsights.map((insight, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-80 rounded-xl shadow-xl p-6 text-center transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="text-4xl mb-4 transition-all"
              whileHover={{ rotate: 10 }}
            >
              {insight.icon}
            </motion.div>
            <h4 className="text-xl font-semibold transition-all hover:text-[#297194]">
              {insight.title}
            </h4>
            <p>{insight.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WellnessOverview;
