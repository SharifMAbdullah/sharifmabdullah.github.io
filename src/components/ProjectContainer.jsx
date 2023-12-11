import React from 'react';
import pos1 from '../assets/pos1.png';
import pos2 from '../assets/pos2.png';
import ln from '../assets/ln.png';
import ekunjo from '../assets/ekunjo.png';
import boy from '../assets/boy.png'
import { Element } from "react-scroll";

const ProjectContainer = () => {
  return (
    <Element name="project" className="container-with-separator project-container">
      <br /><br />
        <div className="profile-intro">
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
          <img src={pos1} height="150px" width="450px" alt="" />
          <img src={pos2} height="420px" width="300px" alt="" />
        </div>
        <div className="skill-row">
          <img className="" src="" alt="" />
          <h3>Mock Linkedin</h3>
          <p>A simple implementation of Linkedin that heavily focuses on
            architecture design and implementing microservices
          </p>
          <br />
          <img src={ln} width="600px" alt="" />
        </div>
        <div className="skill-row">
          <h3>Ekunjo</h3>
          <p>A one stop solution for all your gardening needs!</p>
          <br /><br />
          <img src={ekunjo} height="450px" width="640px" alt="" />
        </div>
      </div>
      <br />
      <div className="separator"></div>
    </Element>
  );
};

export default ProjectContainer;
