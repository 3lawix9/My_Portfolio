import React from "react";
import Image from "next/image";
import Man from "../public/man3.gif";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import translations from "../translate/translations";
import Typewriter from "typewriter-effect";
import { BsArrowRightShort} from 'react-icons/bs';
import { AiOutlineEye } from "react-icons/ai";


const About = ({ language, openSideBar }) => {
  const currentLanguage = language;
  const { hi, name, role, description, getInTouch, cvData } =
    translations.about[currentLanguage];

  const isArabic = currentLanguage === "ar";
  const textAlignment = isArabic
    ? "lg:text-right text-center"
    : "lg:text-left text-center";
  const imageAlignment = isArabic ? "lg:order-first" : "";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="home"
      className="flex flex-col lg:flex-row items-center justify-center h-[85vh] mt-52 lg:mt-0"
    >
      <div className={`${textAlignment} `}>
        <p className="text-lg font-semibold">{hi}</p>
        <h1 className="text-4xl lg:text-6xl uppercase font-bold mb-4">
          {name}
        </h1>
        <Typewriter
          options={{
            strings: role,
            autoStart: true,
            loop: true,
            delay: 5,
            wrapperClassName:
              "text-blue-800 font-bold  py-2 md:text-2xl text-lg ",
          }}
        />
        {
          <p className="text-slate-600 mt-2
           font-bold capitalize py-1">
            {description}
          </p>
        }
        <div className="space-x-6">
          <a href="https://www.cakeresume.com/s--rb7oFTN5aESboZ_lXIml0Q--/ali-wer" target="_blank" rel="noopener noreferrer">
            <button
              className="txt--gradient-blue border-r-indigo-500 text-white font-bold py-4 px-5 shadow-md rounded-md mt-4 transition duration-300 ease-in-out hover:text-black"
              onClick={openSideBar}
            >
              <p className="flex flex-row  ">
                {cvData}
                <AiOutlineEye className="w-6 h-6 ml-2" />
              </p>
            </button>
          </a>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
            <button
              onClick={openSideBar}
              className="txt--gradient-blue border-r-indigo-500 text-white font-bold py-4 px-5 shadow-md rounded-md mt-4 transition duration-300 ease-in-out hover:text-black"
            >
              <p className="flex flex-row  ">
                {getInTouch}
                <BsArrowRightShort className="w-6 h-6 ml-2" />
              </p>
            </button>
          </Link>

        </div>
      </div>
      <div className={`flex flex-col ${imageAlignment}`}>
        <Image
          width={450}
          height={450}
          priority={true}
          className="mt-10 mb-28 rounded-xl"
          src={Man}
          alt="Logo"
        />
      </div>
    </motion.div>
  );
};

export default About;
