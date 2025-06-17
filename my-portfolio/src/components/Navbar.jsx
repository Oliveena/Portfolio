import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; 

export default function MyNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { to: "/", label: "Welcome" },
    { to: "/EN/skills", label: "Skills" },
    { to: "/EN/projects", label: "Featured Projects" },
    { to: "/EN/hobbies", label: "Hobbies" },
    { to: "/EN/contact", label: "Contact" },
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
              const isActive = pathname === to;

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
                  <Link to="/French/FR_Page_Principale" className="dropdown-item">
                    Français
                  </Link>
                </li>
                <li>
                  <Link to="/Russian/RU_portfolio_landing_page" className="dropdown-item">
                    Русский
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
