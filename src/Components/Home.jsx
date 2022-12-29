import React from "react";
import vikrant from "../Assets/vikrant.jpg";

const Home = () => {
  return (
    <div name="Home" className="sm:h-screen w-full pt-34 bg-green-200">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I,m a Full Stack Developer
          </h2>
          <p className="py-4 max-w-md">
            Currently, I love to work on web application using technologies like
            JavaScript, React, Redux and Next.JS. I love to explore new
            technologies and leverage them to solve real-life problems.
          </p>
        </div>

        <div className="mb-10 sm:mb-0">
          <img
            src={vikrant}
            alt="my-profile"
            className="rounded-3xl mx-auto w-6/12 md:w-90% "
          />
        </div>
      </div>
      <div className="mt-3 sm:mt-5 md:mt-7 mb-3 sm:mb-5 md:mb-7">
        <hr />
      </div>
    </div>
  );
};

export default Home;
