import React, { useState } from "react";
import { FaPaperPlane, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // 1. Send to Flask API for analysis
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"  // Change the header to 'application/json'
        },
        body: JSON.stringify({ text: input })  // Change the body to a JSON object
      });

      const data = await response.json();

      // 2. Create bot message (matches schema)
      const botMessage = {
        role: "assistant",
        content: `
🧠 Sentiment: ${data.sentiment} (${Math.round(data.sentiment_confidence)}%)
📋 Disorder: ${data.disorder} (${Math.round(data.disorder_confidence)}%)
🚨 Risk Level: ${data.risk} 
🔍 Explanation: ${data.lime_explanation}

💡 Suggestions:
${data.recommendations.map((s, i) => `  ${i + 1}. ${s}`).join("\n")}
        `.trim(),
      };

      const allMessages = [...updatedMessages, botMessage];
      setMessages(allMessages);

      // 3. Save conversation to MongoDB backend
      await fetch("http://localhost:4000/api/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ messages: allMessages }),
      });
    } catch (error) {
      console.error("Error during chatbot communication:", error);
    } finally {
      setLoading(false);
    }
};

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#297194] via-[#D1E1F7] to-[#E7F2F7] text-gray-600 p-4 flex items-center">
        <FaArrowLeft className="cursor-pointer text-xl" onClick={() => navigate(-1)} />
        <h2 className="text-lg font-semibold ml-4">AI Chatbot</h2>
      </div>

      {/* Chat window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg whitespace-pre-wrap max-w-md ${
              msg.role === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-white text-black shadow"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <p className="text-gray-500">AI is typing...</p>}
      </div>

      {/* Input section */}
      <div className="p-4 bg-white shadow flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
