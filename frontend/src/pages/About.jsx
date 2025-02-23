import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center px-8 bg-[#0d0d2b] text-white">

      {/* Left Side - Image */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/ab.jpeg" 
          alt="About Illustration" 
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div 
        className="w-full md:w-1/2 text-center md:text-left p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-[#EBEBDF]">
          About <span className="text-[#EBEBDF]">NL-PAP Framework</span>
        </h1>

        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          The <span className="text-blue-300 font-semibold">Neuro-Linguistic Psychometric Adversarial Prognosis (NL-PAP) Framework</span>  
          is an AI-powered system designed to predict and monitor mental health trends.  
          By analyzing neuro-linguistic patterns and psychometric data, it provides data-driven insights for early detection of mood disorders.
        </p>

        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Using cutting-edge machine learning & deep learning models, NL-PAP detects sentiment volatility, emotional fluctuations, and mental health risks.  
          With explainable AI insights, users and mental health professionals can track emotional patterns and intervene proactively.
        </p>
      </motion.div>

    </div>
  );
};

export default About;
