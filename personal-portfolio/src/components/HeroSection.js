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
          online poker, which has helped me develop strong problem-solving and
          analytical skills. I specialize in <Tag type="JavaScript" /> and{' '}
          <Tag type="TypeScript" />, with a focus on front-end development using{' '}
          <Tag type="React" /> and <Tag type="NextJS" />. Additionally, I have
          experience in back-end development using <Tag type="NestJS" />,{' '}
          <Tag type="TypeORM" /> enabling me to build full-stack applications
          efficiently.
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
