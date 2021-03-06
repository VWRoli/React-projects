import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { links } from './navbarData';
import { FaCode } from 'react-icons/fa';
import { MobileToggleBtn, ResumeBtn } from './Buttons';

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
        Roland Füst
        <MobileToggleBtn
          closeMobileMenu={closeMobileMenu}
          setcloseMobileMenu={setcloseMobileMenu}
        />
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
                offset={-60}
                duration={500}
                onClick={() => setcloseMobileMenu(true)}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="nav-resume">
        <ResumeBtn />
      </div>
    </nav>
  );
};

export default Navbar;
