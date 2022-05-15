import { useLanguageContext } from '../context/languageContext';
//Components
import Tag from './common/Tag';

const Experience = () => {
  const { displayLanguage } = useLanguageContext();

  return (
    <section id="experience">
      <div>
        <h2>{displayLanguage.experienceTitle}</h2>
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
              <h3>{displayLanguage.cubicfox.jobTitle}</h3>
              <p className="tag">{displayLanguage.cubicfox.jobDate}</p>
              <ul>
                <li>
                  {displayLanguage.cubicfox.jobDescription1}{' '}
                  <Tag type="React" /> <Tag type="TailwindCSS" />{' '}
                  <Tag type="NextJS" />
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
              <h3>{displayLanguage.greenstand.jobTitle}</h3>
              <p className="tag">{displayLanguage.greenstand.jobDate}</p>
              <ul>
                <li>
                  {displayLanguage.greenstand.jobDescription1}{' '}
                  <a
                    href="https://github.com/Greenstand/treetracker-wallet-web"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Treetracker Web Wallet
                  </a>{' '}
                  {displayLanguage.greenstand.jobDescription1part2}{' '}
                  <a
                    href="https://github.com/Greenstand/treetracker-web-map-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Web Map Client
                  </a>
                </li>
                <li>
                  {displayLanguage.greenstand.jobDescription2}{' '}
                  <Tag type="React" />
                  <Tag type="Material-UI" />.
                </li>
                <li>{displayLanguage.greenstand.jobDescription3}</li>
                <li>{displayLanguage.greenstand.jobDescription4}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
