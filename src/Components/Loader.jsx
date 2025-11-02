import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

const Loader = () => {

    const content = useRef(null);
    const LoaderPage = useRef(null);

    useGSAP(function(){

    const t1 = gsap.timeline();

  

    t1.from(content.current,{

       
     y:"70%",
     duration:1,
     ease:"circ.inOut",
     opacity:0,
     stagger:1



    }) 
t1.to(content.current,{

       
     y:"-90%",
     duration:1,
     ease:"circ.inOut",
     stagger:1



    }) 


t1.to(LoaderPage.current,{

   x:0,
   duration:1,
   opacity:0,
   display:"none",
   ease:"circ.out"


})


 })





  return (


    <div  ref={LoaderPage}  className='h-screen w-screen fixed bg-black z-20 py-1 flex justify-center items-center'>

        <div  className='h-[11vw] w-[70vw] overflow-y-hidden '>

     <div ref={content}   className='  flex justify-center items-center  font-[Neue_Montreal] text-white  text-[10vw] '>
          Satish Mourya
    </div>


        </div>
       
      
    </div>
  )
}

export default Loader
