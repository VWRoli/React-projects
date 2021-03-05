import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="intro">
        <h1>Hello, I'm Roland Füst</h1>
        <p>
          I'm a self taught Front-end Developer. <br />
          My main strengths are
          <span className="html-tag tag">HTML</span>
          <span className="css-tag tag">CSS</span>,
          <span className="javascript-tag tag">JavaScript</span> (ES6+, OOP),
          and
          <span className="react-tag tag">React</span>
        </p>
        <div className="links">
          <a href="https://github.com/VWRoli" target="_blank" rel="noreferrer">
            <FaGithub className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/roland-fuest/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="icons" />
          </a>
        </div>
        <a href="mailto:fustroli@gmail.com">fustroli@gmail.com</a>
      </div>
    </section>
  );
};

export default HeroSection;
