import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Tag from './Tag';

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="intro">
        <h1>Hello, I'm Roland Füst</h1>
        <p>
          I'm a Web-developer. <br />
          My main strengths are
          <Tag type="HTML" />, <Tag type="CSS" />, <Tag type="JavaScript" /> and{' '}
          <Tag type="React" />, <Tag type="Redux" />.
          <br /> I also have additional experience with
          <Tag type="TypeScript" />, <Tag type="MongoDB" />,{' '}
          <Tag type="NodeJS" /> and <Tag type="ExpressJS" />
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
