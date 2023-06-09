import { FaGithub, FaLinkedin } from 'react-icons/fa';
//Components
import Button from './common/Button';
import Tag from './common/Tag';

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="intro">
        <div className="blur"></div>
        <h1>Hello, I'm Roland Füst</h1>
        <p>
          I am a full-stack software developer with expertise in
          <Tag type="JavaScript" />
          <Tag type="TypeScript" /> for both front-end and
          <br /> back-end development. On the front-end, I specialize in
          <Tag type="React" />
          <Tag type="React-Native" />
          In addition to my front-end skills, <br />I have experience in
          back-end development using
          <Tag type="NodeJS" />
          <Tag type="ExpressJS" />
          <Tag type="NestJS" />
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
