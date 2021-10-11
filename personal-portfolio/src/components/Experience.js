import Tag from './utils/Tag';

const Experience = () => {
  return (
    <section id="experience">
      <div>
        <h1>Work experience</h1>
        <div className="experience-content-wrapper">
          <div className="company-title">
            <h2>
              <a
                href="https://greenstand.org/"
                target="_blank"
                rel="noreferrer"
              >
                Greenstand
              </a>
            </h2>
          </div>
          <div>
            <h2>Volunteer React developer</h2>
            <p className="tag">Aug 2021 - Present</p>
            <ul>
              <li>
                Main contributor for the{' '}
                <a
                  href="https://github.com/Greenstand/treetracker-wallet-web"
                  target="_blank"
                  rel="noreferrer"
                >
                  treetracker web wallet
                </a>
                .
              </li>
              <li>
                Creating reusable and scalable frontend components for the app,
                using <Tag type="React" /> and <Tag type="Material-UI" />.
              </li>
              <li>Helped setting up the project infrastructure.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
