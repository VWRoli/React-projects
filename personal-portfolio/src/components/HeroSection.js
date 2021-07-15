import { FaGithub, FaLinkedin } from 'react-icons/fa';
//Components
import Button from './utils/Button';
import Tag from './utils/Tag';

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
          <Button
            link="https://github.com/VWRoli"
            labelText={<FaGithub />}
            type="icon"
          />

          <Button
            link="https://www.linkedin.com/in/roland-fuest/"
            labelText={<FaLinkedin />}
            type="icon"
          />
        </div>
        <a href="mailto:fustroli@gmail.com">fustroli@gmail.com</a>
      </div>
    </section>
  );
};

export default HeroSection;
