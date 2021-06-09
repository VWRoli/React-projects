import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="intro">
        <h1>Hello, I'm Roland Füst</h1>
        <p>
          I'm a self taught Web-developer. <br />
          My main strengths are
          <span className="html-tag tag">HTML</span>,
          <span className="css-tag tag">CSS</span>,
          <span className="javascript-tag tag">JavaScript</span>, and
          <span className="react-tag tag">React</span>
          <span className="redux-tag tag">Redux</span>.
          <br /> I also have additional experience with
          <span className="mongo-tag tag">MongoDB</span>,
          <span className="node-tag tag">NodeJS</span> and
          <span className="express-tag tag">ExpressJS</span>.
        </p>
        <div className="links">
          <a href="https://github.com/VWRoli" target="_blank" rel="noreferrer">
            <FaGithub className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/roland-fuest/"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin className="icons" />
          </a>
        </div>
        <a href="mailto:fustroli@gmail.com">fustroli@gmail.com</a>
      </div>
    </section>
  );
};

export default HeroSection;
