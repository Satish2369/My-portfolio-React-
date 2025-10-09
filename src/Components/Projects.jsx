import React from 'react'

const Projects = () => {

  return (
    <div className= ' ml-[4vw]  text-white font-[Neue_Montreal] min-h-screen'>

        <div  className='text-8xl font-[Founder_Grotesk] font-semibold '>Proof Of Work</div>
        <div className='flex gap-4 border-b-2'>
         {["All","Live Websites","Projects","Collaborations"].map((t,index)=> <div key={index} className='cursor-pointer'>{t} </div>)}
        </div>
    






      
    </div>
  )
}

export default Projects
