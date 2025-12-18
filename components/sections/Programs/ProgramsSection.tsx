'use client';

import {
  Dumbbell,
  Flame,
  User,
  Zap,
  Salad,
  Brain,
  type LucideIcon,
} from "lucide-react";

import { programs } from "@/components/data/programs";
import type { ProgramIconKey } from "@/types/program";

import "./ProgramsSection.css";

const iconMap: Record<ProgramIconKey, LucideIcon> = {
  strength: Dumbbell,
  weightLoss: Flame,
  yoga: Brain,
  personal: User,
  hiit: Zap,
  nutrition: Salad,
};

const ProgramsSection = () => {
  return (
    <section className="programs-section" id="programs">
      <h2 className="programs-heading">OUR PROGRAMS</h2>

      <p className="programs-subheading">
        Improve your fitness with professionally designed training programs.
      </p>

      <div className="programs-grid">
        {programs.map((item, index) => {
          const Icon = iconMap[item.iconKey];

          return (
            <div className="program-card premium" key={index}>
              <Icon className="program-icon" />
              <h3 className="program-title">{item.title}</h3>
              <p className="program-desc">{item.desc}</p>

              <div className="program-cta">
                Discover more about us <span>→</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProgramsSection;
