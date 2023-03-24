import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';

function App() {
  return (
    <main className='text-gray-400 dark:bg-slate-900 body-font flex flex-col'>
      <About />
      <Projects />
      <Skills />
      <Resume />
    </main>
  );
}

export default App;
