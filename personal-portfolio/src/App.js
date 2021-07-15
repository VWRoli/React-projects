import { useState } from 'react';
//Languages
import { english } from './languages/english';
import { hungarian } from './languages/hungarian';
//Components
import About from './components/About';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  const [displayLanguage, setDisplayLanguage] = useState(hungarian);

  return (
    <main>
      <Navbar displayLanguage={displayLanguage} />
      <HeroSection displayLanguage={displayLanguage} />
      <Projects displayLanguage={displayLanguage} />
      <About displayLanguage={displayLanguage} />
    </main>
  );
}

export default App;
