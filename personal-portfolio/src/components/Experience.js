import Tag from './utils/Tag';

const Experience = ({ displayLanguage }) => {
  return (
    <section id="experience">
      <div>
        <h1>{displayLanguage.experienceTitle}</h1>
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
            <h2>{displayLanguage.jobTitle}</h2>
            <p className="tag">{displayLanguage.jobDate}</p>
            <ul>
              <li>
                {displayLanguage.jobDescription1}{' '}
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
                {displayLanguage.jobDescription2} <Tag type="React" />
                <Tag type="Material-UI" />.
              </li>
              <li>{displayLanguage.jobDescription3}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
