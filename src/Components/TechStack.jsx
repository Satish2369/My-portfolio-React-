

import React from 'react'
import { useState } from 'react';

const TechStack = () => {

  

    const [activeTab,setActiveTab]=useState("All");
    

const techStack = {
  "All": [
        "/Images/HTML5.svg",
    "/Images/CSS3.svg",
    "/Images/Js.svg",
    "/Images/React.svg",
    "/Images/Redux.svg",
    "/Images/Tailwind CSS.svg",
        "/Images/Node.js.svg",
        "/Images/Express.svg",
          "/Images/Socket.svg",
          "/Images/MYsql.svg",
        "/Images/MongoDB.svg",
    "/Images/Mongoose.js.svg",
    "/Images/Firebase.svg",
        "/Images/git.svg",
        "/Images/AWS.svg",
    "/Images/Cloudflare.svg",
    "/Images/Postman.svg",
    "/Images/GitHub.svg",
     "/Images/vercel.svg",
     "/Images/netlify.svg",
     "/Images/Java.svg"
   
  ],
  "Frontend": [
    "/Images/HTML5.svg",
    "/Images/CSS3.svg",
    "/Images/Tailwind CSS.svg",
    "/Images/Js.svg",
    "/Images/React.svg",
    "/Images/Redux.svg",
    
  ],
  "Backend": [
    "/Images/Node.js.svg",
    "/Images/Express.svg",
     "/Images/Socket.svg",

   
  ],
  "Database": [
    "/Images/MongoDB.svg",
    "/Images/Mongoose.js.svg",
    "/Images/MYsql.svg"
    
  ],
  "Tools&platform": [
        "/Images/AWS.svg",
    "/Images/Cloudflare.svg",
    "/Images/Postman.svg",
     "/Images/git.svg",
     "/Images/vercel.svg",
    "/Images/GitHub.svg",
    "/Images/Firebase.svg"
  ],
  "others": [
    "/Images/Java.svg"
  ]
}


  const handleOnClick = (service)=>{
        

    setActiveTab(service);

   



   }




  return (
    <div className=' ml-[4vw]  mt-[8vw] font-[Founder_Grotesk] min-h-screen'>
 
         <div className='text-8xl  font-semibold'>TECH-STACK & SKILLS</div>
           

         <div className=' mt-[1vw] ml-[0.7vw] flex gap-4 text-white text-3xl  border-b-2'>

         {["All","Frontend","Backend","Database","Tools&platform","others"].map((service,index)=> <div key={index} onClick={()=>handleOnClick(service)}  className={`cursor-pointer    ${activeTab===service ? "text-red-600 font-bold" :"text-white " }`} >{service}</div> )
            
            
            }
         </div>

         <div className=' mx-auto flex flex-wrap gap-8 p-8 '>



           {techStack[activeTab].map((link,index) => <img key={index} className='h-[6.5vw] w-[6.5vw]' src={link} alt="" /> )}
       




         </div>


    </div>
  )
}

export default TechStack
