import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact,  FaHtml5,  } from 'react-icons/fa';
import { DiJavascript1,  DiNodejsSmall, DiCss3, DiMongodb } from 'react-icons/di';
import { TbBrandNextjs } from "react-icons/tb";
import 'intersection-observer';
import translations from '../translate/translations';

function Projects({ language }) {
  const currentLanguage = language;
  const { PROJECTS_DATA } = translations.projects[currentLanguage];

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
    <div id="projects" className="w-full mb-28 p-2" ref={ref}>
      <div className="max-w-[500px] lg:max-w-[900px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl mb-12 tracking-widest text-center uppercase text-blue-900">
          Projects
        </p>
        <div className="grid xl:grid-cols-2 gap-10">
          {PROJECTS_DATA.map(
            ({ image, title, header, link, project, extraIcon }, element) => (
              <motion.div
                key={element}
                className="shadow-md rounded-2xl bg-slate-200"
                variants={slideFromLeft}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="relative h-52 hover:scale-105 transition-all duration-700">
                  <Image
                    className="rounded-t-2xl"
                    src={image}
                    loading="lazy"
                    alt="Logo"
                    sizes="100vw"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between h-full">
                 
                  <div >
                    <h1 className="mb-5 text-3xl items-center flex justify-center uppercase">
                      {header}
                    </h1>
                    <h3 className=" leading-norma font-semibold">{title}</h3>
                    <div className="mt-6 flex gap-4 justify-center items-center">
                      <button className="btn  hover:bg-blue-700 bg-blue-600 text-white">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>

                        <a href={link} target="_blank" rel="noopener noreferrer">
                          Show Code
                        </a>
                      </button>
                      
                    {project ? (
                      <button className="btn btn-outline hover:bg-blue-700 text-blue-500">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v11.82l9-5.94L4 2zm1.5 2.82l4.81 3.06L5.5 11V4.82z"></path></svg>
                        <a href={project} target="_blank" rel="noopener noreferrer">
                          Watch Live
                        </a>
                      </button>
                    ) : (
                      <div className="tooltip tooltip-error" data-tip="Website not available">
                      <button className="btn btn-outline hover:bg-blue-700 text-blue-500">Watch Live</button>
                    </div>
                    )}
                    
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="text-5xl text-blue-500 ">...</div>
                    {/* Allow the "Used Technologies" section to expand dynamically */}
                    <h2 className="font-bold mt-4">Used Technologies:</h2>
                    <div id="tools" className="flex gap-2 mt-2 items-center justify-center">
                      <FaReact className="text-blue-600 text-2xl hover:-translate-y-1 transition-all duration-500" />
                      <DiJavascript1 className="text-yellow-500 text-2xl hover:-translate-y-1 transition-all duration-500" />
                      <FaHtml5 className="text-red-500 text-2xl hover:-translate-y-1 transition-all duration-500" />
                      <DiCss3 className="text-blue-500 text-2xl hover:-translate-y-1 transition-all duration-500" />
                      {extraIcon}
                    </div>
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
