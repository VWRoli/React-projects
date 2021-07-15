import {
  FaFileDownload,
  FaLinkedin,
  FaCodepen,
  FaGithub,
} from 'react-icons/fa';
import Tag from './Tag';

const About = ({ displayLanguage }) => {
  return (
    <section id="about">
      <article className="left-container">
        <div className="skills">
          <h2>{displayLanguage.skillsTitle}</h2>
          <h3>{displayLanguage.frontendTitle}</h3>
          <Tag type="HTML" />
          <Tag type="CSS" />
          <Tag type="Sass" />
          <Tag type="JavaScript" />
          <Tag type="TypeScript" />

          <h3>{displayLanguage.banckendTitle}</h3>
          <Tag type="MongoDB" />
          <Tag type="NodeJS" />
          <Tag type="ExpressJS" />

          <h3>{displayLanguage.librariesTitle}</h3>
          <Tag type="Bootstrap" />
          <Tag type="React" />
          <Tag type="Redux" />

          <h3>{displayLanguage.otherTitle}</h3>
          <Tag type="Github" />
          <Tag type="npm" />
          <Tag type="Jira" />
          <Tag type="API" />
          <Tag type="Postman" />
        </div>
        <div className="about-text">
          <h2>{displayLanguage.moreAboutTitle}</h2>
          <p>{displayLanguage.aboutTextPar1}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: displayLanguage.aboutTextPar2,
            }}></p>
        </div>
      </article>
      <article className="right-container">
        <h3>{displayLanguage.viewCodesTitle}</h3>
        <div className="code-group">
          <a href="https://github.com/VWRoli" target="_blank" rel="noreferrer">
            <FaGithub className="icons" />
          </a>
          <a href="https://codepen.io/VWRoli" target="_blank" rel="noreferrer">
            <FaCodepen className="icons" />
          </a>
        </div>

        <h3>{displayLanguage.linkedInTitle}</h3>
        <a
          href="https://www.linkedin.com/in/roland-fuest/"
          target="_blank"
          rel="noreferrer">
          <FaLinkedin className="icons" />
        </a>
        <h3>{displayLanguage.emailTitle}</h3>

        <a href="mailto:fustroli@gmail.com">fustroli@gmail.com</a>
        <h3>{displayLanguage.resumeTitle}</h3>
        <a href="cv_roland_füst.pdf">
          <FaFileDownload className="icons" />
        </a>
      </article>
    </section>
  );
};

export default About;
