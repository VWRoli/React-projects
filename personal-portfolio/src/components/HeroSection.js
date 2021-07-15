import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Tag from './Tag';

const HeroSection = ({ displayLanguage }) => {
  return (
    <section id="hero">
      <div className="intro">
        <h1>{displayLanguage.mainTitle}</h1>
        <p>
          {displayLanguage.jobTitle}. {displayLanguage.mainStrengths}
          <Tag type="HTML" />
          <Tag type="CSS" />
          <Tag type="JavaScript" />
          <Tag type="React" />
          <Tag type="Redux" />
          <br /> {displayLanguage.additionalExp}
          <Tag type="TypeScript" />
          <Tag type="MongoDB" />
          <Tag type="NodeJS" />
          <Tag type="ExpressJS" />
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
