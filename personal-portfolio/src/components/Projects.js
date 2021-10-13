import { useLanguageContext } from '../context/languageContext';
//Components
import Project from './Project';

const Projects = () => {
  const { displayLanguage } = useLanguageContext();

  return (
    <section id="projects">
      <h2 className="title">{displayLanguage.projectTitle}</h2>
      <div className="container">
        {displayLanguage.projectsData.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
