import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <main className='text-gray-400 dark:bg-slate-700 body-font flex flex-col scroll-smooth'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
