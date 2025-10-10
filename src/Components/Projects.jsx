import React, { useEffect } from "react";
import { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  useEffect(
    (prev) => {
      return console.log(prev);
    },
    [activeTab]
  );

  const project = {
    All: [
      {
        image_Link:
          "https://tse2.mm.bing.net/th/id/OIP.D0Ci37hxAUUIMwOF80g78wHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        github_link: "https://github.com/Satish2369/AI-code-Reviewer-Frontend",
        live_Link: "https://ai-code-reviewer-frontend-ochre.vercel.app/",
      },





    ],

    "Live WebSites": [
      "https://tse2.mm.bing.net/th/id/OIP.D0Ci37hxAUUIMwOF80g78wHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
    Projects: [
      "https://tse2.mm.bing.net/th/id/OIP.D0Ci37hxAUUIMwOF80g78wHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
    Collaborations: [
      "https://tse2.mm.bing.net/th/id/OIP.D0Ci37hxAUUIMwOF80g78wHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
  };

  const handleOnClick = (type) => {
    setActiveTab(type);
  };

  return (
    <div className=" ml-[4vw]  text-white font-[Neue_Montreal] min-h-screen">
      <div className="text-8xl font-[Founder_Grotesk] font-semibold ">
        Proof Of Work
      </div>
      <div className="flex gap-4 border-b-2">
        {["All", "Live WebSites", "Projects", "Collaborations"].map(
          (type, index) => (
            <div
              key={index}
              onClick={() => handleOnClick(type)}
              className={`cursor-pointer m-1    ${
                activeTab === type ? "text-red-600 font-bold" : "text-white "
              }`}
            >
              {type}{" "}
            </div>
          )
        )}
      </div>

      {project[activeTab]?.map((pro, index) => {
        return (
          <div
            key={index}
            className="  group  relative my-4   mx-2 w-[20vw] h-[18vw] bg-red-800 rounded-t-md overflow-hidden"
          >
            <img
              src={pro.image_Link}
              className=" z-0 w-full h-full object-fill"
              alt="project_Image"
            />

            <div className="z-20 absolute inset-0 translate-y-full   bg-zinc-400 group-hover:translate-y-[80%] transition-transform duration-600  ease-in-out">
              <div className="flex justify-center items-center ">
                <a href={pro.live_Link} target="_blank">
                
                  <button className="px-3 py-2 m-2 border border-black bg-pink-400 cursor-pointer rounded-md">
                    Live Now
                  </button>
                </a>
                <a href={pro.github_link} target="_blank">
                  {" "}
                  <button className="px-3 py-2 m-2 border border-black bg-pink-400 cursor-pointer rounded-md">
                    Github link
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
