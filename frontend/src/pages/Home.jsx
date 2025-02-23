import { React } from "react";
import { motion } from "framer-motion";
import Feature from '../components/Feature.jsx';
import { useNavigate } from "react-router-dom";
import UserSteps from "../components/Steps.jsx";
import Footer from '../components/Footer.jsx';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      
      {/* Hero Section */}
      <div
        className="w-full min-h-screen flex justify-end items-center text-white relative"
        style={{
          backgroundImage: 'url("1.png")',
          
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        
        
        {/* Heading Section */}
        <div className="max-w-3xl mx-auto text-center -mt-10">
        <motion.h1
  className="text-5xl font-bold leading-snug text-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: [0, -5, 0] }} // Smooth vertical bounce effect
  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
>
  <span className="text-[#EBEBDF] whitespace-nowrap drop-shadow-[0px_0px_20px_rgba(255,215,0,0.8)]">
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
  animate={{ opacity: 1, x: [0, -5, 5, 0] }} // Subtle left-right sway effect
  transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
>
  Empowering minds with cutting-edge AI. MindGuard combines Neuro-Linguistic Processing, 
  Psychometric Analysis, and Deep Learning to provide real-time mental health insights, 
  early risk detection, and proactive emotional support.
</motion.p>

   
          {/* Get Started Button */}
          <motion.button
            className="mt-6 px-6 py-3 bg-white hover:bg-cyan-600 text-black font-bold rounded-full shadow-lg 
                      transition-all duration-300 ease-in-out mr-5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 2, 
              y: -3, 
              boxShadow: "0px 5px 15px rgba(59, 130, 246, 0.6)" 
            }}
            onClick={() => navigate("/login")}
          >
            Get Started
          </motion.button>
        </div>
        
      
     
     
      </div>
      
      <Feature />
      <UserSteps />
      <Footer />
    </div>
  );
};

export default HomePage;
