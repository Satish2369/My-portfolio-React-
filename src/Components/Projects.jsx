import React, { useEffect } from "react";
import { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

 

  const project = {
    All: [
       {
        image_Link:
          "/project_Images/Devconnect.png",
        github_link: "https://github.com/Satish2369/DevTinder-Frontend",
        live_Link: "https://devconnect.me/",

      },

      {
        image_Link:
          "/project_Images/AI_CODE.png",
        github_link: "https://github.com/Satish2369/AI-code-Reviewer-Frontend",
        live_Link: "https://ai-code-reviewer-frontend-ochre.vercel.app/",
      },
       {
        image_Link:
          "/project_Images/filmax.jpg",
        github_link: "https://github.com/Satish2369/Filmax",
        live_Link: "https://filmax-two.vercel.app/",

      },
     





    ],

    "Live WebSites": [
      {
        image_Link:
          "https://tse2.mm.bing.net/th/id/OIP.D0Ci37hxAUUIMwOF80g78wHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        github_link: "https://github.com/Satish2369/DevTinder-Frontend",
        live_Link: "https://devconnect.me"
      },
    ],
    Projects: [
      {
        image_Link:
          "https://tse2.mm.bing.net/th/id/OIP.D0Ci37hxAUUIMwOF80g78wHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        github_link: "https://github.com/Satish2369/AI-code-Reviewer-Frontend",
        live_Link: "https://ai-code-reviewer-frontend-ochre.vercel.app/",
      },
    ],
    Collaborations: [
            {
        image_Link:
          "https://tse2.mm.bing.net/th/id/OIP.D0Ci37hxAUUIMwOF80g78wHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        github_link: "https://github.com/Satish2369/AI-code-Reviewer-Frontend",
        live_Link: "https://ai-code-reviewer-frontend-ochre.vercel.app/",
      },
    ],
  };

  const handleOnClick = (type) => {
    setActiveTab(type);
  };

  return (
    <div className=" ml-[4vw]   text-white font-[Neue_Montreal] h-[70vh]    md:min-h-screen">
      <div className=" text-7xl md:text-8xl font-[Founder_Grotesk] font-semibold ">
        Proof Of Work
      </div>
      <div className="flex gap-4 border-b-2   ">
        {["All", "Live WebSites", "Projects", "Collaborations"].map(
          (type, index) => (
            <div
              key={index}
              onClick={() => handleOnClick(type)}
              className={`cursor-pointer m-1 md:text-xl text-[4.4vw]   ${
                activeTab === type ? "text-red-600 font-bold" : "text-white "
              }`}
            >
              {type}{" "}
            </div>
          )
        )}
      </div>
    <div  className="flex mx-auto gap-3">
  {project[activeTab]?.map((pro, index) => {
        return (
          <div
            key={index}
            className="  group  h-[50vw]  w-[36vw]  relative md:my-4  md:mx-2  md:w-[20vw] md:h-[18vw] bg-red-800 rounded-t-md overflow-hidden"
          >
            <img
              src={pro.image_Link}
              className=" z-0 w-full h-full object-fill"
              alt="project_Image"
            />

            <div className="z-20 absolute inset-0 translate-y-full   bg-indigo-900/80 group-hover:translate-y-[80%] transition-transform duration-600  ease-in-out">
              <div className="flex justify-center items-center ">
                <a href={pro.live_Link} target="_blank">
                
                  <button className="px-3 py-2 m-2 border border-black bg-red-600 cursor-pointer rounded-md">
                    Live Now
                  </button>
                </a>
                <a href={pro.github_link} target="_blank">
                  {" "}
                  <button className="px-3 py-2 m-2 border border-black bg-red-600 cursor-pointer rounded-md">
                    Github link
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}

    </div>
    
    </div>
  );
};

export default Projects;
