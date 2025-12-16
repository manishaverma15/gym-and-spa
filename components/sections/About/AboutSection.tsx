'use client';

import Lottie from 'lottie-react';
import pushUpAnimation from '../../../public/lottie/push-up-animation.json';
import Button from '@/components/ui/Button';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-animation">
          <Lottie animationData={pushUpAnimation} loop className="about-lottie" />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Our Fitness Community</h2>

          <p className="about-description">
            We are more than just a gym — we’re a community built around strength,
            discipline, and growth. Whether you're lifting, running, or recovering,
            our experts help you push beyond your limits with confidence.
          </p>

          <p className="about-description">
            With advanced equipment, certified trainers, and personalized workout plans,
            we make fitness accessible for everyone — from beginners to athletes.
          </p>

          <Button variant="primary" size="lg">
            Join the Community
          </Button>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
