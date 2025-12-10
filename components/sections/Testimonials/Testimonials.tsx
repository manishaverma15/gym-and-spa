"use client";

import { useState } from "react";
import { testimonials } from "../../data/testimonialsData";
import "./Testimonials.css";

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 3 >= testimonials.length ? 0 : prev + 3
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - 3 < 0 ? testimonials.length - 3 : prev - 3
    );
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-heading">What Our Members Say</h2>

      <div className="carousel-wrapper">
        <button className="carousel-btn" onClick={handlePrev}>
          ◀
        </button>

        <div className="testimonials-grid">
          {visibleTestimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-img-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="testimonial-img"
                />
              </div>

              <p className="testimonial-feedback">
                "{item.feedback}"
              </p>

              <h3 className="testimonial-name">{item.name}</h3>
              <p className="testimonial-role">{item.role}</p>
            </div>
          ))}
        </div>

        <button className="carousel-btn" onClick={handleNext}>
          ▶
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
