import Button from './common/Button';
import Tag from './common/Tag';

const Project = ({ project, displayLanguage }) => {
  const { title, img, tags, codeUrl, liveUrl, desc } = project;

  return (
    <div className="project">
      <div className="img-wrapper">
        <h3>{title}</h3>
        <img src={img} alt={title} />
        <Button
          link={liveUrl}
          labelText={displayLanguage.liveBtn}
          type="live"
        />
        <Button
          link={codeUrl}
          labelText={displayLanguage.codeBtn}
          type="code"
        />
      </div>
      <div className="tags">
        <h3>{displayLanguage.technologies}</h3>
        {tags.map((tag, i) => {
          return <Tag type={tag} key={i} />;
        })}
      </div>
      <div className="description">
        <h3>{displayLanguage.descriptionTitle}</h3>
        <ul>
          {desc.map((li, i) => {
            return <li key={i}>{li}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Project;
