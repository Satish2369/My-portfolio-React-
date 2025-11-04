import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";


const IntroSection = ({isLoading}) => {


     console.log(isLoading);
     const text = useRef(null);


   

     useGSAP(function(){


     if(!isLoading){

     const t1 = gsap.timeline();

     t1.from(text.current,{
          opacity:0,
          y:"100%",
          delay:0.2,
          duration:1.2,
          ease:"circ.in",
          

     })

          }
     },[isLoading])


  return (
         
         <div className='py-2 mt-[8vw] mx-auto'>
              <div  className="  hidden md:block  md:relative  h-[21vw] overflow-hidden">
                     
                     <div ref={text}>

                     <div  className='text-white  text-[12vw] font-[Founder_Grotesk] font-semibold'>FULLSTACK DEVELOPER</div>
                     <div  className='text-white  absolute top-[170px] left-[35%]  font-[Founder_Grotesk] font-semibold flex justify-center items-center gap-2 '>
   

                                <div className="text-[40px]  font-[Tusker_Grotesk]">CODE</div>
                                <div className="text-[120px] text-red-600 ">Design</div>
                                <div className="text-[40px]  font-[Tusker_Grotesk]" >DEPLOY</div>



                    </div>
                     </div>
                 
              </div>
               
         </div>
  )
}

export default IntroSection;
