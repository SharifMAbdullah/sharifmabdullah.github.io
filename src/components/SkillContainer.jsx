import React from 'react';
import mp from '../assets/mp.png';
import { Element } from 'react-scroll';

const SkillContainer = () => {
  return (
    <Element name="middle" className="container-with-separator skill-container">
      <br /><br />
      <div className="profile">
        <img src={mp} alt="my pic obviously" height="300px" width="300px" />
        <p><em>Student at the University of Dhaka and Lord of Nowhere.</em></p>
        <p>I do stuff, from basic HTML to Natural Language Processing.</p>
      </div>
      <h2>My Skills</h2>
      <div className="skills">
        <div className="skill-row">
          <img className="" src="" alt="" />
          <h3>Web Technology</h3>
          <p>Fullstack development, but more focused on Backend</p>
        </div>
        <div className="skill-row">
          <img className="" src="" alt="" />
          <h3>System Design & DevOps</h3>
          <p>Love to do system design and turning them into reality!</p>
        </div>
        <div className="skill-row">
          <img className="" src="" alt="" />
          <h3>Competitive Programming</h3>
          <p>Not an expert, but practicing</p>
        </div>
      </div>
      <br />
      <div className="separator"></div>
    </Element>
  );
};

export default SkillContainer;
