import React from 'react';
import pos from '../assets/pos.png';
import ln from '../assets/ln.png';
import ekunjo from '../assets/ekunjo.png';
import boy from '../assets/boy.png'
import { Element } from "react-scroll";

const ProjectContainer = () => {
  return (
    <Element name="project" className="container-with-separator project-container">
      <br /><br />
      <div className="project-intro">
        <img src={boy} height="300px" width="300px" alt="" />
        <br />
        <h2>Projects I Have Completed</h2>
      </div>
      <div className='skills'>
        <div className="skill-row">
          <h3>Bangla Parts of Speech Detector</h3>
          <p>Tags Bangla words with appropriate parts of speech
              using a stemmer and a B+ tree
          </p>
          <br />
          <img className='project-image' src={pos} alt="" />
        </div>
        <div className="skill-row">
          <img className="" src="" alt="" />
          <h3>Mock Linkedin</h3>
          <p>A simple implementation of Linkedin that heavily focuses on
            architecture design and implementing microservices
          </p>
          <br />
          <img className='project-image' src={ln} alt="" />
        </div>
        <div className="skill-row">
          <h3>Ekunjo</h3>
          <p>A one stop solution for all your gardening needs!</p>
          <br /><br />
          <img className='project-image' src={ekunjo} alt="" />
        </div>
      </div>
      <br />
      <div className="separator"></div>
    </Element>
  );
};

export default ProjectContainer;
