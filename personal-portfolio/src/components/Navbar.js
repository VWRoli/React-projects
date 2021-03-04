import React, { useState, useRef, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { links } from './navbarData';
import { FaCode, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-header">
        <FaCode className="logo-icon" />
        Roland Füst
      </div>
      <div className="nav-container">
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
        <button className="resume-btn">
          <a href="cv_roland_fust.pdf" target="_blank">
            Resume
          </a>
        </button>
        <button className="nav-toggle">
          <FaBars />
        </button>
      </div>
      {/*  <Link
        className="navbar-logo"
        to="hero"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <FaCode className="logo-icon" />
        Roland Füst
      </Link>
      <ul>
        <li>
          <Link
            to="hero"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
      </ul>
      <button className="btn resume-btn">
        <a href="cv_roland_fust.pdf" target="_blank">
          Resume
        </a>
      </button> */}
    </nav>
  );
};

export default Navbar;
