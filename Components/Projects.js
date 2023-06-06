import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact,  FaHtml5,  } from 'react-icons/fa';
import { DiJavascript1,  DiNodejsSmall, DiCss3, DiMongodb } from 'react-icons/di';
import { TbBrandNextjs } from "react-icons/tb";
import 'intersection-observer';
import translations from '../translate/translations';








function Projects({language}) {

  const currentLanguage = language;
  const { PROJECTS_DATA  } = translations.projects[currentLanguage];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideFromLeft = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.1,
        type: 'spring',
        bounce: 0.3,
      },
    },
  };


  return (
    <div id="projects" className="w-full mb-28 p-2 " ref={ref}>
      <div className="max-w-[500px] lg:max-w-[900px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl mb-12 tracking-widest text-center uppercase text-blue-900">
          Projects
        </p>
        <div className="grid xl:grid-cols-2 gap-10">
          {PROJECTS_DATA.map(
            ({ image, title, header, link, project, extraIcon }, element) => (
              <motion.div
              key={element}
              className="shadow-md rounded-2xl  bg-slate-200"
              variants={slideFromLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
                  <div className="relative h-52  hover:scale-105 transition-all duration-700">
                    <Image
                      className="rounded-t-2xl "
                      src={image}
                      loading="lazy"
                      alt="Logo"
                      sizes="100vw"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-12">
                    <h1 className="mb-5 text-3xl items-center flex justify-center uppercase">
                      {header}
                    </h1>
                    <h3 className="leading-normal">{title}</h3>
                    <div className="mt-6 flex justify-center items-center">
                      <button className="px-4 py-2 mr-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          Show Code
                        </a>
                      </button>
                      <button className="px-4 py-2 text-blue-500 bg-white border border-blue-500 rounded-md hover:text-white hover:bg-blue-500">
                        <a href={project} target="_blank" rel="noopener noreferrer">
                          Watch Live
                        </a>
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h2 className="font-bold mt-4">Used Technologies:</h2>
                      <div id="tools" className="flex gap-2 mt-4 items-center justify-center">
                        <FaReact className="text-blue-600 text-2xl hover:-translate-y-1 transition-all duration-500" />
                        <DiJavascript1 className="text-yellow-500 text-2xl hover:-translate-y-1 transition-all duration-500" />
                        {/* <TbBrandNextjs className='text-2xl hover:-translate-y-1 transition-all duration-500' /> */}
                        {/* <DiNodejsSmall className='text-green-500 text-2xl hover:-translate-y-1 transition-all duration-500' /> */}
                        {/* <SiTailwindcss className='text-blue-500 text-2xl hover:-translate-y-1 transition-all duration-500' /> */}
                        {/* <DiMongodb className='text-green-500 text-2xl hover:-translate-y-1 transition-all duration-500' /> */}
                        <FaHtml5 className="text-red-500 text-2xl hover:-translate-y-1 transition-all duration-500" />
                        <DiCss3 className="text-blue-500 text-2xl hover:-translate-y-1 transition-all duration-500" />
                        {extraIcon}
                      </div>
                    </div>
                  </div>
                </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
