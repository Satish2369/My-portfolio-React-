import React from "react";

const About = () => {
  return (
    <div className=" mt-[11vw] mx-auto  w-[80%] h-fit p-2 bg-gradient-to-tr from-black via-gray-900 to-slate-800 rounded-2xl  text-black ">
      <div className="w-full flex ">
        <div className="w-[60%] ">
          <div className="w-full p-4 m-2 text-white text-justify text-xl  font-[Neue_Montreal] rounded-2xl">
            Hello! I'm Satish Mourya, a Full Stack Developer in the making,
            pursuing my B.Tech in Computer Science at IILM University. I love
            transforming ideas into interactive and scalable web applications.
            My toolkit includes React.js for rich front-end experiences, Node.js
            and Express.js for robust backends, and MongoDB for efficient data
            management. I'm equally excited about using Tailwind CSS, GSAP
            animations, and Firebase integrations to create intuitive and
            engaging user journeys. I aim to leverage technology to design
            solutions that make an impact and bring value to people's lives.
          </div>
             
             


        </div>

        <div className="w-[40%] p-2 m-2  rounded-2xl">
          {/* This is the parent container for the circular image */}
          <div className="w-72 h-72 rounded-full overflow-hidden mx-auto">
            <img
              src="/Images/My_Photo.png"
              className="w-full h-full object-cover"
              alt="My_photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
