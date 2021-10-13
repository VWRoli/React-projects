//Components
import About from './components/About';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Projects />
      <Experience />
      <About />
    </main>
  );
}

export default App;
