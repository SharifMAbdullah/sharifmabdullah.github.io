import React from 'react';
import { Element } from 'react-scroll';

const BottomContainer = () => {
  return (
    <Element name="bottom" className="container-with-separator bottom_container">
      <br /><br />
      <div className="contact-me">
        <h2>Get In Touch</h2>
        <br /><br />
        <h3>Want to get to know more about a greenie?</h3>
        <p>Follow the links!</p>
        <br />
        <a className="btn" href="mailto:bsse1211@iit.du.ac.bd">CONTACT ME</a>
        <br /><br />
      </div>
      <a className="footer-link" target="_blank" href="https://www.linkedin.com/in/sharif-mohammad-abdullah-396487214/">LinkedIn</a>
      <a className="footer-link" target="_blank" href="https://github.com/SharifMAbdullah/">Github</a>
      <p>© Sharif Mohammad Abdullah.</p>
      {/* <br /><br /> */}
      {/* <div className="separator"></div> */}
    </Element>
  );
};

export default BottomContainer;
