import React from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Education from './Component/Education';
import Skills from './Component/Skills';
import Footer from './Component/Footer';
import Certificates from './Component/Certificates';
import Projects from './Component/Projects';

const App = () => {
  return (
    <div className="font-sans scroll-smooth  text-[#264653]">
      <Header />

      <main>
        <section id="home" className="min-h-screen ">
          <Home />
        </section>
				<section id='certificates'>
					<Certificates/>
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

				<section id='projects'>
					<Projects/>
					</section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
