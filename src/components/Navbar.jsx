import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='navbar'>
      <nav>
        <ul>
          <Link to="top_container" smooth={true} duration={500} onClick={scrollToTop}>
            Hola!
          </Link>
          <Link to="middle_container" smooth={true} duration={500}>
            Skills
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
