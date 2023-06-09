import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
//Components
import Button from './common/Button';
import Tag from './common/Tag';

const NewProject = ({ project }) => {
  const { title, img, tags, codeUrl, liveUrl, desc, reverse } = project;

  return (
    <div className={reverse ? 'project reverse' : 'project'}>
      <div className="blur"></div>
      <div className="project-content">
        <h2>{title}</h2>
        <div className="project-card">
          <div className="blur"></div>
          <p>{desc}</p>
        </div>
        <div className="tag-wrapper">
          {tags.map((tag, i) => {
            return <Tag type={tag} key={i} />;
          })}
        </div>
        <div className="button-wrapper">
          <Button link={codeUrl} labelText={<FaGithub />} type="icon" />

          {liveUrl && (
            <Button
              link={liveUrl}
              labelText={<FaExternalLinkAlt />}
              type="icon"
            />
          )}
        </div>
      </div>
      <div className="project-image">
        <a href={liveUrl} target="_blank" rel="noreferrer">
          <img src={img} alt={title} />
        </a>
      </div>
    </div>
  );
};

export default NewProject;
