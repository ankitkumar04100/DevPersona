import { skills } from '../data/skills';

export default function SkillsMap() {
  return (
    <section id="skills" className="p-8">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <span key={skill.name} className="px-4 py-2 bg-blue-200 rounded-full">
            {skill.name} ({skill.level})
          </span>
        ))}
      </div>
    </section>
  );
}
