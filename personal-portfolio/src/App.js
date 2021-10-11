import { useState } from 'react';
//Languages
import { hungarian } from './languages/hungarian';
import { english } from './languages/english';
//Components
import About from './components/About';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  const defaultLanguage = navigator.language === 'hu-HU' ? hungarian : english;
  const [displayLanguage, setDisplayLanguage] = useState(defaultLanguage);

  return (
    <main>
      <Navbar
        displayLanguage={displayLanguage}
        setDisplayLanguage={setDisplayLanguage}
      />
      <HeroSection displayLanguage={displayLanguage} />
      <Projects displayLanguage={displayLanguage} />
      <Experience displayLanguage={displayLanguage} />
      <About displayLanguage={displayLanguage} />
    </main>
  );
}

export default App;
