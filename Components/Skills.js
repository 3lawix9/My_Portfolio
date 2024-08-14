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
  { Icon: SiHtml5, color: '#D84924', title: 'HTML', gradient: 'from-orange-400 to-orange-800' },
  { Icon: SiCss3, color: '#0166B1', title: 'CSS', gradient: 'from-blue-400 to-blue-800' },
  { Icon: SiJavascript, color: '#EAD41C', title: 'JavaScript', gradient: 'from-yellow-400 to-yellow-800' },
  { Icon: SiReact, color: '#5CCFEE', title: 'React', gradient: 'from-cyan-400 to-blue-800' },
  { Icon: SiNextdotjs, color: '#000000', title: 'Next.js', gradient: 'from-gray-400 to-gray-800' },
  { Icon: SiTailwindcss, color: '#35B3EB', title: 'TailwindCSS', gradient: 'from-blue-400 to-blue-800' },
  { Icon: SiGit, color: '#F14E32', title: 'Git', gradient: 'from-red-400 to-red-800' },
  { Icon: SiNodedotjs, color: '#68A063', title: 'Node.js', gradient: 'from-green-400 to-green-800' },
  { Icon: SiExpress, color: '#000000', title: 'Express', gradient: 'from-gray-400 to-gray-700' },
  { Icon: SiMongodb, color: '#4DB33D', title: 'MongoDB', gradient: 'from-green-400 to-green-900' },
];

function Skills() {
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
    <div id="skills" className="w-full mb-28 p-2" ref={ref}>
      <div className="max-w-[1020px] mx-auto flex flex-col justify-center h-full relative">
        <p className="text-xl mb-8 tracking-widest text-center uppercase text-blue-900">
          Skills & Technology
        </p>

        <div className=" grid sm:grid-cols-2 sm:gap-8">
          {skills_icon.map(({ Icon, color, title, gradient }, index) => (
            <motion.div
              key={index}
              className="  glass rounded-xl p-8 shadow-xl border border-opacity-20"
              variants={slideFromLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="grid grid-cols-2 gap-2 justify-center items-center">
                <div className="m-auto">
                  <Icon size={60} color={color} />
                </div>
                <div className={`flex flex-col text-2xl font-bold items-center justify-center bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
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

export default Skills;
