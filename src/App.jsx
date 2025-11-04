
import "./index.css"
import Header from "./Components/Header";
import IntroSection from "./Components/IntroSection";
import Cursor from "./Components/Cursor";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import { useEffect } from "react";

function App({isLoading}) {

    







  return (
    <div className="md:p-2 w-[100vw]     overflow-hidden  md:w-fit min-h-screen text-white  bg-black flex  flex-col ">
       
       <Header/>
      <IntroSection  isLoading={isLoading} />
      <About/>
      <TechStack/>
      <Projects/>
      <Footer/>
       

    </div>
  );
}


export default App;
