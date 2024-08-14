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
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: 'spring', bounce: 0.4 },
    },
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden  text-white py-20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
            {sectionTitle}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r mt-12 from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {cards.map((card, index) => (
    <motion.div
      key={index}
      variants={slideFromRight}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="transform hover:scale-105 transition-all duration-300"
    >
      <div className="bg-gradient-to-r from-slate-100 to-slate-50 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white border-opacity-20 h-full flex flex-col">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white mb-6">
          {card.icon}
        </div>
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
          {card.title}
        </h2>
        <p className="text-black text-md font-semibold flex-grow">{card.description}</p>
      </div>
    </motion.div>
  ))}
</div>

      </div>

      {/* Abstract shapes for background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 top-1/3 right-1/4"></div>
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 bottom-1/4 left-1/3"></div>
      </div>
    </section>
  );
};

export default Experience;