import React from "react";
import { motion } from "framer-motion";
import { User, FileText, Brain, BarChart, MessageCircle, ShieldCheck } from "lucide-react";

const steps = [
  { id: 1, title: "Sign Up / Login", description: "Users create an account or log in to access the platform.", icon: <User size={32} /> },
  { id: 2, title: "Submit Mental Health Survey", description: "User fills out a short questionnaire about their mental state.", icon: <FileText size={32} /> },
  { id: 3, title: "AI Analysis & Prediction", description: "Our AI model analyzes user input and predicts mental health trends.", icon: <Brain size={32} /> },
  { id: 4, title: "View Detailed Reports", description: "Users receive a detailed emotional analysis and trends.", icon: <BarChart size={32} /> },
  { id: 5, title: "Chat with AI Assistant", description: "Users can interact with the AI chatbot for mental health support.", icon: <MessageCircle size={32} /> },
  { id: 6, title: "Personalized Recommendations", description: "App suggests self-care tips, therapy resources, and mood tracking.", icon: <ShieldCheck size={32} /> },
];

const hoverEffects = [
  "hover:bg-blue-800 hover:shadow-blue-500",
  "hover:bg-indigo-800 hover:shadow-indigo-500",
  "hover:bg-purple-800 hover:shadow-purple-500",
  "hover:bg-teal-800 hover:shadow-teal-500",
  "hover:bg-cyan-800 hover:shadow-cyan-500",
  "hover:bg-gray-800 hover:shadow-gray-500",
];

const UserSteps = () => {
  return (
    <div className="min-h-screen py-12 px-6 text-white"
    style={{
      backgroundImage: 'url("1.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
  
      <h2 className="text-3xl font-bold text-center text-[#EBEBDF]  mb-12 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
  How Users Interact with the App
</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`bg-[#24325B] backdrop-blur-lg p-6 rounded-lg shadow-lg flex items-start space-x-4 border-l-4 border-indigo-400 transition-all duration-300 
            ${hoverEffects[index % hoverEffects.length]} hover:scale-105 hover:border-opacity-75 hover:border-2`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Step Number */}
            <div className="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md">
              {step.id}
            </div>

            <div>
              <h3 className="text-xl font-semibold flex items-center space-x-2 text-blue-300">
                {React.cloneElement(step.icon, { className: "text-yellow-300 w-6 h-6" })} {/* Icon Color */}
                <span>{step.title}</span>
              </h3>
              <p className="text-gray-300 mt-1">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserSteps;
