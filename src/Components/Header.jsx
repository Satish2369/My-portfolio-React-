import React from 'react'
import { PiCopySimpleThin } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";



const Header = () => {



  return (
    <div  className=' flex  justify-between font-[Neue_Montreal]'>


      <div className='flex gap-2  items-center text-black rounded-full bg-white px-3 py-1 cursor-pointer'>

         <div>satishmourya410@gmail.com</div>
          <div className='bg-[#ECEFFD] p-1 rounded-full' ><PiCopySimpleThin /></div>
      </div>
      <div className='font-[Tusker_Grotesk] text-4xl'>Satish Mourya</div>
      <div className='flex gap-2  items-center'>
   
        <div className='flex gap-1 items-center text-black  rounded-full bg-white px-4 py-2 cursor-pointer'>
            <div><HiDownload /></div>
            <div>Resume</div>
        </div>

         <div className='flex items-center gap-1 text-black  rounded-full bg-white p-2 cursor-pointer'>
            <div><IoIosCall /></div>
            <div>Contact us</div>
         </div>
         

      </div>

      
    </div>
  )
}

export default Header;
