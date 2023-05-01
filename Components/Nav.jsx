import Image from 'next/image'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaHome, FaCode, FaEnvelope, FaJs, FaMedapps } from 'react-icons/fa'
import { Link } from 'react-scroll'
const links = [
  { label: 'Home', href: 'home' },
  { label: 'Experience', href: 'experience' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
]

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggleMenu = () => setIsOpen(!isOpen)

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 768 && isOpen) {
  //       setIsOpen(false)
  //     }
  //   }
  //   window.addEventListener('resize', handleResize)
  //   return () => window.removeEventListener('resize', handleResize)
  // }, [isOpen])

  return (
    <nav className='flex top-0 fixed text-sm z-50 md:text-md w-full items-center justify-center p-4 '>
          <a className='' href='/'>
        <Image
          src="/logo3.png"
          alt='Logo'
          width={89}
          height={89}
          loading='lazy'
        />
      </a>
      <div className=' md:flex p-6  bg-slate-200 rounded-full'>
        
        <ul className='flex'>
          {links.map(({ label, href }) => (
            <li key={label} className='px-4'>
              <Link
                to={href}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className='flex items-center justify-center text-black hover:cursor-pointer uppercase
                 hover:bg-gray-300 hover:duration-300 hover:rounded-xl py-2 px-3'
              >
                {label === 'Home' && <FaHome className='mr-2 text-blue-700 text-lg' />}
                {label === 'Experience' && <FaCode className='mr-2 text-lg text-blue-700' />}
                {label === 'Skills' && <FaJs className='mr-2 text-lg text-blue-700' />}
                {label === 'Projects' && <FaMedapps className='mr-2 text-lg text-blue-700' />}
                {label === 'Contact' && <FaEnvelope className='mr-2 text-lg text-blue-700' />}
                <span className='hidden md:inline-block'>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
