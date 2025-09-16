
import "./index.css"
import Header from "./Components/Header";
import IntroSection from "./Components/IntroSection";
import Cursor from "./Components/Cursor";
import About from "./Components/About";
import TechStack from "./Components/TechStack";

function App() {


  return (
    <div className="p-2 w-fit min-h-screen text-white  bg-black flex  flex-col ">
       
       <Header/>
      <IntroSection/>
      <About/>
      <TechStack/>
       

    </div>
  );
}


export default App;
