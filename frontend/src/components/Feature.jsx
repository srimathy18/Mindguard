import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  { title: "🧠 AI Mental Health Assessment", description: "Uses AI-powered deep learning to analyze user inputs and detect early signs of mental health conditions." },
  { title: "🔮 Predictive Risk Forecasting", description: "Predicts future emotional states and mental health risks based on past user data and trends." },
  { title: "📊 Real-Time Sentiment Tracking", description: "Monitors emotional changes over time with live mood tracking and graphical analysis." },
  { title: "🤖 AI Chatbot Support", description: "Interactive AI chatbot provides emotional support, stress management tips, and mental well-being guidance." },
  { title: "🔍 Explainable AI for Transparency", description: "Shows key words and patterns influencing AI predictions, ensuring transparency in mental health assessments." },
  { title: "📅 Personalized Daily Insights", description: "Receive daily mental health insights and mood-boosting tips personalized for you." },
];

const Feature = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#1A0128] to-[#E6E6FA] text-white py-24 overflow-hidden">
      {/* Top Wave with Smooth Gradient */}
      <svg
        className="absolute top-0 left-0 w-full h-24 -mt-1"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#smoothGradient)"
          fillOpacity="1"
          d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,224C840,224,960,192,1080,176C1200,160,1320,160,1380,165.3L1440,170V0H0Z"
        ></path>
        <defs>
          <linearGradient id="smoothGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#1A0128", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#E6E6FA", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Title & Description */}
      <motion.div
        className="container mx-auto text-center px-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6 text-black"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Features
        </motion.h1>
        <p className="text-lg mb-10 text-gray-900">AI-driven insights to support and enhance mental well-being.</p>

        {/* Feature Cards with Glow Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center text-pink-400  flex flex-col items-center transition-all duration-300 hover:shadow-2xl"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#E6E6FA",
                boxShadow: "0px 0px 20px 5px rgba(138, 43, 226, 0.5)", 
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <motion.h2
                className="text-lg font-semibold transition-all duration-300 hover:text-purple-600"
                whileHover={{ scale: 1.1 }}
              >
                {feature.title}
              </motion.h2>
              <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L60,170.7C120,149,240,107,360,117.3C480,128,600,192,720,208C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96V320H0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Feature;
