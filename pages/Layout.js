import React, { useState } from 'react';
import Nav from '../Components/Nav';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
// import ContactMe from '../Components/Contact';
import SocialSidebar from '../Components/Social';
import Quotes from '../Components/Quotes';

const Layout = () => {
  const [language, setLanguage] = useState('en');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const openSideBar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <SocialSidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
      <div className={`spacer waveUp ${sidebarVisible ? 'withSocialSidebar' : ''}`}></div>
      <Nav language={language} toggleLanguage={toggleLanguage} toggleSidebar={toggleSidebar} openSideBar={openSideBar} />
      <About language={language} openSideBar={openSideBar} />
      <div className="spacer wave"></div>
      <div className="spacer waveUp"></div>
      <Experience language={language} />
      <div className="spacer wave"></div>
      <div className="spacer waveUp"></div>
      <Skills />
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