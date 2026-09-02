import Navbar from './sections/Navbar';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white selection:bg-teal-300 selection:text-slate-950">

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 -top-32 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        <div className="absolute -right-32 top-[25%] h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
        <div className="absolute -bottom-48 left-[35%] h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
