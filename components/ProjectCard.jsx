import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-darkBg rounded-2xl shadow-card overflow-hidden cursor-pointer transition-transform"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        className="object-cover w-full h-56"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary dark:text-white">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-200 mt-2">{project.description}</p>
        <div className="flex flex-wrap mt-2 gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-secondary text-white px-2 py-1 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-primary dark:text-white underline hover:text-secondary"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}
