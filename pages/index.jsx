import Nav from "../components/Nav";
import Hero from "../components/Hero";
import ProjectsGrid from "../components/ProjectsGrid";
import SkillsMap from "../components/SkillsMap";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home({ toggleTheme, theme }) {
  return (
    <div className="bg-lightBg dark:bg-darkBg transition-colors duration-500">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <ProjectsGrid />

      {/* Skills Section */}
      <SkillsMap />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
      
      {/* Optional Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-3 bg-primary dark:bg-secondary text-white rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
