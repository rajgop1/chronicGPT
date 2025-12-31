import React, { useEffect, useRef } from "react";
import "./box10.css";
import one from "./01.jpg";
import two from "./02.jpg";
import three from "./03.jpg";
import four from "./04.jpg";
import five from "./05.jpg";
import six from "./06.jpg";

const data = [
  { title: "Your numbers stabilize", text: "Your glucose, blood pressure, and daily rhythms settle into smoother patterns — fewer spikes, fewer swings, fewer surprises.You know what’s happening and why, and your body feels calmer moving through the day.", img: one },
  { title: "Mornings stop feeling unpredictable", text: "Instead of waking up already behind, you start the day more steady — clear-headed, less groggy, and without the crashes that used to set the tone.", img: two },
  { title: "Sleep becomes restorative", text: "Your AI Doctor helps you adjust your evenings, nutrition, timing, and recovery.You fall asleep easier, wake up less, and start feeling rested in a way you haven’t in years.", img: three },
  { title: "Meals stop derailing your day", text: "You quickly learn which foods and timings work for your physiology.Post-meal crashes shrink, late-evening glucose stays quieter, and eating stops feeling like guesswork.", img: four },
  { title: "Energy feels smoother, not spiky", text: "Instead of sharp highs and lows, your days develop a smoother rhythm.Lifting groceries, climbing stairs, focusing at work — everything feels more doable.", img: five },
  { title: "Healthy routines finally stick", text: "Because your AI Doctor guides you in real time, habits stop slipping through cracks. Hydration, movement, medication timing, sleep routines — they become easier, more automatic, and more consistent.", img: six },
];

const Box10 = () => {
  const scrollTrackRef = useRef(null);
  const cardsRef = useRef(null);
  const progressRef = useRef(null);

  const targetX = useRef(0);
  const renderedX = useRef(0);

  useEffect(() => {
    let rafId;

    const animate = () => {
      renderedX.current += (targetX.current - renderedX.current) * 0.1;
      if (cardsRef.current) {
        cardsRef.current.style.transform = `translateX(${-renderedX.current}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      if (!scrollTrackRef.current || !cardsRef.current) return;

      const rect = scrollTrackRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalScrollable = rect.height - viewportHeight;
      const currentScroll = -rect.top;
      let progress = currentScroll / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      const maxX = cardsRef.current.scrollWidth - window.innerWidth + 120;
      targetX.current = progress * maxX;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }
    };

    rafId = requestAnimationFrame(animate);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const moveByStep = (dir) => {
    if (!cardsRef.current) return;

    const card = cardsRef.current.querySelector(".box10-card");
    if (!card) return;

    const step = card.offsetWidth + 32;
    const maxX = cardsRef.current.scrollWidth - window.innerWidth + 120;

    targetX.current += dir * step;
    targetX.current = Math.max(0, Math.min(maxX, targetX.current));

    if (progressRef.current) {
      progressRef.current.style.width = `${(targetX.current / maxX) * 100}%`;
    }
  };

  return (
    <div className="b10-scroll-track" ref={scrollTrackRef}>
      <div className="b10-sticky-wrapper">
        <div className="box10-inner">

          <div className="box10-header">
            <h2>Real clinical outcomes, <br />felt in your everyday life</h2>
            <p>
              Your AI Doctor works in the background every day — helping you feel the changes
              in ways that matter: steadier energy, calmer mornings, and smoother rhythms.
            </p>
          </div>

          <div className="box10-cards-viewport">
            <div className="box10-cards" ref={cardsRef}>
              {data.map((item, i) => (
                <div className="box10-card" key={i}>
                  <div className="box10-image">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="box10-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="box10-slider-nav">
            <div className="box10-slider-track">
              <div className="box10-slider-progress" ref={progressRef} />
            </div>

            <div className="box10-nav-buttons">
              <button className="box10-nav-btn" onClick={() => moveByStep(-1)}>‹</button>
              <button className="box10-nav-btn" onClick={() => moveByStep(1)}>›</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Box10;
