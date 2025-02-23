import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import ChatPage from "./pages/ChartPage.jsx";


const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const setTokenAndStore = (token) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    setToken(token);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login setToken={setTokenAndStore} />} />
        <Route path="/signup" element={token ? <Navigate to="/dashboard" /> : <Signup />} />
        <Route path="/dashboard" element={token ? <UserDashboard /> : <Navigate to="/login" />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
