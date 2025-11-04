import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <div className=" flex p-10 font-[Neue_Montreal] w-full min-h-content">
      <div className="w-[30%] h-full lin">
        <div className="ml-2">Satish Mourya</div>
        <div className="ml-2  text-gray-400">
          Full Stack Developer in the making, passionate about crafting web
          applications.
        </div>

        <div className=" h-[18vw] w-[18vw] p-2 m-4">
          <img src="/Images/bitmoji.png" alt="" />
        </div>
      </div>
      <div className="w-[60%] h-full">
        <div className="text-right text-3xl">
          Think I’d be a good fit for your team or project?{" "}
        </div>
        <div className="ml-[18vw]  text-3xl mb-2">Let's connect.</div>
        <div className="bg-white ml-[18vw]  text-black w-[80%] p-3  text-center rounded-3xl text-3xl">
          <a href="" target="_blank">
            satishmourya410@gmail.com
          </a>
        </div>
        <div className="flex mt-[3vw] gap-4">
          <div className="ml-[24vw]  flex flex-col ">
            <div className="text-gray-500">Socials</div>
            <a
              href="https://www.linkedin.com/in/satishmourya2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <FaLinkedin size={16}  /> LinkedIn
            </a>

            <a
              href="https://www.github.com/Satish2369"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <FaGithub  size={16}  /> Github
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <FaInstagramSquare size={16}  /> Instagram
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <BsTwitterX size={12} /> Twitter
            </a>
          </div>


           <div className="footer-section  flex flex-col  ">
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
