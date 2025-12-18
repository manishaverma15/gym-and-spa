"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import "./HeroSection.css";

const texts = [
  "Train Smarter.",
  "Build Real Strength.",
  "Recover. Perform. Repeat.",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let i = 0;
    const current = texts[index];

    const type = () => {
      if (i <= current.length) {
        setText(current.slice(0, i));
        i++;
        setTimeout(type, 90);
      } else {
        setTimeout(() => {
          setIndex((index + 1) % texts.length);
        }, 1500);
      }
    };
    type();
  }, [index]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setOpacity(Math.max(1 - y / 300, 0));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero-modern" id="home">
      <div
        className="hero-inner"
        style={{
          opacity,
          transform: `translateY(${(1 - opacity) * 40}px)`
        }}
      >
        <div className="hero-content">
          <h1>
            Elevate Your <span>Fitness</span>
          </h1>

          <h2>
            {text}
            <span className="cursor">|</span>
          </h2>

          <p>
            Elite training, recovery & wellness designed for peak performance.
          </p>

          <div className="hero-actions">
            <Button variant="primary" size="lg">BECOME A MEMBER</Button>
            <Button variant="primary" size="lg">VIEW PLANS</Button>
          </div>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
