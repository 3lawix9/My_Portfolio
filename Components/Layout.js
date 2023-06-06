// Layout.js
import React, { useState } from 'react';
import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './Contact';

const Layout = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      <Nav language={language} toggleLanguage={toggleLanguage} />
      <About language={language} />
      <Experience language={language} />
      <Skills  />
      <Projects language={language} />
      <ContactMe language={language} />
    </>
  );
};

export default Layout;
