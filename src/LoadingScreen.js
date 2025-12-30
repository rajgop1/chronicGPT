import React, { useEffect, useState } from "react";
import "./LoadingScreen.css"; 
import logo from "./logo.png"; 

const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete(); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
   <div className="loading-container">
  <img src={logo} alt="Logo" className="rotating-logo" />

  <h5>
   ChronicGPT Inc<br/>
   <span>  AI Doctors for Chronic Care</span>
  </h5>

</div>

  );
};

export default LoadingScreen;
