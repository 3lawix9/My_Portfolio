import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaCode, FaEnvelope, FaJs, FaMedapps, FaMoon, FaSun } from 'react-icons/fa';
import { MdMoreVert, MdLanguage } from 'react-icons/md';

import translations from '../translate/translations';

const links = [
  { label: 'home', href: 'home', icon: FaHome },
  { label: 'experience', href: 'experience', icon: FaCode },
  { label: 'skills', href: 'skills', icon: FaJs },
  { label: 'projects', href: 'projects', icon: FaMedapps },
  { label: 'contact', href: 'contact', icon: FaEnvelope },
];

const Nav = ({ language, toggleLanguage, isDarkMode }) => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const getLanguageText = () => {
    if (language === 'en') {
      return 'عربي';
    } else if (language === 'ar') {
      return 'English';
    }
    return '';
  };
  
  const getDarkText = () => {
    if (isDarkMode) {
      return 'Dark';
    } else {
      return 'Light';
    }
  };

  return (
    <nav className={`flex nav top-0 fixed text-sm z-50 md:text-md w-full items-center justify-center p-4 ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='md:flex p-6 bg-slate-200 rounded-full'>
        <ul className='flex'>
          {links.map(({ label, href, icon: Icon }) => (
            <li key={label} className='px-4'>
              <Link
                to={href}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className='flex items-center justify-center text-black hover:cursor-pointer capitalize hover:bg-gray-300 hover:duration-300 hover:rounded-xl py-2 px-3'
              >
                <Icon className='mr-2 text-xl text-blue-700' />
                <span className='hidden font-semibold text-lg md:inline-block'>
                  {translations[language][label]}
                </span>
              </Link>
            </li>
          ))}
          <div className='md:mt-1 relative'>
            <button
              className='flex items-center justify-center bg-slate-200 rounded-2xl text-black hover:cursor-pointer capitalize hover:bg-gray-300 hover:duration-300 hover:rounded-xl py-2 px-3 ml-4'
              onClick={() => setShowLanguageOptions(!showLanguageOptions)}
            >
              <MdMoreVert className='text-xl text-blue-700' />
              {showLanguageOptions && (
                <div className='absolute top-10 right-0 bg-white shadow-lg rounded-lg py-2'>
                  <button
                    className='flex w-full px-4 py-2 hover:bg-gray-100'
                    onClick={() => {
                      toggleLanguage('ar');
                      setShowLanguageOptions(false);
                    }}
                  >
                    <MdLanguage className='mr-2 text-xl text-blue-700' />
                    {getLanguageText()}
                  </button>
                  <button
  className='flex w-full px-4 py-2 hover:bg-gray-100'
  onClick={() => {
    toggleLanguage('ar');
    setShowLanguageOptions(false);
  }}
>
  {isDarkMode ? (
    <>
      <FaSun className='mr-2 text-xl' />
      Light
    </>
  ) : (
    <>
      <FaMoon className='mr-2 text-xl' />
      {getDarkText()}
    </>
  )}
</button>
                </div>
              )}
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
