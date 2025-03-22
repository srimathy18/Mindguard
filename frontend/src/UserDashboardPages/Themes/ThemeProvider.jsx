import React, { createContext, useState } from "react";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeStyles = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme: themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
