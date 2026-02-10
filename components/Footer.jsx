import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-lightBg dark:bg-darkBg border-t border-gray-300 dark:border-gray-700 py-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-gray-800 dark:text-gray-200">© 2026 DevSpark Portfolio. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-primary"><FaGithub size={24}/></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-primary"><FaLinkedin size={24}/></a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-primary"><FaTwitter size={24}/></a>
        </div>
      </div>
    </footer>
  );
}
