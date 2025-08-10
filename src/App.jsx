import React from 'react';
import Home from './Component/Home';
import About from './Component/About';
import Education from './Component/Education';
import Skills from './Component/Skills';
import Footer from './Component/Footer';
import Certificates from './Component/Certificates';
import Projects from './Component/Projects';
import Header from './Component/Header';

const App = () => {
  return (
    <div className="font-sans scroll-smooth  text-[#264653]">
      
   <Header/>
      <main>
        <section id="home" className="min-h-screen ">
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

				<section id='projects'>
					<Projects/>
					</section>
          
          <section id='certificates'>
					<Certificates/>
					</section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
