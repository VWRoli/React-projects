import Project from './Project';

const Projects = ({ displayLanguage }) => {
  return (
    <section id="projects">
      <h2 className="title">{displayLanguage.projectTitle}</h2>
      <div className="container">
        {displayLanguage.projectsData.map((project) => {
          return (
            <Project
              key={project.id}
              project={project}
              displayLanguage={displayLanguage}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
