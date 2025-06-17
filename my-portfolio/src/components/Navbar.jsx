"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MyNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Welcome" },
    { href: "/EN/skills", label: "Skills" },
    { href: "/EN/projects", label: "Featured Projects" },
    { href: "/EN/hobbies", label: "Hobbies" },
    { href: "/EN/contact", label: "Contact" },
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
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <li key={href} className={`nav-item${isActive ? " active" : ""}`}>
                  <Link href={href} legacyBehavior>
                    <a className="nav-link" aria-current={isActive ? "page" : undefined}>
                      {label}
                    </a>
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
                  <Link href="/French/FR_Page_Principale" legacyBehavior>
                    <a className="dropdown-item">Français</a>
                  </Link>
                </li>
                <li>
                  <Link href="/Russian/RU_portfolio_landing_page" legacyBehavior>
                    <a className="dropdown-item">Русский</a>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Theme toggle (non-functional placeholder) */}
            <li className="nav-item">
              <button id="toggle-theme" className="btn btn-outline-light ms-2">
                <i id="theme-icon" className="fas fa-moon"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
