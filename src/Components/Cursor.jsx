import React from 'react'



const Cursor = ()=> {


  const handleMouseMove = (e) => {

    console.log(e);
    console.log("moving");
  
  }


  return (


    <div className='h-6 w-6 bg-white rounded-full ' onMouseMove={handleMouseMove}>

        
     
      

       
      
    </div>
  )

}

export default Cursor
