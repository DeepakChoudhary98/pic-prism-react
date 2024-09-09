import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import SellerDashboard from '../pages/SellerDashboard';
import BuyerDashboard from '../pages/BuyerDashboard';
import { useRef } from 'react';
import gsap from "gsap";
import {Toaster } from "react-hot-toast";
const GsapTransition = () => {
    const nodeRef = useRef(null);
    const location = useLocation();
    console.log("The location s : ", location);

    // jab bhi locaton change hoga to tab ye use effect run hoga, because ye useeffect hook ko ham dependent banaane wale hai locaton ke upper

    // when a page renders, useEffects runs first
    useEffect(() => {
        if(nodeRef.current){
            gsap.fromTo(nodeRef.current, {opacity: 0}, {opacity: 1, duration: 1});
        }
    }, [location])
    // when we keep dependency array empty It means that: ye page call hoga jab bhi tum referesh karoge

    // for GSAP :
    // 1) Target
    // 2) logic


  return (
    <div ref={nodeRef}>
        <Toaster/>
         <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          {/* seller and buyer dashboards should be private routes seller dashboard should not be accessible by buyer and buyer dashboard should not be accessible seller */}
          <Route path="/seller/profile" element={<SellerDashboard/>}/>
          <Route path="/buyer/profile" element={<BuyerDashboard/>}/>

        </Routes>
    </div>
  )
}

export default GsapTransition