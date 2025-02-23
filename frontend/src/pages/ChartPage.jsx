import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: "user", text: "I feel overwhelmed today." },
    { sender: "ai", text: "It sounds like you're experiencing stress. Would you like some relaxation tips?" },
  ]);

  const sendMessage = (text) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text },
      { sender: "ai", text: "Here are some resources for you." },
    ]);
  };

  // Variants for container and message animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-black text-white min-h-screen p-6 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-cyan-200 text-3xl font-bold drop-shadow-lg">AI Chatbot</h1>
      
      <motion.div
        className="bg-gray-800 rounded-2xl shadow-lg w-full max-w-md mt-6 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="h-64 overflow-auto space-y-2">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`p-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-cyan-600 text-black"
                  : "bg-gray-700 text-white"
              }`}
              variants={messageVariants}
            >
              {msg.text}
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex gap-2 mt-4">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#06b6d4" }}
            className="bg-white text-black px-3 py-1 rounded"
            onClick={() => sendMessage("📌 Self-Care Tips")}
          >
            📌 Self-Care Tips
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#06b6d4" }}
            className="bg-white text-black px-3 py-1 rounded"
            onClick={() => sendMessage("📚 Mental Health Resources")}
          >
            📚 Mental Health Resources
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#06b6d4" }}
            className="bg-white text-black px-3 py-1 rounded"
            onClick={() => sendMessage("🚨 Crisis Intervention Alert")}
          >
            🚨 Crisis Alert
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
