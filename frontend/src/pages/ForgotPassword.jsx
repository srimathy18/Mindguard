import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      // Send a POST request to the backend endpoint
      const res = await axios.post("http://localhost:4000/api/forgot-password", { email });

      // Check the backend response for a success message
      setMessage(res.data.message || "Password reset link has been sent to your email.");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to process your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/ls.jpeg')" }}
    >
      <motion.div
        className="bg-white/30 backdrop-blur-lg p-8 rounded-lg shadow-lg w-96"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
        <p className="text-sm text-gray-700 text-center mb-4">
          Enter your email address to receive a password reset link.
        </p>
        {message && <p className="text-sm text-green-600 text-center mb-4">{message}</p>}
        {error && <p className="text-sm text-red-600 text-center mb-4">{error}</p>}
        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-white ${
              loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
            } transition`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-700">
          Remember your password?{" "}
          <span
            className="text-purple-600 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
