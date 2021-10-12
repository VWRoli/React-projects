//Components
import Tag from './common/Tag';

const Experience = ({ displayLanguage }) => {
  return (
    <section id="experience">
      <div>
        <h2>{displayLanguage.experienceTitle}</h2>
        <div className="experience-content-wrapper">
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
            <h3>{displayLanguage.currentJobTitle}</h3>
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
