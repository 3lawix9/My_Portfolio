import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[85vh]  '>
      <div className='  xl:text-left text-center  '>
        <p className=' text-sm   '>Hi, I'm</p>
        <h1 className='text-6xl font-bold xl:text-7xl'>ALI AHMED</h1>
        <h2 className='text-blue-800 font-bold  text-xl sm:text-2xl'>[Front-End Web Developer]</h2>
        <p className='text-gray-500 py-1 break-normal sm:break-normal xl:text-lg text-sm'>I am a student from Yemen, who focuses on web development, especially Frontend web development.</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Get in Touch</button>
      </div>
    </div>
  )
}

export default About
