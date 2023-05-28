import React from "react";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

const SocialSidebar = () => {
  const socialMediaLinks = [
    {
      name: "GitHub",
      icon: <AiFillGithub />,
      link: "https://github.com/3lawix9"
    },
    {
      name: "Twitter",
      icon: <AiFillTwitterCircle />,
      link: "https://twitter.com/3lawix9"
    },
    {
      name: "Gmail",
      icon: <AiFillMail />,
      link: "mailto:3lawix9@gmail.com"
    },
    {
      name: "LinkedIn",
      icon: <AiFillLinkedin />,
      link: "https://linkedin.com/in/3lawix9"
    }
  ];

  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <div className="fixed top-1/4 left-0 w-20 flex flex-col items-center justify-center px-2 py-4rounded-r-lg">
      {socialMediaLinks.map((link) => (
        <li
          key={link.name}
          className="my-2 cursor-pointer"
          onClick={() => handleClick(link.link)}
        >
          {link.icon}
        </li>
      ))}
    </div>
  );
};

export default SocialSidebar;
