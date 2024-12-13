import React from 'react';
import Header from './Component/Header.jsx';
import Footer from './Component/Footer';
import About from './Component/About.jsx';
import Home from './Component/Home.jsx';
import Skills from './Component/Skills.jsx';
import Education from './Component/Education.jsx';


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
