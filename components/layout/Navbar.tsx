"use client";
import Link from "next/link";
import { navLinks } from "@/components/data/navLinks";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">GymPro</h2>

      <div className="navbar-links">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path} className="navbar-link">
            {link.name}
          </Link>
        ))}
      </div>

      <div className="navbar-menu-icon">☰</div>
    </nav>
  );
};

export default Navbar;
