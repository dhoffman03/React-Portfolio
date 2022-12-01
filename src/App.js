// Import dependencies
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// Import components
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  const [currentTab, setCurrentTab] = useState("about")
  // // Check the value of 'currentTab' and return corresponding component
  const renderTab = () => {
    switch (currentTab) {
      case "About": return < About />;
      case "Project": return < Project />;
      case "Contact": return < Contact />;
      case "Resume": return < Resume />;
      default: return null;
    }
  };

  return (
    <div className='app'>
      {/* Set title of page */}
      <Helmet>
        <title> Dymond Hoffman | {currentTab} </title>
      </Helmet>
      <Header>
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      </Header>
      <main>
        {renderTab()}
      </main>
      < Footer />
    </div>
  );
}

export default App;

