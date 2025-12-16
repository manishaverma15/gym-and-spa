"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData)
    });
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact-container">

        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have questions? Want to join? Send us a message!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
          >
            Send Message
          </Button>
        </form>

      </div>
    </section>
  );
};

export default ContactUs;
