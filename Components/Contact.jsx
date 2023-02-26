import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

const ContactMe = () => {
  return (

<div id="contact"  className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-lg md:max-w-xl sm:mx-auto ">
    <div className="absolute  inset-0 bg-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl "></div>
    <div className="relative  px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto ">
        <div>
          <h1 className="text-3xl font-extrabold">Contact</h1>
          <p className="mt-3">I’m interested in freelance opportunities – especially ambitious or large projects. However, if you just want to say hi or have a question, don’t hesitate to contact me.</p>
          <hr className="mt-3 border-gray-300"/>
        </div>
        <div className="divide-y divide-gray-200">
          <form className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Name <span className="text-red-500">*</span>
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name"/>
            
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Email <span className="text-red-500">*</span>
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="Email"/>
            
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea required className="resize-y py-3 px-4 border focus:outline-none rounded-md w-full bg-gray-200" placeholder="Your message..."></textarea>
            
            <div className="flex items-end justify-end">
              <button className="bg-blue-500 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded sm:w-auto">
              Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>




  )
};

export default ContactMe;
