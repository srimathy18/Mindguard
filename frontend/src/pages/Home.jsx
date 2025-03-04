import React from "react";
import { motion } from "framer-motion";
import Feature from "../components/Feature";
import { useNavigate } from "react-router-dom";
import UserSteps from "../components/Steps";
import Footer from "../components/Footer";
import About from "./About";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Navigate based on whether a token exists
  const handleGetStarted = () => {
    navigate(token ? "/dashboard" : "/login");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex justify-center items-center text-white">
        {/* Background Image */}
         <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("1.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div> 

        {/* Overlay Image */}
       { <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("light.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          }}
        ></div>} 

        {/* Heading Section */}
        <div className="max-w-3xl mx-auto text-center relative z-10 -mt-10">
          <motion.h1
            className="text-5xl font-bold leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          >
            <span className="text-[#EBEBDF] whitespace-nowrap drop-shadow-lg">
              Welcome to <span className="text-[#EBEBDF]">MindGuard 🛡️</span>
            </span>
            <br />
            <span className="text-[#EBEBDF] block text-lg sm:text-xl mt-2 px-3 py-1">
              Neuro-Linguistic Psychometric Adversarial Prognosis
            </span>
          </motion.h1>

          <motion.p
            className="text-l mt-4 text-gray-200 drop-shadow-md max-w-2xl mx-auto px-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: [0, -5, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          >
            Empowering minds with cutting-edge AI. MindGuard combines Neuro-Linguistic Processing, 
            Psychometric Analysis, and Deep Learning to provide real-time mental health insights, 
            early risk detection, and proactive emotional support.
          </motion.p>

          {/* Get Started Button */}
          <motion.button
            className="mt-6 px-6 py-3 bg-white hover:bg-cyan-600 text-black font-bold rounded-full shadow-lg transition-all duration-300 ease-in-out"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 2, y: -3, boxShadow: "0px 5px 15px rgba(59,130,246,0.6)" }}
            onClick={handleGetStarted}
          >
            Get Started
          </motion.button>
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: "#1A0128", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "#E6E6FA", stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <path
    fill="url(#gradient)" // Use the defined gradient here
    fillOpacity="1"
    d="M0,192L60,170.7C120,149,240,107,360,117.3C480,128,600,192,720,208C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96V320H0Z"
  ></path>
</svg>


      </div>

      <Feature />
      <About/>
      <UserSteps />
      <Footer />
    </div>
  );
};

export default Home;
