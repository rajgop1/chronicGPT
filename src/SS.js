import { useEffect, useRef, useState } from "react";
import "./ss.css";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";

export default function SS() {
  const stageRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeIndex, setActiveIndex] = useState(0); // ✅ key fix

  /* Resize */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Scroll logic */
  useEffect(() => {
    if (isMobile) return;

    function updateActive() {
      const stage = stageRef.current;
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const scrollHeight = stage.offsetHeight - window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / scrollHeight, 0),
        1
      );

      const total = steps.length;
      const index = Math.min(
        total - 1,
        Math.floor(progress * total)
      );

      setActiveIndex(index); // ✅ React controlled
    }

    window.addEventListener("scroll", updateActive);
    updateActive(); // ✅ activates step 01 on load

    return () => window.removeEventListener("scroll", updateActive);
  }, [isMobile]);

  const steps = [
    {
      number: "01",
      title: "Your MD sets your clinical goals.",
      desc:
      "After sign-up, your own physician (or one you choose on the platform) reviews your labs, medications, history, and current biomarkers.They set measurable 3–6 month goals — for HbA1c, weight, LDL, blood pressure, sleep, and more.These goals become the medical blueprint for your AI Doctor.",
      img: img1,
    },
    {
      number: "02",
      title: "You create your own AI Doctor.",
      desc: "You choose how you want to interact: text, voice notes, or a human-like video avatar.Pick your language, tone, and frequency of check-ins.Your AI Doctor learns your communication style and is available 24/7.",
      img: img2,
    },
    {
      number: "03",
      title: "Your devices connect and your data flows in automatically.",
      desc: "We provide essential wearables for free (sleep/activity tracker, CGM for diabetes, BP cuff for hypertension) or integrate your existing devices.Your glucose, sleep, activity, heart rate, medications, and meals stream in continuously.Your AI Doctor now has your real-world health signals.",
      img: img3,
    },
    {
      number: "04",
      title: "Your AI Doctor builds a digital model of your body.",
      desc: "It studies how you respond to food, stress, sleep, activity, and medications — minute by minute.It translates your doctor’s goals into daily targets for sleep, nutrition, activity, and medication.This creates your personalized baseline and learning model.",
      img: img4,
    },
    {
      number: "05",
      title: "You receive daily individualized guidance.",
      desc: "Your AI Doctor watches your body in real time and sends timely, specific micro-interventions:what to adjust, when to rest, how to pace meals, when to hydrate, or when to move.You also have twice-weekly check-ins that replace the dashboard clutter you’re used to.",
      img: img5,
    },
    {
      number: "06",
      title: "A clinician supervises everything and steps in when needed.",
      desc: "Physicians review your progress, validate recommendations, adjust your plan, and handle escalations.If your AI Doctor detects a red flag or predicts risk, it arranges a telehealth visit or alerts your MD immediately.When it’s time for a routine appointment, your AI Doctor sends your progress summary to your physician.",
      img: img6,
    },
  ];

  return (
    <section className="ss-stage" ref={stageRef}>
      <div className="ss-wrapper">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`ss-card ${activeIndex === i ? "active" : ""}`}
          >
            <span>{step.number}</span>

            <img src={step.img} alt={step.title} />

            <p className="p1">{step.title}</p>
            <p className="po">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
