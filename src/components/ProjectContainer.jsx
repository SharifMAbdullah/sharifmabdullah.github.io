import React from "react";
import pos from "../assets/pos.png";
import ln from "../assets/ln.png";
import ekunjo from "../assets/ekunjo.png";
import guy from "../assets/guy.png";
import { Element } from "react-scroll";

const projectsList = [
  {
    title: "Parts of Speech Tagger",
    description: "Tagging Bangla Parts of Speech with a B+ tree dictionary",
    image: pos,
    tags: ["C"],
    link: "https://github.com/SharifMAbdullah/Bangla-Parts-of-Speech-Tagger",
  },
  {
    title: "Breaking the Silence",
    description: "Bangla Text-to-Gloss translation",

    tags: ["AI", "Finetuning"],
    link: "https://huggingface.co/spaces/ayhay/Bangla-Text2Gloss-Translation",
  },
  // {
  //   title: "Ekunjo",
  //   description:
  //     "An interactive platform emphasizing structured data presentation and user-friendly navigation flows.",
  //   image: ekunjo,
  //   tags: ["JavaScript", "Components"],
  // },
];

const ProjectContainer = () => {
  return (
    <Element name="project" className="project-container">
      <div style={{ marginBottom: "20px" }}>
        <img
          src={guy}
          style={{
            height: "180px",
            width: "180px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          alt="Avatar"
        />
        <h2>Projects I Have Completed</h2>
        <p style={{ maxWidth: "600px", margin: "15px auto 0" }}>
          A selection of applications and interfaces I've built.
        </p>
      </div>

      <div className="card-grid">
        {projectsList.map((project, index) => (
          <div
            className="soft-card"
            key={index}
            style={{ textAlign: "center" }}
          >
            <img
              className="project-image"
              src={project.image}
              alt={project.title}
            />
            <h3 style={{ textAlign: "left" }}>{project.title}</h3>
            <p style={{ textAlign: "left" }}>{project.description}</p>
            <div style={{ textAlign: "left", marginTop: "16px" }}>
              {project.tags.map((tag, tIndex) => (
                <span className="card-tag" key={tIndex}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="separator"></div>
    </Element>
  );
};

export default ProjectContainer;
