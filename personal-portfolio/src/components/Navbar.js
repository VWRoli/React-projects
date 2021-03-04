import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { links } from './navbarData';
import { FaCode } from 'react-icons/fa';
import { MobileToggleBtn, ResumeBtn } from './Buttons';

const Navbar = () => {
  const [showResume, setShowResume] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 800) {
      setShowResume(false);
    } else {
      setShowResume(true);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', showButton);
    //Cleanup
    return () => {
      window.addEventListener('resize', showButton);
    };
  }, [showResume]);

  return (
    <nav>
      <div className="nav-header">
        <FaCode className="logo-icon" />
        Roland Füst
      </div>
      <div className="nav-container ">
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <Link
                  className="link-items"
                  to={url}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-resume">
        {showResume ? <ResumeBtn /> : <MobileToggleBtn />}
      </div>
    </nav>
  );
};

export default Navbar;
