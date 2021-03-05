import React from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';

export const ResumeBtn = () => {
  return (
    <a href="cv_roland_fust.pdf" target="_blank" className="resume-btn">
      Resume
    </a>
  );
};
export const MobileToggleBtn = ({ closeMobileMenu, setcloseMobileMenu }) => {
  return (
    <button
      className="nav-toggle"
      onClick={() => setcloseMobileMenu(!closeMobileMenu)}
    >
      {closeMobileMenu ? <FaBars /> : <FaTimes />}
    </button>
  );
};
