import React from "react";
import mp from "../assets/mp.png";
import { Element } from "react-scroll";

const skillCategories = [
  {
    title: "LLM & AI",
    description:
      "Researching to make AI safe, responsible and hoping it doesn't wake up one day and decide to wipeout us",
  },
  {
    title: "Networks",
    description:
      "Getting my hands dirty on the backbone of internet",
  },
  {
    title: "Software Engineering",
    description:
      "Building softwares for customers, friends and myself",
  },
];

const SkillContainer = () => {
  return (
    <Element name="middle" className="skill-container">
      <h2>My Skills</h2>
      <p style={{ maxWidth: "600px" }}>
        I tinker with many things, from server hardwares to natural language processing!
      </p>

      <div className="card-grid">
        {skillCategories.map((skill, index) => (
          <div className="soft-card" key={index}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

      <div className="separator"></div>
    </Element>
  );
};

export default SkillContainer;
