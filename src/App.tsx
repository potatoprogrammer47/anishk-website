import { useState } from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Scene from './components/canvas/Scene';
import CustomCursor from './components/ui/CustomCursor';
import LoadingScreen from './components/ui/LoadingScreen';
import './App.css';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <CustomCursor />
      
      {!loadingComplete && <LoadingScreen onComplete={() => setLoadingComplete(true)} />}

      {/* 3D Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Scene />
      </div>

      <div style={{ opacity: loadingComplete ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <Navigation />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
