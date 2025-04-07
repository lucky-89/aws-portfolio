import React from 'react';
import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <section id="home">
        <Hero />
      </section>
      <About />
      <Skills />
      <section id="certs">
        <Timeline />
      </section>
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
