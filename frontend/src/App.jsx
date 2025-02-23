import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const setTokenAndStore = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login setToken={setTokenAndStore} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={token ? <UserDashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;