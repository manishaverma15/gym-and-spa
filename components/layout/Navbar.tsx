"use client";

import { useState } from "react";
import { navLinks } from "@/components/data/navLinks";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">GYMPRO</div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className="navbar-link"
          >
            {link.name}
          </li>
        ))}
      </ul>

      <div
        className="navbar-menu-icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
