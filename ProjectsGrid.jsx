import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="p-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
