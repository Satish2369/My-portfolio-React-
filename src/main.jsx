import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loader from './Components/Loader.jsx'
import { useState } from 'react'


 function Main(){


  const [isLoading,setIsLoading] = useState(true);




  return (

  <div>
  <StrictMode>
    {isLoading && <Loader onComplete={()=>{setIsLoading(false)}} />}
   
    <App  isLoading={isLoading} />
  </StrictMode>

  </div>

  )



 }



createRoot(document.getElementById('root')).render(<Main/>)
