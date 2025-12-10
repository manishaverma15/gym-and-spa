'use client';

import './TrainersSection.css';
import { trainers } from '@/components/data/trainersList';

const TrainersSection = () => {
  return (
    <section className="trainers-section">
      <h2 className="trainers-heading">Meet Our Trainers</h2>
      <p className="trainers-subheading">
        Expert coaches dedicated to your fitness journey.
      </p>

      <div className="trainers-grid">
        {trainers.map((trainer, idx) => (
          <div className="trainer-card" key={idx}>
            <div className="trainer-image-wrapper">
              <img
                src={trainer.imgSrc}
                alt={trainer.name}
                className="trainer-image"
              />
            </div>
            <h3 className="trainer-name">{trainer.name}</h3>
            <p className="trainer-role">{trainer.role}</p>
            <p className="trainer-bio">{trainer.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainersSection;
