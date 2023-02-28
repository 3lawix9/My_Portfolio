import React from 'react';
import Image from 'next/image';


const SKILLS_DATA = [
  { image:'/website-1.png', header: 'Salah times', title: 'I did this project with React Tailwind ', 
  link:'https://github.com/3lawix9/My-first-website' , project: 'https://salawat.vercel.app'},
  { image: '/website-2.png', header: 'Adventure website', title: 'I did this project with React Tailwind' , 
  link:'https://github.com/3lawix9/Adventure-website', project: ''},
  { image: '/website-3.png', header: 'Tech Bank website', title: 'I did this project with React Tailwind' , 
  link:'https://github.com/3lawix9/AI-website', project: 'https://ai-website-sage.vercel.app'},
  { image: '/website-4.png', header: 'Calculator', title: 'I did this project with React Tailwind' , 
  link:'https://github.com/3lawix9/Calculator', project: 'https://calculator-eta-black.vercel.app'},
];

const loaderProp =({ src }) => {
  return src;
}

function Projects() {
  return (
    <div id="projects" className="w-full mb-28 p-2 ">
      <div className="max-w-[500px] lg:max-w-[900px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl mb-12 tracking-widest text-center uppercase text-black">
          Projects
        </p>
        <div className="grid xl:grid-cols-2 gap-10  ">
          {SKILLS_DATA.map(({ image, title, header , link , project }, index) => (

            <div key={index} className=" shadow-md bg-gray-200  ">
              <div className="relative h-52  ">
                <Image className='rounded-t-lg' src={image} alt="Logo" fill style={{objectFit:"cover"}}
                loader={loaderProp} />
                
              </div>
              <div className="p-12  ">
                <h1 className='mb-5 text-3xl items-center flex justify-center uppercase'>{header}</h1>
                <h3>{title}</h3>
                <div className="mt-6 flex justify-center items-center ">
                  <button className="px-4 py-2 mr-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                    <a href={link} target="_blank">
                      Show Code
                    </a>
                  </button>
                  <button className="px-4 py-2 text-blue-500 bg-white border border-blue-500 rounded-md hover:text-white hover:bg-blue-500">
                    <a href={project} target="_blank" >
                      Watch live
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
