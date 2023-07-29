import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaCode, FaEnvelope, FaJs, FaMedapps, FaMoon, FaSun } from 'react-icons/fa';
import { MdMoreVert, MdLanguage } from 'react-icons/md';
import { motion } from 'framer-motion';

import translations from '../translate/translations';

const links = [
  { label: 'home', href: 'home', icon: FaHome },
  { label: 'experience', href: 'experience', icon: FaCode },
  { label: 'skills', href: 'skills', icon: FaJs },
  { label: 'projects', href: 'projects', icon: FaMedapps },
  { label: 'contact',  icon: FaEnvelope },
];

const Nav = ({ language, toggleLanguage, openSideBar }) => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const getLanguageText = () => {
    if (language === 'en') {
      return 'عربي';
    } else if (language === 'ar') {
      return 'English';
    }
    return '';
  };

  const optionsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <nav className="flex top-0 fixed text-sm z-50 md:text-md sm:w-full items-center justify-center p-4">
      <div className="md:flex border-gray-500 bg-white/70 p-6 shadow-lg backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-800/50 rounded-2xl">
        <ul className="flex">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={label} className="sm:px-4">
              <Link
                to={href}
                spy={true}
                smooth={true}
                onClick={label === 'contact' ? openSideBar : null}
                offset={50}
                duration={500}
                className="flex items-center justify-center font-bold text-blue-800 hover:cursor-pointer capitalize hover:bg-white/30 hover:duration-300 hover:rounded-xl py-2 px-3"
              >
                <Icon className="mr-2 text-xl" />
                <span className="hidden text-lg lg:inline-block">
                  {translations[language][label]}
                </span>
              </Link>
            </li>
          ))}
          <div className="md:mt-1 relative">
            <button
              className="flex items-center justify-center rounded-2xl text-black hover:cursor-pointer capitalize hover:bg-gray-300 hover:duration-300 hover:rounded-xl py-2 px-3 ml-4"
              onClick={() => setShowLanguageOptions(!showLanguageOptions)}
            >
              <MdMoreVert className="text-xl" />
            </button>

            {showLanguageOptions && (
              <motion.div
                className="absolute font-bold top-10 right-0 bg-white shadow-lg rounded-lg py-2"
                initial="hidden"
                animate="visible"
                variants={optionsVariants}
              >
                <button
                  className="flex w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    toggleLanguage('ar');
                    setShowLanguageOptions(false);
                  }}
                >
                  <MdLanguage className="mr-2 text-xl text-blue-700" />
                  {getLanguageText()}
                </button>
              </motion.div>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;