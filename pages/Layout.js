import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import SocialSidebar from '../Components/Social';
import Quotes from '../Components/Quotes';

const Layout = () => {
  const [language, setLanguage] = useState('ar');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Load the language from local storage when the component mounts
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Toggle the language and update local storage
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);
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