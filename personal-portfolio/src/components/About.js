import {
  FaFileDownload,
  FaLinkedin,
  FaCodepen,
  FaGithub,
} from 'react-icons/fa';
import { useLanguageContext } from '../context/languageContext';
//Components
import Button from './common/Button';
import Tag from './common/Tag';

const About = () => {
  const { displayLanguage } = useLanguageContext();

  return (
    <section id="about">
      <article className="left-container">
        <div className="blur"></div>
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
          <Tag type="Material-UI" />
          <Tag type="NextJS" />
          <Tag type="React-Native" />
          <Tag type="TailwindCSS" />

          <h3>{displayLanguage.otherTitle}</h3>
          <Tag type="Github" />
          <Tag type="npm" />
          <Tag type="Jira" />
          <Tag type="API" />
          <Tag type="Postman" />
          <Tag type="Figma" />
        </div>
        <div className="about-text">
          <h2>{displayLanguage.moreAboutTitle}</h2>
          <p>{displayLanguage.aboutTextPar1}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: displayLanguage.aboutTextPar2,
            }}
          ></p>
        </div>
      </article>
      <article className="right-container">
        <div className="blur"></div>
        <h3>{displayLanguage.viewCodesTitle}</h3>
        <div className="code-group">
          <Button
            link="https://github.com/VWRoli"
            labelText={<FaGithub />}
            type="icon"
          />
          <Button
            link="https://codepen.io/VWRoli"
            labelText={<FaCodepen />}
            type="icon"
          />
        </div>

        <h3>{displayLanguage.linkedInTitle}</h3>
        <Button
          link="https://www.linkedin.com/in/roland-fuest/"
          labelText={<FaLinkedin />}
          type="icon"
        />

        <h3>{displayLanguage.emailTitle}</h3>

        <a href="mailto:fustroli@gmail.com">fustroli@gmail.com</a>
        <h3>{displayLanguage.resumeTitle}</h3>
        <Button
          link="cv_roland_füst.pdf"
          labelText={<FaFileDownload />}
          type="icon"
        />
      </article>
    </section>
  );
};

export default About;
