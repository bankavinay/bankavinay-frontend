// src/App.js
import React from 'react';

import Footer from './components/Footer/Footer.js';


import HeroSection from './components/Herosection/Hero.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import About from './components/About/About.jsx';
import Tokenomics from './components/Tokenomics/Tokenomics.js';
const App = () => {
  return (
    <div>
      <HeroSection />
      <Dashboard />
      <About />
      <Tokenomics />
      <Footer/>
      
    </div>
  );
};

export default App;
