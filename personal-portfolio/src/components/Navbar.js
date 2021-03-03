import { Link, animateScroll as scroll } from 'react-scroll';
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <Link
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
      </button>
    </nav>
  );
};

export default Navbar;
