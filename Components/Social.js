import React, { useState } from "react";
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMail, AiOutlineHome } from 'react-icons/ai';
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import { Link } from 'react-scroll';


const SocialSidebar = ({sidebarVisible, setSidebarVisible}) => {

  const socialMediaLinks = [
    {
      name: "GitHub",
      icon: <AiFillGithub />,
      link: "https://github.com/3lawix9"
    },
    {
      name: "Twitter",
      icon: <AiFillTwitterCircle  />,
      link: "https://twitter.com/3lawix9"
    },
    {
      name: "Gmail",
      icon: <AiFillMail />,
      link: "mailto:Ali.wer28@gmail.com"
    },
    {
      name: "LinkedIn",
      icon: <AiFillLinkedin />,
      link: "https://linkedin.com/in/ali-ahmed-abudahis-2b0973276"
    }
  ];

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative bg-gray-50  w-screen">
      {!sidebarVisible && (
        <div
          className="fixed z-20 top-2/4 -translate-y-2/4 ml-4 w-12 h-12 lg:flex flex items-center justify-center gap-1 text-gray-700  rounded-full bg-white/50 shadow-lg backdrop-blur-lg cursor-pointer"
          onClick={toggleSidebar}
        >
        <BsArrowRightShort className="w-6 h-6" />
        </div>
      )}

      {sidebarVisible && (
        <motion.div
          className="z-20 top-1/4  justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg
           fixed left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border"
          initial="hidden"
          animate="visible"
          variants={sidebarVariants}
        >
          {socialMediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              className="flex text-xl aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100"
            >
              {social.icon}
              <small className="text-center text-sm font-medium">{social.name}</small>
            </a>
          ))}
          <hr className="dark:border-gray-700/60" />
          <Link
                to='home'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
          <a href="/" className="flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900">
            <AiOutlineHome className="w-6 h-6" />
            <small className="text-xs font-medium">Home</small>
          </a>
          </Link>
          <div
            className="fixed top-2/4 -translate-y-2/4 ml-20  w-12 h-12 flex items-center justify-center gap-1 text-gray-700  rounded-full bg-white/50 shadow-lg backdrop-blur-lg cursor-pointer"
            onClick={closeSidebar}
          >
            <BsArrowLeftShort className="w-6 h-6" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SocialSidebar;
