import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/css.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App" style={{ backgroundColor: 'var(--primary-black)' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
  <Projects />
  <Contact />
  <Footer />
   
    </div>
  );
}

export default App;