import { useState } from "react";
import "./Transformation.css";

const data = [
  {
    step: "01",
    title: "Your MD sets clinical goals",
    desc: "Your physician reviews labs, history and defines measurable goals."
  },
  {
    step: "02",
    title: "AI tracks biomarkers",
    desc: "Continuous monitoring with AI-backed insights."
  },
  {
    step: "03",
    title: "Personalized interventions",
    desc: "Medication, nutrition, and habit adjustments."
  }
];

export default function Transformation() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="tf-wrapper">
      <div className="tf-container">
        {data.map((item, index) => (
          <div
            key={index}
            className={`tf-card ${
              activeIndex === index ? "active" : ""
            }`}
            onMouseEnter={() =>
              activeIndex === null && setActiveIndex(index)
            }
            onClick={() => setActiveIndex(index)}
          >
            <span className="tf-step">{item.step}</span>
            <h3>{item.title}</h3>

            <p className="tf-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
