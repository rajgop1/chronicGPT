import React, { useState, useEffect, useRef } from "react";
import "./Box7.css";
import img from "./eb.png";
import img2 from "./be.png";

function Box7() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height - viewportHeight;

      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        totalScrollable
      );

      const progress = scrolled / totalScrollable;

      if (progress < 1 / 3) {
        setActiveIndex(0);
      } else if (progress < 2 / 3) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="scroll-wrapper" ref={containerRef}>
      <div className="sticky-content">

        <header  className="flw1">
          <h2 className="pa1">No Surprises. No Fine Print. Just the Truth.</h2>
          <p className="pa2">
            We believe in complete transparency. Here's exactly what you get with
            Qronic AI, what your insurance already covers, and what's optional.
          </p>
        </header >

        <nav  className="flw2">
          <h3 className={activeIndex === 0 ? "active-p" : ""}>
            INCLUDED WITH CHRONIC AI
          </h3>
          <h3 className={activeIndex === 1 ? "active-p" : ""}>
            COVERED BY YOUR INSURANCE
          </h3>
          <h3 className={activeIndex === 2 ? "active-p" : ""}>
            USER CHOICE
          </h3>
        </nav >

        <article  className="cont">
          <div className={`c1 ${activeIndex === 0 ? "show" : ""}`}>
            <div className="bleft">
              <h4 className="par">INCLUDED WITH CHRONIC AI</h4>
              <p className="pa">(Everything here is part of the subscription)</p>
              <ul>
                <li>Your own AI Doctor</li>
                <li>Daily guidance & weekly check-ins</li>
                <li>24/7 messaging & support</li>
                <li>Continuous monitoring of patterns</li>
                <li>Integration with your existing wearables</li>
                <li>Essential starter devices, if needed (sleep/activity tracker, condition-specific sensor)</li>
                </ul>
            </div>
            <img className="b4image" src={img} alt="Doctor" />
          </div>

          <div className={`c2 ${activeIndex === 1 ? "show" : ""}`}>
            <div className="bleft">
              <h4 className="par">INCLUDED WITH CHRONIC AI</h4>
              <p className="pa">(Everything here is part of the subscription)</p>
             <ul>
                <li>Your own AI Doctor</li>
                <li>Daily guidance & weekly check-ins</li>
                <li>24/7 messaging & support</li>
                <li>Continuous monitoring of patterns</li>
                <li>Integration with your existing wearables</li>
                <li>Essential starter devices, if needed (sleep/activity tracker, condition-specific sensor)</li>
                </ul>
            </div>
            <img className="b4image" src={img2} alt="Doctor" />
          </div>

          <div className={`c3 ${activeIndex === 2 ? "show" : ""}`}>
              <div className="bleft">
              <h4 className="par">INCLUDED WITH CHRONIC AI</h4>
              <p className="pa">(Everything here is part of the subscription)</p>
              <ul>
                <li>Your own AI Doctor</li>
                <li>Daily guidance & weekly check-ins</li>
                <li>24/7 messaging & support</li>
                <li>Continuous monitoring of patterns</li>
                <li>Integration with your existing wearables</li>
                <li>Essential starter devices, if needed (sleep/activity tracker, condition-specific sensor)</li>
                </ul>
            </div>
            <img className="b4image" src={img} alt="Doctor" />
          </div>
        </article >

      </div>
    </section>
  );
}

export default Box7;
