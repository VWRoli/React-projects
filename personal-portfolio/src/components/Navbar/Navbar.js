import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaCode, FaTimes } from 'react-icons/fa';
import hungaryFlag from '../../assets/hungary.png';
import englishFlag from '../../assets/united-kingdom.png';
//Languages
import { hungarian } from '../../languages/hungarian';
import { english } from '../../languages/english';
//Components
import LangButton from './LangButton';

const Navbar = ({ displayLanguage, setDisplayLanguage }) => {
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

  const handleClick = (language) => {
    if (language === 'english') {
      setDisplayLanguage(english);
    } else {
      setDisplayLanguage(hungarian);
    }
  };

  return (
    <nav>
      <div className="nav-header">
        <FaCode className="logo-icon" />
        {displayLanguage.logo}
        <button
          className="nav-toggle"
          onClick={() => setcloseMobileMenu(!closeMobileMenu)}>
          {closeMobileMenu ? <FaBars /> : <FaTimes />}
        </button>
      </div>
      <ul className={closeMobileMenu ? `links` : `links show-container`}>
        {displayLanguage.links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <Link
                className="link-items"
                to={url}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={() => setcloseMobileMenu(true)}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="nav-resume">
        <a href="cv_roland_füst.pdf" target="_blank" className="resume-btn">
          {displayLanguage.resumeBtn}
        </a>
      </div>
      <div className="lang-selector">
        <LangButton
          flag={hungaryFlag}
          handleClick={() => handleClick('hungarian')}
        />
        <LangButton
          flag={englishFlag}
          handleClick={() => handleClick('english')}
        />
      </div>
    </nav>
  );
};

export default Navbar;
