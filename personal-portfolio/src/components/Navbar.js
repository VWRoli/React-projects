import { Link, animateScroll as scroll } from 'react-scroll';
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="navbar-logo">
          <FaCode />
          Roland Füst
        </Link>
        <ul>
          <li>
            <Link to="/" activeClass="active" smooth={true} duration={500}>
              Home
            </Link>
            <Link to="projects" smooth={true}>
              Projects
            </Link>
            <Link to="about" smooth={true}>
              About
            </Link>
          </li>
        </ul>
        <button className="btn">Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
