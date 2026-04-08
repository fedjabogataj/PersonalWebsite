import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SkillsCarousel from '@/components/SkillsCarousel';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsCarousel />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
