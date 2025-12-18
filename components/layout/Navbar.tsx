"use client";

import { navLinks } from "@/components/data/navLinks";
import "./Navbar.css";

const Navbar = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">GYMPRO</div>

      <ul className="navbar-links">
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
      <div className="navbar-menu-icon">☰</div>
    </nav>
  );
};

export default Navbar;
