import { projectsData } from '../projectsData';
import Project from './Project';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="title">My Projects</h2>
      <div className="container">
        {projectsData.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
