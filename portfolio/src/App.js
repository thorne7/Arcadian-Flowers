import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import your components
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './components/pages/aboutme';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content"> {/* Add the "main-content" class */}
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};


export default App;