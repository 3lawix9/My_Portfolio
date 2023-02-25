import Image from 'next/image'
import { useState } from 'react';
import dynamic from "next/dynamic";
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];
  
  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
    <nav className="flex fixed w-full  bg-white items-center justify-between p-4 shadow-md">
      <a className='ml-7' href="/">
        <Image src='/coding.png' alt="Logo"width={50}
      height={50} loading="lazy"  />
      </a>
      <div className=" hidden md:flex   ">
        <ul className="flex  ">
          {links.map(({ label, href }) => (
            <li key={label} className="px-4 mr-14 ">
              <a href={href} className=" text-black  hover:text-blue-700 ">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>


    {/* Mobile responsive  */}
    
      <div className="  flex items-center bg-white-400">
      <button
        onClick={toggleMenu}
        className="ml-5  text-black-200 md:hidden hover:text-blue-700 focus:outline-none"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
    {isOpen && (
        
      <ul className="w-full block bg-white p-4">
        {links.map(({ label, href }) => (
          <li key={label} className=" my-2">
            <a href={href} className=" block py-1 px-2 text-black hover:text-blue-700 ">
              {label}
            </a>
          </li>
        ))}
      </ul>

    
   
    )}
  </nav>
  )}

  
  export default dynamic (() => Promise.resolve(Navbar), {ssr: false})

  