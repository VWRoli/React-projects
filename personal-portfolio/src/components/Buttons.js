import React from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useState } from 'react';

export const ResumeBtn = () => {
  return (
    <button className="resume-btn">
      <a href="cv_roland_fust.pdf" target="_blank">
        Resume
      </a>
    </button>
  );
};
export const MobileToggleBtn = ({ closeMobileMenu, setcloseMobileMenu }) => {
  //const [closeMobileMenu, setcloseMobileMenu] = useState(false);
  return (
    <button
      className="nav-toggle"
      onClick={() => setcloseMobileMenu(!closeMobileMenu)}
    >
      {closeMobileMenu ? <FaBars /> : <FaTimes />}
    </button>
  );
};
