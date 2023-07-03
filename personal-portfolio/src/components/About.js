import {
  FaFileDownload,
  FaLinkedin,
  FaCodepen,
  FaGithub,
} from 'react-icons/fa';
//Components
import Button from './common/Button';
import Tag from './common/Tag';

const About = () => {
  return (
    <section id="about">
      <article className="left-container">
        <div className="blur"></div>
        <div className="skills">
          <h2>Skills</h2>
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
          <Tag type="NestJS" />
          <h3>Libraries, Frameworks:</h3>
          <Tag type="Bootstrap" />
          <Tag type="React" />
          <Tag type="Redux" />
          <Tag type="Material-UI" />
          <Tag type="NextJS" />
          <Tag type="React-Native" />
          <Tag type="TailwindCSS" />
          <Tag type="Vue" />
          <Tag type="Nuxt" />
          <h3>Other</h3>
          <Tag type="Git" />
          <Tag type="npm" />
          <Tag type="Docker" />
          <Tag type="Jira" />
          <Tag type="Jest" />
          <Tag type="API" />
          <Tag type="Postman" />
          <Tag type="TypeORM" />
          <Tag type="Figma" />
        </div>
        <div className="about-text">
          <h2>More About Me</h2>
          <p>
            Experienced self-taught developer with a background in online poker.
            Front-end specialist skilled in JavaScript, TypeScript, React, and
            React Native. Proficient in NextJS, MaterialUI, TailwindCSS, VueJS,
            NuxtJS, and Bootstrap. Backend experience with NodeJS, Express,
            NestJS, PostgreSQL, and MongoDB.
          </p>
          <p>
            Passionate about staying current with web technologies and design
            trends. Fluent in English and Hungarian. Committed to delivering
            high-quality, visually appealing, and responsive web pages and
            applications.
          </p>
        </div>
      </article>
      <article className="right-container">
        <div className="blur"></div>
        <h3>View my codes:</h3>
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

        <h3>More info on LinkedIn:</h3>
        <Button
          link="https://www.linkedin.com/in/roland-fuest/"
          labelText={<FaLinkedin />}
          type="icon"
        />

        <h3>Send me an Email:</h3>

        <a href="mailto:fustroli@gmail.com">fustroli@gmail.com</a>
        <h3>Download my resume:</h3>
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
