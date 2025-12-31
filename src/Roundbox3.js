import "./Roundbox.css";
import { useEffect, useRef } from "react";
import Hiw from "./hiw";
import Box10 from "./box10";

function Roundbox() {
  const scrollRef = useRef(null);
  const stageRef = useRef(null);
  const wrapperRef = useRef(null);

  const requestRef = useRef();
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const currentTranslate = useRef(window.innerHeight * 0.7);

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

      // ============================
      // FREEZE FOR NEXT 500vh ONLY
      // ============================
      const freezeDistance = viewportHeight * 4; // 500vh
      const passedStage = viewportHeight - stageRect.bottom;

      if (passedStage > 0 && passedStage <= freezeDistance) {
        wrapper.classList.add("freeze");
      } else {
        wrapper.classList.remove("freeze");
      }

      // ENTRY MOTION
      const entryStart = viewportHeight;
      const entryEnd = stickyTopPx;

      let entryProgress = (stageRect.top - entryEnd) / (entryStart - entryEnd);
      entryProgress = Math.max(0, Math.min(1, entryProgress));

      const targetT = entryProgress * viewportHeight;
      currentTranslate.current += (targetT - currentTranslate.current) * lerp;
      wrapper.style.transform = `translateY(${currentTranslate.current}px)`;

      // STICKY CHECK
      const isSticky = stageRect.top <= stickyTopPx - 20;

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

      currentScroll.current += (targetScroll.current - currentScroll.current) * lerp;
      scrollContainer.scrollTop = currentScroll.current;

      requestRef.current = requestAnimationFrame(smoothScroll);
    };

    requestRef.current = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section className="sg-stag" ref={stageRef}>
      <section className="sg-wrappe" ref={wrapperRef}>
        <div className="sg-scrol" ref={scrollRef}>
          <Hiw />
        </div>
      </section>
    </section>
  );
}

export default Roundbox;
