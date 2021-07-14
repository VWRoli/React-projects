import {
  FaFileDownload,
  FaLinkedin,
  FaCodepen,
  FaGithub,
} from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <article className="left-container">
        <div className="skills">
          <h2>Skills:</h2>
          <h3>Front-end:</h3>
          <span className="html-tag tag">HTML</span>
          <span className="css-tag tag">CSS</span>
          <span className="sass-tag tag">Sass</span>
          <span className="javascript-tag tag">JavaScript</span>
          <span className="typescript-tag tag">Typescript</span>
          <h3>Back-end:</h3>
          <span className="mongodb-tag tag">MongoDB</span>
          <span className="nodejs-tag tag">NodeJS</span>
          <span className="expressjs-tag tag">ExpressJS</span>
          <h3>Libraries, Frameworks:</h3>
          <span className="bootstrap-tag tag">Bootstrap</span>
          <span className="react-tag tag">React</span>
          <span className="redux-tag tag">Redux</span>
          <h3>Other:</h3>
          <span className="git-tag tag">Git (Github)</span>
          <span className="npm-tag tag">npm</span>
          <span className="jira-tag tag">Jira</span>
          <span className="api-tag tag">API</span>
          <span className="postman-tag tag">Postman</span>
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
