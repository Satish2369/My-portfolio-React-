import React, { useState } from "react";
import { PiCopySimpleThin } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { useRef } from "react";
import { BiSolidCopy } from "react-icons/bi";


const Header = () => {

  const [clicked,setClicked] = useState(false);

  const value = useRef(null);


  const handleCopy = ()=>{



    if(value.current){

     navigator.clipboard.writeText(value.current.textContent).then(() => {
          
                
                setClicked(true);
                setTimeout(()=>{
                 setClicked(false);
                },2000)

                
     }
    )
       
  .catch(err => console.error("Copy failed:", err));
    }

   
    

  }





  return (
    <div className=" flex  justify-between font-[Neue_Montreal]">
      <div className="     hidden             md:flex gap-2  items-center text-black rounded-full bg-white px-3 py-1 cursor-pointer         ">
        <div ref={value} >satishmourya410@gmail.com</div>
        <div className="bg-[#ECEFFD] p-1 rounded-full"  onClick={handleCopy}>
          { clicked ?<BiSolidCopy />:<PiCopySimpleThin /> }
        
        </div>
      </div>
      <div className=" mx-auto md:mx-0 mt-4 md:mt-0  font-[Tusker_Grotesk] text-6xl    md:text-4xl  md:ml-0">Satish Mourya</div>
      <div className="  hidden  md:flex md:gap-2  md:items-center">
        <div className="flex gap-1 items-center text-black  rounded-full bg-white  cursor-pointer">
          <a
            href="/Satish_Resume.pdf"
            download="Satish_Mourya_Resume.pdf"
            className="flex gap-1 items-center text-black rounded-full bg-white px-4 py-2 cursor-pointer hover:bg-gray-200 transition"
          >
            <HiDownload className="text-xl" />
            <span>Resume</span>
          </a>
        </div>

        <div className="flex items-center gap-1 text-black  rounded-full bg-white p-2 cursor-pointer">
          <div>
            <IoIosCall />
          </div>
          <div>Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
