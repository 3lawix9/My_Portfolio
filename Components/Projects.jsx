import React from 'react';
import Image from 'next/image';


const SKILLS_DATA = [
  { image:'/coding.png', color: '#D84924', title: 'تم بناء هذا التطبيق للتعمق في أساسيات React js, وتم تطبيق جميع ما تتميز فيه React سواء من التعامل مع ال State و ال components و الإستخدام الأمثل لuseEffect وتسخيرها للتعامل مع اي إتصال يحصل مع ال API, وطريقة ربط React مع node js. ' },
  { image: '/coding.png', color: '#0166B1', title: 'I did this project with React Tailwind' },
  { image: '/coding.png', color: '#F14E32', title: 'I did this project with React Tailwind' },
];

function Projects() {
  return (
    <div id="skills" className="w-full mb-28 p-2">
      <div className="max-w-[500px] lg:max-w-[900px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl mb-8 tracking-widest text-center uppercase text-black">
          Projects
        </p>
        <div className="grid grid-cols-1 gap-8">
          {SKILLS_DATA.map(({ image, title }, index) => (

            <div key={index} className=" bg-blue-400  shadow-sm  rounded-xl">
              <div className="relative h-52">
                {/* <Image src={image} alt="Logo" layout='fill' objectFit='cover' /> */}
              </div>
              <div className="p-16  mt-0 bg-gray-200 ">
                <h1 className='mb-5 text-3xl items-center flex justify-center'>موقع تواصل إجتماعي</h1>
                <h3>{title}</h3>
                <div className="mt-6 flex justify-center items-center ">
                  <button className="px-4 py-2 mr-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                    <a >
                      Show Code
                    </a>
                  </button>
                  <button className="px-4 py-2 text-blue-500 bg-white border border-blue-500 rounded-md hover:text-white hover:bg-blue-500">
                    <a >
                      Show Project
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
