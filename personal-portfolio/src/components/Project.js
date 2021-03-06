const Project = ({ project }) => {
  const { title, img, tags, codeUrl, liveUrl, desc } = project;

  return (
    <div className="project">
      <div className="img-wrapper">
        <h3>{title}</h3>
        <img src={img} alt={title} />
        <a href={codeUrl} target="_blank" className="live-btn" rel="noreferrer">
          Live Demo
        </a>
        <a href={liveUrl} target="_blank" className="code-btn" rel="noreferrer">
          View Code
        </a>
      </div>
      <div className="tags">
        <h3>Technologies:</h3>
        {tags.map((tag, i) => {
          return (
            <span key={i} className={`${tag.toLowerCase()}-tag tag`}>
              {tag}
            </span>
          );
        })}
      </div>
      <div className="description">
        <h3>Description:</h3>
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
