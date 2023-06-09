//Components
import Tag from './common/Tag';

const Experience = () => {
  return (
    <section id="experience">
      <div>
        <h2>Work experience</h2>
        <div className="experience-content-wrapper">
          {/* Cubicfox */}
          <div className="job-wrapper">
            <div className="company-title">
              <h3>
                <a
                  href="https://cubicfox.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cubicfox
                </a>
              </h3>
            </div>
            <div>
              <h3>Full Stack Software Developer</h3>
              <p className="tag">April 2022 - Present</p>
              <ul>
                <li>
                  Developed and maintained web and mobile applications using{' '}
                  <Tag type="React" />, <Tag type="React-Native" />, and
                  <Tag type="TailwindCSS" />, resulting in responsive and
                  visually appealing user interfaces.
                </li>
                <li>
                  Utilized TypeScript and JavaScript to write clean and
                  efficient code, ensuring seamless functionality and optimal
                  performance.
                </li>
                <li>
                  Built server-side rendered web applications with{' '}
                  <Tag type="NextJS" /> and <Tag type="Nuxt" /> leading to
                  improved load times and enhanced search engine optimization
                  (SEO).
                </li>
                <li>
                  Collaborated with cross-functional teams, conducting code
                  reviews and providing constructive feedback to ensure high
                  code quality and adherence to best practices.
                </li>
                <li>
                  Additionally, worked with international team members,
                  utilizing <Tag type="Vue" />, <Tag type="Nuxt" />,{' '}
                  <Tag type="NestJS" />, and PostgreSQL, fostering a diverse and
                  enriching collaborative environment.
                </li>
              </ul>
            </div>
          </div>
          {/* Greenstand */}
          <div>
            <div className="company-title">
              <h3>
                <a
                  href="https://greenstand.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Greenstand
                </a>
              </h3>
            </div>
            <div>
              <h3>Open source React developer</h3>
              <p className="tag">Aug 2021 - April 2022</p>
              <ul>
                <li>
                  Participated in the development of{' '}
                  <a
                    href="https://github.com/Greenstand/treetracker-wallet-web"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Treetracker Web Wallet
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://github.com/Greenstand/treetracker-web-map-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Web Map Client
                  </a>
                  , serving as the main contributor for both projects.
                </li>
                <li>
                  Created reusable and scalable frontend components for the
                  applications using <Tag type="React" /> and{' '}
                  <Tag type="Material-UI" />, resulting in a streamlined and
                  consistent user interface.
                </li>
                <li>
                  Helped set up the project infrastructure and played a key role
                  in defining development processes and best practices.
                </li>
                <li>
                  Reviewed code and provided constructive feedback to team
                  members, ensuring adherence to best practices and high code
                  quality.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
