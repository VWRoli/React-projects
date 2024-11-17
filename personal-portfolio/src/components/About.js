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
          <Tag type="React" />
          <Tag type="NextJS" />
          <Tag type="TypeScript" />
          <Tag type="JavaScript" />
          <Tag type="TailwindCSS" />
          <Tag type="Material-UI" />
          <Tag type="HTML" />
          <Tag type="CSS" />
          <Tag type="Sass" />
          <Tag type="Vue" />
          <Tag type="Nuxt" />
          <Tag type="Redux" />
          <Tag type="Bootstrap" />
          <h3>Back-end:</h3>
          <Tag type="NestJS" />
          <Tag type="NodeJS" />
          <Tag type="ExpressJS" />
          <Tag type="TypeORM" />
          <Tag type="MySQL" />
          <Tag type="PostgreSQL" />
          <Tag type="MongoDB" />
          <Tag type="API" />
          <h3>Mobile:</h3>
          <Tag type="React-Native" />
          <h3>Other</h3>
          <Tag type="Git" />
          <Tag type="npm" />
          <Tag type="Docker" />
          <Tag type="Jira" />
          <Tag type="Jest" />
          <Tag type="Postman" />
          <Tag type="Figma" />
        </div>
        <div className="about-text">
          <h2>More About Me</h2>
          <p>
            I'm a self-taught software developer with a unique background in
            online poker, which has helped me develop strong problem-solving and
            analytical skills. I specialize in front-end development, skilled in
            JavaScript, TypeScript, React, and Next.js. I'm also good with React
            Native, Material-UI, TailwindCSS, helping me to build modern,
            responsive web applications.
          </p>
          <p>
            My back-end experience includes NestJS, TypeORM and MySQL allowing
            me to work as a full stack developer.
          </p>
          <p>
            I'm passionate about creating clean, organized, and maintainable
            code. I take pride in writing code that's not just functional but
            also easy for fellow developers to read and build upon.
          </p>
          <p>I'm fluent both in Hungarian and in English.</p>
        </div>
      </article>
      <article className="right-container">
        <div className="blur"></div>
        <h3>Explore My Projects: </h3>
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
