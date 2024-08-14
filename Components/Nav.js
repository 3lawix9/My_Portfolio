import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaCode, FaEnvelope, FaJs, FaMedapps } from 'react-icons/fa';
import { MdMoreVert, MdLanguage } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import translations from '../translate/translations';

const links = [
  { label: 'home', href: 'home', icon: FaHome },
  { label: 'experience', href: 'experience', icon: FaCode },
  { label: 'skills', href: 'skills', icon: FaJs },
  { label: 'projects', href: 'projects', icon: FaMedapps },
  { label: 'contact',  href: 'contact' , icon: FaEnvelope },
];

const Nav = ({ language, toggleLanguage, openSideBar }) => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = links.map(link => document.getElementById(link.href));
      const currentSection = sections.find(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
        }
        return false;
      });
      if (currentSection) {
        setActiveLink(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLanguageText = () => language === 'en' ? 'عربي' : 'English';

  const optionsVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="flex top-0 fixed text-sm z-50 md:text-md w-full items-center justify-center p-4"
    >
      <div className="md:flex glass bg-white/50 p-6 shadow-lg backdrop-blur-lg rounded-3xl">
        <ul className="flex items-center">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={label} className="sm:px-2">
              <Link
                to={href}
                spy={true}
                smooth={true}
                onClick={label === 'contact' ? openSideBar : () => setActiveLink(href)}
                offset={50}
                duration={500}
                className={`flex items-center justify-center font-bold text-blue-800 hover:cursor-pointer capitalize hover:bg-white/30 hover:duration-300 hover:rounded-xl py-2 px-3 relative ${activeLink === href ? 'bg-white/30 rounded-xl' : ''}`}
              >
                <Icon className="mr-2 text-xl" />
                <span className="hidden text-lg lg:inline-block">
                  {translations[language][label]}
                </span>
                {activeLink === href && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                    layoutId="activeIndicator"
                  />
                )}
              </Link>
            </li>
          ))}
          <div className="md:mt-1 relative ml-4">
            <button
              className="flex items-center justify-center rounded-2xl text-black hover:cursor-pointer capitalize hover:bg-gray-300 hover:duration-300 hover:rounded-xl py-2 px-3"
              onClick={() => setShowLanguageOptions(!showLanguageOptions)}
            >
              <MdMoreVert className="text-xl" />
            </button>

            <AnimatePresence>
              {showLanguageOptions && (
                <motion.div
                  className="absolute font-bold top-10 right-0 bg-white shadow-lg rounded-lg py-2"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={optionsVariants}
                >
                  <button
                    className="flex w-full px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      toggleLanguage(language === 'en' ? 'ar' : 'en');
                      setShowLanguageOptions(false);
                    }}
                  >
                    <MdLanguage className="mr-2 text-xl text-blue-700" />
                    {getLanguageText()}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;