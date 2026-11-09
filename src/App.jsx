import { MotionConfig } from 'motion/react';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Skills from './components/Skills';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-paper text-ink antialiased">
        <div
          className="grain pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
          aria-hidden="true"
        />

        <Nav />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 sm:px-8">
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Education />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
