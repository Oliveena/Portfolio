"use client";

import Link from "next/link";
import { useState } from "react";
import { useActiveNav } from "@/hooks/NavbarHighlight";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const activePath = useActiveNav();

  const navItems = [
    { href: "/EN_portfolio_landing_page", label: "Welcome" },
    { href: "/EN_skills", label: "Skills" },
    { href: "/EN_featured_projects", label: "Featured Projects" },
    { href: "/EN_hobbies", label: "Hobbies" },
    { href: "/EN_contact", label: "Contact" },
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

        <div
          className={`${isCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {navItems.map(({ href, label }) => {
              // Extract path segment to compare with activePath
              const pathSegment = href.split("/").pop();
              const isActive =
                pathSegment === activePath ||
                (pathSegment === "" && activePath === "");

              return (
                <li
                  key={href}
                  className={`navbar-item nav-item${isActive ? " active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Link href={href} className="nav-link">
                    {label}
                  </Link>
                </li>
              );
            })}

            {/* Dropdown menu for languages */}
            <li className="navbar-item dropdown nav-item">
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
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
                data-bs-popper="none"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="/French/FR_Page_Principale"
                  >
                    Français
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/Russian/RU_portfolio_landing_page"
                  >
                    Русский
                  </a>
                </li>
              </ul>
            </li>

            {/* Theme toggle button */}
            <li className="navbar-item nav-item">
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
