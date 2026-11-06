import React from "react";
import { Element } from "react-scroll";

const experiences = [
  {
    role: "Intern",
    company: "Kaz Software",
    period: "January 2024 — July 2024",
    details: "Desgined and delivered 20+ components of an MIS",
  },
  {
    role: "AI Engineer",
    company: "CraftXR",
    period: "March 2025 — July 2025",
    details: "Built the AI and the backend of a 3D virtual training program",
  },
  {
    role: "Software Engineer",
    company: "NYBSYS",
    period: "January 2026 — Current",
    details: "Designing network systems",
  },
];

const ExperienceContainer = () => {
  return (
    <Element name="experience" className="experience-container">
      <h2>Experience</h2>
      <p style={{ maxWidth: "600px" }}>
        Professional roles and engineering background.
      </p>

      <div className="card-grid">
        {experiences.map((exp, index) => (
          <div className="soft-card" key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
              }}
            >
              <h3 style={{ margin: 0 }}>{exp.role}</h3>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "var(--experience-accent)",
                  fontWeight: 600,
                }}
              >
                {exp.period}
              </span>
            </div>
            <strong
              style={{
                display: "block",
                color: "darkolivegreen",
                marginTop: "4px",
                fontSize: "0.95rem",
              }}
            >
              {exp.company}
            </strong>
            <p>{exp.details}</p>
          </div>
        ))}
      </div>

      <div className="separator"></div>
    </Element>
  );
};

export default ExperienceContainer;
