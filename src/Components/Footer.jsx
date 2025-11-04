import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <div className=" flex  flex-col-reverse px-4   md:flex-row md:p-10 font-[Neue_Montreal] w-full min-h-content">
      <div className=" w-full  md:w-[30%] h-full lin">
        <div className="ml-2">Satish Mourya</div>
        <div className="ml-2  text-gray-400">
          Full Stack Developer in the making, passionate about crafting web
          applications.
        </div>

        <div className="h-[65vw] w-[60vw] mx-auto   md:h-[18vw] md:w-[18vw] md:p-2 md:m-4">
          <img src="/Images/bitmoji.png"  className="w-full h-full object-cover" alt="" />
        </div>
      </div>
      <div className=" w-full md:w-[60%] h-full">
        <div className="   text-[6vw] leading-[1]  font-semibold   md:text-right md:text-3xl">
          Think I'd be a good fit for your team or project?{" "}
        </div>
        <div className="ml-[18vw] text-2xl py-4 md:py-0  md:text-3xl md:mb-2">Let's connect.</div>
        <div className="bg-white  w-full  text-2xl p-2  md:ml-[18vw]  text-black md:w-[80%] md:p-3  text-center rounded-3xl md:text-3xl">
          <a href="" target="_blank">
            satishmourya410@gmail.com
          </a>
        </div>
        <div className="flex mt-[3vw] gap-4">
          <div className="px-2 py-4 md:px-0 md:py-0   md:ml-[24vw]   flex flex-col ">
            <div className="text-gray-500 font-semibold ">Socials</div>

            <div className="flex flex-row  w-[50vw] flex-wrap   gap-2     md:block md:w-fit">
                 <a
              href="https://www.linkedin.com/in/satishmourya2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 md:gap-2 items-center"
            >
              <FaLinkedin size={16}  /> LinkedIn
            </a>

            <a
              href="https://www.github.com/Satish2369"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 md:gap-2 items-center"
            >
              <FaGithub  size={16}  /> Github
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 md:gap-2 items-center"
            >
              <FaInstagramSquare size={16}  /> Instagram
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 md:gap-2 items-center"
            >
              <BsTwitterX size={12} /> Twitter
            </a>
              
            </div>
          
          </div>


           <div className="footer-section  hidden  md:flex flex-col  ">
          <h4 className="text-gray-500">Quick Links</h4>
          <ul>
            <li className="pb-[0.5]">Home</li>
             <li>Skills</li>
             <li>projects</li>
             <li>About me</li>
            

            
          </ul>
        </div>







        </div>
      </div>
    </div>
  );
};

export default Footer;
