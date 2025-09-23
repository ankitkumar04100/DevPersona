export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-700 my-2">{project.description}</p>
        <div className="flex justify-between mt-2">
          <a href={project.liveDemo} target="_blank" className="text-blue-500">Live Demo</a>
          <a href={project.github} target="_blank" className="text-blue-500">GitHub</a>
        </div>
      </div>
    </div>
  );
}
