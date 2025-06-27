import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function MyNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const currentLang = pathParts[1] || "en";

  const navItems = [
    { to: `/${currentLang}/`, label: "Welcome" },
    { to: `/${currentLang}/skills`, label: "Skills" },
    { to: `/${currentLang}/projects`, label: "Featured Projects" },
    { to: `/${currentLang}/hobbies`, label: "Hobbies" },
    { to: `/${currentLang}/contact`, label: "Contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map(({ to, label }) => {
              const isActive = location.pathname === to;

              return (
                <li key={to} className={`nav-item${isActive ? " active" : ""}`}>
                  <Link to={to} className="nav-link" aria-current={isActive ? "page" : undefined}>
                    {label}
                  </Link>
                </li>
              );
            })}

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Languages
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/fr/" className="dropdown-item">
                    Français
                  </Link>
                </li>
                <li>
                  <Link to="/ru/" className="dropdown-item">
                    Русский
                  </Link>
                </li>
                <li>
                  <Link to="/en/" className="dropdown-item">
                    English
                  </Link>
                </li>
              </ul>
            </li>

            {/* Theme toggle */}
            <li className="nav-item">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}