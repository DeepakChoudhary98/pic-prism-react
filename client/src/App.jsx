import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import GsapTransition from "./components/GsapTransition";
import gsap from "gsap";

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/*browser router ke andar ek chhota se page allot karte hain routes jiske andar bahut saare routes aayenge */}
        {/* har ek page par navbar hona chahiye */}
        <Navbar/>
        <GsapTransition/>
       
        {/* add your footer here */}

      </BrowserRouter>
    </>
  )
}