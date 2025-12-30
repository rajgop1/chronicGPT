import { useEffect, useRef } from "react";
import "./staticjourney.css";
import imgIncluded from "./img1.jpg";
import imgInsurance from "./img2.jpg";
import imgOptional from "./img3.jpg";
import SS from "./SS";

function Staticjourney() {
  const scrollRef = useRef(null);
  const stageRef = useRef(null);
  
  const requestRef = useRef();
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  // Refs for the 2s pause logic
  const stickyStartTime = useRef(null);
  const scrollStartPos = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const stage = stageRef.current;
    if (!scrollContainer || !stage) return;

    const smoothScroll = () => {
      const lerpFactor = 0.1; 
      currentScroll.current += (targetScroll.current - currentScroll.current) * lerpFactor;
      scrollContainer.scrollTop = currentScroll.current;
      requestRef.current = requestAnimationFrame(smoothScroll);
    };

    const handleGlobalScroll = () => {
      const stageRect = stage.getBoundingClientRect();
      const stickyOffset = 180; // Matches your CSS top: 180px
      
      // 1. Check if we have reached the sticky trigger point
      const isAtStickyPoint = stageRect.top <= stickyOffset;

      if (!isAtStickyPoint) {
        // Reset everything if we scroll back up above the sticky point
        targetScroll.current = 0;
        stickyStartTime.current = null;
        scrollStartPos.current = null;
        return;
      }

      // 2. We are at the sticky point. Start/Check the timer.
      if (!stickyStartTime.current) {
        stickyStartTime.current = Date.now();
      }

      const elapsed = Date.now() - stickyStartTime.current;

      if (elapsed < 500) {
        // Still in the 2s pause period
        targetScroll.current = 0;
        // Keep updating where the scroll "starts" from until the 2s is up
        scrollStartPos.current = window.scrollY;
        return;
      }

      // 3. Timer finished. Calculate 1:1 scroll based on distance moved
      // SINCE the 2-second delay ended.
      const distanceScrolledSinceTimerEnded = window.scrollY - scrollStartPos.current;
      const maxInternalScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      
      let val = Math.max(0, Math.min(maxInternalScroll, distanceScrolledSinceTimerEnded));
      targetScroll.current = val;
    };

    window.addEventListener("scroll", handleGlobalScroll, { passive: true });
    requestRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      window.removeEventListener("scroll", handleGlobalScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  return (
    <section className="sj-stage" ref={stageRef}>
      <div className="sj-container" ref={scrollRef}>
        {/* Header */}
        <div className="sj-header">
          <h2>Your Journey With Qronic AI</h2>
          <p>
            Your AI Doctor combines three essential functions to provide
            continuous, intelligent care.
          </p>
        </div>
        
        <SS />

        <section className="tb-wrapper">
          <div className="tb-header">
            <h2 style={{color:"white"}}>No Surprises. No Fine Print. <br/>Just the Truth.</h2>
            <p style={{color:"white"}}>
              We believe in complete transparency. Here’s exactly what you get with Qronic AI, what your insurance already covers, and what’s optional.            </p>
          </div>

          {/* Cards */}
          <div className="tb-card tb-small">
            <div className="tb-left">
              <h3>Included with ChronicAI</h3>
              <span>(Everything here is part of the subscription)</span>
              <ul>
                <li>Your own AI Doctor</li>
                <li>Daily guidance & weekly check-ins</li>
                <li>24/7 messaging & support</li>
                <li>Continuous monitoring of patterns</li>
                <li>Integration with your existing wearables</li>
                <li>Essential starter devices, if needed (sleep/activity tracker, condition-specific sensor)</li>
              </ul>
            </div>
            <div className="tb-right">
              <img src={imgIncluded} alt="Included" />
            </div>
          </div>

          <div className="tb-card tb-small">
            <div className="tb-left">
              <h3>Covered by Your Insurance</h3>
              <span>(Things your existing doctor or insurance already covers)</span>
              <ul>
               <li>Routine lab tests</li>
               <li>Imaging and results</li>
               <li>Prescription medications</li>
               <li>In-person doctor visits</li>
               <li>Many telehealth visits with clinicians</li>
              </ul>
            </div>
            <div className="tb-right">
              <img src={imgIncluded} alt="Insurance" />
            </div>
          </div>

          <div className="tb-card tb-small">
            <div className="tb-left">
              <h3>User’s Choice</h3>
              <span>(Completely optional add-ons; not required)</span>
              <ul>
               <li>Additional specialty sensors</li>
               <li>Non-standard lab panels</li>
               <li>Extra or premium services</li>
               <li>Any advanced devices not included in starter kit</li>
              </ul>
            </div>
            <div className="tb-right">
              <img src={imgIncluded} alt="Insurance" />
            </div>
          </div>

        </section>
        
      </div>
    </section>
  );
}

export default Staticjourney;