import React from "react";

const About = () => {
  return (
    <div className="    w-full       mt-[0vw]    md:mt-[14vw] md:mx-auto   md:w-[80%] h-fit p-2 md:bg-gradient-to-tr from-black via-gray-900 to-slate-800 rounded-2xl  text-black ">
      <div className="     w-full flex   flex-col-reverse  md:flex-row ">
        <div className="  md:w-[60%] ">
          <div className="w-full    p-2  text-white text-justify  text-[4.3vw] leading-[1] mt-[12vw]  md:mt-0 md:leading-normal    md:text-xl md:p-4 md:m-2  font-[Neue_Montreal] rounded-2xl">
            Hello! I'm Satish Mourya, a Full Stack Developer in the making,
            pursuing my B.Tech in Computer Science at IILM University. I love
            transforming ideas into interactive and scalable web applications.
            My toolkit includes React.js for rich front-end experiences, Node.js
            and Express.js for robust backends, and MongoDB for efficient data
            management.I aim to leverage technology to design
            solutions that make an impact and bring value to people's lives.
          </div>

           <div className="text-white flex  gap-3  mt-[4vw] ml-[12vw] md:ml-4 md:mt-0">
              <a href="https://www.github.com/Satish2369" target="_blank" rel="noopener noreferrer" >
                  <div className="bg-red-800 px-8 py-2   rounded-md  cursor-pointer">Github</div>
              </a>
                   <a href="https://www.linkedin.com/in/satishmourya2026/" target="_blank" rel="noopener noreferrer">
                  <div className="bg-red-800 px-8 py-2   rounded-md  cursor-pointer">Linkedin</div>
              </a>
              
           </div>
             
             


        </div>

        <div className="w-[40%]  rounded-2xl ml-[10vw] md:ml-0 md:p-2 md:m-2  ">
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
