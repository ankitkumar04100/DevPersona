import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-lightBg dark:bg-darkBg px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-primary dark:text-white"
      >
        Hi, I'm Ankit Kumar
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 text-gray-700 dark:text-gray-200 text-lg md:text-xl max-w-2xl"
      >
        I build interactive developer portfolios that are modern, responsive, and visually stunning.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-xl shadow-md hover:bg-secondary transition-all"
      >
        View Projects
      </motion.a>
    </section>
  );
}
