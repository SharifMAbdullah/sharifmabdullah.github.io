import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <ul>
          <Link to="top_container" smooth={true} duration={500} >
            Hola!
          </Link>
          <Link to="skill-container" smooth={true} duration={500}>
            Skills
          </Link>
          <Link to="project-container" smooth={true} duration={500}>
            Projects
          </Link>
          <Link to="bottom_container" smooth={true} duration={500}>
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
