import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed w-full bg-white dark:bg-darkBg shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-primary dark:text-white">DevSpark</h1>

        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link} className="text-gray-800 dark:text-gray-200 hover:text-primary cursor-pointer">
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl text-primary dark:text-white">&#9776;</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-darkBg flex flex-col space-y-4 p-4"
        >
          {links.map((link) => (
            <li key={link} className="text-gray-800 dark:text-gray-200 hover:text-primary cursor-pointer">
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
