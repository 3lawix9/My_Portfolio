import Image from 'next/image'
import { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaHome, FaCode, FaEnvelope, FaJs, FaMedapps } from 'react-icons/fa';
import { Link } from 'react-scroll';

const links = [
  { label: 'Home', href: 'home' },
  { label: 'Experience', href: 'experience' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <nav  className="flex fixed text-sm z-50  xl:text-md w-full items-center justify-between p-4 ">
      <a className="xl:ml-20 sm:ml-16 xl:mr-[-100px] " href="/">
        <Image src="/coding.png" alt="Logo" width={55} height={55} loading="lazy" />
      </a>
      <div className="hidden md:flex p-6 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 rounded-full">
        <ul className="flex " >
          {links.map(({ label, href }) => (
            <li key={label} className="px-4">
              <Link
                to={href}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="flex items-center justify-center text-black hover:cursor-pointer uppercase
                 hover:bg-gray-300 hover:duration-700 hover:rounded-full py-2 px-3"
              >
                {label === 'Home' && <FaHome className="mr-2" />}
                {label === 'Experience' && <FaCode className="mr-2" />}
                {label === 'Skills' && <FaJs className="mr-2" />}
                {label === 'Projects' && <FaMedapps className="mr-2" />}
                {label === 'Contact' && <FaEnvelope className="mr-2" />}
                <span className="hidden md:inline-block">{label}</span>
              </Link>
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
            <a href={href} className=" block  py-1 px-2 text-black hover:text-blue-700 ">
              {label}
            </a>
          </li>
        ))}
      </ul>

    
   
    )}
  </nav>
  )}

  
  export default dynamic (() => Promise.resolve(Navbar), {ssr: false})

  