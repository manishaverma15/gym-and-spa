'use client';

import { programs } from "../../data/programs";
import './ProgramsSection.css';

const ProgramsSection = () => {
  return (
    <section className="programs-section">
      <h2 className="programs-heading">Our Programs</h2>
      <p className="programs-subheading">
        Improve your fitness with professionally designed training programs.
      </p>

      <div className="programs-grid">
        {programs.map((item, index) => (
          <div className="program-card" key={index}>
            <div className="program-icon">{item.icon}</div>
            <h3 className="program-title">{item.title}</h3>
            <p className="program-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
