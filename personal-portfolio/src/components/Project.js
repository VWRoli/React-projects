import Tag from './Tag';

const Project = ({ project, displayLanguage }) => {
  const { title, img, tags, codeUrl, liveUrl, desc } = project;

  return (
    <div className="project">
      <div className="img-wrapper">
        <h3>{title}</h3>
        <img src={img} alt={title} />
        <a href={liveUrl} target="_blank" className="live-btn" rel="noreferrer">
          {displayLanguage.liveBtn}
        </a>
        <a href={codeUrl} target="_blank" className="code-btn" rel="noreferrer">
          {displayLanguage.codeBtn}
        </a>
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
