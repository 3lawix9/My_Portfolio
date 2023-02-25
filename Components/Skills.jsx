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



export const SKILLS_Icons = [
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

  return (
    <div id="skills" className="w-full mb-28 p-2 ">
      <div className="max-w-[1020px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl mb-8 tracking-widest text-center uppercase text-red-500">
          Skills & Technology
        </p>
        <div className="grid grid-cols-2 sm:gap-8">
          {SKILLS_Icons.map(({ Icon, color, title }, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className=" m-auto">
                  <Icon size={70} color={color} />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          );
}

export default Skills
