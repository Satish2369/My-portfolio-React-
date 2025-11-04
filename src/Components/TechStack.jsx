

import React from 'react'
import { useState } from 'react';
import { techStack } from '../utils/constant';

const TechStack = () => {

  

    const [activeTab,setActiveTab]=useState("All");
    


  const handleOnClick = (service)=>{
        

    setActiveTab(service);

   



   }




  return (
    <div className=' ml-[2vw] md:ml-[4vw]  mt-[8vw] font-[Founder_Grotesk] h-[80vh]  md:min-h-screen'>
 
         <div className=' text-[16vw]   md:text-8xl  font-semibold'>TECH-STACK & SKILLS</div>
           

         <div className='     mt-[1vw] md:ml-[0.7vw] flex  gap-2 text-[7vw] md:gap-4 text-white md:text-3xl  border-b-2'>

         {["All","Frontend","Backend","Database","Tools&platform","others"].map((service,index)=> <div key={index} onClick={()=>handleOnClick(service)}  className={`cursor-pointer    ${activeTab===service ? "text-red-600 font-bold" :"text-white " }`} >{service}</div> )
            
            
            }
         </div>

         <div className='     flex flex-wrap  gap-7 py-4  md:mx-auto   md:gap-8 md:p-8 '>



           {techStack[activeTab].map((link,index) => <img key={index} className='h-[14vw] w-[12vw]  md:h-[6.5vw]  md:w-[6.5vw]' src={link} alt="" /> )}
       




         </div>


    </div>
  )
}

export default TechStack
