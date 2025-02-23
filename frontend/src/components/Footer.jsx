import React from "react";
import { motion } from "framer-motion";
import {  Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-900 to-gray-900 text-white">
      {/* Call-to-Action Section */}
      <motion.div
        className="py-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold drop-shadow-lg">🚀 Get Started Today!</h2>
        <p className="mt-2 text-gray-300">Join now and take control of your mental well-being.</p>
        
        <motion.button
          className="mt-6 px-8 py-3 bg-white hover:bg-cyan-600 text-black font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/signup")} // Redirects to Signup Page
        >
          Sign Up Now
        </motion.button>
      </motion.div>

      {/* Footer Section */}
      <div className="border-t border-gray-700 py-8 px-6">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Left - Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-blue-400">NL-PAP</h3>
            <p className="text-gray-400 text-sm mt-1">
              AI-Powered Mental Health Analysis for a Better You.
            </p>
          </div>

          {/* Middle - Links */}
          <ul className="flex space-x-6 text-sm text-gray-300 mt-4 md:mt-0">
            
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Use</a>
            </motion.li>
          </ul>

          {/* Right - Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            
            
            <motion.a whileHover={{ scale: 1.2 }} href="mailto:support@example.com">
              <Mail className="text-blue-400 hover:text-blue-500 transition-colors" size={24} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="tel:+123456789">
              <Phone className="text-blue-400 hover:text-blue-500 transition-colors" size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-gray-500 text-sm text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          ©  NL-PAP. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
