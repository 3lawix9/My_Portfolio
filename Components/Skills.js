import React from 'react';
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



export const skills_icon = [
  { Icon: SiHtml5, color: '#D84924', title: 'HTML' },
  { Icon: SiCss3, color: '#0166B1', title: 'CSS' },
  { Icon: SiJavascript, color: '#EAD41C', title: 'JavaScript' },
  { Icon: SiTypescript, color: '#2E72BC', title: 'TypeScript' },
  { Icon: SiReact, color: '#5CCFEE', title: 'React' },
  { Icon: SiNextdotjs, color: '#000000', title: 'Next.js' },
  { Icon: SiSass, color: '#C26191', title: 'Sass' },
  { Icon: SiTailwindcss, color: '#35B3EB', title: 'Tailwind' },
  { Icon: SiGit, color: '#F14E32', title: 'Git' },
  { Icon: SiNodedotjs, color: '#68A063', title: 'Node.js' },
  { Icon: SiExpress, color: '#000000', title: 'Express' },
  { Icon: SiMongodb, color: '#4DB33D', title: 'MongoDB' },
  
  
 
];


function Skills(){
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
        duration: 0.8,
        type: 'spring',
        bounce: 0.3,
      },
    },
  };

  return (
    <div id="skills"  className="w-full mb-28 p-2 " ref={ref}>
      <div className="max-w-[1020px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl mb-8 tracking-widest text-center uppercase text-blue-900">
          Skills & Technology
        </p>

        <div className="grid grid-cols-2 sm:gap-8">
          {skills_icon.map(({ Icon, color, title }, element) => (
            <motion.div
            key={element}
            className=" p-6 shadow-lg rounded-2xl  "
            variants={slideFromLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            

            >
            
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className=" m-auto">
                  <Icon size={60} color={color} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
          );
}

export default Skills
