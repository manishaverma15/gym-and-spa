"use client";
import { navLinks } from "@/components/data/navLinks";
import "./Navbar.css";

const Navbar = () => {

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">GymPro</h2>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => handleScroll(link.id)}>
              {link.name}
            </li>
          ))}
        </ul>
      <div className="navbar-menu-icon">☰</div>
    </nav>
  );
};

export default Navbar;
