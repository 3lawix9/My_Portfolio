import React, { useState } from 'react';
import Nav from '../Components/Nav';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
// import ContactMe from '../Components/Contact';
import SocialSidebar from '../Components/Social';
import Quotes from '../Components/quotes';

const Layout = () => {
  const [language, setLanguage] = useState('en');
  const [socialSidebarVisible, setSocialSidebarVisible] = useState(true); // Set the initial value to true

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const toggleSocialSidebar = () => {
    setSocialSidebarVisible(!socialSidebarVisible);
  };

  return (
    <>
      {socialSidebarVisible && <SocialSidebar />}
      <div className={`spacer waveUp ${socialSidebarVisible ? 'withSocialSidebar' : ''}`}></div>
      <Nav language={language} toggleLanguage={toggleLanguage} toggleSocialSidebar={toggleSocialSidebar} />
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
      <Quotes language={language} />
      <div className="spacer wave"></div>
    </>
  );
};

export default Layout;
