//Components
import { projects } from '../data/projects';
import Project from './Project';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="title">My Personal Projects</h2>
      <div className="container">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
