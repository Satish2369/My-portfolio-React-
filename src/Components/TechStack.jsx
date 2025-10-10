

import React from 'react'
import { useState } from 'react';
import { techStack } from '../utils/constant';

const TechStack = () => {

  

    const [activeTab,setActiveTab]=useState("All");
    


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
