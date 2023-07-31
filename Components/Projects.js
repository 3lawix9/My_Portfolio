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
                  {/* Use a flex-based layout for dynamic height */}
                  <div >
                    <h1 className="mb-5 text-3xl items-center flex justify-center uppercase">
                      {header}
                    </h1>
                    <h3 className=" leading-norma font-semibold">{title}</h3>
                    <div className="mt-6 flex gap-4 justify-center items-center">
                      <button className="btn hover:bg-blue-700 bg-blue-600 text-white">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          Show Code
                        </a>
                      </button>
                       {/* Add the conditional check for the project URL */}
                    {project ? (
                      <button className="btn btn-outline hover:bg-blue-700 text-blue-500">
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
