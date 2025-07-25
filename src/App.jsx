import React from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Education from './Component/Education';
import Skills from './Component/Skills';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div className="font-sans scroll-smooth  text-[#264653]">
      <Header />

      <main className="pt-20">
        <section id="home" className="min-h-screen ">
          <Home />
        </section>

        <section id="about" className="py-16">
          <About />
        </section>

        <section id="education" className="py-16  text-white">
          <Education />
        </section>

        <section id="skills" className="py-16  text-white">
          <Skills />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
