"use client";

import Button from "@/components/ui/Button";
import { memberShipPlans } from "@/components/data/memberShipPlans";
import "./MemberShip.css";

const Membership = () => {
  return (
    <section id="membership" className="membership section">
      <h2 className="section-title">Membership Plans</h2>
      <p className="section-subtitle">
        Choose a plan that fits your fitness and wellness goals
      </p>

      <div className="membership-grid">
        {memberShipPlans.map((plan) => (
          <div
            key={plan.title}
            className={`membership-card ${plan.popular ? "popular" : ""
              }`}
          >
            {plan.popular && (
              <span className="popular-badge">Most Popular</span>
            )}

            <h3 className="plan-title">{plan.title}</h3>

            <div className="plan-price">
              <span className="price">{plan.price}</span>
              <span className="duration">{plan.duration}</span>
            </div>

            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <Button
              variant={plan.popular ? "primary" : "outline"}
              size="md"
              fullWidth
            >
              Choose Plan
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Membership;
