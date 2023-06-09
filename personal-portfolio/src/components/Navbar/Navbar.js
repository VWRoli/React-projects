import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaCode, FaTimes } from 'react-icons/fa';
import { links } from '../../constants/menuLinks';
//Components
import Button from '../common/Button';

const Navbar = () => {
  const [showResume, setShowResume] = useState(false);
  const [closeMobileMenu, setcloseMobileMenu] = useState(true);

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
      window.removeEventListener('resize', showButton);
    };
  }, [showResume]);

  return (
    <nav>
      <div className="nav-header">
        <FaCode className="logo-icon" />
        ROLAND FÜST
        <button
          className="nav-toggle"
          aria-label="Toggle mobile menu"
          onClick={() => setcloseMobileMenu(!closeMobileMenu)}
        >
          {closeMobileMenu ? <FaBars /> : <FaTimes />}
        </button>
      </div>
      <ul className={closeMobileMenu ? `links` : `links show-container`}>
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
                offset={-76}
                duration={500}
                onClick={() => setcloseMobileMenu(true)}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="nav-controls">
        <div className="nav-resume">
          <Button link="cv_roland_füst.pdf" labelText="Resume" type="resume" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
