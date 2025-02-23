import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  {
    title: "🧠 AI Mental Health Assessment",
    description: "Uses AI-powered deep learning to analyze user inputs and detect early signs of mental health conditions.",
  },
  {
    title: "🔮 Predictive Risk Forecasting",
    description: "Predicts future emotional states and mental health risks based on past user data and trends.",
  },
  {
    title: "📊 Real-Time Sentiment Tracking",
    description: "Monitors emotional changes over time with live mood tracking and graphical analysis.",
  },
  {
    title: "🤖 AI Chatbot Support",
    description: "Interactive AI chatbot provides emotional support, stress management tips, and mental well-being guidance.",
  },
  {
    title: "🔍 Explainable AI for Transparency",
    description: "Shows key words and patterns influencing AI predictions, ensuring transparency in mental health assessments.",
  },
];

// Define hover styles
const hoverEffects = [
  "hover:bg-blue-800 hover:shadow-blue-500",
  "hover:bg-indigo-800 hover:shadow-indigo-500",
  "hover:bg-purple-800 hover:shadow-purple-500",
  "hover:bg-teal-800 hover:shadow-teal-500",
  "hover:bg-cyan-800 hover:shadow-cyan-500",
];

const Feature = () => {
  return (
    <motion.div
      className="relative flex flex-col justify-center text-center px-6 py-12 min-h-screen w-full"
      style={{
        backgroundImage: 'url("1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", 
        width: "100%",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl font-semibold  mb-2 text-[#EBEBDF] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
         Features
      </motion.h1>
      <motion.p
        className="text-md mb-8 text-blue-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        AI-driven insights to support and enhance mental well-being.
      </motion.p>

      {/* Feature Cards Container */}
      <motion.div
        className="flex flex-col gap-4 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.5 },
          },
        }}
      >
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex items-start bg-[#24325B] backdrop-blur-lg p-6 rounded-lg shadow-lg border-l-4 border-blue-300 transition-all duration-300 
            ${hoverEffects[index % hoverEffects.length]} hover:scale-105 hover:border-opacity-75 hover:border-2`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Feature Title & Description */}
            <div className="ml-3 text-left">
              <h2 className="text-md font-semibold text-blue-300">{feature.title}</h2>
              <p className="text-gray-200 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Feature;
