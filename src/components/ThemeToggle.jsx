import React, { useState, useEffect } from "react";

const defaultTheme = () => {
  if (localStorage.getItem("theme")) return localStorage.getItem("theme");
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark-theme";
  return "bright-theme";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.body.classList.remove("bright-theme", "dark-theme");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "bright-theme" ? "dark-theme" : "bright-theme"));
  };

  return (
    <button
  onClick={toggleTheme}
  className="btn btn-outline-light ms-2 theme-toggle"
  aria-label="Toggle theme"
>
  <i className={`fas ${theme === "bright-theme" ? "fa-moon" : "fa-sun"} theme-icon`}></i>
</button>
  );
}
