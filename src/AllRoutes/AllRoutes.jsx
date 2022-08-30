import React, { Fragment } from "react";
import About from "../Component/Screens/About/About";
import Contact from "../Component/Screens/Contact/Contact";
import Home from "../Component/Screens/Home/Home";
import { Routes, Route } from "react-router-dom";




const AllRoutes = () => {
  return <Fragment>
  
    <Routes>
    
        <Route exact path="/" element={<Home />}   />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  
  </Fragment>
};

export default AllRoutes;
