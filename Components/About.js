import React from 'react'
import Image from 'next/image'
import Man from '../public/man3.gif'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'



const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0,  }}
    animate={{ opacity: 1, }}
    transition={{ duration: 0.8 }}
    
      id="home" className='flex flex-col lg:flex-row items-center justify-center h-[85vh] mt-32 lg:mt-0  '>
      <div className='lg:text-left text-center mt-10 lg:mr-36 '>
        <p className=' text-lg font-semibold'>Hi, I'm 👋</p>
        <h1 className='text-4xl lg:text-6xl font-bold'>ALI AHMED</h1>
        <h2 className='text-blue-800 font-bold text-lg md:text-xl lg:text-2xl'>[Front-End Web Developer]</h2>
        <p className='text-slate-600 py-1 text-base'>I am a student from Yemen, who focuses on web development, 
        <br/>especially Frontend web development.</p>
        <Link to='contact'
                spy={true}
                smooth={true}
                offset={50}
                duration={500} >
        <button className='txt--gradient-blue border-r-indigo-500  text-white font-bold py-3 px-4 rounded mt-4 '>Get in Touch</button>
        </Link>
      </div>
      <div className='flex flex-col  '>
      <Image 
          width={500}
          height={500}
          priority={true}
         className='mt-10 ' src={Man} alt="Logo" 
                 />
      </div>
    </motion.div>
  );
};
    

export default About
