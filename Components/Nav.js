import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaCode, FaEnvelope, FaJs, FaMedapps, FaLanguage } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md'; // Assuming this is an Arabic icon
import translations from '../translate/translations';

const links = [
  { label: 'home', href: 'home', icon: FaHome },
  { label: 'experience', href: 'experience', icon: FaCode },
  { label: 'skills', href: 'skills', icon: FaJs },
  { label: 'projects', href: 'projects', icon: FaMedapps },
  { label: 'contact', href: 'contact', icon: FaEnvelope },
];

const Nav = ({ language, toggleLanguage }) => {
  const currentLanguage = language;

  return (
    <nav className='flex nav top-0 fixed text-sm z-50 md:text-md w-full items-center justify-center p-4 '>
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
                className='flex items-center justify-center text-black hover:cursor-pointer capitalize
                 hover:bg-gray-300 hover:duration-300 hover:rounded-xl py-2 px-3'
              >
                <Icon className='mr-2 text-xl text-blue-700' />
                <span className='hidden font-semibold text-lg md:inline-block'>
                  {translations[language][label]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className='flex items-center justify-center text-black hover:cursor-pointer capitalize
                 hover:bg-gray-300 hover:duration-300 hover:rounded-xl py-2 px-3 ml-4'
          onClick={toggleLanguage}
        >
          {currentLanguage === 'en' ? (
            <>
              <MdLanguage className='mr-2 text-xl text-blue-700' />
               Arabic
            </>
          ) : (
            <>
              <MdLanguage className='mr-2 text-xl text-blue-700' />
            English
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
