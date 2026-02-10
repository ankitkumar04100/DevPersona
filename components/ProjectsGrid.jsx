import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-16 px-4 bg-lightBg dark:bg-darkBg">
      <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
