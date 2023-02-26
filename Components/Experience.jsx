import React from 'react'
import  {FiCode} from 'react-icons/fi';
import {AiOutlineMobile} from 'react-icons/ai'
import {BsSpeedometer2} from 'react-icons/bs'
import {VscSymbolColor} from 'react-icons/vsc'


const cardData = [
  {
    icon: <AiOutlineMobile className="w-6 h-6" />,
    title: "Responsive design",
    description: "Develop a good Frontend design for mobile, tablet, desktop and all screen devices",
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    title: "Website dev",
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
  return (
    <section id="experience" className="text-gray-600 body-font ">
      <div className="max-w-[1000px] px-5 py-24 mb-20 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">What Can I do ?</h1>
        </div>
        <div className="flex flex-wrap justify-center  ">
          {cardData.map((card, index) => (
            <div className="md:w-1/2 w-full p-4" key={index}>
              <div className="border border-gray-200 h-full p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  {card.icon}
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{card.title}</h2>
                <p className="">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Experience 