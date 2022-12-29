import React from "react";

import myshopinWeb from "../Assets/myshoppingweb.png";
import skinstore from "../Assets/skinstoreclone.png";
import shoppingmart from "../Assets/shoppingmart.png";
import nykamanclone from "../Assets/naykamanclone.png";

const Projects = () => {
  const project = [
    {
      id: 1,
      src: skinstore,
      demo: "https://skin-store-clone-three.vercel.app/",
      code: "https://github.com/stormyvikrant/ProjectSkinStore",
      projName: "Skin-Store Clone",
      Description:
        "It's an e-Commerce website for Buy Women's Grooming, Hair & Skin Care & Wellness Products Online in India from Skin Store..",
      TechStack: "HTML | CSS | JavaScript | ReactJs | Redux ",
    },
    {
      id: 2,
      src: myshopinWeb,
      demo: "https://frontend-828vtc1rg-stormyvikrant.vercel.app",
      code: "https://github.com/stormyvikrant/FullStack-MyShopping-web",
      projName: "FullStack MyShopping-web-App",
      Description:
        "MyShopping is an E-Commerce website which is the one step shop for all electronics products. This is an individual project with MERN as a techstack.",
      TechStack: "HTML | CSS | React.js | NodeJs | Express | Bootstrap",
    },
    {
      id: 3,
      src: shoppingmart,
      demo: "https://jovial-kelpie-bc0ce8.netlify.app/",
      code: "https://github.com/stormyvikrant/Shopping-mart-React-Redux",
      projName: "Shopping-Mart",
      Description:
        "This is an E-commerce website for men, women Products ,& for making this web I used tech stack as mention in below.",
      TechStack: "HTML | CSS | JavaScript | Bootstrap | ReactJs | Redux",
    },
    {
      id: 4,
      src: nykamanclone,
      demo: "https://clone-ecommerce-app.netlify.app/",
      code: "https://github.com/stormyvikrant/Unit-4-NYKAAMAN-PROJECT",
      projName: "Naykaaman Clone",
      Description:
        "About It's an e-Commerce website for Buy Mens Grooming, Hair & Skin Care & Wellness Products Online in India from NykaaMan.",
      TechStack: "HTML | CSS | JavaScript",
    },
  ];

  return (
    <div name="Project" className="w-full bg-orange-300">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-violet-600">
          
          </p>
          <p className="py-9"></p>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-violet-600">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {project.map(
            ({ id, src, demo, code, projName, Description, TechStack }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg bg-violet-100 p-2 bg-yellow-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt="Youtube-Clone"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center mt-4">
                  <p className="text-1xl font-bold">{projName}</p>
                </div>

                <div className="flex items-center justify-center mt-1">
                  <p className="text-1xl text-center">{Description}</p>
                </div>

                <div className="flex items-center justify-center mt-2 ">
                  <p className=" text-center">
                    <span className="font-bold"> Tech-Stack:</span> {TechStack}
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <a href={demo} target=" ">
                    <button className="w1/2 px-4 py-1 m-4 duration-200 hover:scale-105 border-2 rounded-lg border-red-900 bg-teal-900 text-white hover:bg-green-400 hover:text-black">
                      Demo
                    </button>
                  </a>
                  {/* <a href={code} target="_blank"> */}
                  <a href={code} target=''>
                  <button className="w1/2 px-4 py-1 m-4 duration-200 hover:scale-105 border-2 rounded-lg border-red-900 bg-teal-900 text-white hover:bg-green-400 hover:text-black">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="mt-3 sm:mt-5 md:mt-7 mb-3 sm:mb-5 md:mb-7">
        <hr />
      </div>
    </div>
  );
};

export default Projects;
