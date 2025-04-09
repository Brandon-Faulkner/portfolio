import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-page-bg text-primary-text backdrop-blur-sm">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Analytics />
    </>
  );
}
