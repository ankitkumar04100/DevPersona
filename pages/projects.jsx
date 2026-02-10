import Nav from "../components/Nav";
import Footer from "../components/Footer";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="bg-lightBg dark:bg-darkBg min-h-screen transition-colors duration-500">
      <Nav />

      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-primary dark:text-white mb-12">
          All Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
