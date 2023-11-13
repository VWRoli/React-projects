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
                  As a Frontend Developer for an innovative NFT card game,
                  worked on the frontend using <Tag type="React" />,
                  <Tag type="NextJS" />, and <Tag type="TailwindCSS" />.
                  Leveraging my expertise in frontend technologies, I worked on
                  building the game's interface, ensuring a dynamic and engaging
                  platform for users.
                </li>
                <li>
                  Mobile App Developer for a City Exploration Platform. Using
                  <Tag type="React-Native" />, <Tag type="TypeScript" /> and
                  React Query, I contributed to the development of the mobile
                  application, allowing users to discover special events, gather
                  information about the city, and book tickets for top tours and
                  experiences. Additionally, integrated Google Maps
                  functionality to provide seamless navigation within the app.
                </li>
                <li>
                  Contributed to the development of a Kickstarter-like web
                  application as a Frontend Developer, employing
                  <Tag type="React" />,
                  <Tag type="NextJS" />, and <Tag type="TailwindCSS" />.
                  Responsible for building an integrated chat platform using
                  PubNub. Utilized <Tag type="TypeScript" /> to write clean and
                  efficient code.
                </li>
                <li>
                  Worked as a Full Stack Developer in an international team,
                  playing a key role in the development of a vehicle evaluation
                  website. Used <Tag type="NestJS" /> and <Tag type="TypeORM" />
                  for backend implementation, utilizing a PostgreSQL database
                  for efficient data management. On the frontend, utilized
                  <Tag type="Vue" /> and <Tag type="Nuxt" /> to create a
                  responsive and engaging user interface.
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
