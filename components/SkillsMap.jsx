import { motion } from "framer-motion";
import skills from "../data/skills";

export default function SkillsMap() {
  return (
    <section id="skills" className="py-16 px-4 bg-lightBg dark:bg-darkBg">
      <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-8">My Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.1 }}
            className="bg-white dark:bg-darkBg rounded-xl shadow-card p-6 flex flex-col items-center"
          >
            <skill.icon className="text-4xl text-primary dark:text-white mb-2" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h4>
            <p className="text-gray-600 dark:text-gray-400">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
