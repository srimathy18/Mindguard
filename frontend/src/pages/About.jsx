import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative from-[#E0D7FF]  to-[#F5F5F5] text-black min-h-screen flex flex-col md:flex-row items-center px-8">
      
     {/* Left Side - Image */}
<motion.div 
  className="w-full md:w-1/2 flex justify-center"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <motion.img 
    src="/ab.jpeg" 
    alt="About Illustration" 
    className="max-w-full max-h-[400px] rounded-lg shadow-[0px_10px_30px_rgba(0,0,0,0.3)]"
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" 
    }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  />
</motion.div>


      {/* Right Side - Text */}
      <motion.div 
        className="w-full md:w-1/2 text-center md:text-left p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-[#333]">
          About <span className="text-purple-700">NL-PAP Framework</span>
        </h1>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          The <span className="text-blue-600 font-semibold">Neuro-Linguistic Psychometric Adversarial Prognosis (NL-PAP) Framework</span>  
          is an AI-powered system designed to predict and monitor mental health trends.  
          By analyzing neuro-linguistic patterns and psychometric data, it provides data-driven insights for early detection of mood disorders.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Using cutting-edge machine learning & deep learning models, NL-PAP detects sentiment volatility, emotional fluctuations, and mental health risks.  
          With explainable AI insights, users and mental health professionals can track emotional patterns and intervene proactively.
        </p>
      </motion.div>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#EDE7F6"
          fillOpacity="1"
          d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,224C840,224,960,192,1080,176C1200,160,1320,160,1380,165.3L1440,170V320H0Z"
        ></path>
      </svg>

    </div>
  );
};

export default About;
