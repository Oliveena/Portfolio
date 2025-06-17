import React, { useState, useEffect } from "react";

const defaultTheme = () => {
  if (localStorage.getItem("theme")) return localStorage.getItem("theme");
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark-theme";
  return "light-theme";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light-theme" ? "dark-theme" : "light-theme"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-light ms-2"
      aria-label="Toggle theme"
    >
      {theme === "light-theme" ? (
        <i className="fas fa-moon"></i> // moon icon when in light mode
      ) : (
        <i className="fas fa-sun"></i> // sun icon when in dark mode
      )}
    </button>
  );
}
