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

        <div className="flex flex-wrap justify-center">
          {cards.map((card, index) => (
            <motion.div
              className="md:w-1/2 w-full p-4"
              key={index}
              variants={slideFromRight}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="border h-full shadow-xl bg-blue-50 border-blue-400 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-200 text-blue-600 mb-4">
                  {card.icon}
                </div>
                <h2 className="text-lg font-bold title-font mb-2">{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
