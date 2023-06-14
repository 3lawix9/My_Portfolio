// Layout.js
import React, { useState } from 'react';
import Nav from '../Components/Nav';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import ContactMe from '../Components/Contact';

const Layout = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      <div className="spacer waveUp"></div>
      <Nav language={language} toggleLanguage={toggleLanguage} />
      <About language={language} />
      <div className="spacer wave"></div>
      <div className="spacer waveUp"></div>
      <Experience language={language} />
      <div className="spacer wave"></div>
      <div className="spacer waveUp"></div>
      <Skills  />
      <div className="spacer wave"></div>
      <div className="spacer waveUp"></div>
      <Projects language={language} />
      <div className="spacer wave"></div>
      <div className="spacer waveUp"></div>
      <ContactMe language={language} />
      <div className="spacer wave"></div>
    </>
  );
};

export default Layout;
