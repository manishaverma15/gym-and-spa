"use client";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3 className="footer-logo">GymPro</h3>
          <p className="footer-text">
            Transforming fitness and wellness through expert training,
            premium facilities, and holistic care.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li>Home</li>
            <li>Programs</li>
            <li>Trainers</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Programs</h4>
          <ul className="footer-links">
            <li>Strength Training</li>
            <li>Yoga & Meditation</li>
            <li>Cardio & HIIT</li>
            <li>Spa & Recovery</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <p className="footer-contact">📍 Chandigarh, India</p>
          <p className="footer-contact">📞 +91 98765 43210</p>
          <p className="footer-contact">✉️ support@gymspa.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GymSpa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
