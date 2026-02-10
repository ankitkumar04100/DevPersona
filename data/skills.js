// data/skills.js
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFramer, SiTensorflow } from "react-icons/si";

const skills = [
  {
    name: "React",
    level: 95,
    icon: FaReact,
  },
  {
    name: "Next.js",
    level: 90,
    icon: SiNextdotjs,
  },
  {
    name: "TailwindCSS",
    level: 90,
    icon: SiTailwindcss,
  },
  {
    name: "Framer Motion",
    level: 85,
    icon: SiFramer,
  },
  {
    name: "Node.js",
    level: 80,
    icon: FaNodeJs,
  },
  {
    name: "JavaScript",
    level: 95,
    icon: FaJsSquare,
  },
  {
    name: "Python",
    level: 70,
    icon: FaPython,
  },
  {
    name: "HTML5 & CSS3",
    level: 95,
    icon: FaHtml5,
  },
  {
    name: "Git & GitHub",
    level: 90,
    icon: FaGitAlt,
  },
  {
    name: "TensorFlow.js",
    level: 70,
    icon: SiTensorflow,
  },
];

export default skills;
