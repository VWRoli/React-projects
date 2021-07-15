import {
  FaFileDownload,
  FaLinkedin,
  FaCodepen,
  FaGithub,
} from 'react-icons/fa';
import Tag from './Tag';

const About = () => {
  return (
    <section id="about">
      <article className="left-container">
        <div className="skills">
          <h2>Skills:</h2>
          <h3>Front-end:</h3>
          <Tag type="HTML" />
          <Tag type="CSS" />
          <Tag type="Sass" />
          <Tag type="JavaScript" />
          <Tag type="TypeScript" />

          <h3>Back-end:</h3>
          <Tag type="MongoDB" />
          <Tag type="NodeJS" />
          <Tag type="ExpressJS" />

          <h3>Libraries, Frameworks:</h3>
          <Tag type="Bootstrap" />
          <Tag type="React" />
          <Tag type="Redux" />

          <h3>Other:</h3>
          <Tag type="Github" />
          <Tag type="npm" />
          <Tag type="Jira" />
          <Tag type="API" />
          <Tag type="Postman" />
        </div>
        <div className="about-text">
          <h2>More About Me</h2>
          <p>
            I'm an ex Online poker player turned self taught Web-developer.
            Currently my main focus is JavaScript and the MERN stack. I enjoy
            the problem solving aspect of programming, that a developer has to
            face day after day.
          </p>
          <p>
            My native language is <b>Hungarian</b>, I also speak fluent&nbsp;
            <b>English</b>, and I have a basic conversational level&nbsp;
            <b>German</b> knowledge.
          </p>
        </div>
      </article>
      <article className="right-container">
        <h3>View my codes:</h3>
        <div className="code-group">
          <a href="https://github.com/VWRoli" target="_blank" rel="noreferrer">
            <FaGithub className="icons" />
          </a>
          <a href="https://codepen.io/VWRoli" target="_blank" rel="noreferrer">
            <FaCodepen className="icons" />
          </a>
        </div>

        <h3>More info on LinkedIn:</h3>
        <a
          href="https://www.linkedin.com/in/roland-fuest/"
          target="_blank"
          rel="noreferrer">
          <FaLinkedin className="icons" />
        </a>
        <h3>Send me an Email:</h3>

        <a href="mailto:fustroli@gmail.com">fustroli@gmail.com</a>
        <h3>Download my resume:</h3>
        <a href="cv_roland_füst.pdf">
          <FaFileDownload className="icons" />
        </a>
      </article>
    </section>
  );
};

export default About;
