import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

const Loader = () => {

    const content = useRef(null);
    const loaderPage = useRef(null);

    useGSAP(function(){

    const t1 = gsap.timeline();

  

    t1.from(content.current,{

       
     y:"70%",
     duration:1,
     ease:"circ.inOut",
     opacity:0,
     



    }) 
t1.to(content.current,{
     
     y:"-90%",
     duration:1,
     ease:"circ.inOut",
  
    }) 


t1.to(loaderPage.current,{

   x:"-100%",
   delay:0.5,
   duration:1,
   ease:"power1.inOut",
   opacity:0,
  


})


 })





  return (


    <div  ref={loaderPage}  className='h-screen w-screen fixed bg-black z-20 py-1 flex justify-center items-center'>

        <div  className='h-[11vw] w-[70vw] overflow-y-hidden '>

     <div ref={content}   className='  flex justify-center items-center  font-[Neue_Montreal] text-white  text-[10vw] '>
          Satish Mourya
    </div>


        </div>
       
      
    </div>
  )
}

export default Loader
