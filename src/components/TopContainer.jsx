import React from 'react';
import castle from '../assets/castle.png';
import king from '../assets/king.png';
import { Element } from 'react-scroll';

const TopContainer = () => {
  return (
    <Element name="top" className="top_container">
      <div className="parent">
        <img className="bg" src={castle} alt="background" />
        <img className="fg" src={king} height="250px" width="300px" alt="king" />
      </div>
      <br /><br />
      <div className="intro">
        <h1>Hello</h1>
        <p>I am Sharif</p>
      </div>
      <br /><br />
      <div className="separator"></div>
    </Element>
  );
};
// insiginificant change
export default TopContainer;
