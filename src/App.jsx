import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Skills from './components/Skills';

function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink antialiased">
      <div
        className="grain pointer-events-none fixed inset-0 z-0 opacity-[0.035] mix-blend-multiply"
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
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
