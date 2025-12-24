"use client";

import "./Footer.css";
import { quickLinks, programLinks } from "@/components/data/footerLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3 className="footer-logo">GYMPRO</h3>
          <p className="footer-text">
            Transforming fitness and wellness through expert training,
            premium facilities, and holistic care.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.label}>{link.label}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Programs</h4>
          <ul className="footer-links">
            {programLinks.map((program) => (
              <li key={program.label}>{program.label}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <p className="footer-contact">Location: Chandigarh, India</p>
          <p className="footer-contact">Phone No: +91 98765 43210</p>
          <p className="footer-contact">Email: support@gympro.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GymPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
