import React from 'react';
import Header from './Component/header'; 
import Footer from './Component/footer';
import About from './Component/About';
import Home from './Component/Home';
import Skills from './Component/Skills';
import Education from './Component/Education';
// import Certificates from './Component/Certificates';

const App = () => {
  return (
    <div>
      <Header /> 
			<Home/>
			<About/>
			<Education/>
			<Skills/>
			{/* <Certificates/> */}
			<Footer/>
    </div>
  );
};

export default App;
