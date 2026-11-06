import React from "react";
import { Element } from "react-scroll";

const researchItems = [
  {
    title:
      "Breaking the Silence: A Dataset and Benchmark for Bangla Text-to-Gloss Translation",
    venue:
      "The 5th Asia-Pacific Chapter of the Association for Computational Linguistics & the 15th International Joint Conference on Natural Language Processing • 2026",
    abstract:
      "We present the first expert annotated publicly available Bangla Text-to-Gloss dataset and benchmark models",
    tags: ["Bangla NLP", "Synthetic Data", "Sign Language"],
    link: "https://aclanthology.org/2026.aacl-short.11/",
  },
  {
    title:
      "Elephant in the Room: Gender and Role-Based Disparities in the Software Industry of Bangladesh",
    venue:
      "IEEE/ACM Sixth Workshop on Gender Equality, Diversity, and Inclusion in Software Engineering (GEICSE) • 2025",
    abstract:
      "Explores the gender and role based disparities in Bangladeshi software industry",
    tags: ["HCI", "Gender", "Accessibility"],
    link: "https://ieeexplore.ieee.org/abstract/document/11051209/",
  },
  {
    title:
      "Where Journalism Silenced Voices: Exploring Discrimination in the Representation of Indigenous Communities in Bangladesh",
    venue: "Preprint • 2025",
    abstract:
      "Investigates the representation of ethnic minorities in new articles",
    tags: ["Biasness"],
    link: "https://arxiv.org/pdf/2506.09771",
  },
  {
    title: "Stemming--The Evolution and Current State with a Focus on Bangla",
    venue: "Preprint • 2025",
    abstract:
      "Systematic literature review of the stemming algorithms for Bangla",
    tags: ["Bangla NLP", "Stemming"],
    link: "https://arxiv.org/pdf/2508.15711?",
  },
];

const ResearchContainer = () => {
  return (
    <Element name="research" className="research-container">
      <h2>Research & Publications</h2>
      <p className="research-subtitle"> </p>

      <div className="card-grid">
        {researchItems.map((item, index) => (
          <div className="soft-card research-card" key={index}>
            <span className="research-venue">{item.venue}</span>
            <h3 className="research-title-heading">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link-title"
              >
                {item.title} ↗
              </a>
            </h3>
            <p>{item.abstract}</p>
            <div className="card-tag-wrapper">
              {item.tags.map((tag, tIndex) => (
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

export default ResearchContainer;
