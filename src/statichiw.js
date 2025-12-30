import { useEffect, useRef } from "react";
import "./statichiw.css";
import trustImg from "./image 1587.jpg";
import Try from "./try";
import { useState } from "react";
import Sample from "./Sample";

function Statichiw() {
  const scrollRef = useRef(null);
  const stageRef = useRef(null);
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);

  const requestRef = useRef();
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  // Refs to track the 2s delay
  const stickyStartTime = useRef(null);
  const scrollStartPos = useRef(null); // The page scroll Y when the 2s timer finished
  const [isLocked, setIsLocked] = useState(true); // Optional: for UI indicators

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const stage = stageRef.current;
    const wrapper = wrapperRef.current;

    if (!scrollContainer || !stage || !wrapper) return;

    const smoothScroll = () => {
      const lerp = 0.40;
      currentScroll.current += (targetScroll.current - currentScroll.current) * lerp;
      scrollContainer.scrollTop = currentScroll.current;

      // Header background logic
      if (currentScroll.current > 100) {
        headerRef.current?.classList.add("no-background");
      } else {
        headerRef.current?.classList.remove("no-background");
      }

      requestRef.current = requestAnimationFrame(smoothScroll);
    };

    const handleGlobalScroll = () => {
      const stageRect = stage.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
      const stickyThreshold = window.innerHeight * 0.22;
      const isAtStickyPoint = stageRect.top <= stickyThreshold;

      // 1. If we haven't reached the 22vh point yet
      if (!isAtStickyPoint) {
        targetScroll.current = 0;
        stickyStartTime.current = null; // Reset timer
        scrollStartPos.current = null;  // Reset start position
        return;
      }

      // 2. We are at the sticky point. Check the 2s timer.
      if (!stickyStartTime.current) {
        stickyStartTime.current = Date.now();
      }

      const elapsed = Date.now() - stickyStartTime.current;

      if (elapsed < 500) {
        // Still in the 2s waiting period
        targetScroll.current = 0;
        // Keep updating where the scroll "should" start from until 2s is up
        scrollStartPos.current = window.scrollY; 
        return;
      }

      // 3. Timer is finished. Start internal scrolling.
      // We calculate progress based on how much the user has scrolled 
      // SINCE the 2-second timer ended.
      const currentPageY = window.scrollY;
      const distanceScrolledSinceTimerEnded = currentPageY - scrollStartPos.current;
      
      // Calculate how much runway is left in the stage
      // (Stage Bottom - Sticky Box Height - Current Scroll Pos)
      const totalTravelDistance = stageRect.height - wrapperRect.height - (scrollStartPos.current - (window.scrollY + stageRect.top));
      
     const travel = stageRect.height - wrapperRect.height;
let progress = travel > 0 ? distanceScrolledSinceTimerEnded / travel : 0;
progress = Math.max(0, Math.min(1, progress));


      const maxInternalScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      targetScroll.current = progress * maxInternalScroll;
    };

    window.addEventListener("scroll", handleGlobalScroll, { passive: true });
    requestRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      window.removeEventListener("scroll", handleGlobalScroll);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  return (
    <section className="sg-stages" ref={stageRef}>
      <section className="sg-wrapper" ref={wrapperRef}>
        <div className="sg-scroll" ref={scrollRef}>
          <div className="sg-header" ref={headerRef}>
            <h2>Safeguards you deserve</h2>
            <p>// Your AI Doctor is designed with multiple layers of protection to ensure your safety, privacy, and the highest standard of care.</p>
          </div>
         <Sample/>
          <Try />

          <section className="box190" style={{opacity:"0"}}>
            
          </section>
        </div>
      </section>
    </section>
  );
}

export default Statichiw;
