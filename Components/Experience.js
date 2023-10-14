import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import translations from '../translate/translations';

const Experience = ({ language }) => {
  const currentLanguage = language;
  const { sectionTitle, cards } = translations.experience[currentLanguage];
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
    <section
      id="experience"
      className="text-black relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-[1000px] px-5 py-24 mb-20 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-900">
            {sectionTitle}
          </h1>
        </div>

        <div className="flex flex-wrap  glass justify-center">
          {cards.map((card, index) => (
             <motion.div
      className="md:w-1/2 w-full p-4"
      key={index}
      variants={slideFromRight}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="border h-full  bg-white  p-8 rounded-lg transition-all duration-300 shadow-2xl ">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mb-4">
          {card.icon}
        </div>
        <h2 className="text-xl font-bold title-font mb-4">{card.title}</h2>
        <p className="text-gray-600">{card.description}</p>
      </div>
    </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
