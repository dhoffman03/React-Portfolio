// Import dependencies
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './styles/App.css'

// Import components
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  const [currentTab, setCurrentTab] = useState('About')
  // // Check the value of 'currentTab' and return corresponding component
  const renderTab = () => {
    if (currentTab === 'About') {
      return <About />
    }
    if (currentTab === 'Portfolio') {
      return <Portfolio />
    }
    if (currentTab === 'Contact') {
      return <Contact />
    }
    return <Resume />
  }

  const handleTabChange = (tab) => setCurrentTab(tab);

  return (
    <div className='app'>
      {/* Set title of page */}
      <Helmet>
        <title> Dymond Hoffman | {currentTab} </title>
      </Helmet>
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
      <main>
        {renderTab()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

