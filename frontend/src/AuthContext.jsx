// src/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";


const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext);
};

//  provide the token globally
export const AuthProvider = ({ children }) => {
 
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Function to set the token and store it in localStorage
  const setTokenAndStore = (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken); 
    } else {
      localStorage.removeItem("token"); 
    }
    setToken(newToken); // Update state
  };

  return (
    <AuthContext.Provider value={{ token, setToken: setTokenAndStore }}>
      {children}
    </AuthContext.Provider>
  );
};
