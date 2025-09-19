

import React from 'react'
import { useState } from 'react';

const TechStack = () => {

  

    const [activeTab,setActiveTab]=useState("All");

const techStack = {
  "All": [
        "/Images/HTML5.svg",
    "/Images/CSS3.svg",
    "/Images/JavaScript.svg",
    "/Images/React.svg",
    "/Images/Tailwind CSS.svg",
        "/Images/Node.js.svg",
        "/Images/Express.svg",
        "/Images/MongoDB.svg",
    "/Images/Mongoose.js.svg",
    "/Images/Firebase.svg",
        "/Images/AWS.svg",
    "/Images/Cloudflare.svg",
    "/Images/Postman.svg",
    "/Images/GitHub.svg"
   
  ],
  "Frontend": [
    "/Images/HTML5.svg",
    "/Images/CSS3.svg",
    "/Images/JavaScript.svg",
    "/Images/React.svg",
    "/Images/Tailwind CSS.svg"
  ],
  "Backend": [
    "/Images/Node.js.svg",
    "/Images/Express.svg"
   
  ],
  "Database": [
    "/Images/MongoDB.svg",
    "/Images/Mongoose.js.svg",
    "/Images/Firebase.svg"
  ],
  "Tools&platform": [
        "/Images/AWS.svg",
    "/Images/Cloudflare.svg",
    "/Images/Postman.svg",
    "/Images/GitHub.svg"
  ],
  "others": [
    "/Images/Java.svg"
  ]
}


   const handleOnClick = (service)=>{
        

    setActiveTab(service);

    console.log(activeTab);



   }




  return (
    <div className=' ml-[4vw]  mt-[8vw] font-[Founder_Grotesk] h-screen'>
 
         <div className='text-8xl  font-semibold'>TECH-STACK & SKILLS</div>
           

         <div className=' mt-[1vw] ml-[0.7vw] flex gap-4 text-white text-3xl  border-b-2'>

         {["All","Frontend","Backend","Database","Tools&platform","others"].map((service,index)=> <div key={index} onClick={()=>handleOnClick(service)}  className='cursor-pointer text-red ' >{service}</div> )
            
            
            }

           



         </div>

         <div className=' flex flex-wrap gap-8 p-6'>



           {techStack[activeTab].map((link,index) => <img key={index} className='h-[7vw] w-[7vw]' src={link} alt="" /> )}
       




         </div>


    </div>
  )
}

export default TechStack
