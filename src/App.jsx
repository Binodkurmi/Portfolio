import React from 'react';
import Header from './Component/Header.jsx';  // Ensure this import is correct
import Footer from './Component/Footer.jsx';
import About from './Component/About';
import Home from './Component/Home';
import Skills from './Component/Skills';
import Education from './Component/Education';
import './Style/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <Footer />
    </div>
  );
};

export default App;
