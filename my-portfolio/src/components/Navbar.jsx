"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

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

                <div className={`${isCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="navbar-item">
                            <Link href="/EN_portfolio_landing_page" className="nav-link">Welcome</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="/EN_skills" className="nav-link">Skills</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="/EN_featured_projects" className="nav-link">Featured Projects</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="/EN_hobbies" className="nav-link">Hobbies</Link>
                        </li>
                        <li className="navbar-item">
                            <Link href="/EN_contact" className="nav-link">Contact</Link>
                        </li>

                        <li className="navbar-item dropdown">
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
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" data-bs-popper="none">
                                <li>
                                    <a className="dropdown-item" href="/French/FR_Page_Principale">Français</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/Russian/RU_portfolio_landing_page">Русский</a>
                                </li>
                            </ul>
                        </li>

                        <li className="navbar-item">
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
