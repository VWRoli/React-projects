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
        <p style={{ maxWidth: '760px' }}>
          I am a self-taught software developer with a unique background in
          online poker. I'm experienced in
          <Tag type="JavaScript" /> and
          <Tag type="TypeScript" />. On the front-end, my expertise ranges from
          <Tag type="React" />
          <Tag type="React-Native" />
          to <Tag type="Vue" />. In addition to my front-end skills, I have
          experience in back-end development using
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
