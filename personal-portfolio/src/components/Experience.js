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
                  As a Frontend Developer for an innovative NFT card game, I
                  created dynamic and engaging user interfaces using{' '}
                  <Tag type="React" />, <Tag type="NextJS" />, and{' '}
                  <Tag type="TailwindCSS" /> to deliver an exciting gaming
                  experience for the users.
                </li>
                <li>
                  As a Mobile App Developer for a city exploration platform, I
                  helped build the app using <Tag type="React-Native" />,{' '}
                  <Tag type="TypeScript" />, and React Query. This helped users
                  to discover events, explore the city, and easily book tickets.
                  I also integrated Google Maps functionality to provide
                  navigation.
                </li>
                <li>
                  Frontend Developer for a Kickstarter-like platform: Developed
                  a fully integrated chat platform using <Tag type="React" />,{' '}
                  <Tag type="NextJS" />, and <Tag type="TailwindCSS" />. Focused
                  on writing clean, maintainable code with{' '}
                  <Tag type="TypeScript" /> to ensure scalability and
                  performance.
                </li>
                <li>
                  Frontend Developer & Code Reviewer for a Real Estate Website:
                  Built a responsive website using <Tag type="NextJS" /> and{' '}
                  <Tag type="TailwindCSS" />. Acted as a code reviewer, ensuring
                  high-quality standards and maintaining consistency across the
                  project.
                </li>
                <li>
                  Full Stack Developer for a vehicle evaluation website:
                  Contributed to both backend and frontend development. Used
                  <Tag type="NestJS" /> and <Tag type="TypeORM" /> for backend
                  services with a <Tag type="PostgreSQL" /> database, while
                  utilizing <Tag type="Vue" /> and
                  <Tag type="Nuxt" /> to create responsive, user-friendly
                  interfaces.{' '}
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
                  Built reusable and flexible front-end components with{' '}
                  <Tag type="React" /> and <Tag type="Material-UI" />, which
                  helped create a smoother, more consistent user interface
                  across the application.
                </li>
                <li>
                  Helped set up the project infrastructure and played a key role
                  in defining development processes and best practices.
                </li>
                <li>
                  Was member of the Code Reviewer team which gave me the
                  opportunity to help my junior colleagues and keep the code to
                  a quality standard.
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
