import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/*browser router ke andar ek chhota se page allot karte hain routes jiske andar bahut saare routes aayenge */}
        {/* har ek page par navbar hona chahiye */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          {/* seller and buyer dashboards should be private routes seller dashboard should not be accessible by buyer and buyer dashboard should not be accessible seller */}
          <Route path="/seller/profile" element={<SellerDashboard/>}/>
          <Route path="/buyer/profile" element={<BuyerDashboard/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}