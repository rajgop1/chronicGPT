import { useEffect, useState, useRef } from "react";
import "./hiw.css";
import doct1 from "./hiw1.jpg";
import doct2 from "./hiw2 (2).png";
import doct3 from "./hiw3.jpg";
import TimedReveal from "./TimedReveal";

export default function Hiw() {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollThreshold = rect.height / 3;
      
      // Calculate index based on how far we've scrolled through the 250vh wrapper
      const scrolled = -rect.top;
      let index = Math.floor(scrolled / (rect.height / 3.2)); // Slight offset for smoother transition
      index = Math.max(0, Math.min(index, 2));
      setActiveIndex(index);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const steps = [
    {
      num: "01",
      title: "Your AI Doctor studies the way your body behaves",
      desc: "It watches your sleep quality, meals, glucose swings, hydration, medication timing, activity, and stress patterns. Over time, it builds a living model of your physiology, spotting subtle patterns that even good doctors can’t see between visits. This is how it understands why your numbers move the way they do, and what will help you stabilize them.",
      icon: doct1,
    },
    {
      num: "02",
      title: "Behind every insight is real clinical reasoning.",
      desc: "Your AI Doctor evaluates risk the way a careful physician would: rising morning glucose, changing blood pressure trends, sleep debt, medication conflicts, missed doses, unusual heart-rate shifts, and more. When something looks concerning, it flags it early — and your human doctor reviews your clinical trace to confirm the right next step. You get the vigilance of a medical team that never goes off duty.",
      icon: doct2,
    },
    {
      num: "03",
      title: "Clear explanations. Simple actions. No jargon.",
      desc: "Your AI Doctor turns complex data into practical daily guidance:“Your numbers look stable — keep the same routine today.” “Take a lighter dinner tonight; your glucose stayed elevated longer than usual.” “Focus on hydration for the next 24 hours — it will help bring your pressure down.” Every message is personalized, medically grounded, and aimed at keeping you steady, confident, and in control.",
      icon: doct3,
    },
  ];const scrollToStep = (index) => {
  if (!wrapperRef.current) return;

  const wrapper = wrapperRef.current;
  const sectionHeight = wrapper.offsetHeight / steps.length;

  window.scrollTo({
    top: wrapper.offsetTop + index * sectionHeight,
    behavior: "smooth",
  });

  setActiveIndex(index);
};


  return (
    <section className="hiw-wrapper" ref={wrapperRef}>
      <div className="hiw-container">
        {/* Left Side: Header and Progress */}
        <div className="hiw-lft-column">
          <div className="hiw-heade">
            <h2>How it works</h2>
            <TimedReveal delay={500}>
              <p className="sub-head">
                Your AI Doctor combines three layers of intelligence to give you
                continuous, clinician-guided care.
              </p>
            </TimedReveal>
          </div>

          <div className="hiw-progress-section">
            <div className="progress-text">
              <span className="current">0{activeIndex + 1}</span>
              <span className="total">/03</span>
            </div>
            <div className="progress-lines">
  {steps.map((_, i) => (
    <div
      key={i}
      className={`progress-line ${activeIndex === i ? "active" : ""}`}
      onClick={() => scrollToStep(i)}
    />
  ))}
</div>

          </div>
        </div>

        {/* Right Side: Sliding Cards */}
        <div className="hiw-rgt-column">
          <div className="cards-viewport">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`hiw-card ${activeIndex === i ? "active" : ""} ${i < activeIndex ? "prev" : ""}`}
               style={{
  transform: `translateY(calc(${(i - activeIndex) * 100}% + ${(i - activeIndex) * 25}px))`,
  opacity: i === activeIndex ? 1 : 0.4,
  zIndex: steps.length - i
}}

              >
                <div className="card-image">
                  <img src={step.icon} alt={step.title} />
                </div>
                <div className="card-content">
                  <span className="card-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}