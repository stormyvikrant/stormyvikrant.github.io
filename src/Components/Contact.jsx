import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";

const Contact = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:vikrantmodern12@gmail.com",
    },
    {
      id: 2,
      child: (
        <>
          7999248951 <AiTwotonePhone size={30} />
        </>
      ),
    },
    {
      id: 3,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/vikrant-prajapati/",
    },
    {
      id: 4,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/stormyvikrant",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/vikrantPrajapati_resume.pdf",
      download: true,
    },
  ];
  return (
    <div name="Contact" className="w-full p-4 bg-green-300">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold text-violet-600 inline border-b-4 border-gray-500">
            Contact
          </p>
          <div className="flex mt-4">
            <ul className="grid grid-cols-2 auto-rows-auto md:flex md:flex-row gap-5 md:gap-3 ">
              {Links.map(({ id, child, href, download }) => (
                <li
                  key={id}
                  className={
                    "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 rounded-md cursor-pointer"
                  }
                >
                  <a
                    href={href}
                    className="flex justify-between items-center w-full text-white"
                    download={download}
                    target=" "
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/b8a43c45-7e7b-45ac-bbb7-5728203bb687"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name Please"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-2 border-violet-400 text-white"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your E-mail Please"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none my-4 border-2 border-violet-400"
            />
            <textarea
              name="massage"
              placeholder="Enter Your Massage"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-2 border-violet-400"
            ></textarea>
            <button className="bg-gradient-to-b from-cyan-500 to-violet-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
