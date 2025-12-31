import "./Roundbox2.css";
import { useEffect, useRef } from "react";
import Playstores from "./playstore";
import Footer from "./footer";

function Roundbox2({ z = 100002 }) {
  const scrollRef = useRef(null);
  const stageRef = useRef(null);
  const wrapperRef = useRef(null);

  const requestRef = useRef(null);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const stage = stageRef.current;
    const wrapper = wrapperRef.current;
    if (!scrollContainer || !stage || !wrapper) return;

    const stickyTopPx = window.innerHeight * 0.2;

    const smoothScroll = () => {
      const lerp = 0.1;
      const stageRect = stage.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const isSticky = stageRect.top <= stickyTopPx;

      if (isSticky) {
        wrapper.classList.add("stuck");

        const totalScrollArea = stageRect.height - viewportHeight;
        const scrollMoved = -(stageRect.top - stickyTopPx);
        let internalProgress =
          scrollMoved / (totalScrollArea - (viewportHeight - stickyTopPx));
        internalProgress = Math.max(0, Math.min(1, internalProgress));

        const maxInternalScroll =
          scrollContainer.scrollHeight - scrollContainer.clientHeight;

        targetScroll.current = internalProgress * maxInternalScroll;
      } else {
        wrapper.classList.remove("stuck");
        targetScroll.current = 0;
      }

      currentScroll.current +=
        (targetScroll.current - currentScroll.current) * lerp;
      scrollContainer.scrollTop = currentScroll.current;

      requestRef.current = requestAnimationFrame(smoothScroll);
    };

    requestRef.current = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section className="stack-sta" ref={stageRef} style={{ zIndex: z }}>
      <section className="stack-wrapp" ref={wrapperRef}>
        <div className="stack-scro" ref={scrollRef}>
          <Playstores/>
          <Footer/>
        </div>
      </section>
    </section>
  );
}

export default Roundbox2;
