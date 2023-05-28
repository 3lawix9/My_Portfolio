import React from 'react'
import  {FiCode} from 'react-icons/fi';
import {AiOutlineMobile} from 'react-icons/ai'
import {BsSpeedometer2} from 'react-icons/bs'
import {VscSymbolColor} from 'react-icons/vsc'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const cardData = [
  {
    icon: <AiOutlineMobile className="w-6 h-6" />,
    title: "Responsive design",
    description: "Develop a good Frontend design for mobile, tablet, desktop and all screen devices",
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    title: "Website development",
    description: "Developing a website appearance based on design into",
  },
  {
    icon: <BsSpeedometer2 className="w-6 h-6" />,
    title: "Best Performance",
    description: "Develop a good Performance website and web application for more better experience.",
  },
  {
    icon: <VscSymbolColor className="w-6 h-6" />,
    title: "Ui Ux design",
    description: "Develop a good user interface and user experience, with a beautiful and comfortable appearance Develop a good user interface and user experience, with a beautiful and comfortable appearance",
  },
];

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideFromRight = {
    hidden: {
      opacity: 0,
      x: 100,
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
    <section id="experience" className="text-black " ref={ref} >
      <div className="max-w-[1000px] px-5 py-24 mb-20 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-900 ">What Can I do ?</h1>
        </div>
      
        
        <div className="flex flex-wrap justify-center   ">
          {cardData.map((card, element) => (
             <motion.div
             className="md:w-1/2 w-full  p-4"
             key={element}
             variants={slideFromRight}
             initial="hidden"
             animate={inView ? 'visible' : 'hidden'}
           >
              <div className="border  h-full shadow-xl bg-blue-50 border-blue-400 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-600 mb-4">
                  {card.icon}
                </div>
                <h2 className="text-lg font-bold title-font mb-2">{card.title}</h2>
                <p className="">{card.description}</p>
              </div>
        </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
};


export default Experience 