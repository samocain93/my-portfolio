import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className='text-gray-400 dark:bg-slate-900 body-font flex flex-col'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}

export default App;
