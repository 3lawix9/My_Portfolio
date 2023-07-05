import React from 'react';
import Image from 'next/image';
import Man from '../public/man3.gif';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import translations from '../translate/translations';

const About = ({ language , openSideBar}) => {
  const currentLanguage = language;
  const { hi, name, role, description, getInTouch } = translations.about[currentLanguage];

  const isArabic = currentLanguage === 'ar';
  const textAlignment = isArabic ? 'lg:text-right text-center' : 'lg:text-left text-center';
  const imageAlignment = isArabic ? 'lg:order-first' : '';


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home"
      className='flex flex-col lg:flex-row items-center justify-center h-[85vh] mt-52 lg:mt-0'
    >
      <div className={`${textAlignment} `}>
        <p className='text-lg font-semibold'>{hi}</p>
        <h1 className='text-4xl lg:text-6xl uppercase font-bold'>{name}</h1>
        <h2 className='text-blue-800 font-bold py-2 text-lg md:text-xl lg:text-2xl'>{role}</h2>
        {<p className='text-slate-600 font-bold capitalize  py-1'>{description}</p>}
        <Link
          to='contact'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
        <button onClick={openSideBar} className='txt--gradient-blue border-r-indigo-500 text-white font-bold py-3 px-4 shadow-md rounded mt-4 transition
         duration-300 ease-in-out hover:text-black'>
        {getInTouch}
        </button>
        </Link>
      </div>
      <div className={`flex flex-col ${imageAlignment}`}>
        <Image
          width={500}
          height={500}
          priority={true}
          className='mt-10 mb-32'
          src={Man}
          alt="Logo"
        />
      </div>
      
    </motion.div>
  );
  
};

export default About;
