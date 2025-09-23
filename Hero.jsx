import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <motion.h1 
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to DevPersona
      </motion.h1>
      <motion.p 
        className="text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Interactive Developer Portfolio Experience
      </motion.p>
    </section>
  );
}
