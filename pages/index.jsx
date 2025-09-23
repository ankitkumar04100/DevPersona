import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';
import SkillsMap from '../components/SkillsMap';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <ProjectsGrid />
      <SkillsMap />
      <ContactForm />
      <Footer />
    </div>
  );
}
