import React from "react";
import { useState } from "react";
import "./app.css";

function App() {
  const [isDark, setDark] = useState(false);
  const toggleTheme = () => {
    setDark(!isDark);
  };
  const lightStyle = {
    backgroundColor: "#f9f9f9",
    color: "#333",
    padding: "50px",
    textAlign: "center",
    minHeight: "100vh",
  };
  const darkStyle = {
    backgroundColor: "#1a1a1a",
    color: "#f9f9f9",
    padding: "50px",
    textAlign: "center",
    minHeight: "100vh",
  };
  return (
    <div style={isDark ? darkStyle : lightStyle}>
      <h1>{isDark ? "light" : "Dark"}</h1>
      <button
        onClick={() => toggleTheme()}
        className="bg-gray-700 text-white p-2 m-2"
      >
        Switch {isDark ? "light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
