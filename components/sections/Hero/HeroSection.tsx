'use client';

import Lottie from 'lottie-react';
import gymAnimation from '../../../public/lottie/gym-animation.json';
import './HeroSection.css';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Transform Your Body.<br />Transform Your Life.
        </h1>

        <p className="hero-subtitle">
          Join our fitness community and unlock personalized workout programs,
          expert guidance, and powerful motivation to achieve your dream physique.
        </p>

        <div className="hero-buttons">
          <Button variant="primary" size="md">
            Start Training
          </Button> 

          <Button variant="secondary" size="md">
            View Plans
          </Button>
        </div>
      </div>

      <div className="hero-animation">
        <Lottie animationData={gymAnimation} loop={true} className="lottie-style" />
      </div>
    </section>
  );
};

export default HeroSection;
