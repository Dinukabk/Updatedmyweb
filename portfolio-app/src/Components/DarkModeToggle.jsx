import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="ml-auto">
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default DarkModeToggle;
