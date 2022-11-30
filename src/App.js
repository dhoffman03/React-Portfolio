
import React, { useState } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';



function App() {
  const [currentTab, setCurrentTab] = useState("about")


  
  return (
    <div>
      < Header />
      < Navigation />
      < About />
      < Project />
      < Contact />
      < Resume />
      < Footer />

    </div>
  );
}

export default App;

